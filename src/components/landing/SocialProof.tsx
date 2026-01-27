import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import {
  Bot,
  Workflow,
  Globe,
  Building2,
  FlaskConical,
  Compass,
  Monitor
} from "lucide-react";

const TEAMS = [
  { name: "UI Agents", icon: Bot },
  { name: "Workflow Automation", icon: Workflow },
  { name: "OSWorld-style Evals", icon: Globe },
  { name: "Enterprise RPA", icon: Building2 },
  { name: "Frontier Labs", icon: FlaskConical },
  { name: "Web Voyagers", icon: Compass },
  { name: "Desktop Automation", icon: Monitor }
];

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
        "relative w-64 cursor-default overflow-hidden rounded-xl p-4",
        // light styles
        "bg-gray-950/5 hover:bg-gray-950/5",
        // dark styles
        "dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10">
          <Icon className="w-5 h-5 opacity-70" />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
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

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee
          pauseOnHover
          className="[--duration:40s]"
        >
          {TEAMS.map((team) => (
            <TeamCard key={team.name} {...team} />
          ))}
        </Marquee>

        {/* Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white via-white/50 to-transparent dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white via-white/50 to-transparent dark:from-background"></div>
      </div>
    </section>
  );
}
