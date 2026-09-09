"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "../Assets/Logo-clean.png";
import img2 from "../Assets/Font-clean.png";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Initiate unique exit transition at 1.4s
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1350);

    // Completely dismiss splash screen at 1.8s
    const doneTimer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExiting
          ? "opacity-0 pointer-events-none scale-105"
          : "opacity-100"
        }`}
    >
      {/* Soft Ambient Radial Glow (Balanced Size) */}
      <div
        className={`pointer-events-none absolute h-64 w-64 rounded-full bg-gradient-to-tr from-[#151B6B]/10 via-[#00A651]/12 to-transparent blur-3xl transition-all duration-700 ${isExiting ? "scale-150 opacity-0" : "scale-100 opacity-100 animate-pulse"
          }`}
      />

      {/* Centered Brand Mark with Precision Circular Loader */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExiting ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
      >
        {/* Compact Logo Container with Dual-Ring Orbital Animation */}
        <div className="relative flex items-center justify-center">
          {/* Subtle Outer Glowing Halo */}
          <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-[#151B6B]/15 via-[#00A651]/20 to-emerald-400/15 blur-md" />

          {/* SVG Orbital Circular Loader */}
          <svg
            className="absolute -inset-2.5 h-[calc(100%+20px)] w-[calc(100%+20px)] pointer-events-none"
            viewBox="0 0 88 88"
          >
            <defs>
              <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#151B6B" stopOpacity="0.1" />
                <stop offset="40%" stopColor="#151B6B" />
                <stop offset="80%" stopColor="#00A651" />
                <stop offset="100%" stopColor="#05C15E" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Static Subtle Track */}
            <circle
              cx="44"
              cy="44"
              r="39"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1.75"
              className="opacity-50"
            />

            {/* Counter-rotating subtle dashed micro-ring */}
            <circle
              cx="44"
              cy="44"
              r="39"
              fill="none"
              stroke="#00A651"
              strokeWidth="1"
              strokeDasharray="4 8"
              strokeOpacity="0.25"
              className="origin-center animate-[spin_6s_linear_infinite_reverse]"
            />

            {/* Main Dynamic Glowing Orbital Arc */}
            <circle
              cx="44"
              cy="44"
              r="39"
              fill="none"
              stroke="url(#orbit-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="180"
              strokeDashoffset="70"
              filter="url(#glow)"
              className="origin-center animate-[spin_1.25s_cubic-bezier(0.4,0,0.2,1)_infinite]"
            />

            {/* Satellite Beacon Dot on Orbit */}
            <circle
              cx="44"
              cy="5"
              r="2"
              fill="#00A651"
              className="origin-center animate-[spin_1.25s_cubic-bezier(0.4,0,0.2,1)_infinite]"
            />
          </svg>

          {/* Compact Logo Badge (Proportionate, Not Oversized) */}
          <div className="relative flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-white p-3 shadow-md shadow-[#151B6B]/8 border border-slate-100 transition-transform duration-500">
            <Image
              src={img1}
              alt="MR Facility Logo"
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Brand Wordmark (Compact & Clean) */}
        <div className="mt-5 h-4 sm:h-4.5 flex items-center justify-center overflow-hidden">
          <Image
            src={img2}
            alt="MR Facility"
            className="h-3 sm:h-3.5 w-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
