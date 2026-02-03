"use client";

import {
  ArrowClockwiseIcon,
  DatabaseIcon,
  MonitorIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
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
    delay: 0.1,
  },
  {
    id: "environments",
    icon: MonitorIcon,
    title: "RL Environments",
    description:
      "Deterministic, resettable Windows/macOS/Linux sandboxes. Step-level instrumentation & reward hooks.",
    colSpan: "md:col-span-1",
    bgGradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    delay: 0.2,
  },
  {
    id: "evals",
    icon: ArrowClockwiseIcon,
    title: "Evals + Reproducibility",
    description:
      "Replay any run, fork from checkpoints, compare policies, and generate benchmark suites from your own workflows. The complete loop for agent improvement.",
    colSpan: "md:col-span-3",
    bgGradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    className: "md:flex-row md:items-center gap-8",
    contentClassName: "md:flex-row md:items-center justify-between w-full",
    delay: 0.3,
  },
];

export function Features() {
  return (
    <section className="py-32 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-20 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            What you get
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 leading-relaxed"
          >
            Upshot: you don’t just demo an agent—you can{" "}
            <strong className="text-slate-900 font-semibold relative inline-block">
              train, iterate, and measure
              <span className="absolute bottom-0 left-0 w-full h-[6px] bg-blue-200/50 -z-10 rounded-full" />
            </strong>{" "}
            like it’s a real ML system.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              className={cn(
                "group relative rounded-[2rem] overflow-hidden border border-slate-200/80",
                "bg-white/60 backdrop-blur-xl shadow-lg shadow-slate-200/50",
                "hover:shadow-xl hover:shadow-blue-500/10 hover:border-white/60 transition-all duration-500",
                feature.colSpan,
              )}
            >
              {/* Card Gradient */}
              <div
                className={cn(
                  "absolute inset-0 bg-linear-to-br transition-opacity duration-500 opacity-0 group-hover:opacity-100",
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
                    <div className="h-16 w-16 bg-white/80 rounded-2xl border border-white/50 shadow-sm flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                      <feature.icon className="w-8 h-8" weight="regular" />
                    </div>
                  </div>
                </div>

                <div className={cn("flex-1", feature.contentClassName)}>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-[16px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shine Effect Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
