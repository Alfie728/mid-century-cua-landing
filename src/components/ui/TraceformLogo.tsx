import { cn } from "@/lib/utils";

export function TraceformLogo({ className }: { className?: string }) {
  const id = "traceform-logo-" + Math.random().toString(36).substr(2, 9);
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-10", className)}
    >
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1="10"
          y1="5"
          x2="30"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0D8FD9" />
          <stop offset="1" stopColor="#3AAFFF" />
        </linearGradient>
      </defs>

      {/* Futuristic T Shape 
          Concept: Sci-Fi Glyph.
          Sharp angles, aggressive taper.
      */}
      <path
        d="M8 12 L10 10 H30 L32 12 L28 16 H23 L21 32 L19 32 L17 16 H12 L8 12Z"
        fill={`url(#${id}-gradient)`}
      />

      {/* Tech Accent / Cutout detail overlay */}
      <path
        d="M20 16 L22 32 H18 L20 16Z"
        fill="#0F1012"
        fillOpacity="0.3"
      />

      {/* Top bevel highlight */}
      <path
        d="M10 11 L11 11 H29 L30 11 L27.5 12 H12.5 L10 11Z"
        fill="white"
        fillOpacity="0.5"
      />

    </svg>
  );
}
