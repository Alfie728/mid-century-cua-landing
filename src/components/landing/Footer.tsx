"use client";

import Link from "next/link";
import {
  TwitterLogo,
  GithubLogo,
  DiscordLogo
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-[#0F1117] text-slate-400 py-16 md:py-24 border-t border-slate-800 font-sans relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block text-2xl font-bold text-white mb-6 font-display tracking-tight hover:opacity-90 transition-opacity">
              MidCentury
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
              The infrastructure layer for computer-using agents.
              Capture, train, and evaluate on any OS, at scale.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all border border-white/5 hover:border-white/10">
                <TwitterLogo size={20} weight="fill" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all border border-white/5 hover:border-white/10">
                <GithubLogo size={20} weight="fill" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all border border-white/5 hover:border-white/10">
                <DiscordLogo size={20} weight="fill" />
              </Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Product</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Dataset Catalog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Environment Runtime</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Evaluation Suite</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="mailto:contact@midcentury.xyz" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-6 font-display">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 font-mono">
            © {new Date().getFullYear()} MidCentury Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-emerald-500 font-mono uppercase tracking-wider">Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
