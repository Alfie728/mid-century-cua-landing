"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const CALLOUTS = [
  "Frontier labs training VLM/agent stacks",
  "Enterprises turning workflows into RL-able environments",
  "Researchers doing agent benchmarks + safety testing",
  "Data teams who need scalable collection + provenance",
];

import { BackgroundBlobs } from "@/components/ui/BackgroundBlobs";

export function Audience() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Dark mode blobs */}
      <BackgroundBlobs className="opacity-15" colors={{ first: "bg-indigo-600", second: "bg-blue-600", third: "bg-purple-600" }} />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">

          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Built for</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Designed for teams pushing the boundaries of what computer-use agents can do.
            </p>
          </div>

          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {CALLOUTS.map((callout, index) => (
              <motion.div
                key={callout}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-slate-600 hover:bg-slate-800/50 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 font-medium leading-relaxed">{callout}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
