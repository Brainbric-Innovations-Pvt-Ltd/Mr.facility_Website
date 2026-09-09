"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../Assets/Logo-clean.png";
import img2 from "../Assets/Font-clean.png";
import { Mail, MapPin, Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-slate-50 text-slate-600 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 sm:gap-8 lg:gap-8 pb-10 border-b border-slate-200">
          {/* Brand Column (full width on mobile & tablet, 2 cols on desktop) */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-4">
            {/* Logo + Text Brand Mark */}
            <a
              href="#home"
              className="flex items-center gap-3 group transition-transform hover:scale-[1.02]"
              aria-label="MR Facility Home"
            >
              <Image
                src={img1}
                alt="MR Facility Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <Image
                src={img2}
                alt="MR Facility"
                className="h-3 sm:h-4 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
            </a>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              A smarter facility management platform connecting people, operations,
              and client relationships in one unified ecosystem.
            </p>

            {/* <div className="pt-1 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00A651] shrink-0" />
                <span>Enterprise Facility Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00A651] shrink-0" />
                <span>contact@mrfacility.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00A651] shrink-0" />
                <span>Enterprise Security & Data Protection</span>
              </div>
            </div> */}
          </div>

          {/* Column 2: Solutions */}
          <div className="col-span-1 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li>
                <a
                  href="#employee-management"
                  className="hover:text-secondary transition-colors"
                >
                  Employee Management
                </a>
              </li>
              <li>
                <a
                  href="#attendance-management"
                  className="hover:text-secondary transition-colors"
                >
                  Attendance Management
                </a>
              </li>
              <li>
                <a
                  href="#payroll-management"
                  className="hover:text-secondary transition-colors"
                >
                  Payroll Processing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform Features */}
          <div className="col-span-1 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li>
                <a
                  href="#attendance-management"
                  className="hover:text-secondary transition-colors"
                >
                  Facial Recognition
                </a>
              </li>
              <li>
                <a
                  href="#attendance-management"
                  className="hover:text-secondary transition-colors"
                >
                  GPS Geofencing
                </a>
              </li>
              <li>
                <a
                  href="#employee-management"
                  className="hover:text-secondary transition-colors"
                >
                  White & Blue Collar
                </a>
              </li>
              <li>
                <a
                  href="#payroll-management"
                  className="hover:text-secondary transition-colors"
                >
                  Automated Salary Sync
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company (Spans 2 cols on mobile with clean 2x2 grid) */}
          {/* <div className="col-span-2 sm:col-span-1 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 text-xs text-slate-500">
              <li>
                <a
                  href="#home"
                  className="hover:text-secondary transition-colors"
                >
                  About MR Facility
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-secondary transition-colors"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#cta"
                  className="hover:text-secondary transition-colors"
                >
                  Request a Demo
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-secondary transition-colors"
                >
                  Contact Operations
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6">
          {/* Main Footer Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p className="text-center sm:text-left">© 2026 TOT Hygiene Private Limited. All rights reserved.</p>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="hover:text-secondary transition-colors"
              >
                Terms & Conditions
              </Link>

              {/* <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-secondary hover:border-secondary transition-all flex items-center gap-1 shadow-2xs cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Bottom Bar Across Entire Screen */}
      <div className="w-full bg-primary py-3.5 pb-6 sm:pb-3.5 px-4 flex justify-center items-center">
        <p className="text-[11px] sm:text-xs text-white/70 text-center leading-relaxed">
          Designed, Developed & Maintained by{" "}
          <a
            href="https://www.brainbric.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block whitespace-nowrap font-semibold text-white hover:text-secondary transition-colors"
          >
            Brainbric Innovations Private Limited.
          </a>
        </p>
      </div>
    </footer>
  );
}
