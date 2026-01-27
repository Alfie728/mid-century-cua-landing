"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Spin up desktops",
    desc: "Windows/macOS/Linux with instrumented agents"
  },
  {
    number: "02",
    title: "Record tasks",
    desc: "Humans, scripted bots, or agents into trajectories"
  },
  {
    number: "03",
    title: "Package datasets",
    desc: "Clean, label, redact, verify"
  },
  {
    number: "04",
    title: "Train + evaluate",
    desc: "Offline RL / imitation / online RL with replays"
  }
];

export function Process() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How it works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-200 -z-10" />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm md:bg-transparent md:border-0 md:shadow-none md:p-0 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl border-2 border-slate-200 flex items-center justify-center text-xl font-bold text-slate-400 mb-6 mx-auto md:mx-0 z-10 relative group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300 shadow-[0_0_0_8px_rgba(241,245,249,0.5)] group-hover:shadow-[0_0_0_8px_rgba(59,130,246,0.1)]">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 text-center md:text-left">{step.title}</h3>
              <p className="text-slate-600 text-sm text-center md:text-left leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
