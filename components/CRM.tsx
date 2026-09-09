"use client";

import React, { useState } from "react";
import {
  Building2,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function CRM() {
  const [selectedClient, setSelectedClient] = useState(0);

  const clients = [
    {
      name: "Apex Commercial Towers",
      type: "Corporate Complex",
      sites: "3 Sites",
      sla: "99.8%",
      status: "Active",
      services: ["24/7 Security", "HVAC Maintenance", "Daily Cleaning"],
      activity: "Quarterly HVAC inspection completed and signed off.",
    },
    {
      name: "Horizon Logistics Gateway",
      type: "Distribution Hub",
      sites: "2 Sites",
      sla: "99.1%",
      status: "Active",
      services: ["Perimeter Security", "Facility Upkeep", "Waste Disposal"],
      activity: "Loading dock barrier repair verified via mobile app.",
    },
    {
      name: "Metro Central Galleria",
      type: "Retail Center",
      sites: "4 Sites",
      sla: "99.5%",
      status: "Active",
      services: ["Housekeeping", "Access Control", "Fire Safety"],
      activity: "Concourse deep sanitization schedule confirmed.",
    },
  ];

  const client = clients[selectedClient];

  return (
    <section
      id="crm"
      className="relative overflow-hidden bg-slate-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A651]">
              Client Management
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#151B6B] sm:text-4xl lg:text-5xl">
              Every Client.
              <br />
              <span className="text-slate-900">
                Every Service. Connected.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 lg:text-right">
            Keep client information, service contracts, SLA performance
            and communication organized in one centralized workspace.
          </p>
        </div>

        {/* Modern CRM Workspace Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Client List */}
            <div className="border-b border-slate-200/80 lg:col-span-4 lg:border-b-0 lg:border-r">
              <div className="border-b border-slate-100 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Clients
                    </p>
                    <h3 className="mt-1 text-base font-bold text-slate-900">
                      Active Accounts
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#151B6B]/10 text-[#151B6B]">
                    <Building2 className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 space-y-1.5">
                {clients.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedClient(idx)}
                    className={`w-full rounded-2xl p-4 text-left transition-all duration-200 ${
                      selectedClient === idx
                        ? "bg-[#151B6B]/5 ring-1 ring-[#151B6B]/20 shadow-xs"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          selectedClient === idx
                            ? "bg-[#151B6B] text-white shadow-sm"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Building2 className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="truncate text-sm font-bold text-slate-900">
                            {item.name}
                          </h4>
                          {selectedClient === idx && (
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-[#151B6B]" />
                          )}
                        </div>

                        <p className="mt-0.5 text-xs text-slate-500">
                          {item.type} • {item.sites}
                        </p>

                        <div className="mt-2 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#00A651]" />
                          <span className="text-[10px] font-bold text-[#00A651]">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Client Details */}
            <div className="p-6 sm:p-8 lg:col-span-8">
              {/* Client Heading */}
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#00A651]">
                      Active Contract
                    </span>
                    <span className="text-xs text-slate-400">
                      {client.sites}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                    {client.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {client.type}
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#151B6B] hover:bg-[#1E278E] px-4 py-2.5 text-xs font-bold text-white transition-all shadow-md shadow-[#151B6B]/20 hover:scale-[1.02]"
                >
                  <MessageSquare className="h-4 w-4" />
                  Contact Client
                </button>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all hover:bg-white hover:shadow-xs">
                  <p className="text-[11px] font-medium text-slate-500">
                    SLA Performance
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#00A651]">
                    {client.sla}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all hover:bg-white hover:shadow-xs">
                  <p className="text-[11px] font-medium text-slate-500">
                    Active Sites
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#151B6B]">
                    {client.sites.split(" ")[0]}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all hover:bg-white hover:shadow-xs">
                  <p className="text-[11px] font-medium text-slate-500">
                    Contract Status
                  </p>
                  <p className="mt-2 text-sm font-bold text-slate-900">
                    Active
                  </p>
                  <div className="mt-1 flex items-center gap-1.5 text-[10px] text-[#00A651] font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    In good standing
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#151B6B]" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Active Services
                  </h4>
                </div>

                <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {client.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs hover:border-slate-300 transition-colors"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#00A651]" />
                      <p className="mt-2.5 text-xs font-semibold text-slate-800">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-7 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#151B6B]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Recent Activity
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                  {client.activity}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col gap-2 border-t border-slate-100 bg-slate-50/80 px-6 py-4 text-xs sm:flex-row sm:items-center sm:justify-between">
            <span className="text-slate-500 font-medium">
              Centralized client and service management
            </span>
            <span className="font-bold text-[#151B6B]">
              MR Facility CRM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
