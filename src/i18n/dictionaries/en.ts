import type { Dictionary } from "../types";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirToolkit — 39 Dev Tools, Zero Network Calls",
    siteDescription:
      "An offline-first developer toolbox for air-gapped and locked-down Windows machines. No telemetry, no auto-update, no phone-home — ever.",
    toolsTitle: "Tools — AirToolkit",
    toolsDescription:
      "Browse all 39 tools included in AirToolkit, from JSON formatting to certificate generation, organized by category.",
    securityTitle: "Security & Verification — AirToolkit",
    securityDescription:
      "How AirToolkit's zero-network-calls claim is checked: a static code audit and an OS-level firewall/VM test, both reproducible yourself.",
    faqTitle: "FAQ — AirToolkit",
    faqDescription:
      "Answers about AirToolkit's offline guarantee, supported platforms, and open-source availability.",
    aboutTitle: "About — AirToolkit",
    aboutDescription:
      "Why AirToolkit exists: built by a security engineer who needed offline dev tools for locked-down VMs, and couldn't find any that actually were.",
  },
  nav: {
    tools: "tools",
    security: "security",
    faq: "faq",
    about: "about",
    download: "download",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  footer: {
    github: "github",
  },
  hero: {
    badge: "no telemetry · no auto-update · no network calls",
    title: "39 dev tools. Zero network calls.",
    body: "AirToolkit bundles the utilities you reach for daily — JSON formatting, regex testing, hashing, JWT decoding, and more — into one desktop app that never makes a network call on its own. No telemetry, no auto-update, no phone-home. Ever.",
    downloadWindows: "download for windows",
    viewGithub: "view on github",
    deployNote: "deploying via Group Policy or SCCM?",
    grabMsi: "grab the .msi",
    msiSuffix: "instead",
    terminalComment1: "# block all outbound traffic",
    terminalComment2: "# app keeps working normally",
  },
  whyOffline: {
    heading: "Why offline matters",
    subheading: "This came out of a real need, not a feature checklist.",
    points: [
      {
        num: "01",
        title: "Locked-down VMs can't reach a browser tool",
        body: "Internet-restricted machines at security- and access-control-focused companies are common. Pulling up a browser-based JSON formatter or regex tester simply isn't an option there.",
      },
      {
        num: "02",
        title: "\"Offline\" web tools usually aren't",
        body: "Most sites claiming to be offline-friendly still ship analytics, font CDNs, or update checks — which fail loudly, or silently phone home, the moment they're blocked.",
      },
      {
        num: "03",
        title: "No network dependency, period",
        body: "AirToolkit makes zero network calls of its own: no telemetry, no auto-update, no phone-home. The one exception — the API Request Tester — is opt-in and documented.",
      },
    ],
    seeVerification: "→ see how this is verified",
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "Download and install",
        body: "Grab the Windows installer — no account, no license key, no internet connection required to run it.",
      },
      {
        title: "Pick a tool from the sidebar",
        body: "39 tools organized into five categories, with search. Everything runs locally in the same window.",
      },
      {
        title: "Verify it yourself",
        body: "Block the app at the firewall and keep working — every tool except the API Request Tester keeps functioning normally.",
      },
    ],
    browseTools: "→ browse all tools",
  },
  toolsShowcase: {
    heading: "39 tools, one app",
    subheading:
      "Everything runs locally, in the same window, with no per-tool setup. Search the sidebar in the app, or browse by category here.",
    categories: {
      "Formatters & Text": "Formatters & Text",
      Generators: "Generators",
      Security: "Security",
      "Network & Config": "Network & Config",
      "Converters & Media": "Converters & Media",
    },
    tools: {
      jsonFormatter: {
        label: "JSON Formatter",
        description: "Pretty-print, minify, and validate JSON.",
      },
      xmlCsvFormatter: {
        label: "XML / CSV Formatter",
        description: "Pretty-print XML and view CSV as a table.",
      },
      sqlFormatter: {
        label: "SQL Formatter",
        description: "Beautify minified SQL into readable, indented output.",
      },
      markdownPreviewer: {
        label: "Markdown Previewer",
        description: "Live-rendered Markdown as you type.",
      },
      jsonYamlToml: {
        label: "JSON ↔ YAML / TOML",
        description: "Convert between JSON, YAML, and TOML.",
      },
      regexTester: {
        label: "Regex Tester",
        description:
          "Match highlighting, capture groups, and a pattern cheat sheet.",
      },
      diffTool: {
        label: "Diff Tool",
        description: "Line-by-line diff between two blocks of text.",
      },
      caseConverter: {
        label: "Case Converter",
        description: "camelCase, snake_case, kebab-case, and more.",
      },
      textUtilities: {
        label: "Text Utilities",
        description:
          "Sort, dedupe, normalize whitespace, count words and lines.",
      },
      encodeDecode: {
        label: "Encode / Decode",
        description: "Base64, URL encoding, and HTML entities.",
      },
      logParserGrep: {
        label: "Log Parser / Grep",
        description:
          "Filter multi-line logs by pattern, with a most-repeated-lines view.",
      },
      stringEscapeUnescape: {
        label: "String Escape / Unescape",
        description: "JSON, shell, SQL, and regex escaping in one place.",
      },
      jsonDiff: {
        label: "JSON Diff",
        description:
          "Structural diff by key/value — ignores reordering and formatting.",
      },
      jsonSchemaValidator: {
        label: "JSON Schema Validator",
        description: "Validate a JSON document against a JSON Schema.",
      },
      scratchpad: {
        label: "Scratchpad",
        description:
          "A local, multi-note notepad that never leaves your machine.",
      },
      hashUuidGenerator: {
        label: "Hash / UUID Generator",
        description: "MD5, SHA-1/256/512, and UUID v4 generation.",
      },
      fakeDataGenerator: {
        label: "Fake Data Generator",
        description:
          "Names, emails, addresses, and more for seeding test data.",
      },
      qrCodeGenerator: {
        label: "QR Code Generator",
        description: "Text or URL to a QR code, exportable as PNG.",
      },
      faviconGenerator: {
        label: "Favicon Generator",
        description:
          "One image in, a full set of favicon sizes and an .ico out.",
      },
      jwtDecoder: {
        label: "JWT Decoder",
        description: "Inspect header, payload, and signature claims.",
      },
      x509CertificateDecoder: {
        label: "X.509 Certificate Decoder",
        description:
          "Issuer, subject, validity, and SANs from a pasted PEM cert.",
      },
      passwordStrengthChecker: {
        label: "Password Strength Checker",
        description:
          "Entropy and crack-time estimates, plus a strong-password generator.",
      },
      certificateCsrGenerator: {
        label: "Certificate / CSR Generator",
        description:
          "Generate a self-signed cert or CSR — the private key never leaves your device.",
      },
      apiRequestTester: {
        label: "API Request Tester",
        description:
          "Compose and send HTTP requests on demand — the one deliberate exception to zero network calls.",
      },
      urlParserBuilder: {
        label: "URL Parser / Builder",
        description: "Break a URL into fields, or build one from scratch.",
      },
      subnetCidrCalculator: {
        label: "Subnet / CIDR Calculator",
        description:
          "Network address, broadcast, and usable host range from an IP + CIDR.",
      },
      cronExplainer: {
        label: "Cron Explainer",
        description:
          "Human-readable explanation of a cron expression, plus next run times.",
      },
      dotenvDiffValidator: {
        label: "dotenv Diff & Validator",
        description:
          "Compare two .env files for missing, extra, or differing keys.",
      },
      networkPortReference: {
        label: "Network Port Reference",
        description: "Searchable lookup of common ports and what runs on them.",
      },
      curlRequestBuilder: {
        label: "cURL ↔ Request Builder",
        description:
          "Parse a cURL command into its parts, or generate one from a request.",
      },
      systemInfo: {
        label: "System Info",
        description: "Platform, architecture, hostname, and locale — read locally.",
      },
      timestampConverter: {
        label: "Timestamp Converter",
        description:
          "Unix timestamps to dates and back, in seconds or milliseconds.",
      },
      numberBaseConverter: {
        label: "Number Base Converter",
        description: "Binary, octal, decimal, and hexadecimal conversion.",
      },
      colorTools: {
        label: "Color Tools",
        description: "HEX, RGB, HSL, and CMYK conversion with a visual picker.",
      },
      colorPaletteExtractor: {
        label: "Color Palette Extractor",
        description: "Dominant colors from an image via k-means clustering.",
      },
      qrCodeReader: {
        label: "QR Code Reader",
        description: "Decode a QR code image back to text.",
      },
      hexBinaryFileInspector: {
        label: "Hex / Binary File Inspector",
        description:
          "Hex dump and magic-byte file type detection for any file.",
      },
      base64FileEncoder: {
        label: "Base64 File Encoder",
        description: "Encode any file to base64 or a data URI, and decode back.",
      },
    },
  },
  verification: {
    heading: "Verifiable, not just claimed",
    subheading:
      "\"Zero network calls\" is a checkable claim, not a marketing line. Here's exactly how it's checked — reproduce it yourself if you don't take our word for it.",
    checks: [
      {
        title: "Static code audit",
        body: "Grep the entire source for fetch/XMLHttpRequest/WebSocket and Rust-side network primitives. Only the API Request Tester should match — run on every change.",
      },
      {
        title: "OS-level firewall block",
        body: "Block all outbound traffic for the packaged binary at the Windows Firewall and confirm every other tool keeps working fully.",
      },
      {
        title: "Network-isolated VM",
        body: "For a stronger guarantee, run the same build with no virtual NIC at all instead of relying on a firewall rule.",
      },
    ],
    terminalComment: "the one documented exception",
    terminalExceptionComment: "the one documented exception",
    terminalSuccess: "✓ every other tool keeps working normally",
    statusLabel: "Current status:",
    statusBody:
      "the static audit above has been run against the full codebase with no unexpected matches. The firewall/VM run is a manual step against a signed release build — not yet performed. Treat any offline claim as unverified until this line is updated.",
  },
  faq: {
    heading: "Frequently asked questions",
    questions: [
      {
        question: "Does AirToolkit really make zero network calls?",
        answer:
          "Yes, with one documented exception: the API Request Tester, whose entire purpose is sending a request you compose on demand. Every other tool never touches the network. See the Security page for exactly how this is checked.",
      },
      {
        question: "Do I need an internet connection to install or run it?",
        answer:
          "No. Once you have the installer, setup and every tool work fully offline — no account, no license server, no update check.",
      },
      {
        question: "What platforms does it support?",
        answer:
          "Windows, built with Tauri. It was built specifically for locked-down Windows VMs, which is the primary target today.",
      },
      {
        question: "Is it open source?",
        answer:
          "Yes — the full source is on GitHub. You're welcome to read it, audit it, or build it yourself instead of trusting a packaged binary.",
      },
      {
        question: "Why not just use browser-based tools?",
        answer:
          "Most browser-based dev tool sites are unreachable on internet-restricted machines, and many that claim to work offline still load analytics or font CDNs that fail (or silently phone home) the moment they're blocked.",
      },
    ],
  },
  about: {
    tag: "# about",
    heading: "Built by someone who needed it first",
    paragraphs: [
      "I'm Ayoub, a software engineer working on security and access-control systems for a B2B company. Part of that job means spending a lot of time inside internet-restricted VMs — machines deliberately cut off from the outside world, because that's the whole point of the systems running on them.",
      "The problem is that most developer tools assume you're never more than one tab away from the internet. Need to format some JSON, test a regex, decode a JWT? On a normal machine, that's a search away. On a locked-down VM, it's not — and the \"offline\" tool sites that claim to work anyway often still ship analytics or font CDNs that fail loudly, or quietly phone home, the moment they're blocked.",
      "I kept solving this the same way: install a real desktop app, once, and never think about the network again. AirToolkit is that app, built properly instead of improvised each time — 39 tools that cover the everyday utility work, running fully local, with the zero-network-calls guarantee treated as a real engineering constraint rather than a tagline.",
      "It's also the same instinct behind NeuroKey, an offline password manager I built earlier — no cloud, no server in the middle, your data never leaves your device. AirToolkit is that same principle applied to the tools developers reach for every day.",
    ],
    neuroKeyName: "NeuroKey",
    knowMore: "know more",
    aboutDeveloper: "about the developer →",
    sourceGithub: "source on github →",
  },
};

export default dict;
