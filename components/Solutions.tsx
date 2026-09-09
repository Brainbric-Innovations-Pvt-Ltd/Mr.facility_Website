"use client";

import React from "react";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Package,
  ScanFace,
  Users,
  UsersRound,
  WalletCards,
} from "lucide-react";

interface SolutionsProps {
  onOpenDemo?: () => void;
}

export default function Solutions({ onOpenDemo }: SolutionsProps) {
  const handleExploreDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      const ctaSection = document.getElementById("cta");
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "#cta";
      }
    }
  };

  const solutions = [
    {
      id: 1,
      title: "Employee Management",
      desc: "Manage white-collar and blue-collar employees from one centralized platform.",
      icon: Users,
      href: "#employee-management",
    },
    {
      id: 2,
      title: "Attendance Management",
      desc: "Track attendance with facial recognition and location-based verification.",
      icon: ScanFace,
      href: "#attendance-management",
    },
    {
      id: 3,
      title: "Payroll Management",
      desc: "Simplify salary processing and manage payroll information efficiently.",
      icon: WalletCards,
      href: "#payroll-management",
    },
    {
      id: 4,
      title: "CRM",
      desc: "Manage clients, relationships and service information in one place.",
      icon: UsersRound,
      href: "#cta",
    },
    {
      id: 5,
      title: "Inventory Management",
      desc: "Track inventory, stock levels and resources across your operations.",
      icon: Package,
      href: "#cta",
    },
    {
      id: 6,
      title: "Site Management",
      desc: "Manage sites, workforce assignments and day-to-day site operations.",
      icon: Building2,
      href: "#site-management",
    },
    {
      id: 7,
      title: "Task Management",
      desc: "Create, assign and monitor tasks to keep your teams on track.",
      icon: ClipboardList,
      href: "#site-management",
    },
  ];

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal-section mb-8 sm:mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A651]">
              Our Solutions
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#151B6B] sm:text-4xl lg:text-5xl">
              One Platform.
              <br />
              <span className="text-slate-900">
                Complete Control.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base md:text-right">
            Powerful tools designed to simplify workforce management,
            facility operations and client relationships.
          </p>

        </div>

        {/* Modernized Cards */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.href}
                style={{ transitionDelay: `${(index % 4) * 90}ms` }}
                className="reveal-card shimmer-on-reveal group relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#151B6B]/30 hover:shadow-[0_24px_50px_rgba(21,27,107,0.1)] cursor-pointer"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-slate-100/80 px-2.5 py-0.5 text-[11px] font-mono font-bold text-slate-400 border border-slate-200/60 transition-colors group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-[#00A651]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200/70 text-[#151B6B] shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-[#151B6B] group-hover:bg-[#151B6B] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Main Content */}
                <div className="mt-8 mb-6">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-[#151B6B]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>

                {/* Explore Footer - Navigates to Demo */}
                <div
                  onClick={handleExploreDemo}
                  role="button"
                  tabIndex={0}
                  aria-label={`Explore demo for ${item.title}`}
                  className="mt-auto flex items-center justify-between pt-5 border-t border-slate-100 cursor-pointer group/btn"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-[#00A651] group-hover/btn:text-[#00A651]">
                    Explore
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-[#00A651] group-hover:text-white group-hover/btn:bg-[#00A651] group-hover/btn:text-white shadow-2xs">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover/btn:translate-x-1" />
                  </div>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#00A651] transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
