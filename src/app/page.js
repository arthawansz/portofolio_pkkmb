import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import SwotSection from "@/components/SwotSection";
import MindOfUs from "@/components/MindOfUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <Hero />
      <PortfolioShowcase />
      <SwotSection />
      <MindOfUs />
    </main>
  );
}