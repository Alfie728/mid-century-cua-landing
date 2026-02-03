"use client";

import { DiscordLogo, GithubLogo, TwitterLogo } from "@phosphor-icons/react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200 font-sans relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[200px] bg-blue-500/15 rounded-full blur-[80px] pointer-events-none translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/15 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 flex flex-col items-start">
            <Link
              href="/"
              className="inline-block text-2xl font-bold text-slate-900 mb-6 font-display tracking-tight hover:opacity-80 transition-opacity"
            >
              MidCentury
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8 text-balance">
              The infrastructure layer for computer-using agents. Capture,
              train, and evaluate on any OS, at scale.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <TwitterLogo size={20} weight="fill" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <GithubLogo size={20} weight="fill" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <DiscordLogo size={20} weight="fill" />
              </Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 font-display">
              Product
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors block py-0.5"
                >
                  Dataset Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors block py-0.5"
                >
                  Environment Runtime
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors block py-0.5"
                >
                  Evaluation Suite
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors block py-0.5"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 font-display">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors block py-0.5"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors block py-0.5"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors block py-0.5"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contact@midcentury.xyz"
                  className="hover:text-indigo-600 transition-colors block py-0.5"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-slate-900 font-bold mb-6 font-display">
              Legal
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors block py-0.5"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors block py-0.5"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors block py-0.5"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-400 font-mono">
            © {new Date().getFullYear()} MidCentury Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
