import React from "react";

interface AnimatedButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function AnimatedButton({
  href,
  text,
  variant = "primary",
  className,
}: AnimatedButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300";
  const variantClasses = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "bg-white text-primary-600 hover:bg-gray-50",
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${
        className || ""
      }`}>
      {text}
    </a>
  );
}
