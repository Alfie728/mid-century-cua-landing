"use client";

import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { LightRays } from "@/components/ui/light-rays";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-32 px-6 overflow-hidden md:pt-48 md:pb-40 bg-linear-to-b from-transparent from-0% via-[#f1f5fb] via-70% to-[#FAFCFD] to-100%">
      {/* Light Rays Effect */}
      <div className="absolute top-0 left-0 right-0 h-full w-full flex items-start justify-center overflow-hidden pointer-events-none -z-10 from-[#F1F5FB] to-white">
        <LightRays color="#8ec5ff" blur={24} />
      </div>

      <div className="container max-w-5xl mx-auto flex flex-col items-center text-center gap-10 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-slate-200 backdrop-blur-sm shadow-sm hover:bg-white/80 transition-colors cursor-pointer group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">
            Next-Gen Data Platform
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 leading-[1.05] font-display"
        >
          <span className="bg-clip-text text-transparent bg-linear-to-br from-indigo-500 to-blue-600">
            cua
          </span>{" "}
          is data for
          <br className="hidden md:block" />
          <span className="relative whitespace-nowrap">
            <span className="relative z-10">computer agents</span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed"
        >
          Turn real Desktop interaction into{" "}
          <strong className="text-slate-900 font-semibold">
            training-ready trajectories
          </strong>
          . The first RL environment platform built for safety and rights-aware
          data collection.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          <Link
            href="#"
            className="h-14 px-8 rounded-full bg-slate-900 text-white font-semibold text-lg flex items-center gap-2 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Get started <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="h-14 px-8 rounded-full bg-white border border-slate-200 text-slate-900 font-semibold text-lg flex items-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
          >
            <PlayCircle className="w-5 h-5 text-slate-500" />
            Book a demo
          </Link>
        </motion.div>

        {/* Small Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400"
        >
          <span>Trusted by teams at</span>
          <div className="flex gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* FrontierAI */}
            <img
              src="/frontierai.png"
              alt="FrontierAI"
              className="h-6 w-auto object-contain"
            />

            {/* AgentLab */}
            <img
              src="/agentlab-logo-small.png"
              alt="AgentLab"
              className="h-6 w-auto object-contain"
            />

            {/* AutoCorp */}
            <img
              src="/Autocorp-ai-TM-White.svg"
              alt="AutoCorp"
              className="h-5 w-auto object-contain invert" // Invert because the file is 'White' but background is light
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
