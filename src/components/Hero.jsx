"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profileData } from "@/data/profileData";
import { GraduationCap, MapPin, Sparkles, Code2 } from "lucide-react";

export default function Hero() {
  const { personal } = profileData;

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center py-20 px-4 md:px-12 overflow-hidden border-b border-neutral-900">
      
      {/* Background Grid Section 1 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />
      {/* Glow Neon Section 1 (Kiri Atas) */}
      <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-emerald-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PKKMB Telkom University 2026</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-100">
              {personal.fullName}
            </h1>
            <p className="text-lg text-emerald-400 font-mono font-medium">
              {personal.studyProgram} — {personal.faculty}
            </p>
          </div>

          <p className="text-sm text-neutral-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {personal.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-neutral-300 pt-2">
            <div className="flex items-center gap-1.5 bg-neutral-900/80 px-3 py-2 rounded-lg border border-neutral-800">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>{personal.origin}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-900/80 px-3 py-2 rounded-lg border border-neutral-800">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>SMK Telkom Makassar</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-900/80 px-3 py-2 rounded-lg border border-neutral-800">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Fullstack Web Dev</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-sm bg-neutral-900/80 border border-neutral-800 p-5 rounded-2xl shadow-2xl backdrop-blur-md">
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 mb-4 group">
              <Image
                src="/profile.jpg"
                alt={personal.fullName}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-xs font-mono">
                <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-emerald-400">
                  {personal.nickname}
                </span>
                <span className="text-neutral-400">Class of 2026</span>
              </div>
            </div>

            <div className="space-y-1 text-center">
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                Student ID Badge
              </p>
              <h2 className="text-sm font-bold text-neutral-200">
                Telkom University Student
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}