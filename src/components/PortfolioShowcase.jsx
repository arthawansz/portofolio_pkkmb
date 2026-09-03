"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { profileData } from "@/data/profileData";
import { Code, Award, Cpu, ExternalLink, X, Maximize2 } from "lucide-react";

export default function PortfolioShowcase() {
  const { projects, certificates, techStack } = profileData;
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="relative w-full py-20 px-4 md:px-12 bg-[#0a0a0a] text-white overflow-hidden border-b border-neutral-900">
      
      {/* Background Grid Section 2 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />
      {/* Glow Neon Section 2 (Kanan Tengah) */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 gap-2">
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === "projects"
                  ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === "certificates"
                  ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Sertifikat</span>
            </button>
            <button
              onClick={() => setActiveTab("tech")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === "tech"
                  ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Tech Stack</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Projects Grid */}
        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-emerald-400"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-[10px] font-mono text-emerald-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Certificates Grid */}
        {activeTab === "certificates" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCert(cert)}
                className="group relative rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden cursor-pointer hover:border-emerald-500/50 transition-all backdrop-blur-sm"
              >
                <div className="aspect-[4/3] relative bg-neutral-950">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="text-xs font-bold text-neutral-200 group-hover:text-emerald-400 line-clamp-1">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] font-mono text-neutral-500">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Tech Stack */}
        {activeTab === "tech" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center space-y-2 hover:border-neutral-700 transition-all backdrop-blur-sm"
              >
                <p className="font-mono text-sm font-bold text-emerald-400">
                  {tech.name}
                </p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
                  {tech.category}
                </p>
              </div>
            ))}
          </motion.div>
        )}

      </div>

      {/* Modal Zoom Sertifikat */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative aspect-[16/11] w-full bg-neutral-950">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 bg-neutral-900 border-t border-neutral-800">
                <h3 className="text-sm font-bold text-neutral-100">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-0.5">
                  Penerbit: {selectedCert.issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}