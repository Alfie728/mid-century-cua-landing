"use client";

import { motion } from "motion/react";
import { Database, Layout, Box, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Products() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Core Products</h2>
          <p className="text-xl text-slate-500">The complete stack for computer-use agents</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

          {/* DATA CARD - Large Span */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 rounded-[2.5rem] bg-white border border-slate-200 p-10 flex flex-col justify-between overflow-hidden relative group hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <div className="p-3 bg-blue-100 w-fit rounded-2xl text-blue-600 mb-6">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Data</h3>
              <p className="text-slate-500 text-lg max-w-md">Trajectory capture at scale with full state tracking and ground truth labels.</p>
            </div>

            <div className="mt-8 relative h-full w-full bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden flex items-center justify-center group-hover:border-blue-100 transition-colors">
              {/* Abstract UI Representation */}
              <div className="absolute inset-4 bg-white shadow-sm rounded-xl p-4 flex flex-col gap-3 opacity-50 group-hover:opacity-100 transition-opacity transform group-hover:translate-y-2 duration-500">
                <div className="w-full h-4 bg-slate-100 rounded-lg animate-pulse" />
                <div className="w-2/3 h-4 bg-slate-100 rounded-lg animate-pulse delay-100" />
                <div className="w-full h-32 bg-blue-50/50 rounded-lg border border-blue-100 mt-2" />
              </div>
            </div>
          </motion.div>

          {/* ENVIRONMENTS CARD - Tall Span */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:row-span-2 rounded-[2.5rem] bg-slate-900 text-white p-10 flex flex-col overflow-hidden relative group hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-900/50 to-transparent" />

            <div className="relative z-10 mb-auto">
              <div className="p-3 bg-white/10 w-fit rounded-2xl text-white mb-6 backdrop-blur-md">
                <Layout className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Environments</h3>
              <p className="text-slate-400 text-lg">Resettable desktop sandboxes.</p>
            </div>

            <div className="mt-10 relative h-[400px] w-full bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden group-hover:border-indigo-500/50 transition-colors">
              {/* Terminal Representation */}
              <div className="p-4 font-mono text-xs text-green-400 space-y-2">
                <div className="typing-effect">
                  $ start-env --os=ubuntu<br />
                  &gt; Initializing sandbox...<br />
                  &gt; Connecting VNC...<br />
                  &gt; Ready.
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 relative z-10">
              <span className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/5">Ubuntu</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/5">Windows 11</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/5">macOS</span>
            </div>
          </motion.div>

          {/* TRAINING CARD */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-[2.5rem] bg-white border border-slate-200 p-10 flex flex-col justify-between overflow-hidden relative group hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="p-3 bg-emerald-100 w-fit rounded-2xl text-emerald-600 mb-6">
                <Box className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Training</h3>
              <p className="text-slate-500 text-lg">From demo to SOTA.</p>
            </div>

            <div className="mt-auto flex items-center justify-end">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
