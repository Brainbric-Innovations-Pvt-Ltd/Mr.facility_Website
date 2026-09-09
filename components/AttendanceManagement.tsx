"use client";

import React from "react";
import { ScanFace, MapPin, CheckCircle2, ShieldCheck, Users } from "lucide-react";

export default function AttendanceManagement() {
  return (
    <section
      id="attendance-management"
      className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal-section mb-8 sm:mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A651]">
            Smart Attendance
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#151B6B] sm:text-4xl lg:text-5xl">
            Attendance That Works
            <br />
            <span className="text-slate-900">Wherever Your Team Works.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Verify employee attendance using facial recognition and
            location-based verification, giving your team accurate and
            reliable attendance records.
          </p>
        </div>

        {/* Modern Main Feature Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left - Verification Overview Card */}
          <div className="reveal-card shimmer-on-reveal delay-100 relative overflow-hidden rounded-3xl bg-[#151B6B] p-5 sm:p-8 lg:p-9 text-white lg:col-span-5 shadow-xl shadow-[#151B6B]/15">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#00A651]/15 blur-2xl" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-emerald-400">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              </div>

              <h3 className="mt-7 text-2xl font-bold tracking-tight">
                Verified Attendance
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                Every check-in is verified using employee identity and
                assigned workplace location.
              </p>

              {/* Verification Flow */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-3.5 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-400">
                    <ScanFace className="h-5 w-5 text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Identity Verified
                    </p>
                    <p className="mt-0.5 text-xs text-blue-100/60">
                      Facial recognition
                    </p>
                  </div>

                  <CheckCircle2 className="ml-auto h-5 w-5 text-emerald-400" />
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-3.5 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-400">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Location Verified
                    </p>
                    <p className="mt-0.5 text-xs text-blue-100/60">
                      Assigned site geofence
                    </p>
                  </div>

                  <CheckCircle2 className="ml-auto h-5 w-5 text-emerald-400" />
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-100/70">
                      Attendance Status
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Verified
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm font-semibold text-white">
                    Check-in successfully recorded
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Feature Details Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {/* Facial Recognition Card */}
            <div className="reveal-card shimmer-on-reveal delay-200 group rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00A651]/30 hover:shadow-xl hover:shadow-[#00A651]/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A651]/10 text-[#00A651] transition-transform duration-300 group-hover:scale-105">
                <ScanFace className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Facial Recognition
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Quickly verify employee identity through facial
                recognition before recording attendance.
              </p>

              <div className="mt-7 space-y-3 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00A651]" />
                  <span className="text-xs text-slate-600 font-medium">
                    Fast identity verification
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00A651]" />
                  <span className="text-xs text-slate-600 font-medium">
                    Secure attendance records
                  </span>
                </div>
              </div>
            </div>

            {/* Location Attendance Card */}
            <div className="reveal-card shimmer-on-reveal delay-250 group rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#151B6B]/30 hover:shadow-xl hover:shadow-[#151B6B]/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#151B6B]/10 text-[#151B6B] transition-transform duration-300 group-hover:scale-105">
                <MapPin className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Location-Based
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Ensure employees check in from their assigned facility
                using configurable location boundaries.
              </p>

              <div className="mt-7 space-y-3 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00A651]" />
                  <span className="text-xs text-slate-600 font-medium">
                    Site-based verification
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00A651]" />
                  <span className="text-xs text-slate-600 font-medium">
                    Configurable site boundaries
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Wide Feature Card */}
            <div className="reveal-card shimmer-on-reveal delay-300 rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 lg:p-8 sm:col-span-2 transition-all hover:border-slate-300">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#00A651]">
                    Complete Visibility
                  </p>

                  <h3 className="mt-1.5 text-xl font-bold text-slate-900">
                    One reliable attendance record for every employee.
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Combine identity and location verification to give
                    managers a clear view of workforce attendance across
                    multiple facilities.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3 rounded-2xl bg-slate-50 border border-slate-150 p-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#151B6B]/10 text-[#151B6B]">
                    <Users className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Workforce Ready
                    </p>
                    <p className="text-xs text-slate-500">
                      Centralized attendance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
