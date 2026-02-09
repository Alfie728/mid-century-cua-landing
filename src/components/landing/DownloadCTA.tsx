"use client";

import { AppleLogo, DownloadSimple, Record } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { duration, easing, stagger } from "@/lib/animation";

export function DownloadCTA() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };
  const animate = { opacity: 1, transform: "translateY(0px)" };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{
            delay: stagger.normal,
            duration: duration.fast,
            ease: easing.easeOut,
          }}
          className="rounded-[2.5rem] bg-white/60 backdrop-blur-md border border-slate-200/80 p-10 md:p-16 relative overflow-hidden group"
        >
          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AAFFF]/10 via-transparent to-[#0D8FD9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h2
                initial={initial}
                whileInView={animate}
                viewport={{ once: true }}
                transition={{
                  delay: stagger.normal * 3,
                  duration: duration.fast,
                  ease: easing.easeOut,
                }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight font-display"
              >
                Start collecting{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0D8FD9] to-[#3AAFFF]">
                  trajectory data
                </span>{" "}
                today.
              </motion.h2>

              <motion.p
                initial={initial}
                whileInView={animate}
                viewport={{ once: true }}
                transition={{
                  delay: stagger.normal * 4,
                  duration: duration.fast,
                  ease: easing.easeOut,
                }}
                className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Glmpse runs quietly in the background, capturing screenshots,
                DOM state, and user actions with full privacy controls. Perfect
                for building computer-use agent training data.
              </motion.p>

              {/* Features list */}
              <motion.div
                initial={initial}
                whileInView={animate}
                viewport={{ once: true }}
                transition={{
                  delay: stagger.normal * 5,
                  duration: duration.fast,
                  ease: easing.easeOut,
                }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
              >
                {[
                  "Screenshot capture",
                  "Action logging",
                  "Privacy-first",
                  "Low overhead",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0D8FD9]" />
                    {feature}
                  </div>
                ))}
              </motion.div>

              {/* Download button */}
              <motion.div
                initial={initial}
                whileInView={animate}
                viewport={{ once: true }}
                transition={{
                  delay: stagger.normal * 6,
                  duration: duration.fast,
                  ease: easing.easeOut,
                }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://cua-platform.s3.us-east-1.amazonaws.com/Glmpse-stapled.zip"
                  download
                  className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0D8FD9] to-[#3AAFFF] text-white font-semibold text-lg shadow-lg shadow-[#3AAFFF]/30 hover:shadow-xl hover:shadow-[#3AAFFF]/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
                >
                  <AppleLogo className="w-6 h-6" weight="fill" />
                  Download for macOS
                  <DownloadSimple className="w-5 h-5 group-hover/btn:translate-y-0.5 transition-transform duration-200" />
                </a>
                <span className="text-sm text-slate-400">
                  Apple Silicon • v1.0.0
                </span>
              </motion.div>
            </div>

            {/* Right visual - App preview */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: stagger.normal * 4,
                duration: duration.normal,
                ease: easing.easeOut,
              }}
              className="flex-shrink-0"
            >
              <div className="relative">
                {/* App window mockup */}
                <div className="w-[280px] md:w-[320px] rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
                  {/* Window header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 ml-2">
                      Glmpse
                    </span>
                  </div>

                  {/* App content */}
                  <div className="p-6 space-y-4">
                    {/* Status indicator */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Record
                            className="w-5 h-5 text-emerald-500"
                            weight="fill"
                          />
                          <div className="absolute inset-0 w-5 h-5 bg-emerald-500 rounded-full animate-ping opacity-25" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          Recording
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        00:45:23
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-2xl font-bold text-slate-900">
                          1,247
                        </div>
                        <div className="text-xs text-slate-500">
                          Screenshots
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-2xl font-bold text-slate-900">
                          3,891
                        </div>
                        <div className="text-xs text-slate-500">Actions</div>
                      </div>
                    </div>

                    {/* Recent activity */}
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                        Recent
                      </div>
                      {[
                        { action: "click", target: "Submit button" },
                        { action: "type", target: "Search input" },
                        { action: "scroll", target: "Page down" },
                      ].map((item) => (
                        <div
                          key={item.target}
                          className="flex items-center justify-between text-xs py-1.5 border-b border-slate-50 last:border-0"
                        >
                          <span className="text-slate-600">{item.target}</span>
                          <span className="px-2 py-0.5 rounded-full bg-sky-50 text-[#0D8FD9] font-medium">
                            {item.action}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
