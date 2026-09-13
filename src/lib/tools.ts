export interface ToolEntry {
  label: string;
  category: string;
  description: string;
}

// Placeholder — replace with the real tool list from AirToolkit's own
// src/tools.ts (labels + a short one-line description per tool).
export const TOOLS: ToolEntry[] = [
  {
    label: "JSON Formatter",
    category: "Formatters & Text",
    description: "Placeholder description.",
  },
  {
    label: "Regex Tester",
    category: "Formatters & Text",
    description: "Placeholder description.",
  },
  {
    label: "Hash / UUID Generator",
    category: "Generators",
    description: "Placeholder description.",
  },
  {
    label: "JWT Decoder",
    category: "Security",
    description: "Placeholder description.",
  },
  {
    label: "API Request Tester",
    category: "Network & Config",
    description: "Placeholder description.",
  },
  {
    label: "Hex / Binary File Inspector",
    category: "Converters & Media",
    description: "Placeholder description.",
  },
];

export const TOOL_CATEGORIES = Array.from(
  new Set(TOOLS.map((tool) => tool.category)),
);
