"use client";

import React from "react";
import { Bot, Cpu, LineChart, BellRing, BrainCircuit, SmartphoneNfc } from "lucide-react";

export default function FutureUpdates() {
  const roadmapItems = [
    {
      title: "AI-Powered Insights",
      desc: "Predictive equipment degradation and preventative maintenance alerts.",
      icon: Bot,
    },
    {
      title: "Advanced Automation",
      desc: "Self-routing work orders that reassign crew based on occupancy sensors.",
      icon: Cpu,
    },
    {
      title: "Predictive Analytics",
      desc: "Forecasts for consumable supply depletion, energy use, and labor costs.",
      icon: LineChart,
    },
    {
      title: "Smart Notifications",
      desc: "Instant hazard broadcasts to nearest on-duty responders within seconds.",
      icon: BellRing,
    },
    {
      title: "Workforce Intelligence",
      desc: "Skill matrix matching, shift balancing, and automated certification renewal.",
      icon: BrainCircuit,
    },
    {
      title: "Enhanced Mobile Experience",
      desc: "Zero-latency edge synchronization for offline underground basements.",
      icon: SmartphoneNfc,
    },
  ];

  return (
    <section
      id="future"
      className="py-20 md:py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            We're Building What's Next
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            MR Facility is continuously evolving with smarter tools, automation
            and intelligent features designed to make facility management even
            more efficient.
          </p>
        </div>

        {/* Minimal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {roadmapItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-emerald-400">
                      Coming Soon
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
