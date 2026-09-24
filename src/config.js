// Single source of truth for the PYLO app download link.
export const DOWNLOAD_URL =
  import.meta.env.VITE_PYLO_DOWNLOAD_URL ||
  'https://pyloconnect.netlify.app/download';

export function hasDownloadUrl() {
  return DOWNLOAD_URL.length > 0;
}