import type { Dictionary } from "../types";
import tools from "../tools/en";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirToolkit — 38 Dev Tools, Zero Network Calls",
    siteDescription:
      "An offline-first developer toolbox for air-gapped and locked-down Windows machines. No telemetry, no auto-update, no phone-home — ever.",
    toolsTitle: "Tools — AirToolkit",
    toolsDescription:
      "Browse all 38 tools included in AirToolkit, from JSON formatting to certificate generation, organized by category.",
    securityTitle: "Security & Verification — AirToolkit",
    securityDescription:
      "How AirToolkit's zero-network-calls claim is checked: a static code audit and an OS-level firewall/VM test, both reproducible yourself.",
    faqTitle: "FAQ — AirToolkit",
    faqDescription:
      "Answers about AirToolkit's offline guarantee, supported platforms, and open-source availability.",
    aboutTitle: "About — AirToolkit",
    aboutDescription:
      "Why AirToolkit exists: built by a security engineer who needed offline dev tools for locked-down VMs, and couldn't find any that actually were.",
    privacyTitle: "Privacy Policy — AirToolkit",
    privacyDescription:
      "AirToolkit collects no personal information: no accounts, no telemetry, no analytics. What stays on your device, and the few cases where data moves.",
  },
  boot: {
    lines: [
      "$ initializing airtoolkit...",
      "$ checking network interfaces... none required",
      "$ loading 38 tools locally",
      "$ zero network calls detected ✓",
    ],
    ready: "ready.",
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
    privacy: "privacy",
  },
  hero: {
    badge: "no telemetry · no auto-update · no network calls",
    title: "38 dev tools. Zero network calls.",
    body: "AirToolkit bundles the utilities you reach for daily — JSON formatting, regex testing, hashing, JWT decoding, and more — into one desktop app that never makes a network call on its own. No telemetry, no auto-update, no phone-home. Ever.",
    downloadWindows: "download for windows",
    getFromStore: "Get it from Microsoft",
    viewGithub: "release notes",
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
        body: "38 tools organized into five categories, with search. Everything runs locally in the same window.",
      },
      {
        title: "Verify it yourself",
        body: "Block the app at the firewall and keep working — every tool except the API Request Tester keeps functioning normally.",
      },
    ],
    browseTools: "→ browse all tools",
  },
  toolsShowcase: {
    heading: "38 tools, one app",
    subheading:
      "Everything runs locally, in the same window, with no per-tool setup. Search the sidebar in the app, or browse by category here.",
    categories: {
      "Formatters & Text": "Formatters & Text",
      Generators: "Generators",
      Security: "Security",
      "Network & Config": "Network & Config",
      "Converters & Media": "Converters & Media",
    },
    categoryDescriptions: {
      "Formatters & Text":
        "Reformat, convert, compare and clean up text and structured data.",
      "Generators":
        "Produce hashes, IDs, test data, QR codes and icon sets.",
      "Security":
        "Inspect tokens and certificates, and create keys, without pasting secrets into a website.",
      "Network & Config":
        "Work with HTTP requests, URLs, subnets, schedules and environment files.",
      "Converters & Media":
        "Convert timestamps, numbers and colors, and look inside images and binary files.",
    },
    jumpTo: "jump to",
    toolCount: "{n} tools",
    whyOfflineLabel: "why offline",
    networkBadge: "uses network · on demand",
    tools,
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
          "Windows, built with Tauri. It was built specifically for locked-down Windows VMs, which is the primary target today. Install it from the Microsoft Store, or download the installer from GitHub for offline machines.",
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
      "I kept solving this the same way: install a real desktop app, once, and never think about the network again. AirToolkit is that app, built properly instead of improvised each time — 38 tools that cover the everyday utility work, running fully local, with the zero-network-calls guarantee treated as a real engineering constraint rather than a tagline.",
      "It's also the same instinct behind NeuroKey, an offline password manager I built earlier — no cloud, no server in the middle, your data never leaves your device. AirToolkit is that same principle applied to the tools developers reach for every day.",
    ],
    neuroKeyName: "NeuroKey",
    knowMore: "know more",
    aboutDeveloper: "about the developer →",
    sourceGithub: "source on github →",
  },
  privacy: {
    tag: "# privacy",
    heading: "Privacy policy",
    updated: "Last updated: November 19, 2026",
    intro: "AirToolkit does not collect, store, or transmit any personal information. There are no accounts, no telemetry, no analytics, no crash reporting and no auto-update. This page explains exactly what stays on your device, and the few cases where data moves.",
    sections: [
      {
        title: "What the app stores",
        body: "AirToolkit keeps two things on your computer: your light/dark theme choice and the text you type in the Scratchpad. Both are saved locally by the app and never leave your device. With the Microsoft Store version, uninstalling the app removes them.",
      },
      {
        title: "Your files",
        body: "AirToolkit only reads files you open yourself, and only writes files where you choose to save them. Their contents are processed on your device and are never uploaded.",
      },
      {
        title: "Network access",
        body: "AirToolkit makes no network calls of its own. The one exception is the API Request Tester: when you press send, it sends exactly the request you wrote to the address you entered. That request goes directly from your computer to that address; it is never sent to us or anyone else.",
      },
      {
        title: "Microsoft Store",
        body: "If you install AirToolkit from the Microsoft Store, Microsoft handles the download and licensing under the Microsoft Privacy Statement. Microsoft may share aggregated, anonymous statistics with us, such as install and crash counts. We cannot identify you from them.",
      },
      {
        title: "This website",
        body: "This website has no analytics, tracking or ads, and its fonts are served from this site. It stores only your language choice in a cookie, and a temporary flag that stops the intro animation from replaying during your visit. Like any web server, ours may keep standard technical logs (such as IP address and pages requested) for security and to keep the site running.",
      },
      {
        title: "Children",
        body: "AirToolkit collects no personal information from anyone, including children under 13.",
      },
      {
        title: "Changes",
        body: "If this policy changes, the new version will be posted on this page with an updated date.",
      },
    ],
    contactLead: "Questions about privacy?",
    contactLink: "open an issue on github →",
  },
};

export default dict;
