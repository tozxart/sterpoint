export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // In development, use root-relative path
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }

  // In production, use the correct base path
  return `/sterpoint/${cleanPath}`;
}
