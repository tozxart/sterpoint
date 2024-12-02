export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // For development
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }

  // For production
  const base = "/sterpoint";

  // Handle social media icons
  if (cleanPath.includes("social/")) {
    return `${base}/images/${cleanPath}`;
  }

  // Handle root level files like logo
  return `${base}/${cleanPath}`;
}
