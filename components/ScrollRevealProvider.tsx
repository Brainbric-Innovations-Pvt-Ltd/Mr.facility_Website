"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider() {
  useEffect(() => {
    // If browser doesn't support IntersectionObserver, reveal everything immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      document
        .querySelectorAll(".reveal-section, .reveal-card, section")
        .forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Function to register elements
    const registerElements = () => {
      // 1. Observe all marked sections and cards
      const targets = document.querySelectorAll(
        ".reveal-section:not(.is-revealed), .reveal-card:not(.is-revealed)"
      );
      targets.forEach((el) => observer.observe(el));

      // 2. Automatically observe any section if not already observing
      const sections = document.querySelectorAll("section:not(.is-revealed)");
      sections.forEach((sec) => {
        sec.classList.add("reveal-section");
        observer.observe(sec);
      });
    };

    // Initial registration
    registerElements();

    // Re-check after splash screen exit (around 1.5s - 1.8s)
    const timer1 = setTimeout(registerElements, 400);
    const timer2 = setTimeout(registerElements, 1500);

    // Fail-safe: ensure all elements become visible after 3s
    const fallbackTimer = setTimeout(() => {
      document
        .querySelectorAll(".reveal-section, .reveal-card, section")
        .forEach((el) => el.classList.add("is-revealed"));
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return null;
}
