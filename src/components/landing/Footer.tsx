"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="group bg-slate-50 pt-20 pb-10 border-t border-slate-200 font-sans relative overflow-hidden">
      {/* Background Gradients - appear on hover */}
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3AAFFF]/15 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
      <div className="absolute -bottom-1/4 right-1/4 w-[600px] h-[200px] bg-blue-500/15 rounded-full blur-[80px] pointer-events-none translate-y-1/3 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-75" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/15 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-100" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-150" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Top section: Brand + tagline + contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-3">
            <Link
              href="/"
              className="inline-block text-2xl font-bold text-slate-900 font-display tracking-tight hover:opacity-80 transition-opacity rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AAFFF] focus-visible:ring-offset-2"
            >
              Traceform
            </Link>
          </div>

          {/* Tagline */}
          <div className="md:col-span-5">
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm">
              The infrastructure layer for computer-using agents. Capture,
              train, and evaluate on any OS, at scale.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 md:text-right">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
              Get in touch
            </p>
            <Link
              href="mailto:contact@traceform.xyz"
              className="text-sm text-slate-600 hover:text-[#0D8FD9] transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3AAFFF] focus-visible:ring-offset-2"
            >
              contact@traceform.xyz
            </Link>
          </div>
        </div>

        {/* Bottom section: Copyright + Legal */}
        <div className="pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-mono">
            © {new Date().getFullYear()} Traceform Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-xs text-slate-400 hover:text-[#0D8FD9] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-400 hover:text-[#0D8FD9] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-slate-400 hover:text-[#0D8FD9] transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
