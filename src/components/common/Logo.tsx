import React from "react";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src="/src/images/logo.png"
      alt="Ster Point"
      className={`object-contain ${className}`}
      style={{ imageRendering: "crisp-edges" }}
    />
  );
}
