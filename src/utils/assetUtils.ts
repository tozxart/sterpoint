export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // For both development and production
  // Handle swimming accessories images
  if (cleanPath.startsWith("SwimmingAccessories/")) {
    return `/images/${cleanPath}`;
  }
  // Handle fitness equipment images
  if (cleanPath.startsWith("images/FitnessEquipment/")) {
    return `/${cleanPath}`;
  }
  // Handle tennis and padel images
  if (cleanPath.startsWith("images/TennisPadel/")) {
    return `/${cleanPath}`;
  }
  // Handle services images
  if (cleanPath.startsWith("images/Services/")) {
    return `/${cleanPath}`;
  }
  // Handle social icons
  if (cleanPath.startsWith("social/")) {
    return `/images/${cleanPath}`;
  }
  // Handle logo
  if (cleanPath === "logo.png") {
    return `/images/${cleanPath}`;
  }
  // Handle flags
  if (cleanPath.startsWith("flags/")) {
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
