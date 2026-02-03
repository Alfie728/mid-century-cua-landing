/**
 * Centralized color system for the landing page.
 * Provides consistent color mappings to eliminate repetitive cn() conditionals.
 */

export type AccentColor =
  | "blue"
  | "indigo"
  | "purple"
  | "emerald"
  | "cyan"
  | "amber"
  | "rose"
  | "red";

/**
 * Color classes for each accent color.
 * Use these instead of writing repetitive cn() conditionals.
 */
export const accentColors: Record<
  AccentColor,
  {
    // Text colors
    text: string;
    textHover: string;
    // Background colors
    bg: string;
    bgSubtle: string;
    bgHover: string;
    // Border colors
    border: string;
    borderHover: string;
    // Gradient overlays (for card hover effects)
    gradient: string;
    // Icon container (default + hover states)
    iconContainer: string;
    // Badge/chip hover background
    badgeHover: string;
  }
> = {
  blue: {
    text: "text-blue-500",
    textHover: "text-blue-600",
    bg: "bg-blue-500",
    bgSubtle: "bg-blue-50",
    bgHover: "bg-blue-600",
    border: "border-blue-100",
    borderHover: "border-blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    iconContainer:
      "text-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
    badgeHover: "group-hover:bg-blue-50/50",
  },
  indigo: {
    text: "text-indigo-500",
    textHover: "text-indigo-600",
    bg: "bg-indigo-500",
    bgSubtle: "bg-indigo-50",
    bgHover: "bg-indigo-600",
    border: "border-indigo-100",
    borderHover: "border-indigo-500",
    gradient: "from-indigo-500/10 via-indigo-500/5 to-transparent",
    iconContainer:
      "text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500",
    badgeHover: "group-hover:bg-indigo-50/50",
  },
  purple: {
    text: "text-purple-500",
    textHover: "text-purple-600",
    bg: "bg-purple-500",
    bgSubtle: "bg-purple-50",
    bgHover: "bg-purple-600",
    border: "border-purple-100",
    borderHover: "border-purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    iconContainer:
      "text-purple-500 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500",
    badgeHover: "group-hover:bg-purple-50/50",
  },
  emerald: {
    text: "text-emerald-500",
    textHover: "text-emerald-600",
    bg: "bg-emerald-500",
    bgSubtle: "bg-emerald-50",
    bgHover: "bg-emerald-600",
    border: "border-emerald-100",
    borderHover: "border-emerald-500",
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    iconContainer:
      "text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
    badgeHover: "group-hover:bg-emerald-50/50",
  },
  cyan: {
    text: "text-cyan-500",
    textHover: "text-cyan-600",
    bg: "bg-cyan-500",
    bgSubtle: "bg-cyan-50",
    bgHover: "bg-cyan-600",
    border: "border-cyan-100",
    borderHover: "border-cyan-500",
    gradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
    iconContainer:
      "text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500",
    badgeHover: "group-hover:bg-cyan-50/50",
  },
  amber: {
    text: "text-amber-500",
    textHover: "text-amber-600",
    bg: "bg-amber-500",
    bgSubtle: "bg-amber-50",
    bgHover: "bg-amber-600",
    border: "border-amber-100",
    borderHover: "border-amber-500",
    gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
    iconContainer:
      "text-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500",
    badgeHover: "group-hover:bg-amber-50/50",
  },
  rose: {
    text: "text-rose-500",
    textHover: "text-rose-600",
    bg: "bg-rose-500",
    bgSubtle: "bg-rose-50",
    bgHover: "bg-rose-600",
    border: "border-rose-100",
    borderHover: "border-rose-500",
    gradient: "from-rose-500/10 via-rose-500/5 to-transparent",
    iconContainer:
      "text-rose-500 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500",
    badgeHover: "group-hover:bg-rose-50/50",
  },
  red: {
    text: "text-red-500",
    textHover: "text-red-600",
    bg: "bg-red-500",
    bgSubtle: "bg-red-50",
    bgHover: "bg-red-600",
    border: "border-red-100",
    borderHover: "border-red-500",
    gradient: "from-red-500/10 via-red-500/5 to-transparent",
    iconContainer:
      "text-red-500 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500",
    badgeHover: "group-hover:bg-red-50/50",
  },
};

/**
 * Get color classes for a given accent color.
 * @example
 * const colors = getAccentColor("blue");
 * // colors.text => "text-blue-500"
 * // colors.gradient => "from-blue-500/10 via-blue-500/5 to-transparent"
 */
export function getAccentColor(color: AccentColor) {
  return accentColors[color];
}

/**
 * Terminal/code syntax colors - consistent across all terminal displays
 */
export const terminalColors = {
  // Base colors
  background: "bg-surface-dark",
  text: "text-slate-200",
  textMuted: "text-slate-400",
  textDim: "text-slate-500",

  // Syntax highlighting
  string: "text-emerald-500",
  keyword: "text-purple-400",
  variable: "text-blue-400",
  number: "text-orange-400",
  comment: "text-slate-500",
  success: "text-emerald-500",
  info: "text-blue-400",
  warning: "text-amber-400",
  error: "text-red-400",
} as const;

/**
 * Code block colors - for inline JSON/code displays
 */
export const codeColors = {
  key: "text-purple-600",
  string: "text-emerald-600",
  number: "text-orange-600",
  keyword: "text-blue-600",
  bracket: "text-slate-400",
  highlightBg: "bg-blue-50/50",
  highlightBorder: "border-blue-100/50",
} as const;
