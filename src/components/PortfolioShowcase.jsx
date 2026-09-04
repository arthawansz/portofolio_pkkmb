"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiVuedotjs,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiFigma,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import { profileData } from "@/data/profileData";

const tabs = [
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "certificates",
    label: "Certificates",
  },
  {
    id: "tech",
    label: "Tech Stack",
  },
];

const techIcons = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  "Vue.js": SiVuedotjs,
  Laravel: SiLaravel,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  "Git & GitHub": SiGithub,
  Figma: SiFigma,
  "VS Code": VscCode,
};

export default function PortfolioShowcase() {
  const { projects, certificates, techStack } = profileData;

  const [activeTab, setActiveTab] = useState("projects");
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCert(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-b border-white/[0.07] bg-[#090909] px-5 py-24 text-white md:px-8 md:py-32"
    >
      {/* subtle futuristic background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.06),transparent_25%),radial-gradient(circle_at_80%_40%,rgba(59,130,246,0.05),transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow">
              Portfolio / Experience
            </p>

            <h2 className="section-title mt-5">
              Things I&apos;ve built
              <span className="block text-neutral-500">
                and learned.
              </span>
            </h2>
          </div>

          <p className="section-description md:justify-self-end">
            Kumpulan proyek, sertifikasi, dan teknologi yang menjadi
            bagian dari perjalanan saya mempelajari software development.
          </p>
        </div>

        {/* TAB NAV */}
        <div className="mb-12 flex flex-wrap gap-2 border-b border-white/[0.09] pb-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-200"
                }`}
              >
                <span className="relative z-10">
                  {tab.label}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="portfolio-tab-bg"
                    className="absolute inset-0 rounded-md border border-emerald-400/20 bg-emerald-400/[0.05]"
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {/* =========================
              PROJECTS
          ========================== */}
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="divide-y divide-white/[0.09]"
            >
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group relative grid gap-6 overflow-hidden py-10 first:pt-0 md:grid-cols-[70px_1fr_auto]"
                >
                  <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-emerald-400/[0.025] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="pt-1 font-mono text-xs text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-medium tracking-[-0.015em] text-neutral-100 sm:text-2xl">
                        {project.title}
                      </h3>

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-0 shadow-[0_0_12px_rgba(52,211,153,0.8)] transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <p className="mt-4 max-w-2xl text-[15px] leading-7 text-neutral-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-neutral-500">
                      {project.tech.map((technology, techIndex) => (
                        <span key={technology}>
                          {technology}

                          {techIndex < project.tech.length - 1 && (
                            <span className="ml-2 text-neutral-700">
                              /
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-neutral-500 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.05] hover:text-emerald-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </article>
              ))}
            </motion.div>
          )}

          {/* =========================
              CERTIFICATES
          ========================== */}
          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {certificates.map((certificate, index) => (
                <button
                  key={`${certificate.title}-${index}`}
                  type="button"
                  onClick={() => setSelectedCert(certificate)}
                  className="group text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border border-white/[0.08] bg-neutral-900">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.025] group-hover:opacity-85"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

                    <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-white/[0.08] bg-black/50 text-xs text-neutral-300 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                      ↗
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-[15px] font-medium leading-6 text-neutral-200 transition-colors group-hover:text-white">
                      {certificate.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-neutral-500">
                      {certificate.issuer}
                    </p>
                  </div>
                </button>
              ))}
            </motion.div>
          )}

          {/* =========================
              TECH STACK
          ========================== */}
          {activeTab === "tech" && (
            <motion.div
              key="tech"
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {techStack.map((tech, index) => {
                const Icon = techIcons[tech.name];

                return (
                  <motion.div
                    key={`${tech.name}-${index}`}
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
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.03,
                    }}
                    className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.015] p-5 transition-all duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/[0.025]"
                  >
                    {/* corner accent */}
                    <div className="absolute right-0 top-0 h-10 w-10">
                      <div className="absolute right-0 top-0 h-px w-5 bg-emerald-400/40" />
                      <div className="absolute right-0 top-0 h-5 w-px bg-emerald-400/40" />
                    </div>

                    {/* subtle glow */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-400/[0.05] blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-11 w-11 items-center justify-center border border-white/[0.08] bg-black/30">
                          {Icon ? (
                            <Icon className="h-5 w-5 text-neutral-300 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                          ) : (
                            <span className="font-mono text-xs text-neutral-500">
                              {tech.name.charAt(0)}
                            </span>
                          )}

                          <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
                        </div>

                        <div>
                          <p className="text-base font-medium text-neutral-100">
                            {tech.name}
                          </p>

                          <p className="mt-1 text-xs text-neutral-500">
                            {tech.category}
                          </p>
                        </div>
                      </div>

                      <span className="font-mono text-[10px] text-neutral-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center gap-2">
                      <div className="h-px flex-1 bg-white/[0.06]" />

                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-600">
                        stack module
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================
          CERTIFICATE MODAL
      ========================== */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden border border-white/[0.08] bg-[#0c0c0c]"
            >
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-white/[0.08] bg-black/70 text-neutral-300 backdrop-blur transition-colors hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/11] bg-neutral-950">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              <div className="border-t border-white/[0.09] p-5">
                <h3 className="text-base font-medium text-neutral-100">
                  {selectedCert.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  {selectedCert.issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}