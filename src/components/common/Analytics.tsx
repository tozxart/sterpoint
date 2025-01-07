import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Add the main script
    const script = document.createElement("script");
    script.defer = true;
    // Include both www and non-www versions of the domain
    script.setAttribute("data-domain", "www.sterpoint.pl,sterpoint.pl");
    // Ensure HTTPS
    script.src =
      "https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js";
    script.crossOrigin = "anonymous"; // Add cross-origin attribute for better security

    // Add the plausible queue script with secure defaults
    const queueScript = document.createElement("script");
    queueScript.innerHTML = `
      window.plausible = window.plausible || function() { 
        (window.plausible.q = window.plausible.q || []).push(arguments) 
      };
      // Ensure secure defaults
      if (window.location.protocol === 'http:') {
        window.location.protocol = 'https:';
      }
    `;

    document.head.appendChild(queueScript);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(queueScript);
    };
  }, []);

  useEffect(() => {
    // Track page views with additional properties
    if (window.plausible) {
      window.plausible("pageview", {
        props: {
          path: location.pathname,
          search: location.search,
          hash: location.hash,
          secure: window.location.protocol === "https:",
          host: window.location.host,
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
