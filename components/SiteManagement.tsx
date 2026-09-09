"use client";

import React from "react";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  ClipboardCheck,
  Radio,
  Layers,
  MapPin,
} from "lucide-react";

export default function SiteManagement() {
  return (
    <section
      id="site-management"
      className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header - Minimal & Consistent */}
        <div className="reveal-section mb-8 sm:mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A651]">
              Multisite Control
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#151B6B] sm:text-4xl lg:text-5xl">
              Facility Command Hub.
              <br />
              <span className="text-slate-900">One View for Every Facility.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Gain complete operational oversight across all your facilities with real-time
              workforce deployment, verified geofences, and centralized maintenance tracking.
            </p>
          </div>
        </div>

        {/* Modern Minimal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Primary Operations Console Overview (7 cols) */}
          <div className="reveal-card shimmer-on-reveal delay-100 rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 lg:p-8 lg:col-span-7 shadow-sm flex flex-col justify-between space-y-6 sm:space-y-8">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-slate-100">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Operations Overview
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    Multisite Command Status
                  </h3>
                </div>
              </div>

              {/* Minimal Stat Highlights */}
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2.5 sm:gap-3.5">
                <div className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-400">
                    <Radio className="w-3.5 h-3.5 text-[#151B6B]" />
                    <span className="text-[10px] sm:text-[11px] font-medium">Network</span>
                  </div>
                  <div className="text-lg sm:text-2xl font-extrabold text-slate-900">
                    100%
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">
                    Connected Sites
                  </p>
                </div>

                <div className="p-3 sm:p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/60 space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-emerald-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00A651]" />
                    <span className="text-[10px] sm:text-[11px] font-medium">Geofence</span>
                  </div>
                  <div className="text-lg sm:text-2xl font-extrabold text-[#00A651]">
                    Active
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-emerald-700/70">
                    Perimeter Secured
                  </p>
                </div>

                <div className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#151B6B]" />
                    <span className="text-[10px] sm:text-[11px] font-medium">SLA Resolution</span>
                  </div>
                  <div className="text-lg sm:text-2xl font-extrabold text-slate-900">
                    99.4%
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">
                    On-Time Tasks
                  </p>
                </div>
              </div>

              {/* Central Highlights Checklist */}
              <div className="mt-6 sm:mt-8 space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="w-7 h-7 rounded-xl bg-[#151B6B]/10 text-[#151B6B] flex items-center justify-center shrink-0">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Cross-Facility Hierarchy
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Organize multiple facilities, zones, and departments under one unified structure.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="w-7 h-7 rounded-xl bg-[#00A651]/10 text-[#00A651] flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Virtual Perimeter Enforcements
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Automated location checks restrict attendance and operations to authorized facility boundaries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Highlight Status */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-emerald-200/80 bg-emerald-50/70 text-xs">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A651] shrink-0" />
                <span className="text-slate-800 font-medium">
                  Real-time synchronization across all facility command centers
                </span>
              </div>
              <span className="hidden sm:inline-block font-bold text-[#00A651] shrink-0">
                Synchronized
              </span>
            </div>
          </div>

          {/* Right Column: 3 Minimal Pillar Feature Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">

            {/* Card 1 */}
            <div className="reveal-card shimmer-on-reveal delay-150 group rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#151B6B]/30 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#151B6B]/10 text-[#151B6B] transition-transform duration-300 group-hover:scale-105">
                <Building2 className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">
                Centralized Visibility
              </h4>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                Monitor facility operations, shift supervisors, and on-ground workforce deployment from one single interface.
              </p>
            </div>

            {/* Card 2 */}
            <div className="reveal-card shimmer-on-reveal delay-250 group rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#00A651]/30 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00A651]/10 text-[#00A651] transition-transform duration-300 group-hover:scale-105">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">
                Geofence Boundaries
              </h4>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                Ensure workforce check-ins and maintenance tasks occur strictly within verified physical facility boundaries.
              </p>
            </div>

            {/* Card 3 */}
            <div className="reveal-card shimmer-on-reveal delay-350 group rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#151B6B]/30 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#151B6B]/10 text-[#151B6B] transition-transform duration-300 group-hover:scale-105">
                <ClipboardCheck className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">
                Task & Incident Oversight
              </h4>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                Assign facility maintenance schedules, track open operational tickets, and verify proof of work with photo validation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}