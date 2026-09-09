/**
 * One-time (re-runnable) utility: downscale every image in the Supabase
 * `gallery` bucket in place, so the site serves web-sized photos instead of
 * full-res camera/phone originals.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=sb_secret_xxx node scripts/resize-gallery-images.mjs
 *   # dry run (report only, no uploads):
 *   SUPABASE_SERVICE_ROLE_KEY=sb_secret_xxx node scripts/resize-gallery-images.mjs --dry
 *
 * The service-role key is read from the environment only — never hard-code or
 * commit it. Get it from: Supabase dashboard -> Project Settings -> API ->
 * "service_role" secret.
 *
 * Idempotent: images already <= MAX_EDGE and <= TARGET_MAX_BYTES are skipped.
 */
import { createClient } from '@supabase/supabase-js';
import sharp from 'sharp';
import { execFileSync } from 'node:child_process';
import { writeFileSync, readFileSync, rmSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const SUPABASE_URL = 'https://jucctnmjzwbakmjbxebs.supabase.co';
const BUCKET = 'gallery';
const MAX_EDGE = 2000;            // px, long edge
const JPEG_QUALITY = 80;
const TARGET_MAX_BYTES = 900_000; // ~0.9 MB — files at/under this are left alone
const DRY = process.argv.includes('--dry');

const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!key) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, key, { auth: { persistSession: false } });

/** Recursively list every object path in the bucket. */
async function listAll(prefix = '') {
  const out = [];
  const { data, error } = await supabase.storage.from(BUCKET).list(prefix, { limit: 1000 });
  if (error) throw error;
  for (const entry of data) {
    if (entry.id === null) {
      // a "folder" — recurse
      out.push(...(await listAll(prefix ? `${prefix}/${entry.name}` : entry.name)));
    } else if (!entry.name.startsWith('.')) {
      out.push({ path: prefix ? `${prefix}/${entry.name}` : entry.name, size: entry.metadata?.size ?? 0 });
    }
  }
  return out;
}

function kb(n) { return `${(n / 1024).toFixed(0)} KB`; }

/**
 * Many "*.JPG" files here are actually HEIC (iPhone) and sharp/libvips can't
 * decode them. macOS `sips` can — transcode to JPEG as a fallback.
 */
function heicToJpeg(buf) {
  const dir = mkdtempSync(join(tmpdir(), 'gallery-'));
  const src = join(dir, 'in.heic');
  const out = join(dir, 'out.jpg');
  try {
    writeFileSync(src, buf);
    execFileSync('sips', ['-s', 'format', 'jpeg', src, '--out', out], { stdio: 'ignore' });
    return readFileSync(out);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

const files = await listAll();
console.log(`Found ${files.length} objects in "${BUCKET}".\n`);

let resized = 0, skipped = 0, failed = 0, savedBytes = 0;

for (const { path, size } of files) {
  try {
    const { data: blob, error: dlErr } = await supabase.storage.from(BUCKET).download(path);
    if (dlErr) throw dlErr;
    const input = Buffer.from(await blob.arrayBuffer());

    // Decode-probe. If sharp can't fully decode (HEIC masquerading as .JPG),
    // transcode via sips. A metadata() call isn't enough — sharp reads HEIF
    // headers fine but fails later in the pixel pipeline — so force a real decode.
    let decodable = input;
    let converted = false;
    try {
      await sharp(input).resize(16, 16, { fit: 'inside' }).toBuffer();
    } catch {
      decodable = heicToJpeg(input);
      converted = true;
    }

    const meta = await sharp(decodable).metadata();
    const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);
    const isPng = meta.format === 'png';

    if (!converted && longEdge <= MAX_EDGE && input.byteLength <= TARGET_MAX_BYTES) {
      console.log(`skip   ${path}  (${longEdge}px, ${kb(input.byteLength)})`);
      skipped++;
      continue;
    }

    let pipeline = sharp(decodable).rotate().resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: 'inside',
      withoutEnlargement: true,
    });
    pipeline = isPng
      ? pipeline.png({ compressionLevel: 9, palette: true })
      : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    const output = await pipeline.toBuffer();

    // A HEIC-as-.JPG file is broken in most browsers, so always replace it even
    // if the JPEG isn't smaller. Otherwise skip no-win re-encodes.
    if (!converted && output.byteLength >= input.byteLength) {
      console.log(`skip   ${path}  (re-encode not smaller)`);
      skipped++;
      continue;
    }

    console.log(
      `${converted ? 'heic→jpg' : 'resize'} ${path}  ${kb(input.byteLength)} -> ${kb(output.byteLength)}` +
        (DRY ? '  [dry]' : ''),
    );
    savedBytes += input.byteLength - output.byteLength;

    if (!DRY) {
      const { error: upErr } = await supabase.storage
        .from(BUCKET)
        .upload(path, output, {
          upsert: true,
          contentType: isPng ? 'image/png' : 'image/jpeg',
        });
      if (upErr) throw upErr;
    }
    resized++;
  } catch (err) {
    console.error(`FAIL   ${path}  — ${err.message ?? err}`);
    failed++;
  }
}

console.log(
  `\nDone. resized: ${resized}, skipped: ${skipped}, failed: ${failed}, ` +
  `saved: ${(savedBytes / 1024 / 1024).toFixed(1)} MB${DRY ? ' (dry run — nothing uploaded)' : ''}`,
);
