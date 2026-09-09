import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import img1 from "@/Assets/Logo-clean.png";
import img2 from "@/Assets/Font-clean.png";
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | MR Facility - TOT Hygiene Private Limited",
  description: "Learn how MR Facility and TOT Hygiene Private Limited collect, process, and protect your enterprise facility data, biometric templates, and location coordinates.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={img1}
              alt="MR Facility Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
            <Image
              src={img2}
              alt="MR Facility"
              className="h-3 sm:h-3.5 w-auto object-contain"
              priority
            />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-14 w-full">
        {/* Document Meta Badge */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A651] mb-3">
          <Shield className="w-4 h-4" />
          <span>Enterprise Data Protection</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#151B6B] tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last Updated: September 2026 • Effective for all users of MR Facility
        </p>

        {/* Corporate Summary Box */}
        <div className="mt-6 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <p className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
            Corporate Operator Notice
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            This Privacy Policy governs the manner in which <strong>TOT Hygiene Private Limited</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, maintains, and discloses information collected from users and client organizations utilizing the <strong>MR Facility</strong> management software ecosystem (including web consoles, mobile applications, and biometric attendance endpoints).
          </p>
        </div>

        {/* Policy Sections */}
        <div className="mt-10 space-y-10 text-sm leading-relaxed text-slate-600">

          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">1</span>
              Introduction & Scope
            </h2>
            <p>
              MR Facility is designed for workforce governance, facility site operations, biometric attendance validation, and automated payroll calculations. We recognize the sensitive nature of employee identity data and operational information. We are committed to upholding strict standards of confidentiality, transparency, and data privacy in accordance with applicable data protection legislation.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">2</span>
              Information We Collect
            </h2>
            <p>
              To deliver our workforce and facility management services, we may collect and process the following categories of data:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Organization & Administrator Details:</strong> Business name, registered address, authorized representative contact details, billing contacts, and site operational hierarchies.
              </li>
              <li>
                <strong>Employee & Personnel Data:</strong> Full legal name, employee identification numbers, department, role tier (white-collar, blue-collar), shift schedules, contact telephone numbers, and work email addresses.
              </li>
              <li>
                <strong>Facial Verification Templates:</strong> Mathematical biometric vector templates generated during enrollment for identity verification. We do not store raw unencrypted video streams.
              </li>
              <li>
                <strong>Location & Geofence Coordinates:</strong> Precise GPS coordinates captured exclusively at the moment of attendance check-in/check-out to verify on-site presence against assigned facility geofences. Continuous background tracking is strictly disabled unless explicitly required by an active high-security patrol task.
              </li>
              <li>
                <strong>Operational Logs:</strong> Task completion timestamps, service audit checklists, supervisor digital approvals, and payroll calculation records.
              </li>
            </ul>
          </section>

          {/* 3. Purpose of Processing */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">3</span>
              How We Use Your Data
            </h2>
            <p>
              All processed data is utilized strictly for authorized enterprise facility operations, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00A651] mb-1.5" />
                <h4 className="text-xs font-bold text-slate-900">Attendance Verification</h4>
                <p className="text-xs text-slate-500 mt-1">Preventing proxy clock-ins via facial recognition and location geofencing.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00A651] mb-1.5" />
                <h4 className="text-xs font-bold text-slate-900">Automated Payroll Calculations</h4>
                <p className="text-xs text-slate-500 mt-1">Converting verified shifts, overtime, and approved leaves into salary records.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00A651] mb-1.5" />
                <h4 className="text-xs font-bold text-slate-900">Multisite Facility Security</h4>
                <p className="text-xs text-slate-500 mt-1">Ensuring verified personnel deployment and monitored facility perimeters.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00A651] mb-1.5" />
                <h4 className="text-xs font-bold text-slate-900">SLA & Task Audit Trails</h4>
                <p className="text-xs text-slate-500 mt-1">Providing immutable digital evidence of completed facility maintenance checklists.</p>
              </div>
            </div>
          </section>

          {/* 4. Security & Biometrics */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">4</span>
              Biometric & Security Safeguards
            </h2>
            <p>
              We apply state-of-the-art technical, physical, and administrative measures to safeguard client data:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Encryption at Rest & Transit:</strong> All databases, biometric vector models, and client documents are encrypted using AES-256 encryption at rest and TLS 1.3 encryption in transit.
              </li>
              <li>
                <strong>Zero Selling of Data:</strong> We never sell, rent, monetize, or broker personal, biometric, or location data to third-party advertisers or data brokers under any circumstance.
              </li>
              <li>
                <strong>Strict Role-Based Access (RBAC):</strong> Access to personnel data is partitioned by organization role permissions. Super admin, supervisor, and client portal privileges are strictly logged with audit trails.
              </li>
            </ul>
          </section>

          {/* 5. Data Retention */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">5</span>
              Data Retention & Deletion
            </h2>
            <p>
              We retain enterprise data only for the duration of the active SaaS enterprise agreement. Upon termination of service or upon written request from the client organization&apos;s authorized administrator, all operational databases and biometric templates will be permanently expunged or provided in a standard portable archive in accordance with contract terms.
            </p>
          </section>

          {/* 6. Contact Details */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">6</span>
              Contact & Grievance Redressal
            </h2>
            <p>
              For inquiries regarding this Privacy Policy, data subject rights, or security compliance, please contact our dedicated data protection officer:
            </p>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs text-slate-600">
              <p className="font-bold text-slate-900 text-sm">TOT Hygiene Private Limited</p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00A651]" />
                <span>contact@mrfacility.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00A651]" />
                <span>Enterprise Facility Governance Division, India</span>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer Bar */}
      <footer className="w-full bg-[#151B6B] py-4 px-4 text-center text-xs text-white/70 border-t border-slate-800">
        <p>© 2026 TOT Hygiene Private Limited. All rights reserved. • MR Facility Platform</p>
      </footer>
    </div>
  );
}
