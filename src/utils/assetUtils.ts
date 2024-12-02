export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // For development
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }

  // For production
  const base = "/sterpoint";

  // Handle images in subdirectories (social, flags)
  if (cleanPath.includes("/")) {
    // If it's already in the images directory, don't add it again
    if (cleanPath.startsWith("images/")) {
      return `${base}/${cleanPath}`;
    }
    return `${base}/images/${cleanPath}`;
  }

  // Handle root level files like logo.png
  return `${base}/${cleanPath}`;
}
