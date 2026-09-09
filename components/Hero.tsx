"use client";

import React from "react";
import Image from "next/image";
import heroDashboardImg from "../Assets/hero-dashboard.png";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { isMobileResponsiveView } from "./deviceUtils";

interface HeroProps {
  onOpenDemo: () => void;
  onOpenLogin?: (e?: React.MouseEvent) => void;
  onOpenDesktopNotice?: () => void;
}

export default function Hero({ onOpenDemo, onOpenLogin, onOpenDesktopNotice }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-32 md:pb-20"
    >
      {/* Soft Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#151B6B]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-12">

          {/* Left Content (5 cols) */}
          <div className="reveal-section max-w-2xl lg:col-span-5">

            {/* Eyebrow - Unified with all other sections */}
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A651]">
              Smart Facility Platform
            </span>

            {/* Heading */}
            <h1 className="mt-2.5 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Manage People.
              <br />
              <span className="text-[#151B6B]">
                Manage Operations.
              </span>
              <br />
              <span className="text-[#00A651]">
                Manage Better.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-3 sm:mt-5 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
              MR Facility brings employee management, attendance, payroll,
              CRM, inventory, site and task management together in one
              simple platform.
            </p>

            {/* Buttons - Clean, side-by-side on mobile, no bloated vertical stack */}
            <div className="mt-5 sm:mt-7 flex items-center gap-3">
              <button
                onClick={onOpenDemo}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:bg-[#008742] shadow-xs cursor-pointer group"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <a
                href="https://app.mrfacility.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (isMobileResponsiveView()) {
                    e.preventDefault();
                    onOpenDesktopNotice?.();
                  }
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-700 hover:border-secondary hover:text-secondary transition-all duration-200"
              >
                Login
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-4 sm:mt-6 flex items-center gap-4 sm:gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00A651]" />
                <span>15+ Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#151B6B]" />
                <span>Enterprise Ready</span>
              </div>
            </div>

          </div>

          {/* Right Product Visual: 3D Showcase (7 cols) */}
          <div className="reveal-card delay-150 relative mx-auto w-full lg:col-span-7 [perspective:1400px] pb-8 sm:pb-10">
            {/* Ambient Floor Glow */}
            <div className="pointer-events-none absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-[#151B6B]/15 via-[#00A651]/12 to-transparent blur-2xl sm:blur-3xl opacity-80" />

            {/* Angled Card Container - Smooth natural perspective */}
            <div className="group relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-1.5 sm:p-2.5 shadow-xl shadow-[#151B6B]/8 sm:[transform-style:preserve-3d] sm:[transform:rotateX(3deg)_rotateY(-5deg)] lg:[transform:rotateX(4deg)_rotateY(-7deg)_rotateZ(0.5deg)] transition-all duration-700 ease-out hover:[transform:rotateX(1deg)_rotateY(-2deg)] hover:scale-[1.01]">

              {/* Inner Glossy Bezel with Shimmer */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-50 ring-1 ring-slate-900/5 shimmer-on-reveal">
                {/* Subtle Top-Edge Lighting Highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

                {/* Full High-Resolution Dashboard UI */}
                <Image
                  src={heroDashboardImg}
                  alt="MR Facility Management Platform - Super Admin Console"
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 750px"
                />
              </div>

              {/* Floating Badge - Positioned safely with zero clipping */}
              <div className="flex absolute -bottom-4 left-3 sm:-bottom-5 sm:left-4 z-30 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-xl shadow-[#151B6B]/12 items-center gap-2.5 sm:gap-3 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#00A651]/10 text-[#00A651] shrink-0">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    15 Unified Modules
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">
                    People • Sites • Payroll • Ops
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
