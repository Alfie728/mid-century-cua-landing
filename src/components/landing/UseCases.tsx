"use client";

import {
  BrowserIcon,
  BuildingsIcon,
  CheckCircleIcon,
  DesktopIcon,
  RobotIcon,
  ShieldCheckIcon,
  TargetIcon,
  TerminalIcon,
  WrenchIcon,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { easing, duration, stagger } from "@/lib/animation";

// Combined Data Structure for the Matrix
const MATRIX_ITEMS = [
  // Row 1
  {
    type: "capability",
    title: "OSWorld-style agent training",
    desc: "Train SOTA agents on real-world tasks with resettable environments.",
    icon: RobotIcon,
    color: "blue",
    colSpan: "md:col-span-2 lg:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    type: "capability",
    title: "Enterprise automation",
    desc: "End-to-end workflow automation across ticketing, CRM, and HR systems.",
    icon: BuildingsIcon,
    color: "indigo",
    colSpan: "md:col-span-2 lg:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    type: "capability",
    title: "Tool-using agents",
    desc: "Seamless orchestration between desktop apps, terminals, and browsers.",
    icon: WrenchIcon,
    color: "cyan",
    colSpan: "md:col-span-2 lg:col-span-1",
    rowSpan: "md:row-span-1",
  },

  // Row 2
  {
    type: "environment",
    title: "Legacy Infrastructure",
    desc: "SAP • Citrix • Windows XP • Admin Panels",
    image: "/assets/landing/legacy-ui.png",
    icon: DesktopIcon,
    color: "amber",
    colSpan: "md:col-span-3 lg:col-span-2",
    rowSpan: "md:row-span-2", // Taller for impact
  },
  {
    type: "capability",
    title: "Robustness training",
    desc: "Harden agents against latency, UI changes, and network failures.",
    icon: ShieldCheckIcon,
    color: "emerald",
    colSpan: "md:col-span-3 lg:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    type: "capability",
    title: "Safety benchmarking",
    desc: "Red-team agents for data exfiltration and prompt injection risks.",
    icon: TargetIcon,
    color: "rose",
    colSpan: "md:col-span-3 lg:col-span-1",
    rowSpan: "md:row-span-1",
  },

  // Row 3
  {
    type: "environment",
    title: "Modern SaaS Stack",
    desc: "Slack • Discord • GitHub • Salesforce",
    image: "/assets/landing/modern-ui.png",
    icon: BrowserIcon,
    color: "blue",
    colSpan: "md:col-span-3 lg:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    type: "environment",
    title: "Custom Tooling",
    desc: "Electron • RDP • VNC ",
    image: "/assets/landing/terminal-ui.png",
    icon: TerminalIcon,
    color: "purple",
    colSpan: "md:col-span-3 lg:col-span-1",
    rowSpan: "md:row-span-2",
  },
];

export function UseCases() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, transform: "translateY(20px)" };
  const animate = { opacity: 1, transform: "translateY(0px)" };

  return (
    <section className="py-32 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <motion.h2
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ delay: stagger.normal, duration: duration.fast, ease: easing.easeOut }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-display tracking-tight leading-[1.1]"
          >
            Universal <span className="text-indigo-600">Control</span>
          </motion.h2>
          <motion.p
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ delay: stagger.normal * 2, duration: duration.fast, ease: easing.easeOut }}
            className="text-lg text-slate-600 leading-relaxed text-balance"
          >
            A unified interface for training, evaluating, and deploying agents
            across every layer of the computing stack.
          </motion.p>
        </div>

        {/* The Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-6 auto-rows-fr">
          {MATRIX_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={initial}
              whileInView={animate}
              viewport={{ once: true }}
              transition={{ delay: index * stagger.fast, duration: duration.fast, ease: easing.easeOut }}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] border transition-all duration-200",
                item.colSpan,
                item.rowSpan,
                "bg-white/60 border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-white",
              )}
            >
              {/* === CAPABILITY CARD DESIGN === */}
              {item.type === "capability" && (
                <div className="h-full flex flex-col p-8 relative z-10">
                  <div className="flex items-start justify-between mb-auto">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-200 bg-white shadow-sm",
                        item.color === "blue" &&
                          "text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white",
                        item.color === "indigo" &&
                          "text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white",
                        item.color === "cyan" &&
                          "text-cyan-600 border-cyan-100 group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white",
                        item.color === "emerald" &&
                          "text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white",
                        item.color === "rose" &&
                          "text-rose-600 border-rose-100 group-hover:bg-rose-600 group-hover:border-rose-600 group-hover:text-white",
                      )}
                    >
                      <item.icon weight="duotone" className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none",
                      item.color === "blue" &&
                        "from-blue-500/10 via-blue-500/5 to-transparent",
                      item.color === "indigo" &&
                        "from-indigo-500/10 via-indigo-500/5 to-transparent",
                      item.color === "cyan" &&
                        "from-cyan-500/10 via-cyan-500/5 to-transparent",
                      item.color === "emerald" &&
                        "from-emerald-500/10 via-emerald-500/5 to-transparent",
                      item.color === "rose" &&
                        "from-rose-500/10 via-rose-500/5 to-transparent",
                    )}
                  />
                </div>
              )}

              {/* === ENVIRONMENT WINDOW DESIGN === */}
              {item.type === "environment" && (
                <div className="h-full flex flex-col group/env">
                  {/* Hover gradient overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10",
                      item.color === "amber" &&
                        "from-amber-500/10 via-amber-500/5 to-transparent",
                      item.color === "blue" &&
                        "from-blue-500/10 via-blue-500/5 to-transparent",
                      item.color === "purple" &&
                        "from-purple-500/10 via-purple-500/5 to-transparent",
                    )}
                  />

                  {/* Content */}
                  <div className="flex flex-col pt-8 px-8 pb-4 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={cn(
                          "p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm",
                          item.color === "amber" && "text-amber-600",
                          item.color === "blue" && "text-blue-600",
                          item.color === "purple" && "text-purple-600",
                        )}
                      >
                        <item.icon weight="duotone" className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 font-display tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.desc.split(" • ").map((tech) => (
                        <div
                          key={tech}
                          className={cn(
                            "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border bg-white/50 backdrop-blur-sm shadow-xs transition-colors duration-150",
                            "border-slate-200/60 group-hover:border-slate-300/60",
                            item.color === "blue" &&
                              "group-hover:bg-blue-50/50",
                            item.color === "amber" &&
                              "group-hover:bg-amber-50/50",
                            item.color === "purple" &&
                              "group-hover:bg-purple-50/50",
                          )}
                        >
                          <CheckCircleIcon
                            className={cn(
                              "w-3.5 h-3.5 shrink-0",
                              item.color === "blue" && "text-blue-500",
                              item.color === "amber" && "text-amber-500",
                              item.color === "purple" && "text-purple-500",
                            )}
                            weight="fill"
                          />
                          <span className="text-sm font-medium text-slate-600">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image - naturally flows below content */}
                  <div className="relative flex-1 min-h-0 rounded-b-[2.5rem] overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity duration-200">
                    <Image
                      src={item.image!}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-white/40 via-white/20 via-35% to-transparent to-60% hover:opacity-40 transition-opacity duration-200" />
                  </div>

                  {/* Glass Shine */}
                  <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-linear-to-r from-transparent to-white/40 opacity-20 group-hover:animate-shine pointer-events-none" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
