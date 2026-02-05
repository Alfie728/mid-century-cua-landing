"use client";

import { useState } from "react";
import {
  BankIcon,
  BrowserIcon,
  DesktopIcon,
  HospitalIcon,
  ScalesIcon,
  TerminalIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { duration, easing, stagger } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { Slideshow, type SlideItem } from "@/components/ui/slideshow";

const INDUSTRIES: SlideItem[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "EHR systems, patient portals, clinical workflows. HIPAA-aware data collection across Epic, Cerner, and custom medical software.",
    image: "/assets/landing/healthcare.jpg",
    icon: HospitalIcon,
    color: "emerald",
  },
  {
    id: "finance",
    title: "Finance",
    description:
      "Trading platforms, banking applications, compliance workflows. SEC-compliant data from Bloomberg terminals to retail banking.",
    image: "/assets/landing/finance.jpg",
    icon: BankIcon,
    color: "blue",
  },
  {
    id: "law",
    title: "Law",
    description:
      "Case management, contract review, e-discovery tools. Training data from legal research platforms and document management systems.",
    image: "/assets/landing/law.jpg",
    icon: ScalesIcon,
    color: "purple",
  },
];

const ENVIRONMENTS: SlideItem[] = [
  {
    id: "legacy",
    title: "Legacy Infrastructure",
    description:
      "SAP, Citrix, Windows XP, mainframe terminals. We capture interactions from systems that most automation tools can't touch.",
    image: "/assets/landing/legacy-ui.png",
    icon: DesktopIcon,
    color: "amber",
  },
  {
    id: "modern",
    title: "Modern SaaS Stack",
    description:
      "Slack, Discord, GitHub, Salesforce. Real-time interaction data from the tools teams use every day.",
    image: "/assets/landing/modern-ui.png",
    icon: BrowserIcon,
    color: "blue",
  },
  {
    id: "custom",
    title: "Custom Tooling",
    description:
      "Electron apps, RDP sessions, VNC connections. Any interface your agents need to master.",
    image: "/assets/landing/terminal-ui.png",
    icon: TerminalIcon,
    color: "purple",
  },
];

type TabType = "industries" | "environments";

const tabVariants = {
  initial: (direction: number) => ({
    x: `${10 * direction}%`,
    opacity: 0,
  }),
  active: {
    x: "0%",
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: `${-10 * direction}%`,
    opacity: 0,
  }),
};

export function Verticals() {
  const [activeTab, setActiveTab] = useState<TabType>("industries");
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  const handleTabChange = (tab: TabType) => {
    if (tab === activeTab) return;
    setDirection(tab === "environments" ? 1 : -1);
    setActiveTab(tab);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.h2
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{
              delay: stagger.normal,
              duration: duration.fast,
              ease: easing.easeOut,
            }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight leading-[1.1]"
          >
            Built for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-blue-600">
              regulated industries
            </span>
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
            className="text-lg text-slate-600 leading-relaxed"
          >
            Training data that understands compliance requirements and works
            across every layer of the computing stack.
          </motion.p>
        </div>

        {/* Top-level tabs */}
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{
            delay: stagger.normal * 3,
            duration: duration.fast,
            ease: easing.easeOut,
          }}
          className="mb-12"
        >
          <div className="inline-flex p-1.5 bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-full shadow-sm">
            <button
              type="button"
              onClick={() => handleTabChange("industries")}
              className={cn(
                "relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer",
                activeTab === "industries"
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {activeTab === "industries" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">By Industry</span>
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("environments")}
              className={cn(
                "relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer",
                activeTab === "environments"
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {activeTab === "environments" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">By Environment</span>
            </button>
          </div>
        </motion.div>

        {/* Slideshow content */}
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{
            delay: stagger.normal * 4,
            duration: duration.fast,
            ease: easing.easeOut,
          }}
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="initial"
              animate="active"
              exit="exit"
              custom={direction}
              transition={{ duration: 0.6, type: "spring", bounce: 0 }}
            >
              <Slideshow
                items={activeTab === "industries" ? INDUSTRIES : ENVIRONMENTS}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
