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

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What you get</h2>
          <p className="text-xl text-slate-600 max-w-2xl">
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
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="h-12 w-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-4">
                {feature.badge}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
