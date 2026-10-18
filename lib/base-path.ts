// GitHub Pages base path: the repo name. '' in dev.
export const BASE_PATH =
  process.env.NODE_ENV === 'production' ? '/hd-wedding' : ''

// Bump this number whenever an asset's content changes to bust stale
// browser caches on returning guests (GitHub Pages sets fixed cache headers).
const ASSET_VERSION = '2'

// Prefixes public/ asset URLs with the base path and a cache-busting version.
export function asset(path: string) {
  return `${BASE_PATH}${path}?v=${ASSET_VERSION}`
}
