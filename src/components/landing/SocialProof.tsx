"use client";

import { motion } from "motion/react";

const TEAMS = [
  "UI Agents",
  "Workflow Automation",
  "OSWorld-style Evals",
  "Enterprise RPA",
  "Frontier Labs",
  "Web Voyagers",
  "Desktop Automation"
];

export function SocialProof() {
  return (
    <section className="py-10 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
          Used by teams building
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-16 min-w-full items-center justify-center">
          {[...TEAMS, ...TEAMS, ...TEAMS, ...TEAMS].map((team, index) => (
            <span
              key={`${team}-${index}`}
              className="text-lg md:text-xl font-medium text-slate-400 hover:text-slate-800 transition-colors cursor-default"
            >
              {team}
            </span>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 min-w-full items-center justify-center pointer-events-none">
          {[...TEAMS, ...TEAMS, ...TEAMS, ...TEAMS].map((team, index) => (
            <span
              key={`${team}-${index}-duplicate`}
              className="text-lg md:text-xl font-medium text-transparent"
            >
              {team}
            </span>
          ))}
        </div>

        {/* Fad gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent" />
      </div>
    </section>
  );
}
