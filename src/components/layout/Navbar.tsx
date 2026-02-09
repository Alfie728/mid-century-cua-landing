"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TraceformLogo } from "@/components/ui/TraceformLogo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
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

  const links = [
    { label: "Features", href: "#features" },
    { label: "Process", href: "#process" },
    { label: "Products", href: "#products" },
    { label: "Industries", href: "#verticals" },
    { label: "Download", href: "#download" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      const navbarHeight = 80;
      const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
            "flex items-center justify-between rounded-2xl transition-all duration-300 ease-out motion-reduce:transition-none",
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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={cn(
                "relative flex items-center justify-center size-10 rounded-xl transition-all duration-200 ease motion-reduce:transition-none",
                scrolled ? "bg-transparent" : "bg-transparent",
              )}
            >
              <TraceformLogo className="size-full" />
            </div>
            <span
              className={cn(
                "font-display font-bold text-xl tracking-tight transition-colors duration-200",
                scrolled ? "text-slate-900" : "text-slate-900",
              )}
            >
              Traceform
            </span>
          </Link>

          {/* Desktop Nav */}
          {isHomePage && (
            <nav className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ease motion-reduce:transition-none",
                    scrolled
                      ? "text-slate-600 hover:text-[#0D8FD9] hover:bg-[#3AAFFF]/10"
                      : "text-slate-600 hover:text-[#0D8FD9] hover:bg-[#3AAFFF]/10",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/about-us"
              className={cn(
                "hidden sm:block px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ease motion-reduce:transition-none",
                scrolled
                  ? "text-slate-600 hover:text-[#0D8FD9] hover:bg-[#3AAFFF]/10"
                  : "text-slate-600 hover:text-[#0D8FD9] hover:bg-[#3AAFFF]/10",
              )}
            >
              About
            </Link>
            <Link
              href="#download"
              className={cn(
                "px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ease-out motion-reduce:transition-none",
                "bg-gradient-to-r from-[#0D8FD9] to-[#3AAFFF] text-white",
                "hover:shadow-lg hover:shadow-[#3AAFFF]/30 hover:-translate-y-0.5",
                "active:scale-[0.98]",
              )}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
