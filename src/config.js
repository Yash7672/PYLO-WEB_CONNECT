export const DOWNLOAD_URL =
  import.meta.env.VITE_PYLO_DOWNLOAD_URL || '/download';

export function hasDownloadUrl() {
  return DOWNLOAD_URL.length > 0;
}