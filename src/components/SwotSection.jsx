"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profileData";
import { ShieldCheck, Zap, Target, AlertTriangle } from "lucide-react";

export default function SwotSection() {
  const { swot } = profileData;

  const items = [
    {
      title: "Strength (Kekuatan)",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      data: swot.strengths,
      border: "hover:border-amber-500/40",
    },
    {
      title: "Weakness (Kelemahan)",
      icon: <AlertTriangle className="w-5 h-5 text-rose-400" />,
      data: swot.weaknesses,
      border: "hover:border-rose-500/40",
    },
    {
      title: "Opportunity (Peluang)",
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      data: swot.opportunities,
      border: "hover:border-cyan-500/40",
    },
    {
      title: "Threat (Tantangan)",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      data: swot.threats,
      border: "hover:border-purple-500/40",
    },
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-20 px-4 md:px-12 border-b border-neutral-900 overflow-hidden">
      {/* Background Grid Section 3 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />
      {/* Glow Neon Section 3 (Kiri Bawah) */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[450px] h-[450px] bg-teal-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        <div className="text-center space-y-2">
          <p className="text-xs font-mono text-emerald-400 tracking-wider uppercase">
            Personal Analysis
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Analisis Diri (SWOT)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm ${item.border}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-100">
                  {item.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {item.data.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
