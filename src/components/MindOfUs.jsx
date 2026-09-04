"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profileData";

const memberFields = [
  { key: "origin", label: "Asal" },
  { key: "prodi", label: "Program Studi" },
  { key: "faculty", label: "Fakultas" },
  { key: "hobby", label: "Hobi" },
  { key: "funFact", label: "Fun Fact" },
];

export default function MindOfUs() {
  const { members } = profileData.mindOfUs;

  return (
    <section
      id="mindofus"
      className="relative bg-[#090909] px-5 py-24 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-16 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end"
        >
          <div>
            <p className="eyebrow">04 / Mind of Us</p>

            <h2 className="mt-5 max-w-2xl text-4xl font-medium tracking-[-0.04em] text-neutral-100 sm:text-5xl md:text-6xl">
              Five people,
              <span className="block text-neutral-500">different stories.</span>
            </h2>
          </div>

          <p className="max-w-md text-[14px] leading-7 text-neutral-400 md:justify-self-end">
            Lima individu dengan latar belakang, minat, dan cerita yang berbeda, dipertemukan dalam satu kelompok selama perjalanan PKKMB Telkom University.
          </p>
        </motion.div>

        {/* DIRECTORY INFO */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex items-center justify-between border-y border-white/[0.09] py-4"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
            Group Members
          </p>

          <p className="font-mono text-[10px] text-neutral-500">
            {String(members.length).padStart(2, "0")} PEOPLE
          </p>
        </motion.div>

        {/* MEMBERS */}
        <div>
          {members.map((member, index) => (
            <motion.article
              key={`${member.name}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
              className="group border-b border-white/[0.09]"
            >
              <div className="grid gap-8 py-10 md:grid-cols-[80px_0.8fr_1.2fr] md:gap-10 md:py-12">
                {/* NUMBER */}
                <div>
                  <span className="font-mono text-[11px] text-neutral-600 transition-colors duration-300 group-hover:text-emerald-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* IDENTITY */}
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-600">
                    Nama Lengkap
                  </p>

                  <h3 className="mt-3 max-w-xs text-xl font-medium leading-7 tracking-[-0.02em] text-neutral-100 sm:text-2xl">
                    {member.name}
                  </h3>

                  <p className="mt-4 max-w-xs text-[13px] leading-6 text-neutral-500">
                    {member.origin}
                  </p>
                </div>

                {/* INFORMATION */}
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                  {memberFields
                    .filter((field) => field.key !== "origin")
                    .map((field) => (
                      <div key={field.key}>
                        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-600">
                          {field.label}
                        </p>

                        <p className="mt-2 text-[14px] leading-6 text-neutral-300">
                          {member[field.key]}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* HOVER LINE */}
              <div className="h-px w-0 bg-emerald-400 transition-all duration-500 group-hover:w-12" />
            </motion.article>
          ))}
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-16 grid gap-6 border-t border-white/[0.09] pt-6 sm:grid-cols-2 sm:items-end"
        >
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-600">
              PKKMB 2026
            </p>

            <p className="mt-2 text-sm text-neutral-400">Telkom University</p>
          </div>

          <p className="text-sm leading-6 text-neutral-500 sm:text-right">
            Gorwing today
            <br />
            Thriving tomorrow
          </p>
        </motion.div>
      </div>
    </section>
  );
}
