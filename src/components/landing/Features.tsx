"use client";

import {
  ArrowClockwise,
  Brain,
  Buildings,
  CheckCircleIcon,
  Database,
  Flask,
  HardDrives,
  Lock,
  Monitor,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { duration, easing, stagger } from "@/lib/animation";

export function Features() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };
  const animate = { opacity: 1, transform: "translateY(0px)" };

  // Card animation: delay 0.4 + duration 0.2 = 0.6s
  // Logos should start after card animation completes
  const cardAnimationEnd = 0.4 + duration.fast;

  return (
    <section className="py-32 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* SECTION HEADER */}
        <div className="mb-24 max-w-3xl">
          <motion.h2
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{
              delay: stagger.normal,
              duration: duration.fast,
              ease: easing.easeOut,
            }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight text-balance"
          >
            Everything you need to build <br />
            <span className="text-indigo-600">General Agents.</span>
          </motion.h2>

          <motion.p
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{
              delay: stagger.normal * 2,
              duration: duration.fast,
              ease: easing.easeOut,
            }}
            className="text-xl text-slate-500 leading-relaxed max-w-2xl"
          >
            From data collection to deployment, we provide the primitives so you
            can{" "}
            <strong className="text-slate-900 font-semibold relative inline-block">
              train, iterate, and measure
              <span className="absolute bottom-0 left-0 w-full h-[6px] bg-blue-200/50 -z-10 rounded-full" />
            </strong>{" "}
            like it's a real ML system.
          </motion.p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {/* 1. DATASETS (Large Vertical) */}
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: duration.fast }}
            className="lg:col-span-1 md:col-span-2 group relative rounded-[2.5rem] bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200 overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="p-8 pb-0 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  <Database className="w-6 h-6" weight="duotone" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Datasets</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Large-scale, high-signal UI data: screenshots, DOM trees,
                actions, and outcomes.
              </p>
              {/* Visual: Trajectory Timeline */}
              <div className="relative w-full h-32 bg-slate-50 rounded-t-2xl border-t border-x border-slate-200 p-4 overflow-hidden">
                <div className="flex gap-2 mb-2">
                  <span className="text-[10px] font-mono text-slate-400">
                    trajectory_v4.json
                  </span>
                </div>
                <div className="flex gap-1 relative z-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-16 w-12 bg-white rounded border border-slate-200 shadow-xs flex flex-col gap-1 p-1"
                    >
                      <div className="w-full h-6 bg-slate-100 rounded-sm" />
                      <div
                        className={`w-3/4 h-1 rounded-full ${i % 2 === 0 ? "bg-blue-200" : "bg-green-200"}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-slate-50 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* 2. RL ENVIRONMENTS (Large Vertical) */}
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: duration.fast }}
            className="lg:col-span-1 md:col-span-1 group relative rounded-[2.5rem] bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200 overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="p-8 pb-0 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200">
                  <Monitor className="w-6 h-6" weight="duotone" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">RL Envs</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Deterministic, resettable sandboxes with step-level
                instrumentation.
              </p>
              {/* Visual: Terminal/Sandbox */}
              <div className="relative w-full h-32 bg-[#1e1e1e] rounded-t-2xl border-t border-x border-slate-800 p-4 font-mono text-[10px] text-slate-300 overflow-hidden">
                <div className="text-green-400">$ start-env --gym</div>
                <div className="text-slate-500">
                  Initializing Ubuntu 22.04...
                </div>
                <div className="text-blue-400">Connected to VNC:5900</div>
                <div className="text-slate-500">Reward hook active.</div>
              </div>
            </div>
          </motion.div>

          {/* 3. EVALS (Large Vertical) */}
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: duration.fast }}
            className="lg:col-span-1 md:col-span-1 group relative rounded-[2.5rem] bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200 overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="p-8 pb-0 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                  <ArrowClockwise className="w-6 h-6" weight="duotone" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Evals</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Replay runs, fork checkpoints, and compare policies against
                ground truth.
              </p>
              {/* Visual: Benchmark Chart */}
              <div className="relative w-full h-32 bg-white rounded-t-2xl border-t border-x border-slate-200 p-4 overflow-hidden">
                <div className="flex items-end justify-between h-16 gap-2 px-2">
                  <div className="w-full bg-slate-100 rounded-t-sm h-[40%]" />
                  <div className="w-full bg-slate-200 rounded-t-sm h-[60%]" />
                  <div className="w-full bg-emerald-500 rounded-t-sm h-[85%]" />
                </div>
                <div className="mt-2 text-[10px] text-center text-slate-400">
                  Success Rate
                </div>
              </div>
            </div>
          </motion.div>

          {/* DIVIDER / TITLE FOR AUDIENCE */}
          <div className="col-span-full py-4">
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Trusted by
            </h3>
          </div>

          {/* 4. LABS (Wide) */}
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: duration.fast }}
            className="lg:col-span-3 group relative rounded-[2.5rem] bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200 overflow-hidden flex flex-col md:flex-row p-8 gap-8 items-center"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-blue-600">
                  <Flask className="w-5 h-5" weight="duotone" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Frontier Labs
                </h4>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                Pre-train state-of-the-art VLMs on millions of hours of curated
                desktop interaction.
              </p>
              <div className="flex flex-wrap gap-2">
                {["VLM training", "RLHF", "Trajectory data"].map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border bg-white/50 backdrop-blur-sm shadow-xs border-slate-200/60 group-hover:border-slate-300/60 group-hover:bg-blue-50/50 transition-colors duration-150"
                  >
                    <CheckCircleIcon
                      className="w-3.5 h-3.5 shrink-0 text-blue-500"
                      weight="fill"
                    />
                    <span className="text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Labs Visual */}
            <div className="hidden lg:flex flex-col items-end gap-4 opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: cardAnimationEnd,
                  duration: duration.fast,
                  type: "spring",
                  bounce: 0,
                }}
              >
                <Image
                  src="/Autocorp-ai-TM-White.svg"
                  alt="AutoCorp"
                  width={150}
                  height={32}
                  className="object-contain invert"
                />
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: cardAnimationEnd + stagger.normal,
                  duration: duration.fast,
                  type: "spring",
                  bounce: 0,
                }}
              >
                <Image
                  src="/frontierai.png"
                  alt="FrontierAI"
                  width={96}
                  height={24}
                  className="object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: cardAnimationEnd + stagger.normal * 2,
                  duration: duration.fast,
                  type: "spring",
                  bounce: 0,
                }}
              >
                <Image
                  src="/agentlab-logo-small.png"
                  alt="AgentLab"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* 5. RESEARCHERS */}
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: duration.fast }}
            className="lg:col-span-1 group relative rounded-[2.5rem] bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200 overflow-hidden p-8"
          >
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-purple-600">
                  <Brain className="w-5 h-5" weight="duotone" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Researchers
                </h4>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                Benchmarking reasoning & safety.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["OSWorld", "WebArena", "Safety evals"].map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border bg-white/50 backdrop-blur-sm shadow-xs border-slate-200/60 group-hover:border-slate-300/60 group-hover:bg-purple-50/50 transition-colors duration-150"
                  >
                    <CheckCircleIcon
                      className="w-3.5 h-3.5 shrink-0 text-purple-500"
                      weight="fill"
                    />
                    <span className="text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 6. ENTERPRISES */}
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: duration.fast }}
            className="lg:col-span-1 group relative rounded-[2.5rem] bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200 overflow-hidden p-8"
          >
            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-indigo-600">
                  <Buildings className="w-5 h-5" weight="duotone" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Enterprises
                </h4>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                Secure, private automation.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["SOC 2", "On-prem", "SSO"].map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border bg-white/50 backdrop-blur-sm shadow-xs border-slate-200/60 group-hover:border-slate-300/60 group-hover:bg-indigo-50/50 transition-colors duration-150"
                  >
                    <CheckCircleIcon
                      className="w-3.5 h-3.5 shrink-0 text-indigo-500"
                      weight="fill"
                    />
                    <span className="text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 7. DATA TEAMS (Wide) */}
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: duration.fast }}
            className="lg:col-span-1 group relative rounded-[2.5rem] bg-white/60 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200 overflow-hidden p-8"
          >
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-emerald-600">
                  <HardDrives className="w-5 h-5" weight="duotone" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Data Teams</h4>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                Scalable collection with full provenance.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["DOM trees", "A11y", "Network"].map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border bg-white/50 backdrop-blur-sm shadow-xs border-slate-200/60 group-hover:border-slate-300/60 group-hover:bg-emerald-50/50 transition-colors duration-150"
                  >
                    <CheckCircleIcon
                      className="w-3.5 h-3.5 shrink-0 text-emerald-500"
                      weight="fill"
                    />
                    <span className="text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
