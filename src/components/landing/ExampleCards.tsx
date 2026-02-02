"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const EXAMPLES = [
  {
    image: "/assets/landing/legacy-ui.png",
    title: "Legacy apps",
    examples: "SAP, Citrix, internal admin panels, Windows XP tools",
    color: "amber"
  },
  {
    image: "/assets/landing/modern-ui.png",
    title: "Modern SaaS",
    examples: "Slack, Discord, GitHub, Salesforce, Adobe Suite",
    color: "blue"
  },
  {
    image: "/assets/landing/terminal-ui.png",
    title: "Custom stacks",
    examples: "Electron apps, proprietary consoles, VNC streams",
    color: "purple"
  }
];

export function ExampleCards() {
  return (
    <section className="py-24 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight font-display"
          >
            Works with anything
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-medium"
          >
            From terminal to browser, legacy to bleeding edge.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EXAMPLES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-[2.5rem] bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Area */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-slate-900/0 transition-colors duration-500" />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent z-20" />
              </div>

              {/* Content Area */}
              <div className="relative z-20 p-8 -mt-6 flex flex-col flex-1 text-center">
                <div className={cn(
                  "w-20 h-1 rounded-full mx-auto mb-6 transition-all duration-500",
                  item.color === 'amber' && "bg-amber-400 group-hover:w-12",
                  item.color === 'blue' && "bg-blue-400 group-hover:w-12",
                  item.color === 'purple' && "bg-purple-400 group-hover:w-12",
                )} />

                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {item.examples}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
