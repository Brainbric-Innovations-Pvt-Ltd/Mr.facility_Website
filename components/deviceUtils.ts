/**
 * Utility to detect if current viewer is in mobile responsive layout
 * or on a mobile handset.
 */
export function isMobileResponsiveView(): boolean {
  if (typeof window === "undefined") return false;
  const isSmallScreen = window.innerWidth < 768;
  const isMobileDevice = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  return isSmallScreen || isMobileDevice;
}
