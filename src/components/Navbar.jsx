"use client";

import { useState, useEffect } from "react";
import { Code2, User, Award, Brain, Users } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Profile", href: "#hero", icon: <User className="w-3.5 h-3.5" /> },
    { name: "Portfolio", href: "#portfolio", icon: <Award className="w-3.5 h-3.5" /> },
    { name: "SWOT", href: "#swot", icon: <Brain className="w-3.5 h-3.5" /> },
    { name: "Mind of Us", href: "#mindofus", icon: <Users className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-2 sm:gap-6 px-4 py-2.5 rounded-full border transition-all duration-300 backdrop-blur-md ${
          scrolled
            ? "bg-neutral-900/90 border-neutral-700/80 shadow-2xl shadow-emerald-500/10"
            : "bg-neutral-900/50 border-neutral-800"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono font-bold text-xs text-emerald-400 pr-2 sm:pr-4 border-r border-neutral-800 hover:opacity-80 transition-opacity"
        >
          <Code2 className="w-4 h-4" />
          <span>ARTHA.DEV</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono text-neutral-400 hover:text-emerald-400 hover:bg-neutral-800/60 transition-all"
            >
              {item.icon}
              <span className="hidden sm:inline">{item.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}