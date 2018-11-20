export const mobileThreshold = 800;
export const defaultWidth = 1920;

export function isMobile() {
  // Used by resize listeners.
  if (window.innerWidth < mobileThreshold) {
    return true;
  }
  return false;
}

//export const isMobileStart = isMobile();
