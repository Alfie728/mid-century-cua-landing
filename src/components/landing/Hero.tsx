"use client";

import { ArrowRight, PlayCircle } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { LightRays } from "@/components/ui/light-rays";
import { easing, duration, stagger } from "@/lib/animation";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? false : { opacity: 0, transform: "translateY(20px)" };
  const animate = { opacity: 1, transform: "translateY(0px)" };

  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-32 px-6 overflow-hidden md:pt-48 md:pb-40 bg-linear-to-b from-transparent from-0% via-[#f1f5fb] via-70% to-[#FAFCFD] to-100%">
      {/* Light Rays Effect */}
      <div className="absolute top-0 left-0 right-0 h-full w-full flex items-start justify-center overflow-hidden pointer-events-none -z-10 from-[#F1F5FB] to-white">
        <LightRays color="#8ec5ff" blur={16} />
      </div>

      <div className="container max-w-5xl mx-auto flex flex-col items-center text-center gap-10 relative z-10">
        {/* Heading */}
        <motion.h1
          initial={initial}
          animate={animate}
          transition={{ duration: duration.fast, delay: stagger.normal, ease: easing.easeOut }}
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
          initial={initial}
          animate={animate}
          transition={{ duration: duration.fast, delay: stagger.normal * 2, ease: easing.easeOut }}
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
          initial={initial}
          animate={animate}
          transition={{ duration: duration.fast, delay: stagger.normal * 3, ease: easing.easeOut }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          <Link
            href="#"
            className="h-14 px-8 rounded-full bg-slate-900 text-white font-semibold text-lg flex items-center gap-2 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Get started <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="h-14 px-8 rounded-full bg-white border border-slate-200 text-slate-900 font-semibold text-lg flex items-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
          >
            <PlayCircle className="w-5 h-5 text-slate-500" />
            Book a demo
          </Link>
        </motion.div>

        {/* Small Subtext */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration.fast, delay: stagger.normal * 5, ease: easing.easeOut }}
          className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400"
        >
          <span>Trusted by teams at</span>
          <div className="flex gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
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
              className="h-5 w-auto object-contain invert"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
