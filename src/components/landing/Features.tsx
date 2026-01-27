"use client";

import { motion } from "motion/react";
import { Database, Monitor, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: Database,
    title: "Datasets for computer-use training",
    description: "Collect and ship large-scale, high-signal UI data: screenshots, DOM/accessibility trees, actions, tool calls, outcomes, and error states.",
    badge: "Data"
  },
  {
    icon: Monitor,
    title: "RL environments that feel like real desktops",
    description: "Deterministic, resettable Windows/macOS/Linux sandboxes with step-level instrumentation, reward hooks, and safety constraints.",
    badge: "Environments"
  },
  {
    icon: RefreshCw,
    title: "Evals + reproducibility",
    description: "Replay any run, fork from checkpoints, compare policies, and generate benchmark suites from your own workflows.",
    badge: "Evals"
  }
];

import { BackgroundBlobs } from "@/components/ui/BackgroundBlobs";

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">What you get</h2>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Upshot: you don’t just demo an agent—you can <strong className="text-slate-900 font-semibold">train, iterate, and measure</strong> like it’s a real ML system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg shadow-blue-900/5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="h-14 w-14 bg-white rounded-2xl border border-slate-100 flex items-center justify-center mb-6 text-blue-600 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div className="inline-block px-3 py-1 bg-blue-50/50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full mb-5">
                  {feature.badge}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
