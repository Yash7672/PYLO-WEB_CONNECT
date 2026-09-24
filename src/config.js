export const DOWNLOAD_URL =
  import.meta.env.VITE_PYLO_DOWNLOAD_URL ||
  '/app-release.apk';

export function hasDownloadUrl() {
  return DOWNLOAD_URL.length > 0;
}