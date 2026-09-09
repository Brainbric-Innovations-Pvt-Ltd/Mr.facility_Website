"use client";

import React from "react";
import {
  Calculator,
  CheckCircle2,
  Clock3,
  CalendarDays,
  FileCheck2,
} from "lucide-react";

export default function PayrollManagement() {
  return (
    <section
      id="payroll-management"
      className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal-section mb-8 sm:mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A651]">
              Automated Payroll
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#151B6B] sm:text-4xl lg:text-5xl">
              Payroll Without
              <br />
              <span className="text-slate-900">The Manual Work.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Turn verified attendance, shifts, overtime and leave records
              into accurate payroll calculations with less administrative effort.
            </p>
          </div>
        </div>

        {/* Arranged Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Workflow Card (Spans 7 Cols) */}
          <div className="reveal-card shimmer-on-reveal delay-100 rounded-3xl border border-slate-200/80 bg-white/95 p-6 sm:p-8 lg:p-9 lg:col-span-7 shadow-sm flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Payroll Workflow
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    From attendance to payroll
                  </h3>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-[#151B6B]/10 text-[#151B6B] sm:flex shadow-2xs">
                  <Calculator className="h-5 w-5" />
                </div>
              </div>

              {/* Steps */}
              <div className="mt-8 space-y-6">
                {/* Step 1 */}
                <div className="relative flex gap-5">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#151B6B] text-sm font-bold text-white shadow-md shadow-[#151B6B]/20">
                    01
                  </div>

                  <div className="pt-0.5">
                    <h4 className="text-sm font-bold text-slate-900">
                      Attendance Sync
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Verified attendance, shifts and working hours are
                      automatically collected.
                    </p>
                  </div>

                  <div className="absolute left-[21px] top-11 h-7 border-l border-dashed border-slate-200" />
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-5">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#151B6B] text-sm font-bold text-white shadow-md shadow-[#151B6B]/20">
                    02
                  </div>

                  <div className="pt-0.5">
                    <h4 className="text-sm font-bold text-slate-900">
                      Payroll Calculation
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Salary, overtime, leave and other configured payroll
                      components are calculated automatically.
                    </p>
                  </div>

                  <div className="absolute left-[21px] top-11 h-7 border-l border-dashed border-slate-200" />
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#00A651] text-sm font-bold text-white shadow-md shadow-emerald-500/20">
                    03
                  </div>

                  <div className="pt-0.5">
                    <h4 className="text-sm font-bold text-slate-900">
                      Payroll Ready
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Review the calculated payroll and prepare the final
                      payment process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00A651]" />

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Attendance data synchronized
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Payroll calculations are ready for review.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Stacked Features (Spans 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="reveal-card shimmer-on-reveal delay-150 group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#151B6B]/30 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#151B6B]/10 text-[#151B6B] transition-transform duration-300 group-hover:scale-105">
                <Clock3 className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">
                Overtime Tracking
              </h4>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                Calculate overtime from verified working hours.
              </p>
            </div>

            <div className="reveal-card shimmer-on-reveal delay-250 group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#00A651]/30 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00A651]/10 text-[#00A651] transition-transform duration-300 group-hover:scale-105">
                <CalendarDays className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">
                Leave Integration
              </h4>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                Connect approved leave records with payroll calculations.
              </p>
            </div>

            <div className="reveal-card shimmer-on-reveal delay-350 group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#151B6B]/30 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#151B6B]/10 text-[#151B6B] transition-transform duration-300 group-hover:scale-105">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">
                Payroll Records
              </h4>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                Keep organized payroll information for every employee.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}