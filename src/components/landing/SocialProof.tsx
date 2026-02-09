"use client";

import {
  Buildings,
  Compass,
  Flask,
  Globe,
  Monitor,
  Robot,
  TreeStructure,
} from "@phosphor-icons/react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const TEAMS = [
  { name: "UI Agents", icon: Robot, color: "blue" },
  { name: "Workflow Automation", icon: TreeStructure, color: "sky" },
  { name: "OSWorld-style Evals", icon: Globe, color: "emerald" },
  { name: "Enterprise RPA", icon: Buildings, color: "slate" },
  { name: "Frontier Labs", icon: Flask, color: "purple" },
  { name: "Web Voyagers", icon: Compass, color: "cyan" },
  { name: "Desktop Automation", icon: Monitor, color: "orange" },
];

const firstRow = TEAMS.slice(0, Math.ceil(TEAMS.length / 2));
const secondRow = TEAMS.slice(Math.ceil(TEAMS.length / 2));

const TeamCard = ({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: React.ElementType;
  color: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-default overflow-hidden rounded-full py-2 px-4 transition-[transform,background-color,border-color,box-shadow] duration-150 ease-out",
        "border border-slate-200/60 bg-white/60 backdrop-blur-md",
        "hover:bg-white hover:shadow-lg hover:shadow-[#3AAFFF]/10 hover:-translate-y-0.5 hover:border-[#3AAFFF]/30",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className={cn(
            "flex shrink-0 items-center justify-center w-8 h-8 rounded-full",
            color === "blue" && "bg-blue-50 text-blue-600",
            color === "sky" && "bg-sky-50 text-[#0D8FD9]",
            color === "emerald" && "bg-emerald-50 text-emerald-600",
            color === "slate" && "bg-slate-100 text-slate-600",
            color === "purple" && "bg-purple-50 text-purple-600",
            color === "cyan" && "bg-cyan-50 text-cyan-600",
            color === "orange" && "bg-orange-50 text-orange-600",
          )}
        >
          <Icon className="w-4 h-4" weight="bold" />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-slate-700 leading-none">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function SocialProof() {
  return (
    <section className="py-12 bg-linear-to-b from-white/40 to-white/20 backdrop-blur-3xl overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
          Powering the next generation of
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((team) => (
            <TeamCard key={team.name} {...team} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((team) => (
            <TeamCard key={team.name} {...team} />
          ))}
        </Marquee>

        {/* Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-surface-hero-end from-60% to-transparent dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-surface-hero-end from-60%  to-transparent dark:from-background"></div>
      </div>
    </section>
  );
}
