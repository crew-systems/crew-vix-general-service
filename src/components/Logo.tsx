import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  /** Kept for compatibility with existing header variants. */
  theme?: "dark" | "light";
}

const SIZE_MAP: Record<
  NonNullable<LogoProps["size"]>,
  string
> = {
  sm: "h-14",
  md: "h-16",
  lg: "h-20",
};

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
}) => {
  return (
    <img
      src="/images/vix-general-services-logo.webp"
      alt="VIX General Services"
      width="720"
      height="518"
      decoding="async"
      className={`vix-logo-mark w-auto object-contain select-none ${SIZE_MAP[size]} ${className}`}
    />
  );
};

export default Logo;
