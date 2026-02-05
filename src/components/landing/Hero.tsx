"use client";

import { ArrowRight, PlayCircle } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { LightRays } from "@/components/ui/light-rays";
import { duration, easing, stagger } from "@/lib/animation";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };
  const animate = { opacity: 1, transform: "translateY(0px)" };

  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-32 px-6 overflow-hidden md:pt-48 md:pb-40 bg-linear-to-b from-transparent from-0% via-surface-hero via-70% to-surface-hero-end to-100%">
      {/* Light Rays Effect */}
      <div className="absolute top-0 left-0 right-0 h-full w-full flex items-start justify-center overflow-hidden pointer-events-none -z-10">
        <LightRays color="#8ec5ff" blur={16} />
      </div>

      <div className="container max-w-5xl mx-auto flex flex-col items-center text-center gap-10 relative z-10">
        {/* Heading */}
        <motion.h1
          initial={initial}
          animate={animate}
          transition={{
            duration: duration.fast,
            delay: stagger.normal,
            ease: easing.easeOut,
          }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 leading-[1.05] font-display text-balance"
        >
          <span className="bg-clip-text text-transparent bg-linear-to-br from-[#0D8FD9] to-[#3AAFFF]">
            Data and evals{" "}
          </span>{" "}
          for long-horizon digital agents
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={initial}
          animate={animate}
          transition={{
            duration: duration.fast,
            delay: stagger.normal * 2,
            ease: easing.easeOut,
          }}
          className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed"
        >
          Mid-Century turns real computer and browser interactions into
          training-ready trajectories, powering reinforcement learning
          environments for real-world work.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={initial}
          animate={animate}
          transition={{
            duration: duration.fast,
            delay: stagger.normal * 3,
            ease: easing.easeOut,
          }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          <Link
            href="#download"
            className="h-14 px-8 rounded-full bg-gradient-to-r from-[#0D8FD9] to-[#3AAFFF] text-white font-semibold text-lg flex items-center gap-2 hover:shadow-xl hover:shadow-[#3AAFFF]/25 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AAFFF] focus-visible:ring-offset-2"
          >
            Get started <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
