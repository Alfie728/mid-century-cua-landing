"use client";

import { motion, useReducedMotion } from "motion/react";
import { duration, easing, stagger } from "@/lib/animation";

export function Narrative() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };
  const animate = { opacity: 1, transform: "translateY(0px)" };

  return (
    <section className="pb-32 relative font-sans">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{
            duration: duration.fast,
            delay: stagger.normal,
            ease: easing.easeOut,
          }}
          className="relative p-8 md:p-12 rounded-[2.5rem] bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-transparent opacity-50 pointer-events-none rounded-[2.5rem]" />

          <div className="relative z-10 text-lg md:text-xl text-slate-600 leading-relaxed text-pretty font-light space-y-8">
            <p>
              We are a software company that builds reinforcement learning
              environments for leading AI labs. Our environments simulate
              real-world computer-based work—things like building a feature,
              deploying an application, debugging an issue, or reviewing and
              reconciling financial or legal documents.
            </p>
            <p>
              Models are dropped into these environments and given concrete
              objectives. Every action across the browser, terminal, and desktop is
              captured and structured into training-ready trajectories.
            </p>
            <p>
              Performance is evaluated based on task completion, correctness, and
              efficiency. These evaluations become reward signals during training,
              allowing models to learn how to reliably complete real-world work
              end-to-end.
            </p>
            <div className="pt-4 pb-2">
              <strong className="text-2xl md:text-3xl font-display font-bold text-slate-900 block leading-tight">
                The result is a direct path from real computer use to scalable,
                automated training for economically meaningful tasks.
              </strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
