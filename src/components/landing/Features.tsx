"use client";

import {
  ArrowClockwiseIcon,
  DatabaseIcon,
  MonitorIcon,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { duration, easing, stagger } from "@/lib/animation";
import { cn } from "@/lib/utils";

// Feature data with tailored configurations for the Bento Grid
const FEATURES = [
  {
    id: "data",
    icon: DatabaseIcon,
    title: "Datasets for computer-use training",
    description:
      "Collect and ship large-scale, high-signal UI data: screenshots, DOM/accessibility trees, actions, tool calls, outcomes, and error states. Everything you need to train SOTA agents.",
    colSpan: "md:col-span-2",
    bgGradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    color: "blue",
    delay: 0.1,
  },
  {
    id: "environments",
    icon: MonitorIcon,
    title: "RL Environments",
    description:
      "Deterministic, resettable Windows/macOS/Linux sandboxes. Step-level instrumentation & reward hooks.",
    colSpan: "md:col-span-2",
    bgGradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    color: "purple",
    delay: 0.2,
  },
  {
    id: "evals",
    icon: ArrowClockwiseIcon,
    title: "Evals + Reproducibility",
    description:
      "Replay any run, fork from checkpoints, compare policies, and generate benchmark suites from your own workflows. The complete loop for agent improvement.",
    colSpan: "md:col-span-4",
    bgGradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    color: "emerald",
    className: "md:flex-row md:items-center gap-8",
    contentClassName: "md:flex-row md:items-center justify-between w-full",
    delay: 0.3,
  },
];

export function Features() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };
  const animate = { opacity: 1, transform: "translateY(0px)" };

  return (
    <section className="py-32 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-20 max-w-2xl">
          <motion.h2
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{
              delay: stagger.normal,
              duration: duration.fast,
              ease: easing.easeOut,
            }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight text-balance"
          >
            What you get
          </motion.h2>

          <motion.p
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{
              delay: stagger.normal * 2,
              duration: duration.fast,
              ease: easing.easeOut,
            }}
            className="text-xl text-slate-500 leading-relaxed"
          >
            Upshot: you don't just demo an agent—you can{" "}
            <strong className="text-slate-900 font-semibold relative inline-block">
              train, iterate, and measure
              <span className="absolute bottom-0 left-0 w-full h-[6px] bg-blue-200/50 -z-10 rounded-full" />
            </strong>{" "}
            like it's a real ML system.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4  gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={initial}
              whileInView={animate}
              viewport={{ once: true }}
              transition={{
                delay: feature.delay,
                duration: duration.fast,
                ease: easing.easeOut,
              }}
              className={cn(
                "group relative rounded-[2.5rem] overflow-hidden border border-slate-200/80",
                "bg-white/60 backdrop-blur-md shadow-sm",
                "hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200",
                feature.colSpan,
              )}
            >
              {/* Card Gradient */}
              <div
                className={cn(
                  "absolute inset-0 bg-linear-to-br transition-opacity duration-200 opacity-0 group-hover:opacity-100",
                  feature.bgGradient,
                )}
              />

              <div
                className={cn(
                  "relative z-10 p-8 md:p-10 h-full flex flex-col",
                  feature.className,
                )}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div
                      className={cn(
                        "h-16 w-16 rounded-2xl border flex items-center justify-center transition-all duration-200 group-hover:scale-110 backdrop-blur-md shadow-sm",
                        "bg-white/80 border-white/50", // Base style
                        // Color variations
                        feature.color === "blue" &&
                          "text-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
                        feature.color === "purple" &&
                          "text-purple-500 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500",
                        feature.color === "emerald" &&
                          "text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
                      )}
                    >
                      <feature.icon className="w-8 h-8" weight="regular" />
                    </div>
                  </div>
                </div>

                <div className={cn("flex-1", feature.contentClassName)}>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3  transition-colors duration-150 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-[16px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shine Effect Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
