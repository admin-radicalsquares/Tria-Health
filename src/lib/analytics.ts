type GtagCommand = "config" | "event";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-0MYVSZJW9T";

export function trackEvent(
  action: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event" satisfies GtagCommand, action, params);
}

export function trackPageView(path: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config" satisfies GtagCommand, GA_MEASUREMENT_ID, {
    page_path: path,
  });
}

