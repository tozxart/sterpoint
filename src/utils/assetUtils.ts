export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // For development
  if (import.meta.env.DEV) {
    // Handle flags
    if (cleanPath.startsWith("flags/")) {
      return `/images/${cleanPath}`;
    }
    // Handle social icons
    if (cleanPath.startsWith("social/")) {
      return `/images/${cleanPath}`;
    }
    // Handle logo
    if (cleanPath === "logo.png") {
      return `/images/${cleanPath}`;
    }
    // Handle PDFs
    if (cleanPath.startsWith("pdf/")) {
      return `/images/${cleanPath}`;
    }
    // Handle vending machine images
    if (cleanPath.startsWith("vendingMachine/")) {
      return `/images/${cleanPath}`;
    }
    return `/${cleanPath}`;
  }

  // For production (GitHub Pages)
  const base = "/sterpoint";
  return `${base}/images/${cleanPath}`;
}
