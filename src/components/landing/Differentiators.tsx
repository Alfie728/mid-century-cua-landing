"use client";

import {
  CheckCircle,
  GitBranch,
  Globe,
  ShieldCheck,
  Stack,
  TerminalWindow,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const DIFFERENTIATORS = [
  {
    icon: Stack,
    title: "Environment-first",
    desc: "Go beyond static recordings with fully instrumented, resettable RL environments. We provide granular reward hooks and standard gym interfaces for immediate training.",
    color: "blue",
    colSpan: "md:col-span-2",
    subFeatures: ["Resettable RL", "Reward hooks", "Interactive environments"],
  },
  {
    icon: TerminalWindow,
    title: "Training-grade telemetry",
    desc: "We record clean accessibility trees, DOM snapshots, and validated action spaces to ground every agent decision.",
    color: "indigo",
    colSpan: "md:col-span-1",
  },
  {
    icon: GitBranch,
    title: "Reproducible by design",
    desc: "Widespread checkpointing, deterministic replays, and seeded randomness ensure every run is perfectly reproducible.",
    color: "purple",
    colSpan: "md:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Safety + compliance",
    desc: "Built for the enterprise. We enforce policy constraints at the infrastructure level, with automated PII redaction and fully auditable data provenance for compliance.",
    color: "emerald",
    colSpan: "md:col-span-2",
    subFeatures: [
      "PII Redaction",
      "Policy constraints",
      "Auditable provenance",
    ],
  },
  {
    icon: Globe,
    title: "Multi-OS reality",
    desc: "Real-world computer use is messy. We faithfully capture system popups, network latency, and OS-specific quirks so your agents learn to handle the noise of production.",
    color: "cyan",
    colSpan: "md:col-span-3",
    subFeatures: ["System popups", "Network latency", "OS quirks"],
  },
];

export function Differentiators() {
  const items = DIFFERENTIATORS;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/50 border border-purple-200 text-purple-700 text-xs font-mono font-medium uppercase tracking-wider mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Comparison
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight font-display text-balance"
          >
            Why CUA?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl text-balance"
          >
            We built the infrastructure we wished we had when we were training
            agents at OpenAI and DeepMind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative md:p-10 p-8 rounded-[2.5rem] bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden",
                "hover:-translate-y-1 hover:bg-white",
                item.colSpan,
              )}
            >
              {/* Hover Gradient Overlay */}
              <div
                className={cn(
                  "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                  item.color === "blue" &&
                    "from-blue-500/10 via-blue-500/5 to-transparent",
                  item.color === "indigo" &&
                    "from-indigo-500/10 via-indigo-500/5 to-transparent",
                  item.color === "purple" &&
                    "from-purple-500/10 via-purple-500/5 to-transparent",
                  item.color === "emerald" &&
                    "from-emerald-500/10 via-emerald-500/5 to-transparent",
                  item.color === "cyan" &&
                    "from-cyan-500/10 via-cyan-500/5 to-transparent",
                )}
              />

              {/* Content wrapper */}
              <div className="relative z-10 flex flex-col items-start h-full">
                {/* Header Section */}
                <div className="mb-6 w-full">
                  <div
                    className={cn(
                      "mb-6 w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                      item.color === "blue" &&
                        "text-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
                      item.color === "indigo" &&
                        "text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500",
                      item.color === "purple" &&
                        "text-purple-500 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500",
                      item.color === "emerald" &&
                        "text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
                      item.color === "cyan" &&
                        "text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500",
                    )}
                  >
                    <item.icon className="w-7 h-7" weight="duotone" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed text-balance">
                    {item.desc}
                  </p>
                </div>

                {/* Sub-features for larger cards - Styled as a distinct pill/block */}
                {item.subFeatures && (
                  <div className="w-full mt-auto pt-6 border-t border-slate-200/50">
                    <div className="flex flex-wrap gap-3">
                      {item.subFeatures.map((feat) => (
                        <div
                          key={feat}
                          className={cn(
                            "flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white/50 backdrop-blur-sm shadow-xs transition-colors duration-300",
                            "border-slate-200/60 group-hover:border-slate-300/60",
                            item.color === "blue" &&
                              "group-hover:bg-blue-50/50",
                            item.color === "emerald" &&
                              "group-hover:bg-emerald-50/50",
                            item.color === "cyan" &&
                              "group-hover:bg-cyan-50/50",
                          )}
                        >
                          <CheckCircle
                            className={cn(
                              "w-4 h-4 shrink-0",
                              item.color === "blue" && "text-blue-500",
                              item.color === "emerald" && "text-emerald-500",
                              item.color === "cyan" && "text-cyan-500",
                            )}
                            weight="fill"
                          />
                          <span className="text-sm font-medium text-slate-600">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
