import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Add Umami Analytics script
    const script = document.createElement("script");
    script.defer = true;
    script.async = true;
    // You'll need to replace these values with your own after setting up Umami
    script.setAttribute("data-website-id", "YOUR-WEBSITE-ID");
    // For self-hosted version, replace with your domain
    script.src = "https://analytics.umami.is/script.js";

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Track page views
  useEffect(() => {
    if (window.umami) {
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
