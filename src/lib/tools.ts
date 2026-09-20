export type ToolKey =
  | "jsonFormatter"
  | "xmlCsvFormatter"
  | "sqlFormatter"
  | "markdownPreviewer"
  | "jsonYamlToml"
  | "regexTester"
  | "diffTool"
  | "caseConverter"
  | "textUtilities"
  | "encodeDecode"
  | "logParserGrep"
  | "stringEscapeUnescape"
  | "jsonDiff"
  | "jsonSchemaValidator"
  | "scratchpad"
  | "hashUuidGenerator"
  | "fakeDataGenerator"
  | "qrCodeGenerator"
  | "faviconGenerator"
  | "jwtDecoder"
  | "x509CertificateDecoder"
  | "passwordStrengthChecker"
  | "certificateCsrGenerator"
  | "apiRequestTester"
  | "urlParserBuilder"
  | "subnetCidrCalculator"
  | "cronExplainer"
  | "dotenvDiffValidator"
  | "networkPortReference"
  | "curlRequestBuilder"
  | "systemInfo"
  | "timestampConverter"
  | "numberBaseConverter"
  | "colorTools"
  | "colorPaletteExtractor"
  | "qrCodeReader"
  | "hexBinaryFileInspector"
  | "base64FileEncoder";

export interface ToolEntry {
  key: ToolKey;
  category: string;
}

export const TOOLS: ToolEntry[] = [
  // Formatters & Text
  { key: "jsonFormatter", category: "Formatters & Text" },
  { key: "xmlCsvFormatter", category: "Formatters & Text" },
  { key: "sqlFormatter", category: "Formatters & Text" },
  { key: "markdownPreviewer", category: "Formatters & Text" },
  { key: "jsonYamlToml", category: "Formatters & Text" },
  { key: "regexTester", category: "Formatters & Text" },
  { key: "diffTool", category: "Formatters & Text" },
  { key: "caseConverter", category: "Formatters & Text" },
  { key: "textUtilities", category: "Formatters & Text" },
  { key: "encodeDecode", category: "Formatters & Text" },
  { key: "logParserGrep", category: "Formatters & Text" },
  { key: "stringEscapeUnescape", category: "Formatters & Text" },
  { key: "jsonDiff", category: "Formatters & Text" },
  { key: "jsonSchemaValidator", category: "Formatters & Text" },
  { key: "scratchpad", category: "Formatters & Text" },

  // Generators
  { key: "hashUuidGenerator", category: "Generators" },
  { key: "fakeDataGenerator", category: "Generators" },
  { key: "qrCodeGenerator", category: "Generators" },
  { key: "faviconGenerator", category: "Generators" },

  // Security
  { key: "jwtDecoder", category: "Security" },
  { key: "x509CertificateDecoder", category: "Security" },
  { key: "passwordStrengthChecker", category: "Security" },
  { key: "certificateCsrGenerator", category: "Security" },

  // Network & Config
  { key: "apiRequestTester", category: "Network & Config" },
  { key: "urlParserBuilder", category: "Network & Config" },
  { key: "subnetCidrCalculator", category: "Network & Config" },
  { key: "cronExplainer", category: "Network & Config" },
  { key: "dotenvDiffValidator", category: "Network & Config" },
  { key: "networkPortReference", category: "Network & Config" },
  { key: "curlRequestBuilder", category: "Network & Config" },
  { key: "systemInfo", category: "Network & Config" },

  // Converters & Media
  { key: "timestampConverter", category: "Converters & Media" },
  { key: "numberBaseConverter", category: "Converters & Media" },
  { key: "colorTools", category: "Converters & Media" },
  { key: "colorPaletteExtractor", category: "Converters & Media" },
  { key: "qrCodeReader", category: "Converters & Media" },
  { key: "hexBinaryFileInspector", category: "Converters & Media" },
  { key: "base64FileEncoder", category: "Converters & Media" },
];

export const TOOL_CATEGORIES = [
  "Formatters & Text",
  "Generators",
  "Security",
  "Network & Config",
  "Converters & Media",
];
