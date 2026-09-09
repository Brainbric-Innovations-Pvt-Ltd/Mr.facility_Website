import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151B6B",
};

export const metadata: Metadata = {
  title: "MR Facility | Smart Facility & Workforce Management",
  description:
    "MR Facility is an all-in-one facility management platform for employee management, attendance, payroll, CRM, inventory, site management and task management.",
  keywords: [
    "facility management software",
    "workforce management",
    "facial attendance",
    "geofence attendance",
    "payroll software",
    "facility operations",
    "MR Facility",
    "site management",
    "task management software",
  ],
  authors: [{ name: "MR Facility" }],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#00A651] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
