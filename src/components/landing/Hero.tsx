"use client";

import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-32 px-6 overflow-hidden md:pt-48 md:pb-40">

      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_200px,#ffffff,transparent)]" />
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
          className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 leading-[1.05]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-blue-600">cua</span> is data for
          <br className="hidden md:block" />
          <span className="relative whitespace-nowrap">
            <span className="relative z-10">computer agents</span>
            <svg className="absolute -bottom-2 w-full h-3 text-blue-200 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed"
        >
          Turn real Desktop interaction into <strong className="text-slate-900 font-semibold">training-ready trajectories</strong>.
          The first RL environment platform built for safety and rights-aware data collection.
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
          <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Micro-logos placeholders using text for now */}
            <span className="font-bold">FrontierAI</span>
            <span className="font-bold">AgentLab</span>
            <span className="font-bold">AutoCorp</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
