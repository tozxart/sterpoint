export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // For development
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }

  // For production
  const base = "/sterpoint";

  // Always ensure path starts with /images/
  if (!cleanPath.startsWith("images/")) {
    return `${base}/images/${cleanPath}`;
  }

  return `${base}/${cleanPath}`;
}
