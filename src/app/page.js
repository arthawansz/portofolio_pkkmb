import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import SwotSection from "@/components/SwotSection";
import MindOfUs from "@/components/MindOfUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative">
      <Navbar />

      <div id="hero">
        <Hero />
      </div>

      <div id="portfolio">
        <PortfolioShowcase />
      </div>

      <div id="swot">
        <SwotSection />
      </div>

      <div id="mindofus">
        <MindOfUs />
      </div>

      <footer className="w-full py-8 border-t border-neutral-900 bg-[#0a0a0a] text-center text-xs font-mono text-neutral-500 relative z-10">
        <p>© 2026 Arthawan Pratama P. A. — Telkom University PKKMB Portfolio</p>
      </footer>
    </main>
  );
}