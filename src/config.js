// Single source of truth for the PYLO app download link.
// Falls back to the direct GitHub Release APK asset so the bundled site
// always points at the .apk download. Override via VITE_PYLO_DOWNLOAD_URL.
export const DOWNLOAD_URL =
  import.meta.env.VITE_PYLO_DOWNLOAD_URL ||
  'https://github.com/Yash7672/PYLO-WEB_CONNECT/releases/download/v1.0.0/app-release.apk';

export function hasDownloadUrl() {
  return DOWNLOAD_URL.length > 0;
}