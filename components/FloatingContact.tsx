"use client";

import React, { useState } from "react";
import { Phone, X } from "lucide-react";

export default function FloatingContact() {
  const [activeNotice, setActiveNotice] = useState<string | null>(null);

  const handleAction = (type: "call" | "whatsapp") => {
    if (type === "whatsapp") {
      setActiveNotice("Connecting to MR Facility WhatsApp Enterprise Support...");
    } else {
      setActiveNotice("Dialing MR Facility Sales & Operations Line...");
    }
    setTimeout(() => {
      setActiveNotice(null);
    }, 4000);
  };

  return (
    <>
      {/* Toast feedback notice when clicked */}
      {activeNotice && (
        <div className="fixed bottom-28 right-4 sm:bottom-32 sm:right-6 z-50 bg-slate-900 text-white text-xs font-medium px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200 max-w-[calc(100vw-2rem)] sm:max-w-xs">
          <span>{activeNotice}</span>
          <button
            onClick={() => setActiveNotice(null)}
            className="text-slate-400 hover:text-white shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Buttons Stack - fixed bottom-right */}
      <aside
        aria-label="Contact options"
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 select-none"
      >
        {/* Button 1: WhatsApp */}
        <div className="relative group flex items-center">
          {/* Tooltip on desktop hover */}
          <span className="hidden lg:inline-block absolute right-full mr-3 px-3 py-1 rounded-lg text-xs font-bold text-slate-800 bg-white shadow-md border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>

          <button
            onClick={() => handleAction("whatsapp")}
            aria-label="Chat on WhatsApp"
            className="flex items-center gap-2 px-3.5 py-3.5 sm:px-4 sm:py-3 rounded-full bg-[#00A651] text-white shadow-xl shadow-emerald-600/35 hover:shadow-2xl hover:shadow-emerald-600/50 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
          >
            {/* WhatsApp Authentic SVG */}
            <svg
              className="w-5 h-5 fill-current shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.276-.1-.477-.15-.678.15-.201.301-.778.977-.954 1.178-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.787-1.676-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.586-.494-.506-.678-.515l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.23 3.111c.15.201 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.896.119.579-.087 1.78-.728 2.031-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zm-5.467 7.618h-.008a10.02 10.02 0 0 1-5.118-1.4l-.367-.218-3.804.997 1.016-3.709-.239-.38a10.038 10.038 0 0 1-1.54-5.352c0-5.541 4.509-10.05 10.057-10.05 2.686 0 5.21 1.046 7.11 2.946a10.007 10.007 0 0 1 2.943 7.108c-.004 5.543-4.513 10.058-10.05 10.058zm0-22c-6.627 0-12 5.373-12 12 0 2.116.551 4.103 1.516 5.827l-1.611 5.882 6.028-1.581c1.666.909 3.57 1.42 5.59 1.42h.009c6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
            </svg>
          </button>
        </div>

        {/* Button 2: CALL */}
        <div className="relative group flex items-center">
          {/* Tooltip on desktop hover */}
          <span className="hidden lg:inline-block absolute right-full mr-3 px-3 py-1 rounded-lg text-xs font-bold text-slate-800 bg-white shadow-md border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call Sales & Operations
          </span>

          <button
            onClick={() => handleAction("call")}
            aria-label="Call MR Facility"
            className="flex items-center gap-2 px-3.5 py-3.5 sm:px-4 sm:py-3 rounded-full bg-[#151B6B] text-white shadow-xl shadow-[#151B6B]/35 hover:shadow-2xl hover:shadow-[#151B6B]/50 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#151B6B]/40"
          >
            <Phone className="w-5 h-5 shrink-0" />
          </button>
        </div>
      </aside>
    </>
  );
}
