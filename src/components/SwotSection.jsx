"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profileData";

export default function SwotSection() {
  const { swot } = profileData;

  const items = [
    {
      label: "S",
      title: "Strength",
      subtitle: "Kekuatan",
      data: swot.strengths,
    },
    {
      label: "W",
      title: "Weakness",
      subtitle: "Kelemahan",
      data: swot.weaknesses,
    },
    {
      label: "O",
      title: "Opportunity",
      subtitle: "Peluang",
      data: swot.opportunities,
    },
    {
      label: "T",
      title: "Threat",
      subtitle: "Tantangan",
      data: swot.threats,
    },
  ];

  return (
    <section
      id="swot"
      className="border-b border-white/[0.07] bg-[#090909] px-5 py-24 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow">
              Personal Analysis
            </p>

            <h2 className="section-title mt-5">
              Understanding
              <span className="block text-neutral-500">
                where I stand.
              </span>
            </h2>
          </div>

          <p className="section-description md:justify-self-end">
            Evaluasi terhadap kekuatan, kelemahan, peluang, serta
            tantangan yang menjadi bagian dari proses pengembangan diri
            saya.
          </p>
        </div>

        {/* SWOT */}
        <div className="border-t border-white/[0.09]">
          {items.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.35,
              }}
              className="grid gap-8 border-b border-white/[0.09] py-10 md:grid-cols-[100px_240px_1fr]"
            >
              {/* INDEX */}
              <div className="flex items-start gap-3">
                <span className="font-mono text-lg font-medium text-emerald-400">
                  {item.label}
                </span>

                <span className="mt-1 font-mono text-xs text-neutral-600">
                  / 0{index + 1}
                </span>
              </div>

              {/* TITLE */}
              <div>
                <h3 className="text-xl font-medium text-neutral-100">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  {item.subtitle}
                </p>
              </div>

              {/* CONTENT */}
              <ul className="space-y-5">
                {item.data.map((point, pointIndex) => (
                  <li
                    key={`${item.label}-${pointIndex}`}
                    className="flex gap-4 text-[15px] leading-7 text-neutral-300"
                  >
                    <span className="mt-[12px] h-1 w-1 shrink-0 rounded-full bg-neutral-500" />

                    <span>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}