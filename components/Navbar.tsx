"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import img1 from "../Assets/Logo-clean.png";
import img2 from "../Assets/Font-clean.png";
import { isMobileResponsiveView } from "./deviceUtils";

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenLogin?: (e?: React.MouseEvent) => void;
  onOpenDesktopNotice?: () => void;
}

export default function Navbar({ onOpenDemo, onOpenLogin, onOpenDesktopNotice }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const sections = ["home", "solutions", "features", "applications", "future", "contact"];
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const navLinks = [
  //   { label: "Home", href: "#home", id: "home" },
  //   { label: "Solutions", href: "#solutions", id: "solutions" },
  //   { label: "Features", href: "#features", id: "features" },
  //   { label: "Applications", href: "#applications", id: "applications" },
  //   { label: "Future Updates", href: "#future", id: "future" },
  //   { label: "Contact", href: "#contact", id: "contact" },
  // ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
        : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
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

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <a
              href="https://app.mrfacility.in/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (isMobileResponsiveView()) {
                  e.preventDefault();
                  onOpenDesktopNotice?.();
                }
              }}
              className="px-3 sm:px-4 py-2 rounded-xl border border-secondary bg-white text-secondary hover:bg-secondary hover:text-white font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer min-h-[38px] flex items-center justify-center shrink-0"
            >
              Login
            </a>
            <button
              onClick={onOpenDemo}
              className="px-3 sm:px-4 py-2 rounded-xl bg-secondary text-white hover:bg-[#008742] font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 shadow-xs cursor-pointer group min-h-[38px] justify-center shrink-0"
            >
              <span>Schedule Demo</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
