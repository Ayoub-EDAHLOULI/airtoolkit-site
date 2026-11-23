import type { ToolsDict } from "../types";

const tools: ToolsDict = {
  // Formatters & Text
  jsonFormatter: {
    label: "JSON Formatter",
    description: "Pretty-print or minify JSON, and see straight away when it isn't valid.",
    features: [
      "Indent with 2 or 4 spaces, or minify to a single line",
      "Parse errors reported, so broken JSON is caught immediately",
      "Input and output side by side, with one-click copy",
    ],
    whyOffline:
      "API responses and config files often contain tokens or customer data that shouldn't go into an online formatter.",
  },
  xmlCsvFormatter: {
    label: "XML / CSV Formatter",
    description: "Format XML, and turn CSV into a readable table.",
    features: [
      "XML: pretty-print or minify",
      "CSV: choose the delimiter and view the rows as a table",
      "Copy the formatted result",
    ],
    whyOffline:
      "Data exports and legacy XML configs can be checked on the machine that produced them.",
  },
  sqlFormatter: {
    label: "SQL Formatter",
    description: "Turn a minified query into readable, indented SQL.",
    features: [
      "Dialects: PostgreSQL, MySQL, SQLite, SQL Server (T-SQL) and standard SQL",
      "Keyword case: keep as written, UPPERCASE or lowercase",
      "Live output with copy",
    ],
    whyOffline:
      "Production queries reveal table names and data. Here they stay on your machine.",
  },
  markdownPreviewer: {
    label: "Markdown Previewer",
    description: "Live preview of Markdown as you type, rendered safely.",
    features: [
      "GitHub-flavored Markdown: tables, task lists, fenced code",
      "Rendered HTML is sanitized before it's displayed",
      "Copy the generated HTML",
    ],
    whyOffline:
      "Preview READMEs and docs without a browser extension or an online editor.",
  },
  jsonYamlToml: {
    label: "JSON ↔ YAML / TOML",
    description: "Convert between JSON, YAML and TOML, in any direction.",
    features: [
      "Pick the source and target format independently",
      "Handy for Kubernetes manifests, CI files and Cargo / pyproject configs",
      "Copy the converted output",
    ],
    whyOffline: "Infrastructure configs often hold internal hostnames and secrets.",
  },
  regexTester: {
    label: "Regex Tester",
    description: "Test regular expressions with live match highlighting.",
    features: [
      "Flags: g, i, m, s (dotAll) and u (unicode)",
      "Matches highlighted in the text, plus each match's position and capture groups",
      "Built-in cheat sheet of 16 common tokens and constructs",
    ],
    whyOffline: "A tool everyone needs that usually only exists as a website.",
  },
  diffTool: {
    label: "Diff Tool",
    description: "See the line-by-line differences between two blocks of text.",
    features: [
      "Original and changed text side by side",
      "Added and removed lines highlighted",
    ],
    whyOffline:
      "Compare config versions on a server without copying them anywhere else.",
  },
  caseConverter: {
    label: "Case Converter",
    description: "Convert text into 9 naming styles at once.",
    features: [
      "UPPERCASE, lowercase, Title Case, Sentence case",
      "camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE",
      "Every style shown together, each with its own copy button",
    ],
    whyOffline: "Quickly rename variables, columns and environment keys.",
  },
  textUtilities: {
    label: "Text Utilities",
    description: "Count and clean up text.",
    features: [
      "Live counts: characters (with and without spaces), words, lines",
      "Sort lines A→Z or Z→A, and remove duplicates",
      "Collapse whitespace, and convert line endings to LF or CRLF",
    ],
    whyOffline:
      "Clean up lists and logs in place, including line-ending fixes between Windows and Linux files.",
  },
  encodeDecode: {
    label: "Encode / Decode",
    description: "Encode and decode Base64, URL encoding and HTML entities.",
    features: [
      "Three schemes: Base64, URL encoding, HTML entities",
      "Encode or decode, with a swap button to reverse direction",
      "Copy the result",
    ],
    whyOffline: "Decoding a Base64 blob from a log is a common and sensitive task.",
  },
  logParserGrep: {
    label: "Log Parser / Grep",
    description: "Filter log text with a regex, like grep.",
    features: [
      "Regex filter, with a case-insensitive option",
      "Invert match, like grep -v",
      "Matched lines, plus the 5 most repeated ones",
      "Copy all matches",
    ],
    whyOffline: "Logs are exactly the kind of data that must not leave a locked-down machine.",
  },
  stringEscapeUnescape: {
    label: "String Escape / Unescape",
    description: "Escape and unescape strings for JSON, shell, SQL and regex.",
    features: [
      "Four targets: JSON, shell, SQL, regex",
      "Escape or unescape, with a swap button",
      "Copy the result",
    ],
    whyOffline: "Embed values in scripts and queries safely, without guesswork.",
  },
  jsonDiff: {
    label: "JSON Diff",
    description: "Compare two JSON documents by structure, not by line.",
    features: [
      "Compares keys and values, so reordered keys show no difference",
      "Lists changed, added and removed values with their path",
      "Clear message when the documents are identical",
    ],
    whyOffline: "Compare API responses or configs from two environments.",
  },
  jsonSchemaValidator: {
    label: "JSON Schema Validator",
    description: "Validate a JSON document against a JSON Schema.",
    features: [
      "Schema and data side by side",
      "Reports every error, not just the first",
      "Clear valid / invalid result",
    ],
    whyOffline: "Check payloads and configs against a contract while you develop.",
  },
  scratchpad: {
    label: "Scratchpad",
    description: "A small notepad with multiple notes, saved on your machine.",
    features: [
      "Create, rename and delete notes",
      "Saved automatically, locally",
      "Nothing is synced or uploaded",
    ],
    whyOffline: "Keep snippets and commands handy on a machine with no cloud notes.",
  },

  // Generators
  hashUuidGenerator: {
    label: "Hash / UUID Generator",
    description: "Hash text and generate UUIDs.",
    features: [
      "MD5, SHA-1, SHA-256 and SHA-512 of the input, all at once",
      "Random version 4 UUIDs, in bulk",
      "Copy one value or all of them",
    ],
    whyOffline: "Checksums and IDs are needed constantly, and the input can be sensitive.",
  },
  fakeDataGenerator: {
    label: "Fake Data Generator",
    description: "Generate realistic test records.",
    features: [
      "Fields: name, email, UUID, address, phone, company",
      "Choose how many records to generate",
      "Output as JSON or CSV",
    ],
    whyOffline: "Seed test databases without touching real customer data.",
  },
  qrCodeGenerator: {
    label: "QR Code Generator",
    description: "Turn text or a URL into a QR code.",
    features: [
      "Live preview as you type",
      "Save as PNG through the Windows save dialog",
      "Copy the image as a data URL",
    ],
    whyOffline: "Hand a URL or Wi-Fi string to a phone without an online generator.",
  },
  faviconGenerator: {
    label: "Favicon Generator",
    description: "Build a full favicon set from one image.",
    features: [
      "8 PNG sizes: 16, 32, 48, 64, 128, 180, 192 and 512 px",
      "A multi-resolution favicon.ico (16, 32 and 48 px)",
      "Save all PNGs to a folder, or save the .ico",
    ],
    whyOffline: "Web projects on offline build machines still need icons.",
  },

  // Security
  jwtDecoder: {
    label: "JWT Decoder",
    description: "Decode a JSON Web Token's header and payload.",
    features: [
      "Header and payload shown as formatted JSON",
      "exp, iat and nbf claims shown as readable dates",
      "Signature shown as-is, with a clear note that it isn't verified",
    ],
    whyOffline:
      "Pasting a real token into a website is a security incident waiting to happen.",
  },
  x509CertificateDecoder: {
    label: "X.509 Certificate Decoder",
    description: "Read a PEM certificate and see what's inside.",
    features: [
      "Subject, issuer and serial number",
      "Validity dates, with expired certificates flagged",
      "Signature algorithm, CA flag and key usages",
      "SHA-1 and SHA-256 thumbprints",
    ],
    whyOffline: "Inspect internal or customer certificates without uploading them.",
  },
  passwordStrengthChecker: {
    label: "Password Strength Checker",
    description: "Estimate how strong a password is, and get a better one.",
    features: [
      "Entropy in bits and estimated crack time (offline attack at ~10 billion guesses/s)",
      "Detects keyboard walks, repeated characters and common passwords",
      "Generates a strong random password",
    ],
    whyOffline: "Checking a password on a website defeats the purpose.",
  },
  certificateCsrGenerator: {
    label: "Certificate / CSR Generator",
    description:
      "Create a self-signed certificate or a CSR, with the keys generated on your device.",
    features: [
      "Keys: RSA 2048, RSA 4096 or ECDSA P-256",
      "Subject fields (CN, O, OU, L, ST, C), Subject Alternative Names and validity",
      "Outputs the certificate or CSR, private key (PKCS#8) and public key, all PEM",
    ],
    whyOffline:
      "The private key is created on your device and never leaves it, unlike online CSR generators.",
  },

  // Network & Config
  apiRequestTester: {
    label: "API Request Tester",
    description:
      "Send an HTTP request you write and see the response. The one tool that uses the network.",
    features: [
      "Methods: GET, POST, PUT, PATCH, DELETE, HEAD",
      "Header editor and request body",
      "Status, response time and body, plus a searchable reference of 42 status codes",
    ],
    whyOffline:
      "It only sends when you press Send, to the address you typed. Made for testing services on an internal network.",
  },
  urlParserBuilder: {
    label: "URL Parser / Builder",
    description: "Split a URL into its parts, or build one from parts.",
    features: [
      "Paste a URL to fill protocol, host, port, path and fragment",
      "Edit query parameters as a key/value list",
      "The rebuilt URL updates live, with copy",
    ],
    whyOffline: "Debug long redirect and callback URLs safely.",
  },
  subnetCidrCalculator: {
    label: "Subnet / CIDR Calculator",
    description: "Work out IPv4 subnet details from an address and prefix.",
    features: [
      "Network and broadcast address",
      "Subnet mask and wildcard mask",
      "Usable host range, host count and total addresses",
    ],
    whyOffline: "Network planning happens on the same isolated networks.",
  },
  cronExplainer: {
    label: "Cron Explainer",
    description: "Explain a cron expression in plain English, and list its next runs.",
    features: [
      "Human-readable description of the schedule",
      "The next 5 run times",
      "Example expressions to start from",
    ],
    whyOffline: "Check scheduled jobs on servers before you deploy them.",
  },
  dotenvDiffValidator: {
    label: "dotenv Diff & Validator",
    description: "Compare two .env files and flag problems.",
    features: [
      "Keys that exist in only one of the files",
      "Keys whose values differ",
      "Duplicate keys inside either file",
    ],
    whyOffline: ".env files are full of secrets. Comparing them online is never acceptable.",
  },
  networkPortReference: {
    label: "Network Port Reference",
    description: "A searchable list of common network ports.",
    features: [
      "64 well-known ports, with service name and description",
      "Search by port number, service or description",
    ],
    whyOffline: "The kind of lookup you'd normally search the web for.",
  },
  curlRequestBuilder: {
    label: "cURL ↔ Request Builder",
    description: "Turn a cURL command into editable fields, and fields back into cURL.",
    features: [
      "Paste a cURL command (from browser devtools, say) to fill method, URL, headers and body",
      "Edit the fields and get a regenerated cURL command",
    ],
    whyOffline: "Copied cURL commands usually include cookies and auth headers.",
  },
  systemInfo: {
    label: "System Info",
    description: "Details about the machine and the app, read locally.",
    features: [
      "OS, version, architecture, hostname and locale",
      "Screen resolution, window size and user agent",
      "AirToolkit and Tauri versions, with copy-all",
    ],
    whyOffline: "Quick environment facts for bug reports from locked-down VMs.",
  },

  // Converters & Media
  timestampConverter: {
    label: "Timestamp Converter",
    description: "Convert between Unix timestamps and dates.",
    features: [
      "Unix (seconds or milliseconds) to ISO 8601, local time and UTC",
      "Dates back to Unix, from ISO 8601 or formats like \"Jan 17 2024\"",
      "A Now button for the current time",
    ],
    whyOffline: "Reading timestamps in logs and tokens is a daily task.",
  },
  numberBaseConverter: {
    label: "Number Base Converter",
    description: "Convert numbers between binary, octal, decimal and hexadecimal.",
    features: [
      "All four bases update together as you type in any of them",
      "Prefixes shown: 0b, 0o, 0x",
      "Copy any base",
    ],
    whyOffline: "For bit masks, permissions and memory addresses.",
  },
  colorTools: {
    label: "Color Tools",
    description: "Convert colors between HEX, RGB, HSL and CMYK.",
    features: [
      "Edit any format and the others update",
      "Color picker and preview swatch",
      "Clear errors for invalid values",
    ],
    whyOffline: "Design work on machines without design software.",
  },
  colorPaletteExtractor: {
    label: "Color Palette Extractor",
    description: "Find the 6 dominant colors in an image.",
    features: [
      "Each color shown with its share of the image",
      "Copy each color as HEX",
      "k-means clustering over sampled pixels",
    ],
    whyOffline: "Images are processed on your device, never uploaded.",
  },
  qrCodeReader: {
    label: "QR Code Reader",
    description: "Read the text inside a QR code image.",
    features: [
      "Open an image file that contains a QR code",
      "Decoded text shown, with copy",
    ],
    whyOffline: "Check where a QR code points before you open it.",
  },
  hexBinaryFileInspector: {
    label: "Hex / Binary File Inspector",
    description: "See a file's bytes and identify its real type.",
    features: [
      "Hex dump with an ASCII column (first 16 KB)",
      "Detects 23 file types from their magic bytes: PNG, PDF, ZIP, EXE/DLL, ELF, SQLite and more",
      "Recognizes plain-text files",
    ],
    whyOffline: "Check suspicious or unlabeled files without uploading them to a scanner.",
  },
  base64FileEncoder: {
    label: "Base64 File Encoder",
    description: "Convert files to Base64 and back.",
    features: [
      "Encode any file to Base64, or to a data URI with its MIME type",
      "Decode Base64 or a data URI and save the file",
      "Copy the encoded text",
    ],
    whyOffline: "Move small files through text-only channels on restricted systems.",
  },
};

export default tools;
