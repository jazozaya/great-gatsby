export const mobileThreshold = 800;
export const defaultWidth = 1920;

export const isMobileStart = isMobile() // Used by constructors


export function isMobile() { // Used by resize listeners.
  if (typeof window !== "undefined") {
    if (window.innerWidth < mobileThreshold) {
      return true;
    } else {
      return false;
    }
  }
}
