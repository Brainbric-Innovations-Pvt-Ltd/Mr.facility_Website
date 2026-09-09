import React from "react";
import Image from "next/image";
import img1 from "../Assets/Logo-clean.png";
import img2 from "../Assets/Font-clean.png";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "default";
  showTagline?: boolean;
}

export default function Logo({
  className = "",
  variant = "default",
  showTagline = false,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <div
      className={`flex items-center gap-3 select-none ${className}`}
      aria-label="MR Facility Enterprise Ecosystem"
    >
      <Image
        src={img1}
        alt="MR Facility Logo"
        className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300"
        priority
      />
      <div className="flex flex-col">
        <Image
          src={img2}
          alt="MR Facility"
          className={`h-5 sm:h-6 w-auto object-contain ${
            isLight ? "brightness-0 invert" : ""
          }`}
          priority
        />
        {showTagline && (
          <span
            className={`text-[9px] tracking-wider uppercase font-semibold mt-1 ${
              isLight ? "text-emerald-400" : "text-[#00A651]"
            }`}
          >
            Enterprise Ecosystem
          </span>
        )}
      </div>
    </div>
  );
}
