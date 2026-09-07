import { publicImageUrl } from './supabase';

/**
 * Resolve an image reference from mockData.ts to a usable URL.
 *
 * - `''`                     → `''` (let the component show its fallback)
 * - `https://…` / `http://…` → returned unchanged
 * - `/hero.jpg`              → local file in `public/` (returned unchanged)
 * - `on-set/IMG_9196.jpg`    → object in the Supabase `gallery` bucket
 */
export function assetUrl(ref: string): string {
  if (!ref) return '';
  if (/^https?:\/\//.test(ref)) return ref;
  if (ref.startsWith('/')) return ref;
  return publicImageUrl(ref);
}
