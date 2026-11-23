// Single source of truth for download links — bump RELEASE_VERSION when a new
// GitHub release (with the same asset naming) is published.
export const RELEASE_VERSION = "0.1.0";

export const REPO_URL = "https://github.com/Ayoub-EDAHLOULI/AirToolkit";
export const STORE_URL = "https://apps.microsoft.com/detail/9P1T6L9P6FZ0";

const base = `${REPO_URL}/releases`;
export const RELEASE_NOTES_URL = `${base}/tag/v${RELEASE_VERSION}`;
export const SETUP_EXE_URL = `${base}/download/v${RELEASE_VERSION}/airtoolkit_${RELEASE_VERSION}_x64-setup.exe`;
export const MSI_URL = `${base}/download/v${RELEASE_VERSION}/airtoolkit_${RELEASE_VERSION}_x64_en-US.msi`;
