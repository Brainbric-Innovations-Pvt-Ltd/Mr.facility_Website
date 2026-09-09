"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import EmployeeManagement from "@/components/EmployeeManagement";
import AttendanceManagement from "@/components/AttendanceManagement";
import PayrollManagement from "@/components/PayrollManagement";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Modals from "@/components/Modals";
import SplashScreen from "@/components/SplashScreen";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import SiteManagement from "@/components/SiteManagement";
import Applications from "@/components/Applications";
import DesktopNoticeModal from "@/components/DesktopNoticeModal";
import { isMobileResponsiveView } from "@/components/deviceUtils";

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "login";
  }>({
    isOpen: false,
    type: "demo",
  });

  const [desktopNoticeOpen, setDesktopNoticeOpen] = useState(false);

  const handleOpenDemo = () => {
    setModalState({ isOpen: true, type: "demo" });
  };

  const handleOpenLogin = (e?: React.MouseEvent) => {
    if (isMobileResponsiveView()) {
      if (e) e.preventDefault();
      setDesktopNoticeOpen(true);
      return;
    }
    window.open("https://app.mrfacility.in/", "_blank", "noopener,noreferrer");
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#00A651] selection:text-white">
      {/* Global Smooth Scroll and Loading Reveal Provider */}
      <ScrollRevealProvider />

      {/* Dynamic Animated Splash Screen */}
      <SplashScreen />

      {/* Fixed Navbar */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        onOpenLogin={handleOpenLogin}
        onOpenDesktopNotice={() => setDesktopNoticeOpen(true)}
      />

      {/* Main Continuous Single-Page Product Narrative */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenDemo={handleOpenDemo}
          onOpenLogin={handleOpenLogin}
          onOpenDesktopNotice={() => setDesktopNoticeOpen(true)}
        />

        {/* 2. Solutions / Features Overview */}
        <Solutions onOpenDemo={handleOpenDemo} />

        {/* 3. Dedicated Employee Management Section */}
        <div id="employee-management">
          <EmployeeManagement />
        </div>

        {/* 4. Dedicated Attendance Management Section */}
        <AttendanceManagement />

        {/* 5. Dedicated Payroll Management Section */}
        <PayrollManagement />

        {/* 6. Dedicated Site Management Section */}
        <div id="site-management">
          <SiteManagement />
        </div>

        {/* 7. Dedicated Applications Section */}
        <div id="applications">
          <Applications onOpenDemo={handleOpenDemo} />
        </div>

        {/* 8. Final Enterprise CTA */}
        <CTA onOpenDemo={handleOpenDemo} onOpenLogin={handleOpenLogin} />
      </main>

      {/* 9. Enterprise Footer with Full Logo Visibility */}
      <Footer />

      {/* 10. Fixed Floating Contact Buttons (WhatsApp & CALL) */}
      <FloatingContact />

      {/* Interactive Modals for Login & Request a Demo */}
      <Modals
        isOpen={modalState.isOpen}
        type={modalState.type}
        onClose={handleCloseModal}
      />

      {/* Notice modal when mobile user attempts to login */}
      <DesktopNoticeModal
        isOpen={desktopNoticeOpen}
        onClose={() => setDesktopNoticeOpen(false)}
        onOpenDemo={() => {
          setDesktopNoticeOpen(false);
          handleOpenDemo();
        }}
      />
    </div>
  );
}
