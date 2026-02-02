"use client";

import { motion } from "motion/react";
import {
  Desktop,
  Record,
  Package,
  Brain,
  CaretRight
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    number: "01",
    title: "Spin up desktops",
    desc: "Windows/macOS/Linux with instrumented agents",
    icon: Desktop,
    color: "blue"
  },
  {
    number: "02",
    title: "Record tasks",
    desc: "Humans, scripted bots, or agents into trajectories",
    icon: Record,
    color: "red"
  },
  {
    number: "03",
    title: "Package datasets",
    desc: "Clean, label, redact, verify",
    icon: Package,
    color: "amber"
  },
  {
    number: "04",
    title: "Train + evaluate",
    desc: "Offline RL / imitation / online RL with replays",
    icon: Brain,
    color: "emerald"
  }
];

export function Process() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-slate-50/50 -skew-y-3 -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono font-medium uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Workflow
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight"
          >
            How it works
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-14 left-0 w-full h-px bg-slate-200 -z-10">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-500/20 to-transparent w-1/2 mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                {/* Step Number Badge */}
                <div className="w-28 h-28 mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center relative z-10 group-hover:scale-110 transition-all duration-300 mb-8">
                  <div className={cn(
                    "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br",
                    step.color === 'blue' && "from-blue-500/10 to-transparent",
                    step.color === 'red' && "from-red-500/10 to-transparent",
                    step.color === 'amber' && "from-amber-500/10 to-transparent",
                    step.color === 'emerald' && "from-emerald-500/10 to-transparent",
                  )} />

                  <step.icon
                    className={cn(
                      "w-10 h-10 mb-2 transition-colors duration-300",
                      step.color === 'blue' && "text-blue-500",
                      step.color === 'red' && "text-red-500",
                      step.color === 'amber' && "text-amber-500",
                      step.color === 'emerald' && "text-emerald-500",
                    )}
                    weight="duotone"
                  />
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                    STEP {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center relative">
                  {/* Mobile Connector */}
                  {index < STEPS.length - 1 && (
                    <div className="md:hidden absolute left-1/2 -bottom-6 -translate-x-1/2 text-slate-300">
                      <CaretRight weight="bold" />
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm px-4">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
