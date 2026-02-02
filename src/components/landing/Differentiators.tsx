"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  GitBranch,
  TerminalWindow,
  Globe,
  Stack,
  Cpu
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const DIFFERENTIATORS = [
  {
    icon: Stack,
    title: "Environment-first",
    desc: "Not just recordings—resettable RL with reward hooks.",
    color: "blue"
  },
  {
    icon: TerminalWindow,
    title: "Training-grade telemetry",
    desc: "UI tree + action grounding + outcome labels.",
    color: "indigo"
  },
  {
    icon: GitBranch,
    title: "Reproducible by design",
    desc: "Checkpoints, replays, seeded randomness.",
    color: "purple"
  },
  {
    icon: ShieldCheck,
    title: "Safety + compliance",
    desc: "Redaction, policy constraints, auditable provenance.",
    color: "emerald"
  },
  {
    icon: Globe,
    title: "Multi-OS reality",
    desc: "The messy stuff agents fail on is the stuff we capture.",
    color: "cyan"
  },
  {
    icon: Cpu, // Added a 6th item for grid balance if needed, or stick to 5. 5 is fine in responsive grid.
    title: "Device Farm",
    desc: "Real hardware, not just emulators. Latency-aware.",
    color: "slate"
  }
];

// Remove the 6th item if user didn't ask for it, but 5 looks odd in 3-col grid. 
// User's original had 5 items. I will stick to 5 to avoid inventing content, 
// or maybe make the grid center the last cards.
// Layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
// 5 items: row 1 (3 items), row 2 (2 items centered)

export function Differentiators() {
  const items = DIFFERENTIATORS.slice(0, 5); // Keep original 5

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
            We built the infrastructure we wished we had when we were training agents at OpenAI and DeepMind.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative p-8 rounded-[2rem] bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-2xl transition-all duration-300",
                // Center the last 2 items on large screens if desired, but default grid alignment is fine
                "hover:-translate-y-1 hover:bg-white"
              )}
            >
              {/* Hover Gradient Border Effect */}
              <div className={cn(
                "absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 pointer-events-none",
                item.color === 'blue' && "border-blue-100",
                item.color === 'indigo' && "border-indigo-100",
                item.color === 'purple' && "border-purple-100",
                item.color === 'emerald' && "border-emerald-100",
                item.color === 'cyan' && "border-cyan-100",
              )} />

              {/* Icon Well */}
              <div className={cn(
                "mb-6 w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                item.color === 'blue' && "text-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
                item.color === 'indigo' && "text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500",
                item.color === 'purple' && "text-purple-500 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500",
                item.color === 'emerald' && "text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
                item.color === 'cyan' && "text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500",
              )}>
                <item.icon className="w-7 h-7" weight="duotone" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-balance">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
