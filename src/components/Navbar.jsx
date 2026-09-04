"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    number: "01",
    name: "Profile",
    href: "#hero",
    id: "hero",
  },
  {
    number: "02",
    name: "Portfolio",
    href: "#portfolio",
    id: "portfolio",
  },
  {
    number: "03",
    name: "SWOT",
    href: "#swot",
    id: "swot",
  },
  {
    number: "04",
    name: "Mind of Us",
    href: "#mindofus",
    id: "mindofus",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 180;

      let currentSection = "hero";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/[0.08] bg-[#090909]/90 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 md:px-8 ${
            scrolled ? "h-[58px]" : "h-[72px]"
          }`}
        >
          {/* =========================
              BRAND
          ========================== */}
          <a
            href="#hero"
            onClick={handleNavigation}
            className="group flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[12px] font-medium tracking-[0.16em] text-neutral-100 transition-colors group-hover:text-white">
                ARTHA
              </span>

            </div>
          </a>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="group relative px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[9px] transition-colors duration-200 ${
                        isActive
                          ? "text-emerald-400"
                          : "text-neutral-600 group-hover:text-neutral-500"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`text-[13px] transition-colors duration-200 ${
                        isActive
                          ? "text-neutral-100"
                          : "text-neutral-400 group-hover:text-neutral-100"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  {/* Active underline */}
                  <span
                    className={`absolute bottom-[6px] left-4 h-px bg-emerald-400 transition-all duration-300 ${
                      isActive
                        ? "w-[18px] opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* =========================
              DESKTOP RIGHT
          ========================== */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="h-4 w-px bg-white/[0.1]" />

            <span className="font-mono text-[10px] tracking-[0.08em] text-neutral-500">
              PKKMB 2026
            </span>
          </div>

          {/* =========================
              MOBILE BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center text-neutral-300 transition-colors hover:text-white md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-[19px] w-[19px]" />
            ) : (
              <Menu className="h-[19px] w-[19px]" />
            )}
          </button>
        </nav>
      </header>

      {/* =============================
          MOBILE MENU
      ============================== */}
      <div
        className={`fixed inset-x-0 top-[58px] z-40 border-b border-white/[0.08] bg-[#090909]/95 px-5 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl py-5">
          <div className="divide-y divide-white/[0.07]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavigation}
                  className="group flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-[10px] ${
                        isActive
                          ? "text-emerald-400"
                          : "text-neutral-600"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`text-[15px] ${
                        isActive
                          ? "text-white"
                          : "text-neutral-400"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  <span
                    className={`text-sm transition-transform duration-200 group-hover:translate-x-1 ${
                      isActive
                        ? "text-emerald-400"
                        : "text-neutral-600"
                    }`}
                  >
                    →
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-5">
            <span className="font-mono text-[10px] text-neutral-500">
              TELKOM UNIVERSITY
            </span>

            <span className="font-mono text-[10px] text-neutral-600">
              2026
            </span>
          </div>
        </div>
      </div>
    </>
  );
}