"use client";

import React from "react";
import {
  ScanFace,
  ClipboardCheck,
  CalendarDays,
  ShieldAlert,
  Building2,
  TrendingUp,
  FileCheck2,
  FileText,
  Smartphone,
  Laptop,
  ArrowRight,
} from "lucide-react";

interface ApplicationsProps {
  onOpenDemo?: () => void;
}

const EMPLOYEE_FEATURES = [
  {
    icon: ScanFace,
    title: "Facial & GPS Attendance",
    desc: "Biometric check-in locked to verified site geofences.",
  },
  {
    icon: ClipboardCheck,
    title: "Proof-of-Work Tasks",
    desc: "Digital service checklists with mandatory photo validation.",
  },
  {
    icon: CalendarDays,
    title: "Dynamic Rostering",
    desc: "Live shift schedules, replacement alerts, and leave balance.",
  },
  {
    icon: ShieldAlert,
    title: "Incident Escalation",
    desc: "One-touch safety and SOS alerts routed to control teams.",
  },
];

const CLIENT_FEATURES = [
  {
    icon: Building2,
    title: "Multisite Command Hub",
    desc: "Live visibility across properties, shifts, and contractors.",
  },
  {
    icon: TrendingUp,
    title: "SLA Performance",
    desc: "Real-time vendor resolution tracking and compliance audits.",
  },
  {
    icon: FileCheck2,
    title: "Digital Work Sign-Offs",
    desc: "Paperless approvals, service verification, and billing logs.",
  },
  {
    icon: FileText,
    title: "Automated Audit Trails",
    desc: "On-demand reporting for compliance, incidents, and uptime.",
  },
];

export default function Applications({ onOpenDemo }: ApplicationsProps) {
  return (
    <section
      id="applications"
      className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header - Consistent with all sections */}
        <div className="reveal-section mb-8 sm:mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A651]">
            Platform Architecture
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#151B6B] sm:text-4xl lg:text-5xl">
            Two Dedicated Interfaces.
            <br />
            <span className="text-slate-900">One Unified System.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Frontline teams and property managers interact with dedicated, role-tailored workflows
            while synchronizing with the same core operational database in real time.
          </p>
        </div>

        {/* Dual Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

          {/* Section 1: Staff Application */}
          <div className="reveal-card delay-100 py-8 lg:py-0 lg:pr-10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#151B6B]/10 text-[#151B6B] flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Staff Mobile App</h3>
                  <p className="text-xs text-slate-400">On-ground workforce & field technicians</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 font-semibold">
                Android
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {EMPLOYEE_FEATURES.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-[#151B6B]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Client Portal */}
          <div className="reveal-card delay-200 pt-8 lg:pt-0 lg:pl-10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#00A651]/10 text-[#00A651] flex items-center justify-center">
                  <Laptop className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Client Mobile App</h3>
                  <p className="text-xs text-slate-400">Property managers & corporate leads</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-50 text-[#00A651] font-semibold border border-emerald-100">
                Web Console
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CLIENT_FEATURES.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50/60 border border-emerald-100/60 flex items-center justify-center text-[#00A651]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}