import React from "react";
import { getAssetPath } from "../../utils/assetUtils";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src={getAssetPath("logo.png")}
      alt="Ster Point"
      className={`h-12 w-auto ${className}`}
      style={{ imageRendering: "crisp-edges" }}
    />
  );
}
