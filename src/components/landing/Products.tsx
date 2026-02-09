"use client";

import { Cube, Database, Layout } from "@phosphor-icons/react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect, useEffectEvent, useRef } from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { duration, easing, stagger } from "@/lib/animation";

function TrainingGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-200px" });
  const shouldReduceMotion = useReducedMotion();

  // Start at 100% (hidden) and animate to 0% (visible)
  const clipPathValue = useSpring(shouldReduceMotion ? 0 : 100, {
    bounce: 0,
    duration: 1100,
  });
  const clipPathTemplate = useMotionTemplate`inset(0px ${clipPathValue}% 0px 0px)`;

  const onReveal = useEffectEvent(() => {
    const timer = setTimeout(() => {
      clipPathValue.set(0);
    }, 200);
    return () => clearTimeout(timer);
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: useEffectEvent handles dependencies
  useEffect(() => {
    if (isInView && !shouldReduceMotion) {
      return onReveal();
    }
  }, [isInView, shouldReduceMotion]);

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
        aria-hidden="true"
      >
        <defs>
          {/* Using Tailwind emerald-500 equivalent */}
          <linearGradient id="curve-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="oklch(0.696 0.17 162.48)"
              stopOpacity="0.2"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.696 0.17 162.48)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* Authentic Training Data Curve (Noise + Trend) - using emerald-500 */}
        <path
          d="M0,90 L5,88 L10,85 L15,87 L20,82 L25,78 L30,80 L35,70 L40,65 L45,68 L50,55 L55,45 L60,48 L65,35 L70,30 L75,32 L80,20 L85,15 L90,18 L95,12 L100,10"
          fill="none"
          stroke="oklch(0.696 0.17 162.48)"
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
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };
  const animate = { opacity: 1, transform: "translateY(0px)" };

  return (
    <section className="py-32 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20">
          <motion.h2
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{
              delay: stagger.normal,
              duration: duration.fast,
              ease: easing.easeOut,
            }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-display"
          >
            The{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-br from-[#0D8FD9] to-[#3AAFFF]">
              complete stack
            </span>{" "}
            <br /> for computer-use agents.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:auto-rows-[500px]">
          {/* DATA CARD - Large Span */}
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{
              delay: stagger.normal * 2,
              duration: duration.fast,
              ease: easing.easeOut,
            }}
            className="rounded-[2.5rem] bg-white/60 border border-slate-200/80 p-10 flex flex-col justify-between overflow-hidden relative group shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

            <div className="relative z-10 mb-8">
              <div className="h-14 w-14 rounded-2xl bg-white/80 border border-white/50 shadow-sm flex items-center justify-center text-blue-500 mb-6 transition-all duration-200 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 backdrop-blur-md">
                <Database className="w-7 h-7" weight="duotone" />
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
            <div className="relative flex-1 w-full bg-slate-50 rounded-2xl border border-slate-200/60 overflow-hidden flex flex-col shadow-inner group-hover:bg-white transition-colors duration-200">
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

              <div className="p-5 font-mono text-xs md:text-sm text-slate-600 leading-relaxed overflow-scroll">
                <div className="opacity-50">{"{"}</div>
                <div className="pl-4">
                  <span className="text-purple-600">"agent_id"</span>:{" "}
                  <span className="text-emerald-600">"claude-4-opus"</span>,
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
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{
              delay: stagger.normal * 3,
              duration: duration.fast,
              ease: easing.easeOut,
            }}
            className="md:row-span-2 rounded-[2.5rem] bg-white/60 border border-slate-200/80 p-10 flex flex-col overflow-hidden relative group shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

            <div className="relative z-10 mb-8">
              <div className="h-14 w-14 rounded-2xl bg-white/80 border border-white/50 shadow-sm flex items-center justify-center text-indigo-500 mb-6 transition-all duration-200 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 backdrop-blur-md">
                <Layout className="w-7 h-7" weight="duotone" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3 font-display">
                Environments
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Resettable desktop sandboxes.
              </p>
            </div>

            {/* Light Terminal with Animated Sequence */}
            <Terminal
              className="relative flex-1 w-full !bg-slate-50 !rounded-2xl !border-slate-200/60 overflow-hidden flex flex-col shadow-inner group-hover:!bg-white transition-colors duration-200 min-h-[400px] !max-w-none"
              sequence={true}
              startOnView={true}
            >
              <TypingAnimation className="text-slate-800 font-medium">
                $ start-env --os=ubuntu --gpu=true
              </TypingAnimation>
              <AnimatedSpan className="text-emerald-600 mt-2">
                ➜ Initializing sandbox environment...
              </AnimatedSpan>
              <AnimatedSpan className="text-emerald-600">
                ➜ Mounting VNC filesystem...
              </AnimatedSpan>
              <AnimatedSpan className="text-blue-600">
                ℹ GPU acceleration enabled (RTX 4090)
              </AnimatedSpan>
              <AnimatedSpan className="text-slate-500">
                ➜ Loading generic-agent-v4...
              </AnimatedSpan>
              <AnimatedSpan className="text-slate-500">
                ➜ Setting viewport: 1920x1080
              </AnimatedSpan>
              <AnimatedSpan className="text-emerald-600 font-semibold">
                ✔ Ready. Connect at port 5900.
              </AnimatedSpan>
              <TypingAnimation className="text-slate-500 mt-4">
                $ agent run --task="book flight"
              </TypingAnimation>
              <AnimatedSpan className="text-indigo-600">
                &gt; Navigating to kayak.com...
              </AnimatedSpan>
              <AnimatedSpan className="text-indigo-600">
                &gt; Selecting date: 2024-12-15
              </AnimatedSpan>
            </Terminal>

            <div className="mt-6 flex flex-wrap gap-2 relative z-10">
              {["Ubuntu", "Windows 11", "macOS"].map((os) => (
                <span
                  key={os}
                  className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm border border-slate-200 hover:bg-slate-200 hover:border-slate-300 transition-colors duration-150 cursor-default"
                >
                  {os}
                </span>
              ))}
            </div>
          </motion.div>

          {/* TRAINING CARD */}
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{
              delay: stagger.normal * 4,
              duration: duration.fast,
              ease: easing.easeOut,
            }}
            className="rounded-[2.5rem] bg-white/60 border border-slate-200/80 p-10 flex flex-col justify-between overflow-hidden relative group shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-white transition-all duration-200 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

            <div className="relative z-10 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-white/80 border border-white/50 shadow-sm flex items-center justify-center text-emerald-500 mb-6 transition-all duration-200 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 backdrop-blur-md">
                <Cube className="w-7 h-7" weight="duotone" />
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
