// Shared animation constants based on Emil Kowalski's animation guidelines
// https://animations.dev

// Easing curves for different animation types
export const easing = {
  // Use for entering/exiting elements (most common)
  easeOut: [0.25, 0.46, 0.45, 0.94] as const, // ease-out-quad
  easeOutCubic: [0.215, 0.61, 0.355, 1] as const,
  easeOutQuart: [0.165, 0.84, 0.44, 1] as const, // snappy

  // Use for elements moving/morphing on screen
  easeInOut: [0.455, 0.03, 0.515, 0.955] as const, // ease-in-out-quad
  easeInOutCubic: [0.645, 0.045, 0.355, 1] as const,

  // Use for hover effects
  ease: [0.25, 0.1, 0.25, 1] as const,
} as const;

// Duration guidelines (in seconds)
export const duration = {
  micro: 0.15, // Micro-interactions (100-150ms)
  fast: 0.2, // Standard UI elements (150-250ms)
  normal: 0.25, // Tooltips, dropdowns
  slow: 0.3, // Modals, drawers (200-300ms)
  page: 0.4, // Page transitions (300-400ms)
} as const;

// Common transition presets for Framer Motion
export const transition = {
  // Standard entrance animation
  enter: {
    duration: duration.fast,
    ease: easing.easeOut,
  },
  // Snappy entrance for important elements
  enterSnappy: {
    duration: duration.fast,
    ease: easing.easeOutQuart,
  },
  // For elements moving on screen
  move: {
    duration: duration.normal,
    ease: easing.easeInOut,
  },
  // For hover/color changes
  hover: {
    duration: duration.micro,
    ease: easing.ease,
  },
} as const;

// Stagger delay for sequential animations
export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
} as const;
