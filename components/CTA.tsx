"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Building, Users } from "lucide-react";

interface CTAProps {
  onOpenDemo: () => void;
  onOpenLogin: () => void;
}

export default function CTA({ onOpenDemo, onOpenLogin }: CTAProps) {
  return (
    <section id="cta" className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
      <div className="reveal-card shimmer-on-reveal delay-100 relative rounded-3xl bg-primary border border-slate-800 p-6 sm:p-10 lg:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Soft subtle glow */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-xl text-center md:text-left space-y-3">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
            Elevate your facility management.
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Unify your team, locations, and daily maintenance schedules under one intuitive interface.
          </p>
        </div>

        {/* Actions */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-secondary text-white hover:bg-[#008742] font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group shadow-xs cursor-pointer"
          >
            <span>Schedule Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
