// Always route through the same-origin /download proxy (see public/_redirects)
// so the browser stays on this page and downloads the file instead of
// navigating away to the external host it proxies to.
export const DOWNLOAD_URL = '/download';

export function hasDownloadUrl() {
  return Boolean(import.meta.env.VITE_PYLO_DOWNLOAD_URL);
}