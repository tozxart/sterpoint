import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Add the main Plausible script with all features
    const script = document.createElement("script");
    script.defer = true;
    script.setAttribute("data-domain", "sterpoint.pl");
    script.src =
      "https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js";

    // Add the plausible queue script
    const queueScript = document.createElement("script");
    queueScript.innerHTML = `
      window.plausible = window.plausible || function() { 
        (window.plausible.q = window.plausible.q || []).push(arguments) 
      }
    `;

    document.head.appendChild(queueScript);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(queueScript);
    };
  }, []);

  // Track page views with hash-based routing support
  useEffect(() => {
    if (window.plausible) {
      window.plausible("pageview", {
        props: {
          path: location.pathname + location.hash,
          url: window.location.href,
        },
      });
    }
  }, [location]);

  return null;
};

// Add TypeScript declaration with extended functionality
declare global {
  interface Window {
    plausible: {
      (
        event: string,
        options?: {
          callback?: () => void;
          props?: Record<string, string | number | boolean>;
          revenue?: number;
        }
      ): void;
      q?: Array<unknown>;
    };
  }
}
