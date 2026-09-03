"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, UserCheck } from "lucide-react";

const teamMembers = [
  {
    name: "Arthawan Pratama P. A.",
    role: "Developer & Lead",
    notes: "Fokus di Web Dev & System Architecture",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/40",
  },
  {
    name: "Teman Kelompok 1",
    role: "Member",
    notes: "Inisiatif tinggi & aktif berdiskusi",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/40",
  },
  {
    name: "Teman Kelompok 2",
    role: "Member",
    notes: "Solutif & eksekusi tugas cepat",
    color: "from-purple-500/20 to-indigo-500/20",
    border: "border-purple-500/40",
  },
  {
    name: "Teman Kelompok 3",
    role: "Member",
    notes: "Kreatif & komunikatif",
    color: "from-amber-500/20 to-rose-500/20",
    border: "border-amber-500/40",
  },
];

export default function MindOfUs() {
  return (
    <section className="relative w-full py-20 px-4 md:px-12 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Background Grid Section 4 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />
      {/* Glow Neon Section 4 (Kanan Bawah) */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono">
            <Users className="w-3.5 h-3.5" />
            <span>Mind of Us — Kelompok PKKMB</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Dinamika & Kolaborasi Tim
          </h2>
          <p className="text-sm text-neutral-400 max-w-lg mx-auto">
            Pemetaan singkat peran dan karakter anggota kelompok PKKMB Telkom University 2026.
          </p>
        </div>

        {/* Grid Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${member.color} border ${member.border} backdrop-blur-md relative overflow-hidden flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <UserCheck className="w-5 h-5 text-neutral-300" />
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/10 text-neutral-300">
                    {member.role}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-100">{member.name}</h3>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                    {member.notes}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>PKKMB 2026</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}