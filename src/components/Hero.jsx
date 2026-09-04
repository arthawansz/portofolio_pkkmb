"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profileData } from "@/data/profileData";

export default function Hero() {
  const { personal } = profileData;

  const facultyText = personal.faculty;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/[0.07] bg-[#090909] px-5 pb-32 pt-28 text-white md:px-8"
    >
      {/* Background grid */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-70" />

      {/* Ambient spotlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-36 top-[14%] h-[480px] w-[480px] rounded-full bg-emerald-400/[0.035] blur-[135px]" />
        <div className="absolute right-[-80px] top-[18%] h-[430px] w-[430px] rounded-full bg-white/[0.018] blur-[145px]" />
        <div className="absolute left-1/2 -top-30 h-[360px] w-[720px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.03),transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#090909] to-transparent" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-7 bg-emerald-400" />
            <p className="eyebrow">Telkom University · PKKMB 2026</p>
          </div>

          {/* Name */}
          <h1 className="max-w-4xl text-[44px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-[70px]">
            Arthawan Pratama
            <span className="block text-neutral-500">Pakurimba Azzuhud</span>
          </h1>

          {/* Faculty typewriter */}
          <div className="mt-5 flex min-h-8 items-center font-mono text-[16px] font-semibold tracking-[-0.01em] text-emerald-400 sm:text-[18px] lg:text-[20px]">
            <span className="mr-2 text-emerald-400/60">&gt;</span>

            <div className="flex items-center">
              <motion.span
                animate={{
                  width: ["0ch", `${facultyText.length}ch`, `${facultyText.length}ch`, "0ch"],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.42, 0.72, 1],
                  repeatDelay: 0.4,
                }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                {facultyText}
              </motion.span>

              <motion.span
                animate={{ opacity: [1, 1, 0, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.45, 0.5, 0.95, 1],
                }}
                className="ml-[3px] inline-block h-[1.15em] w-[2px] bg-emerald-400"
              />
            </div>
          </div>

          {/* Bio */}
          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-neutral-300 sm:text-base sm:leading-8">
            {personal.bio}
          </p>

          {/* Personal Data */}
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-x-10 gap-y-7 border-t border-white/[0.09] pt-6 sm:grid-cols-3">
            <div>
              <p className="data-label">Program Studi</p>
              <p className="data-value">{personal.studyProgram}</p>
            </div>

            <div>
              <p className="data-label">Asal</p>
              <p className="data-value">{personal.origin}</p>
            </div>

            <div>
              <p className="data-label">Fokus</p>
              <p className="data-value">Software Development</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="flex justify-center lg:col-span-5 lg:justify-end"
        >
          <div className="w-full max-w-[360px]">
            {/* Profile Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-neutral-900">
              <Image
                src="/profile.jpg"
                alt={personal.fullName}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 360px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/[0.04]" />
            </div>

            {/* Image Metadata */}
            <div className="mt-4 flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-medium text-neutral-200">
                  {personal.nickname}
                </p>

                <p className="mt-1 text-xs text-neutral-500">
                  {personal.university}
                </p>
              </div>

              <p className="text-right font-mono text-[11px] text-neutral-500">
                Bandung
                <br />
                2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#portfolio"
        aria-label="Scroll to portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="group absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center md:flex lg:bottom-4"
      >
        {/* Mouse */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-9 w-[22px] justify-center rounded-full border border-neutral-600 transition-colors duration-300 group-hover:border-neutral-400"
        >
          <motion.span
            animate={{ y: [6, 13, 6], opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 h-1.5 w-[2px] rounded-full bg-emerald-400"
          />
        </motion.div>

        {/* Bottom line */}
        <motion.div
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.25, 0.7, 0.25] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mt-3 h-5 w-px origin-top bg-gradient-to-b from-neutral-600 to-transparent"
        />
      </motion.a>
    </section>
  );
}
