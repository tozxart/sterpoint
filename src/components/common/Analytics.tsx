import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Add the main Plausible script
    const script = document.createElement("script");
    script.defer = true;
    script.setAttribute("data-domain", "sterpoint.pl");
    script.src = "https://plausible.io/js/script.js";

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

  // Track page views
  useEffect(() => {
    if (window.plausible) {
      window.plausible("pageview");
    }
  }, [location]);

  return null;
};

// Add TypeScript declaration
declare global {
  interface Window {
    plausible: {
      (
        event: string,
        options?: { props?: Record<string, string | number | boolean> }
      ): void;
      q?: Array<unknown>;
    };
  }
}
