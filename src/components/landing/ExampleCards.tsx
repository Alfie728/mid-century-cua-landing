"use client";

import { motion } from "motion/react";
import { AppWindow, Monitor, Code2 } from "lucide-react";

const EXAMPLES = [
  {
    icon: Monitor,
    title: "Legacy apps",
    examples: "SAP • Citrix • internal admin panels • old Windows tools",
    color: "bg-amber-100 text-amber-700"
  },
  {
    icon: AppWindow,
    title: "Modern apps",
    examples: "Slack • Discord • GitHub • Amazon Seller Central • Adobe Suite",
    color: "bg-blue-100 text-blue-700"
  },
  {
    icon: Code2,
    title: "Custom stacks",
    examples: "your Electron app • your ops console • your proprietary tooling",
    color: "bg-purple-100 text-purple-700"
  }
];

export function ExampleCards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Works with anything</h2>
          <p className="text-xl text-slate-600">From terminal to browser, legacy to bleeding edge.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EXAMPLES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 ${item.color}`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{item.examples}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
