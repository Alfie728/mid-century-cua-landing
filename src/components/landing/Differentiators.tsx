"use client";

import { motion } from "motion/react";
import { Shield, GitBranch, Terminal, Globe, Layers } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: Layers,
    title: "Environment-first",
    desc: "Not just recordings—resettable RL with reward hooks"
  },
  {
    icon: Terminal,
    title: "Training-grade telemetry",
    desc: "UI tree + action grounding + outcome labels"
  },
  {
    icon: GitBranch,
    title: "Reproducible by design",
    desc: "Checkpoints, replays, seeded randomness"
  },
  {
    icon: Shield,
    title: "Safety + compliance",
    desc: "Redaction, policy constraints, auditable provenance"
  },
  {
    icon: Globe,
    title: "Multi-OS reality",
    desc: "The messy stuff agents fail on is the stuff we capture"
  }
];

import { BackgroundBlobs } from "@/components/ui/BackgroundBlobs";

export function Differentiators() {
  return (
    <section className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Key differentiators</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 hover:bg-white hover:border-blue-100 transition-all duration-300"
            >
              <div className="mb-4 w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
