"use client";

import React, { useState } from "react";
import {
  Boxes,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  PackageCheck,
  MapPin,
  BellRing,
} from "lucide-react";

export default function InventoryManagement() {
  const [activeFilter, setActiveFilter] = useState("all");

  const inventoryItems = [
    {
      item: "Commercial Floor Disinfectant",
      category: "Cleaning",
      quantity: "48 drums",
      location: "Site Alpha - Bay B",
      status: "Available",
    },
    {
      item: "HEPA Filter Cartridges",
      category: "HVAC Spares",
      quantity: "4 units",
      location: "Site Delta - Workshop",
      status: "Low Stock",
    },
    {
      item: "Safety Nitrile Gloves (L)",
      category: "Safety & PPE",
      quantity: "120 boxes",
      location: "Site Beta - Locker",
      status: "Available",
    },
    {
      item: "Two-Way Radios (IP67)",
      category: "Comms",
      quantity: "0 units",
      location: "Site Alpha - Security",
      status: "Out of Stock",
    },
    {
      item: "Microfiber Mop Refills",
      category: "Cleaning",
      quantity: "85 packs",
      location: "Site Gamma - Janitorial",
      status: "Available",
    },
  ];

  const filteredItems = inventoryItems.filter((item) => {
    if (activeFilter === "all") return true;

    return (
      item.status.toLowerCase().replace(" ", "-") === activeFilter
    );
  });

  const availableCount = inventoryItems.filter(
    (item) => item.status === "Available"
  ).length;

  const lowStockCount = inventoryItems.filter(
    (item) => item.status === "Low Stock"
  ).length;

  const outOfStockCount = inventoryItems.filter(
    (item) => item.status === "Out of Stock"
  ).length;

  return (
    <section
      id="inventory-management"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A651]">
              Inventory & Assets
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#151B6B] sm:text-4xl lg:text-5xl">
              Know What You Have.
              <br />
              <span className="text-slate-900">
                Know Where It Is.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 lg:text-right">
            Track supplies, equipment, tools and PPE across every facility
            with centralized stock visibility and timely alerts.
          </p>
        </div>

        {/* Inventory Overview */}
        {/* Modern Main Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Overview Card */}
          <div className="rounded-3xl bg-[#151B6B] p-7 text-white sm:p-8 lg:col-span-4 shadow-xl shadow-[#151B6B]/15 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-white/5 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-[#00A651]/15 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <Boxes className="h-5 w-5 text-emerald-300" />
                </div>

                <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  Live Stock
                </span>
              </div>

              <div className="mt-8">
                <p className="text-xs text-blue-100/60">
                  Inventory Overview
                </p>
                <h3 className="mt-1.5 text-3xl font-black text-white">
                  {inventoryItems.length}
                </h3>
                <p className="mt-1 text-xs text-blue-100/60">
                  Items currently tracked across facilities
                </p>
              </div>

              {/* Status Summary */}
              <div className="mt-8 space-y-2.5">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    <span className="text-xs text-blue-100/80 font-medium">
                      Available
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    {availableCount}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-amber-300" />
                    <span className="text-xs text-blue-100/80 font-medium">
                      Low Stock
                    </span>
                  </div>
                  <span className="text-sm font-bold text-amber-300">
                    {lowStockCount}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2.5">
                    <XCircle className="h-4 w-4 text-rose-300" />
                    <span className="text-xs text-blue-100/80 font-medium">
                      Out of Stock
                    </span>
                  </div>
                  <span className="text-sm font-bold text-rose-300">
                    {outOfStockCount}
                  </span>
                </div>
              </div>
            </div>

            {/* Alert */}
            <div className="relative z-10 mt-7 flex items-start gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
              <BellRing className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
              <div>
                <p className="text-xs font-bold text-white">
                  Automated Stock Alerts
                </p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-blue-100/70">
                  Configured safety thresholds trigger notifications before stock runs out.
                </p>
              </div>
            </div>
          </div>

          {/* Modern Inventory List Card */}
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/5 lg:col-span-8">
            {/* List Header */}
            <div className="flex flex-col gap-4 border-b border-slate-100 bg-slate-50/70 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Stock Management
                </p>
                <h3 className="mt-1 text-base font-bold text-slate-900">
                  Facility Inventory
                </h3>
              </div>

              {/* Modern Filters */}
              <div className="flex flex-wrap gap-1.5 bg-slate-100/80 p-1 rounded-full border border-slate-200/60">
                {[
                  { label: "All", key: "all" },
                  { label: "Available", key: "available" },
                  { label: "Low Stock", key: "low-stock" },
                  { label: "Out", key: "out-of-stock" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveFilter(tab.key)}
                    className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                      activeFilter === tab.key
                        ? "bg-[#151B6B] text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Items */}
            <div className="divide-y divide-slate-100">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col gap-4 p-5 transition-colors hover:bg-slate-50/80 sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* Item */}
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-colors group-hover:bg-[#151B6B]/10 group-hover:text-[#151B6B]">
                      <PackageCheck className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate text-sm font-bold text-slate-900">
                        {item.item}
                      </h4>

                      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500">
                        <span>{item.category}</span>

                        <span className="text-slate-300">
                          •
                        </span>

                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Quantity + Status */}
                  <div className="flex items-center justify-between gap-5 sm:justify-end">

                    <div className="text-left sm:text-right">
                      <p className="text-xs font-bold text-slate-900">
                        {item.quantity}
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-400">
                        Current quantity
                      </p>
                    </div>

                    {item.status === "Available" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-[#00A651]">
                        <CheckCircle2 className="h-3 w-3" />
                        Available
                      </span>
                    )}

                    {item.status === "Low Stock" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-700">
                        <AlertTriangle className="h-3 w-3" />
                        Low Stock
                      </span>
                    )}

                    {item.status === "Out of Stock" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-bold text-rose-700">
                        <XCircle className="h-3 w-3" />
                        Out of Stock
                      </span>
                    )}

                  </div>

                </div>
              ))}

              {filteredItems.length === 0 && (
                <div className="p-10 text-center text-sm text-slate-500">
                  No inventory items found.
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="flex items-center gap-2 border-t border-slate-100 bg-slate-50 px-5 py-4">
              <BellRing className="h-4 w-4 text-[#00A651]" />

              <p className="text-xs text-slate-500">
                Automatic notifications help teams act before stock runs out.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Benefits */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <Boxes className="h-5 w-5 text-[#151B6B]" />

            <h4 className="mt-4 text-sm font-bold text-slate-900">
              Centralized Stock
            </h4>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Manage inventory across multiple facilities from one place.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <MapPin className="h-5 w-5 text-[#00A651]" />

            <h4 className="mt-4 text-sm font-bold text-slate-900">
              Site Visibility
            </h4>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Quickly identify where equipment and supplies are located.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <BellRing className="h-5 w-5 text-[#151B6B]" />

            <h4 className="mt-4 text-sm font-bold text-slate-900">
              Smart Alerts
            </h4>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Get notified when inventory reaches configured thresholds.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

