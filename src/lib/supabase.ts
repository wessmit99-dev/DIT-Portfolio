// Supabase config for the "DIT Portfolio" project.
//
// Storage-only setup: images live in the public `gallery` bucket and are served
// straight from their public URLs, so no supabase-js client is needed on the
// frontend (keeps the bundle small). Add @supabase/supabase-js later if the
// site needs auth, a database, or in-browser uploads.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

if (!supabaseUrl) {
  throw new Error(
    'Missing VITE_SUPABASE_URL. Copy .env.example to .env and fill it in.',
  );
}

export const SUPABASE_URL = supabaseUrl;

/** Storage bucket that holds all portfolio images. */
export const GALLERY_BUCKET = 'gallery';

/** Public URL for an object stored in the `gallery` bucket. */
export function publicImageUrl(path: string): string {
  const encoded = path
    .replace(/^\/+/, '')
    .split('/')
    .map(encodeURIComponent)
    .join('/');
  return `${SUPABASE_URL}/storage/v1/object/public/${GALLERY_BUCKET}/${encoded}`;
}
