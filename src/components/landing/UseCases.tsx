"use client";

import { motion } from "motion/react";

const USE_CASES = [
  "OSWorld-style agent training & evals",
  "Enterprise workflow automation",
  "Tool-using agents",
  "Robustness training",
  "Safety benchmarking"
];

export function UseCases() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Use cases</h2>
            <p className="text-slate-600">
              From training state-of-the-art models to validating enterprise deployments.
            </p>
          </div>

          <div className="md:w-2/3 grid gap-4">
            {USE_CASES.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between group hover:border-blue-200 transition-colors"
              >
                <span className="text-lg font-medium text-slate-900 group-hover:text-blue-700 transition-colors">{useCase}</span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                  →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
