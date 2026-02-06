"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TraceformLogo } from "@/components/ui/TraceformLogo";
import { cn } from "@/lib/utils";

export function MinimalNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const lastScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== lastScrolled.current) {
        lastScrolled.current = isScrolled;
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out motion-reduce:transition-none",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          className={cn(
            "flex items-center rounded-2xl transition-all duration-300 ease-out motion-reduce:transition-none",
            scrolled
              ? "px-6 py-3"
              : "bg-transparent border border-transparent px-0 py-0",
          )}
          style={
            scrolled
              ? {
                  background: "rgba(243, 243, 243, 0.22)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  border: "1px solid rgba(243, 243, 243, 0.36)",
                }
              : undefined
          }
        >
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative flex items-center justify-center size-10 rounded-xl">
              <TraceformLogo className="size-full" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              Traceform
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
