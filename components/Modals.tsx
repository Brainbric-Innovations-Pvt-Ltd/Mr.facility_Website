"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  Shield,
  Lock,
  Building2,
  User,
  Mail,
  Phone,
  ArrowRight,
  Loader2,
  AlertCircle,
} from "lucide-react";
import Logo from "./Logo";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "demo" | "login";
}

export default function Modals({ isOpen, onClose, type }: ModalProps) {
  // Demo form state
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [emailStatusMessage, setEmailStatusMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sitesCount: "1 - 5 Sites",
    workforceSize: "50 - 250 Employees",
  });

  // Login tab state
  const [loginRole, setLoginRole] = useState<"employee" | "client">("employee");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/send-demo-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit demo request.");
      }

      setEmailStatusMessage(data.message || `Confirmation email sent to ${formData.email}`);
      setDemoSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 border-b border-slate-100 bg-slate-50/70 shrink-0">
          <Logo showTagline={false} />
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {type === "demo" ? (
            demoSubmitted ? (
              <div className="py-6 sm:py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A651] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[11px] font-bold text-[#00A651] border border-emerald-200 mb-2">
                  <Mail className="w-3.5 h-3.5" />
                  Confirmation Email Dispatched
                </span>

                <h3 className="text-2xl font-bold text-[#151B6B]">
                  Demo Request Confirmed!
                </h3>
                
                <p className="mt-2 text-slate-600 max-w-md text-sm leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name || "there"}</span>. We've sent a complete confirmation and briefing email to:
                </p>

                {/* Email Address Highlight Card */}
                <div className="mt-3 w-full p-3 sm:p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-center flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-[#151B6B] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#151B6B] break-all">
                    {formData.email}
                  </span>
                </div>

                <p className="mt-2 text-[11px] text-slate-500">
                  Please check your inbox (and spam/promotions folder) for your full request summary.
                </p>

                {/* Summary Table */}
                <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left w-full space-y-2">
                  <div className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span className="text-slate-400">Organization:</span>
                    <span className="font-bold text-slate-800">{formData.company}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-1.5">
                    <span className="text-slate-400">Deployment Scope:</span>
                    <span className="font-semibold text-slate-800">{formData.sitesCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Workforce Size:</span>
                    <span className="font-semibold text-slate-800">{formData.workforceSize}</span>
                  </div>
                </div>

                <div className="mt-5 p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-slate-600 text-left w-full space-y-1.5">
                  <p className="font-bold text-[#00A651]">What happens next:</p>
                  <p>✓ Solutions specialist connects within 24 hours to schedule</p>
                  <p>✓ Live interactive walkthrough of facial recognition & geofencing</p>
                  <p>✓ Customized payroll integration & pilot scoping</p>
                </div>

                <button
                  onClick={onClose}
                  className="mt-6 w-full py-3 rounded-xl bg-[#151B6B] text-white font-semibold hover:bg-[#1e268a] transition-all text-sm shadow-md shadow-[#151B6B]/20 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="inline-block px-2.5 py-1 text-xs font-semibold text-[#00A651] bg-emerald-50 rounded-full border border-emerald-200 mb-2">
                    Personalized Platform Walkthrough
                  </span>
                  <h3 className="text-2xl font-bold text-[#151B6B]">
                    Request an Enterprise Demo
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Discover how MR Facility streamlines attendance, payroll, sites, and tasks.
                  </p>
                </div>

                {submitError && (
                  <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{submitError}</span>
                  </div>
                )}

                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#151B6B] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#151B6B] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#151B6B] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Facility Services"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#151B6B] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Deployment Sites
                      </label>
                      <select
                        value={formData.sitesCount}
                        onChange={(e) => setFormData({ ...formData, sitesCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#151B6B] focus:border-transparent bg-white"
                      >
                        <option>1 - 5 Sites</option>
                        <option>6 - 20 Sites</option>
                        <option>21 - 50 Sites</option>
                        <option>50+ Enterprise Sites</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Total Workforce Size
                      </label>
                      <select
                        value={formData.workforceSize}
                        onChange={(e) => setFormData({ ...formData, workforceSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#151B6B] focus:border-transparent bg-white"
                      >
                        <option>Under 50</option>
                        <option>50 - 250 Employees</option>
                        <option>251 - 1,000 Employees</option>
                        <option>1,000+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400">
                    By submitting, a confirmation email will be sent to your work email under MR Facility Privacy Policy.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#00A651] text-white font-semibold text-sm hover:bg-[#008f45] disabled:opacity-75 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Confirmation Email...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm & Schedule Demo</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )
          ) : (
            /* Login Form */
            <div>
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-[#151B6B]">
                  Access MR Facility
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Select your dedicated portal to sign in securely.
                </p>

                {/* Portal Switcher */}
                <div className="mt-4 flex p-1 bg-slate-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setLoginRole("employee")}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      loginRole === "employee"
                        ? "bg-white text-[#151B6B] shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    Employee Portal
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoginRole("client")}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      loginRole === "client"
                        ? "bg-white text-[#151B6B] shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    Client Portal
                  </button>
                </div>
              </div>

              {loginSuccess ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#00A651] mx-auto flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">
                    Authenticating Session...
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Redirecting to your {loginRole === "employee" ? "Employee" : "Client"} Dashboard
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {loginRole === "employee" ? "Work Email / Employee ID" : "Client Account Email"}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder={loginRole === "employee" ? "emp-10492@company.com" : "client.admin@apex.com"}
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#151B6B] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-semibold text-slate-700">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => alert("Password reset link has been sent to your registered account.")}
                        className="text-xs text-[#00A651] hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••••••"
                        value={loginPass}
                        onChange={(e) => setLoginPass(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#151B6B] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-slate-300 text-[#151B6B] focus:ring-[#151B6B]" />
                      Remember this workstation
                    </label>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Shield className="w-3.5 h-3.5 text-[#00A651]" /> 256-Bit SSL
                    </span>
                  </div>

                  {/* Demo fill quick trigger */}
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-dashed border-slate-300 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Need demo access?</span>
                    <button
                      type="button"
                      onClick={() => {
                        setLoginEmail(loginRole === "employee" ? "demo.supervisor@mrfacility.com" : "demo.client@corporation.com");
                        setLoginPass("MRFacilityDemo2026!");
                      }}
                      className="text-[#151B6B] font-semibold hover:underline"
                    >
                      Fill Demo Credentials
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#151B6B] text-white font-semibold text-sm hover:bg-[#1e268a] shadow-lg shadow-[#151B6B]/20 transition-all flex items-center justify-center gap-2"
                  >
                    Sign In to {loginRole === "employee" ? "Employee Portal" : "Client Portal"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
