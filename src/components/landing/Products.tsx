"use client";

import { ArrowUpRight, Box, Database, Layout } from "lucide-react";
import {
  motion,
  useSpring,
  useMotionTemplate,
  useInView
} from "motion/react";
import { useRef, useEffect } from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { cn } from "@/lib/utils";

function TrainingGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Start at 100% (hidden) and animate to 0% (visible)
  const clipPathValue = useSpring(100, { damping: 20, stiffness: 100 });
  const clipPathTemplate = useMotionTemplate`inset(0px ${clipPathValue}% 0px 0px)`;

  useEffect(() => {
    if (isInView) {
      // Add a small delay for dramatic effect
      const timer = setTimeout(() => {
        clipPathValue.set(0);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, clipPathValue]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {/* Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-20 pointer-events-none">
        <div className="w-full h-px bg-slate-300" />
        <div className="w-full h-px bg-slate-300" />
        <div className="w-full h-px bg-slate-300" />
        <div className="w-full h-px bg-slate-300" />
      </div>

      <motion.svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ clipPath: clipPathTemplate }}
      >
        <defs>
          <linearGradient id="curve-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Authentic Training Data Curve (Noise + Trend) */}
        <path
          d="M0,90 L5,88 L10,85 L15,87 L20,82 L25,78 L30,80 L35,70 L40,65 L45,68 L50,55 L55,45 L60,48 L65,35 L70,30 L75,32 L80,20 L85,15 L90,18 L95,12 L100,10"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Area Fill */}
        <path
          d="M0,90 L5,88 L10,85 L15,87 L20,82 L25,78 L30,80 L35,70 L40,65 L45,68 L50,55 L55,45 L60,48 L65,35 L70,30 L75,32 L80,20 L85,15 L90,18 L95,12 L100,10 L100,100 L0,100 Z"
          fill="url(#curve-gradient)"
          stroke="none"
        />
      </motion.svg>
    </div>
  );
}

export function Products() {
  return (
    <section className="py-32 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-mono font-medium uppercase tracking-wider backdrop-blur-sm">
              Product Suite
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-display"
          >
            The complete stack <br /> for computer-use agents.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:auto-rows-[500px]">
          {/* DATA CARD - Large Span */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className=" rounded-[2.5rem] bg-white/60 border border-slate-200/80 p-10 flex flex-col justify-between overflow-hidden relative group shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 mb-8">
              <div className="p-3 bg-white w-fit rounded-2xl text-blue-600 mb-6 shadow-sm border border-slate-100">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3 font-display">
                Data
              </h3>
              <p className="text-slate-500 text-lg max-w-md leading-relaxed">
                Trajectory capture at scale with full state tracking and ground
                truth labels.
              </p>
            </div>

            {/* Visual: JSON Stream */}
            <div className="relative flex-1 w-full bg-slate-50 rounded-2xl border border-slate-200/60 overflow-hidden flex flex-col shadow-inner group-hover:bg-white transition-colors">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/60 bg-white/50 backdrop-blur-sm">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  trajectory_v4.json
                </span>
              </div>

              <div className="p-5 font-mono text-xs md:text-sm text-slate-600 leading-relaxed overflow-hidden">
                <div className="opacity-50">{"{"}</div>
                <div className="pl-4">
                  <span className="text-purple-600">"agent_id"</span>:{" "}
                  <span className="text-emerald-600">"claude-3-opus"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-600">"trajectory"</span>: [
                </div>
                <div className="pl-8 bg-blue-50/50 -mx-4 px-9 py-1 border-y border-blue-100/50">
                  {"{"} <span className="text-purple-600">"action"</span>:{" "}
                  <span className="text-blue-600">"click"</span>,{" "}
                  <span className="text-purple-600">"target"</span>:{" "}
                  <span className="text-emerald-600">"button#submit"</span>{" "}
                  {"}"},
                </div>
                <div className="pl-8 py-0.5">
                  {"{"} <span className="text-purple-600">"action"</span>:{" "}
                  <span className="text-blue-600">"type"</span>,{" "}
                  <span className="text-purple-600">"value"</span>:{" "}
                  <span className="text-emerald-600">"research query"</span>{" "}
                  {"}"},
                </div>
                <div className="pl-8 py-0.5">
                  {"{"} <span className="text-purple-600">"action"</span>:{" "}
                  <span className="text-blue-600">"scroll"</span>,{" "}
                  <span className="text-purple-600">"y"</span>:{" "}
                  <span className="text-orange-600">850</span> {"}"},
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-purple-600">"reward"</span>:{" "}
                  <span className="text-orange-600">0.985</span>
                </div>
                <div className="opacity-50">{"}"}</div>
              </div>
            </div>
          </motion.div>

          {/* ENVIRONMENTS CARD - Tall Span with Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:row-span-2 rounded-[2.5rem] bg-[#0F1117] p-10 flex flex-col overflow-hidden relative group hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 border border-slate-800"
          >
            {/* Dark Glass Effect */}
            <div className="absolute inset-0 bg-linear-to-b from-[#0F1117] to-slate-950" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] opacity-100 pointer-events-none" />

            <div className="relative z-10 mb-10">
              <div className="p-3 bg-white/10 w-fit rounded-2xl text-white mb-6 backdrop-blur-md border border-white/10">
                <Layout className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 font-display">
                Environments
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Resettable desktop sandboxes.
              </p>
            </div>

            {/* Magic UI Terminal */}
            <div className="relative flex-1 w-full rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 bg-[#0F1117] min-h-[500px]">
              <Terminal className="h-full w-full bg-transparent p-6 font-mono text-sm leading-relaxed">
                <TypingAnimation className="text-slate-200 text-base">
                  start-env --os=ubuntu --gpu=true
                </TypingAnimation>

                <AnimatedSpan delay={1500} className="text-emerald-500">
                  ➜ Initializing sandbox environment...
                </AnimatedSpan>

                <AnimatedSpan delay={2000} className="text-emerald-500">
                  ➜ Mounting VNC filesystem...
                </AnimatedSpan>

                <AnimatedSpan delay={2500} className="text-blue-400">
                  ℹ GPU acceleration enabled (RTX 4090)
                </AnimatedSpan>

                <AnimatedSpan delay={3000} className="text-slate-400">
                  ➜ Loading generic-agent-v4...
                </AnimatedSpan>

                <AnimatedSpan delay={3500} className="text-slate-400">
                  ➜ Setting viewport: 1920x1080
                </AnimatedSpan>

                <AnimatedSpan
                  delay={4200}
                  className="text-emerald-500 font-bold"
                >
                  ✔ Ready. Connect at port 5900.
                </AnimatedSpan>

                <AnimatedSpan delay={5000} className="text-slate-500 mt-4">
                  $ agent run --task="book flight"
                </AnimatedSpan>
                <AnimatedSpan delay={5800} className="text-blue-300">
                  &gt; Navigating to kayak.com...
                </AnimatedSpan>
                <AnimatedSpan delay={6500} className="text-blue-300">
                  &gt; Selecting date: 2024-12-15
                </AnimatedSpan>
              </Terminal>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 relative z-10">
              {["Ubuntu", "Windows 11", "macOS"].map((os) => (
                <span
                  key={os}
                  className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                >
                  {os}
                </span>
              ))}
            </div>
          </motion.div>

          {/* TRAINING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-[2.5rem] bg-white/60 border border-slate-200/80 p-10 flex flex-col justify-between overflow-hidden relative group shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-500 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 mb-6">
              <div className="p-3 bg-white w-fit rounded-2xl text-emerald-600 mb-6 shadow-sm border border-slate-100">
                <Box className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3 font-display">
                Training
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                From demo to SOTA.
              </p>
            </div>

            {/* Visual: Training Curve */}
            <div className="relative h-48 w-full mt-auto">
              <TrainingGraph />

              {/* Metrics badges */}
              <div className="absolute -bottom-6 left-4 flex gap-3 z-10">
                <div className="px-3 py-1 bg-white/90 rounded-lg text-xs font-mono text-slate-600 shadow-sm border border-slate-200 backdrop-blur-sm">
                  Loss:{" "}
                  <span className="text-emerald-600 font-bold">0.024</span>
                </div>
                <div className="px-3 py-1 bg-white/90 rounded-lg text-xs font-mono text-slate-600 shadow-sm border border-slate-200 backdrop-blur-sm">
                  Success:{" "}
                  <span className="text-emerald-600 font-bold">98.5%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
