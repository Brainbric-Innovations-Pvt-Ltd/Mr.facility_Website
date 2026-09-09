import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import img1 from "@/Assets/Logo-clean.png";
import img2 from "@/Assets/Font-clean.png";
import { ArrowLeft, FileText, CheckCircle2, AlertCircle, Scale, ShieldCheck, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | MR Facility - TOT Hygiene Private Limited",
  description: "Enterprise service terms and conditions for MR Facility platform operated by TOT Hygiene Private Limited.",
};

export default function TermsAndConditionsPage() {
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
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#151B6B] mb-3">
          <Scale className="w-4 h-4" />
          <span>SaaS Service Agreement</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#151B6B] tracking-tight">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last Updated: September 2026 • Governing Terms for MR Facility Enterprise Platform
        </p>

        {/* Corporate Operator Notice */}
        <div className="mt-6 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <p className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
            Enterprise Agreement Notice
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            These Terms &amp; Conditions constitute a legally binding agreement between your organization (&quot;Client&quot;, &quot;you&quot;, or &quot;Subscriber&quot;) and <strong>TOT Hygiene Private Limited</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;MR Facility&quot;) regarding your deployment and use of the MR Facility SaaS platform.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="mt-10 space-y-10 text-sm leading-relaxed text-slate-600">

          {/* 1. Acceptance */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">1</span>
              Acceptance of Terms
            </h2>
            <p>
              By accessing, deploying, subscribing to, or registering accounts on the MR Facility web console, supervisor dashboard, employee mobile applications, or biometric attendance hardware interfaces, you acknowledge that you have read, understood, and agreed to be bound by these Terms &amp; Conditions. If you are accepting on behalf of a company or entity, you represent that you possess the full legal authority to bind that entity.
            </p>
          </section>

          {/* 2. Platform Services */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">2</span>
              Scope of Services
            </h2>
            <p>
              MR Facility delivers integrated facility management software modules including, but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Centralized employee records for white-collar management and blue-collar frontline workers.</li>
              <li>Facial recognition identity verification and GPS geofence-bound attendance recording.</li>
              <li>Automated payroll calculation syncing verified shifts, overtime, and leaves.</li>
              <li>Multi-site command hub, facility zone allocations, and supervisor workflows.</li>
              <li>Operational task management, SLA inspection checklists, and proof-of-work photo validation.</li>
            </ul>
          </section>

          {/* 3. Account Responsibilities */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">3</span>
              Client Responsibilities &amp; Labor Compliance
            </h2>
            <p>
              Client organizations are solely responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Personnel Consents:</strong> Ensuring that all employees, contractors, and frontline staff have provided necessary informed consent for facial biometric verification and location-based check-in under applicable national and local labor regulations.
              </li>
              <li>
                <strong>Credential Security:</strong> Maintaining the strict confidentiality of super admin, supervisor, and portal login credentials.
              </li>
              <li>
                <strong>Lawful Utilization:</strong> Ensuring that the platform is deployed strictly for lawful operational oversight and not for unlawful surveillance or harassment.
              </li>
            </ul>
          </section>

          {/* 4. Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">4</span>
              Intellectual Property Rights
            </h2>
            <p>
              The MR Facility software, UI design systems, source code, underlying algorithms, logos, and documentation are the exclusive intellectual property of <strong>TOT Hygiene Private Limited</strong> and its technology licensors. Clients receive a revocable, non-exclusive, non-transferable enterprise license solely for internal facility operations during the term of subscription.
            </p>
            <p>
              Client retains all exclusive right, title, and interest in and to all proprietary customer data uploaded or generated within their dedicated account database.
            </p>
          </section>

          {/* 5. Service Availability & SLA */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">5</span>
              Availability, Maintenance &amp; Uptime
            </h2>
            <p>
              We strive to deliver 99.5% platform availability across our core services. Scheduled maintenance will be announced in advance through platform announcements. We are not liable for transient network disruptions caused by telecommunication outages, client hardware malfunctions, or third-party cloud infrastructure failures beyond our reasonable control.
            </p>
          </section>

          {/* 6. Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">6</span>
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, TOT Hygiene Private Limited and its affiliates shall not be liable for indirect, incidental, punitive, or consequential damages resulting from operational interruptions, loss of business records, or payroll miscalculations arising from inaccurate manual inputs provided by the client organization. Our total aggregate liability under this agreement shall not exceed the subscription fees paid by the client in the three (3) months preceding the claim.
            </p>
          </section>

          {/* 7. Governing Law */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">7</span>
              Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of India. Any legal dispute, arbitration, or proceeding arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>

          {/* 8. Contact Information */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-lg bg-[#151B6B]/10 text-[#151B6B] text-xs font-bold items-center justify-center">8</span>
              Contact Operations
            </h2>
            <p>
              For legal notices, enterprise service agreements, or questions regarding these terms, please contact:
            </p>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs text-slate-600">
              <p className="font-bold text-slate-900 text-sm">TOT Hygiene Private Limited</p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00A651]" />
                <span>contact@mrfacility.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00A651]" />
                <span>Enterprise Governance &amp; Legal Division, India</span>
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
