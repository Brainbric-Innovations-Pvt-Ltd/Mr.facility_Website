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

        {/* Tag */}
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[11px] font-bold text-amber-700 border border-amber-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Desktop Web View Only
          </span>
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

        {/* Portal URL Box with One-Click Copy */}
        <div className="mt-5 p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1.5">
            <span>WEB APPLICATION URL</span>
            <span className="text-[#00A651] font-bold">Secure SSL</span>
          </div>

          <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200">
            <code className="text-xs font-mono font-semibold text-[#151B6B] truncate">
              https://app.mrfacility.in/
            </code>
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#00A651]" />
                  <span className="text-[#00A651]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Open this URL on your PC or Mac browser to log in to your account.
          </p>
        </div>

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
