"use client";

import {
  BankIcon,
  BrowserIcon,
  DesktopIcon,
  HospitalIcon,
  ScalesIcon,
  TerminalIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { type SlideItem, Slideshow } from "@/components/ui/slideshow";
import { duration, easing, stagger } from "@/lib/animation";

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
    image: "/assets/landing/legacy.jpg",
    icon: DesktopIcon,
    color: "amber",
  },
  {
    id: "modern",
    title: "Modern SaaS Stack",
    description:
      "Outlook, Slack, GitHub, Salesforce. Real-time interaction data from the tools teams use every day.",
    image: "/assets/landing/modern.jpg",
    icon: BrowserIcon,
    color: "blue",
  },
  {
    id: "custom",
    title: "Custom Tooling",
    description:
      "Electron apps, RDP sessions, VNC connections. Any interface your agents need to master.",
    image: "/assets/landing/terminal.jpg",
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

export function UseCases() {
  const [activeTab, setActiveTab] = useState<TabType>("industries");
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabElementRef = useRef<HTMLButtonElement>(null);

  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  useEffect(() => {
    const container = containerRef.current;

    if (activeTab && container) {
      const activeTabElement = activeTabElementRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;
        container.style.clipPath = `inset(0 ${Math.round(100 - (clipRight / container.offsetWidth) * 100)}% 0 ${Math.round((clipLeft / container.offsetWidth) * 100)}% round 9999px)`;
      }
    }
  }, [activeTab]);

  const handleTabChange = (tab: TabType) => {
    if (tab === activeTab) return;
    setDirection(tab === "environments" ? 1 : -1);
    setActiveTab(tab);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header row - title left, tabs right */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{
              delay: stagger.normal,
              duration: duration.fast,
              ease: easing.easeOut,
            }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display tracking-tight leading-[1.1]">
              <AnimatePresence mode="wait">
                {activeTab === "industries" ? (
                  <motion.span
                    key="industries-title"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Built for{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0D8FD9] to-[#3AAFFF]">
                      diverse industries
                    </span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="environments-title"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Works across{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0D8FD9] to-[#3AAFFF]">
                      every layer
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </h2>
          </motion.div>

          {/* Tabs with clipPath animation */}
          <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true }}
            transition={{
              delay: stagger.normal * 2,
              duration: duration.fast,
              ease: easing.easeOut,
            }}
            className="relative"
          >
            {/* Base tabs */}
            <div className="inline-flex bg-white/60 backdrop-blur-md rounded-full shadow-sm">
              <button
                ref={activeTab === "industries" ? activeTabElementRef : null}
                type="button"
                onClick={() => handleTabChange("industries")}
                className="h-[34px] px-5 flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
              >
                By Industry
              </button>
              <button
                ref={activeTab === "environments" ? activeTabElementRef : null}
                type="button"
                onClick={() => handleTabChange("environments")}
                className="h-[34px] px-5 flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
              >
                By Environment
              </button>
            </div>

            {/* Overlay with clipPath */}
            <div
              aria-hidden
              ref={containerRef}
              className="absolute inset-0 z-10 overflow-hidden transition-[clip-path] duration-300 ease-out pointer-events-none"
            >
              <div className="inline-flex rounded-full bg-gradient-to-r from-[#0D8FD9] to-[#3AAFFF]">
                <button
                  type="button"
                  className="h-[34px] px-5 flex items-center text-sm font-medium text-white cursor-pointer"
                  tabIndex={-1}
                >
                  By Industry
                </button>
                <button
                  type="button"
                  className="h-[34px] px-5 flex items-center text-sm font-medium text-white cursor-pointer"
                  tabIndex={-1}
                >
                  By Environment
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{
            delay: stagger.normal * 3,
            duration: duration.fast,
            ease: easing.easeOut,
          }}
          className="text-lg text-slate-500 leading-relaxed max-w-xl mb-12"
        >
          <AnimatePresence mode="wait">
            {activeTab === "industries" ? (
              <motion.span
                key="industries-desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                Training data that understands compliance requirements across
                healthcare, finance, and legal workflows.
              </motion.span>
            ) : (
              <motion.span
                key="environments-desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                From legacy mainframes to modern SaaS, we capture interactions
                across the entire computing stack.
              </motion.span>
            )}
          </AnimatePresence>
        </motion.p>

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
