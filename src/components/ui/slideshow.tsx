"use client";

import type { Icon } from "@phosphor-icons/react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { easing } from "@/lib/animation";
import { type AccentColor, accentColors } from "@/lib/colors";
import { cn } from "@/lib/utils";

export type SlideItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: Icon;
  color: AccentColor;
};

type SlideshowProps = {
  items: SlideItem[];
  collapseDelay?: number;
};

export function Slideshow({ items, collapseDelay = 5000 }: SlideshowProps) {
  // Start with -1 so no item is selected until we're in view
  const [currentIndex, setCurrentIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  const handleItemClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Initialize after coming into view (with small delay)
  useEffect(() => {
    if (isInView && currentIndex === -1) {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, currentIndex]);

  // Auto-advance timer
  useEffect(() => {
    if (!isInView || shouldReduceMotion || currentIndex === -1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, collapseDelay);

    return () => clearInterval(interval);
  }, [isInView, items.length, collapseDelay, shouldReduceMotion, currentIndex]);

  const currentItem = currentIndex >= 0 ? items[currentIndex] : items[0];

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center"
    >
      {/* Left side - Accordion */}
      <div className="lg:col-span-2 flex flex-col gap-3">
        {items.map((item, index) => {
          const isActive = currentIndex === index;
          const colors = accentColors[item.color];
          const IconComponent = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleItemClick(index)}
              className={cn(
                "relative text-left p-6 rounded-[1.5rem] transition-all duration-200 cursor-pointer group border",
                isActive
                  ? "bg-white/80 backdrop-blur-md border-slate-200/80 shadow-lg"
                  : "bg-white/40 border-transparent hover:bg-white/60 hover:border-slate-200/50",
              )}
            >
              {/* Gradient overlay on hover/active */}
              <div
                className={cn(
                  "absolute inset-0 rounded-[1.5rem] bg-gradient-to-br opacity-0 transition-opacity duration-200 pointer-events-none",
                  isActive ? "opacity-100" : "group-hover:opacity-50",
                  colors.gradient,
                )}
              />

              <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200",
                      isActive
                        ? `${colors.bg} border-transparent text-white`
                        : `bg-white border-slate-200 ${colors.text}`,
                    )}
                  >
                    <IconComponent weight="duotone" className="w-5 h-5" />
                  </div>
                  <h3
                    className={cn(
                      "text-lg font-semibold font-display tracking-tight transition-colors duration-200",
                      isActive
                        ? "text-slate-900"
                        : "text-slate-600 group-hover:text-slate-800",
                    )}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Description - only visible when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2, ease: easing.easeOut }}
                      className="text-slate-500 text-sm leading-relaxed pl-14"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Progress line at bottom - CSS transition based */}
              {!shouldReduceMotion && (
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-slate-200/60 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all ease-linear",
                      colors.bg,
                      isActive ? "w-full" : "w-0",
                    )}
                    style={{
                      transitionDuration: isActive
                        ? `${collapseDelay}ms`
                        : "0ms",
                    }}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Right side - Image */}
      <div className="lg:col-span-3 relative">
        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-white/60 backdrop-blur-md border border-slate-200/80 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: easing.easeOut }}
              className="absolute inset-2 rounded-[2rem] overflow-hidden"
            >
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-cover object-[50%_45%] "
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
