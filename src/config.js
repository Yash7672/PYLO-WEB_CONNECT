// Single source of truth for the PYLO app download link.
// Replace the value later with the real APK / GitHub / store URL.
export const DOWNLOAD_URL = import.meta.env.VITE_PYLO_DOWNLOAD_URL || '';

export function hasDownloadUrl() {
  return DOWNLOAD_URL.length > 0;
}