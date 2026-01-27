"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const CALLOUTS = [
  "Frontier labs training VLM/agent stacks",
  "Enterprises turning workflows into RL-able environments",
  "Researchers doing agent benchmarks + safety testing",
  "Data teams who need scalable collection + provenance",
];

export function Audience() {
  return (
    <section className="py-20 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">

          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-4">Built for</h2>
            <p className="text-slate-400">
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
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 font-medium">{callout}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
