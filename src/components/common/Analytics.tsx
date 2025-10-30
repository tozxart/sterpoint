import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Add Umami Analytics script
    const script = document.createElement("script");
    script.defer = true;
    script.async = true;
    script.setAttribute(
      "data-website-id",
      "2f7df744-2e71-4dcc-8f71-2aba690f1369"
    );
    script.src = "https://cloud.umami.is/script.js";

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Track page views
  useEffect(() => {
    if (window.umami && typeof window.umami.trackView === "function") {
      window.umami.trackView(
        location.pathname + location.hash,
        window.location.href
      );
    }
  }, [location]);

  return null;
};

// Add TypeScript declaration
declare global {
  interface Window {
    umami?: {
      trackView: (url: string, referrer?: string) => void;
      trackEvent: (
        eventName: string,
        eventData?: Record<string, string | number | boolean>
      ) => void;
    };
  }
}
