/**
 * Fires a GA4 event via the existing gtag setup (GoogleAnalytics.tsx),
 * if and only if analytics has actually loaded (i.e. cookie consent granted).
 * Safe no-op otherwise — never throws, never blocks the UI.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", eventName, params);
}
