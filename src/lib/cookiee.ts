export type ConsentStatus = "granted" | "denied" | null;

const CONSENT_KEY = "afaq-cookie-consent";

export function getStoredConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function setStoredConsent(status: "granted" | "denied") {
  localStorage.setItem(CONSENT_KEY, status);
  window.dispatchEvent(
    new CustomEvent("cookie-consent-change", { detail: status }),
  );
}
