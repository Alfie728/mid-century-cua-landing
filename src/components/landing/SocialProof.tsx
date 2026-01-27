import {
  Bot,
  Building2,
  Compass,
  FlaskConical,
  Globe,
  Monitor,
  Workflow,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const TEAMS = [
  { name: "UI Agents", icon: Bot },
  { name: "Workflow Automation", icon: Workflow },
  { name: "OSWorld-style Evals", icon: Globe },
  { name: "Enterprise RPA", icon: Building2 },
  { name: "Frontier Labs", icon: FlaskConical },
  { name: "Web Voyagers", icon: Compass },
  { name: "Desktop Automation", icon: Monitor },
];

const firstRow = TEAMS.slice(0, Math.ceil(TEAMS.length / 2));
const secondRow = TEAMS.slice(Math.ceil(TEAMS.length / 2));

const TeamCard = ({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ElementType;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-default overflow-hidden rounded-xl p-4 transition-all duration-300",
        // light styles
        "bg-gray-950/5 hover:bg-gray-950/10",
        // dark styles
        "dark:bg-gray-50/10 dark:hover:bg-gray-50/15",
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-lg bg-black/5 dark:bg-white/10">
          <Icon className="w-5 h-5 opacity-70" />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-slate-700 dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function SocialProof() {
  return (
    <section className="py-10 bg-linear-to-b from-white/40 to-white/20 backdrop-blur-3xl overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
          Used by teams building
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((team) => (
            <TeamCard key={team.name} {...team} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((team) => (
            <TeamCard key={team.name} {...team} />
          ))}
        </Marquee>

        {/* Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-[#FAFCFD] from-60% to-transparent dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-[#FAFCFD] from-60%  to-transparent dark:from-background"></div>
      </div>
    </section>
  );
}
