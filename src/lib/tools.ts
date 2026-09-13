export interface ToolEntry {
  label: string;
  category: string;
  description: string;
}

export const TOOLS: ToolEntry[] = [
  // Formatters & Text
  {
    label: "JSON Formatter",
    category: "Formatters & Text",
    description: "Pretty-print, minify, and validate JSON.",
  },
  {
    label: "XML / CSV Formatter",
    category: "Formatters & Text",
    description: "Pretty-print XML and view CSV as a table.",
  },
  {
    label: "SQL Formatter",
    category: "Formatters & Text",
    description: "Beautify minified SQL into readable, indented output.",
  },
  {
    label: "Markdown Previewer",
    category: "Formatters & Text",
    description: "Live-rendered Markdown as you type.",
  },
  {
    label: "JSON ↔ YAML / TOML",
    category: "Formatters & Text",
    description: "Convert between JSON, YAML, and TOML.",
  },
  {
    label: "Regex Tester",
    category: "Formatters & Text",
    description: "Match highlighting, capture groups, and a pattern cheat sheet.",
  },
  {
    label: "Diff Tool",
    category: "Formatters & Text",
    description: "Line-by-line diff between two blocks of text.",
  },
  {
    label: "Case Converter",
    category: "Formatters & Text",
    description: "camelCase, snake_case, kebab-case, and more.",
  },
  {
    label: "Text Utilities",
    category: "Formatters & Text",
    description: "Sort, dedupe, normalize whitespace, count words and lines.",
  },
  {
    label: "Encode / Decode",
    category: "Formatters & Text",
    description: "Base64, URL encoding, and HTML entities.",
  },
  {
    label: "Log Parser / Grep",
    category: "Formatters & Text",
    description: "Filter multi-line logs by pattern, with a most-repeated-lines view.",
  },
  {
    label: "String Escape / Unescape",
    category: "Formatters & Text",
    description: "JSON, shell, SQL, and regex escaping in one place.",
  },
  {
    label: "JSON Diff",
    category: "Formatters & Text",
    description: "Structural diff by key/value — ignores reordering and formatting.",
  },
  {
    label: "JSON Schema Validator",
    category: "Formatters & Text",
    description: "Validate a JSON document against a JSON Schema.",
  },
  {
    label: "Scratchpad",
    category: "Formatters & Text",
    description: "A local, multi-note notepad that never leaves your machine.",
  },

  // Generators
  {
    label: "Hash / UUID Generator",
    category: "Generators",
    description: "MD5, SHA-1/256/512, and UUID v4 generation.",
  },
  {
    label: "Fake Data Generator",
    category: "Generators",
    description: "Names, emails, addresses, and more for seeding test data.",
  },
  {
    label: "QR Code Generator",
    category: "Generators",
    description: "Text or URL to a QR code, exportable as PNG.",
  },
  {
    label: "Favicon Generator",
    category: "Generators",
    description: "One image in, a full set of favicon sizes and an .ico out.",
  },

  // Security
  {
    label: "JWT Decoder",
    category: "Security",
    description: "Inspect header, payload, and signature claims.",
  },
  {
    label: "X.509 Certificate Decoder",
    category: "Security",
    description: "Issuer, subject, validity, and SANs from a pasted PEM cert.",
  },
  {
    label: "Password Strength Checker",
    category: "Security",
    description: "Entropy and crack-time estimates, plus a strong-password generator.",
  },
  {
    label: "Certificate / CSR Generator",
    category: "Security",
    description: "Generate a self-signed cert or CSR — the private key never leaves your device.",
  },

  // Network & Config
  {
    label: "API Request Tester",
    category: "Network & Config",
    description: "Compose and send HTTP requests on demand — the one deliberate exception to zero network calls.",
  },
  {
    label: "URL Parser / Builder",
    category: "Network & Config",
    description: "Break a URL into fields, or build one from scratch.",
  },
  {
    label: "Subnet / CIDR Calculator",
    category: "Network & Config",
    description: "Network address, broadcast, and usable host range from an IP + CIDR.",
  },
  {
    label: "Cron Explainer",
    category: "Network & Config",
    description: "Human-readable explanation of a cron expression, plus next run times.",
  },
  {
    label: "dotenv Diff & Validator",
    category: "Network & Config",
    description: "Compare two .env files for missing, extra, or differing keys.",
  },
  {
    label: "Network Port Reference",
    category: "Network & Config",
    description: "Searchable lookup of common ports and what runs on them.",
  },
  {
    label: "cURL ↔ Request Builder",
    category: "Network & Config",
    description: "Parse a cURL command into its parts, or generate one from a request.",
  },
  {
    label: "System Info",
    category: "Network & Config",
    description: "Platform, architecture, hostname, and locale — read locally.",
  },

  // Converters & Media
  {
    label: "Timestamp Converter",
    category: "Converters & Media",
    description: "Unix timestamps to dates and back, in seconds or milliseconds.",
  },
  {
    label: "Number Base Converter",
    category: "Converters & Media",
    description: "Binary, octal, decimal, and hexadecimal conversion.",
  },
  {
    label: "Color Tools",
    category: "Converters & Media",
    description: "HEX, RGB, HSL, and CMYK conversion with a visual picker.",
  },
  {
    label: "Color Palette Extractor",
    category: "Converters & Media",
    description: "Dominant colors from an image via k-means clustering.",
  },
  {
    label: "QR Code Reader",
    category: "Converters & Media",
    description: "Decode a QR code image back to text.",
  },
  {
    label: "Hex / Binary File Inspector",
    category: "Converters & Media",
    description: "Hex dump and magic-byte file type detection for any file.",
  },
  {
    label: "Base64 File Encoder",
    category: "Converters & Media",
    description: "Encode any file to base64 or a data URI, and decode back.",
  },
];

export const TOOL_CATEGORIES = [
  "Formatters & Text",
  "Generators",
  "Security",
  "Network & Config",
  "Converters & Media",
];
