import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  /** Background theme the logo sits on: "dark" -> white text, "light" -> navy text */
  theme?: "dark" | "light";
}

const SIZE_MAP: Record<
  NonNullable<LogoProps["size"]>,
  { mark: string; tagline: string; gap: string }
> = {
  sm: {
    mark: "text-lg",
    tagline: "text-[6px] tracking-[0.2em]",
    gap: "-mt-0.5",
  },
  md: {
    mark: "text-2xl sm:text-3xl",
    tagline: "text-[8px] sm:text-[9px] tracking-[0.25em]",
    gap: "-mt-0.5",
  },
  lg: {
    mark: "text-3xl sm:text-4xl lg:text-5xl",
    tagline: "text-[9px] sm:text-[11px] tracking-[0.3em]",
    gap: "-mt-1",
  },
};

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  theme = "dark",
}) => {
  const s = SIZE_MAP[size];
  const textColor = theme === "dark" ? "text-white" : "text-[#1A2B44]";

  return (
    <div className={`flex flex-col leading-none select-none ${className}`}>
      <span
        className={`font-heading font-extrabold tracking-tight ${textColor} ${s.mark}`}
      >
        VI<span className="text-[#C99A55]">X</span>
      </span>
      <span
        className={`font-heading font-bold uppercase text-[#C99A55] ${s.tagline} ${s.gap}`}
      >
        General Services
      </span>
    </div>
  );
};

export default Logo;
