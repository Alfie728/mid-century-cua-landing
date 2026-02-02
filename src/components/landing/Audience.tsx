"use client";

import {
  ArrowRight,
  Brain,
  Buildings,
  Flask,
  HardDrives,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const AUDIENCE_ITEMS = [
  {
    id: "labs",
    label: "Frontier Labs",
    description: "Training VLM/agent stacks",
    icon: Flask,
    color: "blue",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    delay: 0.1,
  },
  {
    id: "enterprises",
    label: "Enterprises",
    description: "Turning workflows into RL-able environments",
    icon: Buildings,
    color: "indigo",
    gradient: "from-indigo-500/10 via-indigo-500/5 to-transparent",
    delay: 0.2,
  },
  {
    id: "researchers",
    label: "Researchers",
    description: "Doing agent benchmarks + safety testing",
    icon: Brain,
    color: "purple",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    delay: 0.3,
  },
  {
    id: "data",
    label: "Data Teams",
    description: "Who need scalable collection + provenance",
    icon: HardDrives,
    color: "emerald",
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    delay: 0.4,
  },
];

export function Audience() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-16 lg:gap-24">
          {/* Left Column: Heading & Context */}
          <div className="lg:w-1/3 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="px-3 py-1 rounded-full bg-indigo-100/50 border border-indigo-200 text-indigo-700 text-xs font-mono font-medium uppercase tracking-wider backdrop-blur-sm">
                Audience
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight font-display"
            >
              Built for the builders.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 leading-relaxed mb-8"
            >
              Whether you're pre-training a foundation model or fine-tuning for
              specific enterprise workflows, we provide the ground truth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group"
              >
                Read the technical manifesto{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Grid of Cards */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {AUDIENCE_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="group relative p-8 rounded-[2rem] bg-white/60 border border-slate-200/80 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    item.gradient,
                  )}
                />

                <div className="relative z-10">
                  <div className="h-12 w-12 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" weight="duotone" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-900 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {item.description}
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
