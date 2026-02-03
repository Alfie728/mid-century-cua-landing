"use client";

import {
  ArrowRight,
  Brain,
  Buildings,
  Flask,
  HardDrives,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { easing, duration, stagger } from "@/lib/animation";

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
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, transform: "translateY(20px)" };
  const animate = { opacity: 1, transform: "translateY(0px)" };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-16 lg:gap-24">
          {/* Left Column: Heading & Context */}
          <div className="lg:w-1/3 ">
            <motion.h2
              initial={initial}
              whileInView={animate}
              viewport={{ once: true }}
              transition={{ delay: stagger.normal, duration: duration.fast, ease: easing.easeOut }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight font-display text-balance"
            >
              Built for the builders.
            </motion.h2>

            <motion.p
              initial={initial}
              whileInView={animate}
              viewport={{ once: true }}
              transition={{ delay: stagger.normal * 2, duration: duration.fast, ease: easing.easeOut }}
              className="text-lg text-slate-500 leading-relaxed mb-8"
            >
              Whether you're pre-training a foundation model or fine-tuning for
              specific enterprise workflows, we provide the ground truth.
            </motion.p>

            <motion.div
              initial={initial}
              whileInView={animate}
              viewport={{ once: true }}
              transition={{ delay: stagger.normal * 3, duration: duration.fast, ease: easing.easeOut }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-150 group rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Read the technical manifesto{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Grid of Cards */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {AUDIENCE_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                initial={initial}
                whileInView={animate}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: duration.fast, ease: easing.easeOut }}
                className="group relative md:p-10 p-8 rounded-[2.5rem] bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200 overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                    item.gradient,
                  )}
                />

                <div className="relative z-10">
                  <div className="h-12 w-12 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                    <item.icon className="w-6 h-6" weight="duotone" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-900 transition-colors duration-150">
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
