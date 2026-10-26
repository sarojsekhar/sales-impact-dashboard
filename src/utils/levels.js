// Threshold boundaries (percent)
export const LOW_MAX = 33.33; // Low:    0     to under 33.33
export const MEDIUM_MAX = 66.67; // Medium: 33.33 to under 66.67
// High:   66.67 to 100

// Turn a percentage into a level: "low", "medium" or "high".
// Returns null if the value isn't a valid number.
export function getLevel(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return null;
  if (value < LOW_MAX) return "low";
  if (value < MEDIUM_MAX) return "medium";
  return "high";
}

// Full Tailwind class names for each level (see Step 2.5 for why they must be complete strings).
export const LEVEL_STYLES = {
  low: {
    label: "Low",
    range: "0% – under 33.33%",
    card: "bg-green-200 border-green-400",
    badge: "bg-green-100 text-green-800",
    bar: "bg-green-500",
    dot: "bg-green-500",
  },
  medium: {
    label: "Medium",
    range: "33.33% – under 66.67%",
    card: "bg-yellow-200 border-yellow-400",
    badge: "bg-yellow-100 text-yellow-800",
    bar: "bg-yellow-500",
    dot: "bg-yellow-500",
  },
  high: {
    label: "High",
    range: "66.67% – 100%",
    card: "bg-red-200 border-red-400",
    badge: "bg-red-100 text-red-800",
    bar: "bg-red-500",
    dot: "bg-red-500",
  },
};

// Used when no metric is selected: the neutral gray look.
export const NEUTRAL_STYLES = {
  label: "None",
  range: "",
  card: "bg-gray-100 border-gray-200",
  badge: "bg-gray-100 text-gray-600",
  bar: "bg-gray-400",
  dot: "bg-gray-400",
};

// Get the styles for a level, falling back to neutral gray.
export function getLevelStyles(level) {
  return LEVEL_STYLES[level] ?? NEUTRAL_STYLES;
}
