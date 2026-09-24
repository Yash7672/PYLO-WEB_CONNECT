export const DOWNLOAD_URL =
  (import.meta.env.VITE_PYLO_DOWNLOAD_URL || '/app-release.apk').trim();

export function hasDownloadUrl() {
  if (!DOWNLOAD_URL) return false;

  try {
    const url = new URL(DOWNLOAD_URL, window.location.origin);
    return url.origin === window.location.origin || DOWNLOAD_URL.startsWith('/');
  } catch {
    return false;
  }
}