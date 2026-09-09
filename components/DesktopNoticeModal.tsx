"use client";

import React, { useState } from "react";
import { Monitor, X, Copy, Check, ShieldAlert, ArrowRight, Laptop } from "lucide-react";

interface DesktopNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo?: () => void;
}

export default function DesktopNoticeModal({
  isOpen,
  onClose,
  onOpenDemo,
}: DesktopNoticeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText("https://app.mrfacility.in/");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="desktop-notice-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col p-6 sm:p-7 text-center transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Bar */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#151B6B] via-[#00A651] to-[#151B6B]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Visual Icon Badge */}
        <div className="mx-auto mt-2 relative">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100/90 flex items-center justify-center text-[#151B6B] shadow-sm">
            <Monitor className="w-8 h-8 text-[#151B6B]" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#151B6B] border-2 border-white flex items-center justify-center text-white shadow-xs">
            <Laptop className="w-3 h-3 text-[#00A651]" />
          </div>
        </div>

        {/* Title */}
        <h3
          id="desktop-notice-title"
          className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-3 tracking-tight"
        >
          Web View Required
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed px-1">
          The MR Facility enterprise management portal is designed and optimized exclusively for desktop and laptop browsers. Login is restricted on mobile devices to preserve advanced dashboard, geofence mapping, and payroll workflows.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#151B6B] hover:bg-[#101550] text-white font-semibold text-sm transition-all shadow-md shadow-[#151B6B]/20 cursor-pointer"
          >
            Understood
          </button>

          {onOpenDemo && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenDemo();
              }}
              className="w-full py-2.5 text-xs font-semibold text-slate-600 hover:text-[#00A651] transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Need an overview? Request a Live Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
