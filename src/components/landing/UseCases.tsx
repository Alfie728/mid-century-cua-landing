"use client";

import { motion } from "motion/react";
import {
  Robot,
  Buildings,
  Wrench,
  ShieldCheck,
  Target,
  ArrowRight
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const USE_CASES = [
  {
    title: "OSWorld-style agent training & evals",
    icon: Robot,
    color: "blue"
  },
  {
    title: "Enterprise workflow automation",
    icon: Buildings,
    color: "indigo"
  },
  {
    title: "Tool-using agents",
    icon: Wrench,
    color: "amber"
  },
  {
    title: "Robustness training",
    icon: ShieldCheck,
    color: "emerald"
  },
  {
    title: "Safety benchmarking",
    icon: Target,
    color: "red"
  }
];

export function UseCases() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-16">
          {/* Left Column: Heading */}
          <div className="lg:w-1/3 sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-700 text-xs font-mono font-medium uppercase tracking-wider mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Applications
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight"
            >
              What can you build?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 leading-relaxed text-balance"
            >
              From training state-of-the-art foundation models to validating complex enterprise deployments before they touch production data.
            </motion.p>
          </div>

          {/* Right Column: List */}
          <div className="lg:w-2/3 grid gap-4">
            {USE_CASES.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm flex items-center justify-between hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-6">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center border transition-colors duration-300",
                    "bg-white border-slate-100 shadow-sm",
                    useCase.color === 'blue' && "text-blue-500 group-hover:border-blue-200 group-hover:bg-blue-50",
                    useCase.color === 'indigo' && "text-indigo-500 group-hover:border-indigo-200 group-hover:bg-indigo-50",
                    useCase.color === 'amber' && "text-amber-500 group-hover:border-amber-200 group-hover:bg-amber-50",
                    useCase.color === 'emerald' && "text-emerald-500 group-hover:border-emerald-200 group-hover:bg-emerald-50",
                    useCase.color === 'red' && "text-red-500 group-hover:border-red-200 group-hover:bg-red-50",
                  )}>
                    <useCase.icon className="w-6 h-6" weight="duotone" />
                  </div>
                  <span className="text-xl font-bold text-slate-700 group-hover:text-slate-900 transition-colors font-display">
                    {useCase.title}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowRight weight="bold" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
