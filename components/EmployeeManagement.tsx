"use client";

import React from "react";
import { Briefcase, HardHat, Check } from "lucide-react";

export default function EmployeeManagement() {
  const whiteCollarRoles = [
    "Managers",
    "Supervisors",
    "Administrators",
    "Office Staff",
  ];

  const blueCollarRoles = [
    "Security Staff",
    "Housekeeping",
    "Maintenance Crew",
    "Facility Workers",
    "Site Technicians",
  ];

  return (
    <section
      id="employee-management"
      className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header - Consistent with Attendance, Payroll, and Solutions */}
        <div className="reveal-section mb-8 sm:mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A651]">
            Workforce Management
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#151B6B] sm:text-4xl lg:text-5xl">
            One Workforce.
            <br />
            <span className="text-slate-900">Every Role Connected.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            MR Facility brings administrative teams and frontline employees
            together through one centralized workforce platform built for
            modern facility operations.
          </p>
        </div>

        {/* Workforce Structure Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* White Collar Card */}
          <div className="reveal-card shimmer-on-reveal delay-100 relative rounded-3xl border border-slate-200/90 bg-slate-50/60 p-5 sm:p-7 lg:p-8 hover:bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-[#151B6B]/5 transition-all duration-300 overflow-hidden group">
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#151B6B]" />

            {/* Card Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#151B6B] flex items-center justify-center text-white shadow-md shadow-[#151B6B]/15 transition-transform duration-300 group-hover:scale-105">
                  <Briefcase className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    White Collar
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Management & Operations
                  </p>
                </div>
              </div>

              <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-[#151B6B] bg-[#151B6B]/10 px-3 py-1.5 rounded-lg">
                Management
              </span>
            </div>

            <p className="mt-6 text-sm text-slate-600 leading-relaxed">
              Give managers, supervisors and administrative teams the tools they
              need to oversee people, permissions, and multi-site facility
              operations seamlessly.
            </p>

            {/* Roles */}
            <div className="mt-7">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                Supported Roles
              </p>

              <div className="flex flex-wrap gap-2">
                {whiteCollarRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#00A651]" />
                </div>
                <span className="text-xs leading-5 text-slate-600">
                  Role-based permissions and approval workflows
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#00A651]" />
                </div>
                <span className="text-xs leading-5 text-slate-600">
                  Centralized employee records and compliance documents
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#00A651]" />
                </div>
                <span className="text-xs leading-5 text-slate-600">
                  Multi-site workforce visibility and department hierarchies
                </span>
              </div>
            </div>
          </div>

          {/* Blue Collar Card */}
          <div className="reveal-card shimmer-on-reveal delay-200 relative rounded-3xl border border-slate-200/90 bg-slate-50/60 p-5 sm:p-7 lg:p-8 hover:bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-emerald-600/5 transition-all duration-300 overflow-hidden group">
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#00A651]" />

            {/* Card Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#00A651] flex items-center justify-center text-white shadow-md shadow-emerald-500/15 transition-transform duration-300 group-hover:scale-105">
                  <HardHat className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Blue Collar
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Field & Site Teams
                  </p>
                </div>
              </div>

              <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-[#00A651] bg-[#00A651]/10 px-3 py-1.5 rounded-lg">
                Field App
              </span>
            </div>

            <p className="mt-6 text-sm text-slate-600 leading-relaxed">
              Equip frontline teams with intuitive mobile tools for attendance,
              site assignments, daily checklists, and real-time task
              completion updates.
            </p>

            {/* Roles */}
            <div className="mt-7">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                Field Personnel
              </p>

              <div className="flex flex-wrap gap-2">
                {blueCollarRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#00A651]" />
                </div>
                <span className="text-xs leading-5 text-slate-600">
                  Facial recognition and GPS-geofenced attendance
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#00A651]" />
                </div>
                <span className="text-xs leading-5 text-slate-600">
                  Site assignments, daily tasks, and shift management
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#00A651]" />
                </div>
                <span className="text-xs leading-5 text-slate-600">
                  Work updates and proof-of-work photo submissions
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
