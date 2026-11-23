import type { ToolKey } from "@/lib/tools";

export interface ToolEntryDict {
  label: string;
  /** One-sentence summary shown under the tool name. */
  description: string;
  /** 2–4 concrete capabilities, shown as a bullet list. */
  features: string[];
  /** Why this tool matters on an offline / locked-down machine. */
  whyOffline: string;
}

export type ToolsDict = Record<ToolKey, ToolEntryDict>;

export interface Dictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
    toolsTitle: string;
    toolsDescription: string;
    securityTitle: string;
    securityDescription: string;
    faqTitle: string;
    faqDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    privacyTitle: string;
    privacyDescription: string;
  };
  nav: {
    tools: string;
    security: string;
    faq: string;
    about: string;
    download: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    github: string;
    privacy: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    body: string;
    downloadWindows: string;
    getFromStore: string;
    viewGithub: string;
    grabMsi: string;
    previewLabel: string;
    expandPreview: string;
    terminalComment1: string;
  };
  whyOffline: {
    heading: string;
    subheading: string;
    points: { num: string; title: string; body: string }[];
    seeVerification: string;
  };
  howItWorks: {
    heading: string;
    steps: { title: string; body: string }[];
    browseTools: string;
  };
  home: {
    facts: { value: string; label: string }[];
    toolbox: {
      eyebrow: string;
      heading: string;
      body: string;
      /** "{n}" is replaced with the number of tools not listed on the card. */
      more: string;
      cta: string;
    };
    spotlight: { eyebrow: string; heading: string; body: string };
    proof: {
      eyebrow: string;
      heading: string;
      body: string;
      methods: { title: string; body: string }[];
      exceptionComment: string;
      noMatches: string;
      cta: string;
    };
    install: {
      eyebrow: string;
      heading: string;
      body: string;
      recommended: string;
      options: { title: string; body: string; cta: string }[];
      requirements: string;
    };
    faqPreview: { heading: string; cta: string };
    finalCta: { heading: string; body: string };
  };
  toolsShowcase: {
    heading: string;
    subheading: string;
    categories: Record<string, string>;
    categoryDescriptions: Record<string, string>;
    jumpTo: string;
    toolCount: string;
    whyOfflineLabel: string;
    networkBadge: string;
    tools: ToolsDict;
  };
  verification: {
    heading: string;
    subheading: string;
    checks: { title: string; body: string }[];
    terminalComment: string;
    terminalExceptionComment: string;
    terminalSuccess: string;
    statusLabel: string;
    statusBody: string;
  };
  faq: {
    heading: string;
    questions: { question: string; answer: string }[];
  };
  about: {
    tag: string;
    heading: string;
    paragraphs: string[];
    neuroKeyName: string;
    knowMore: string;
    aboutDeveloper: string;
    sourceGithub: string;
  };
  privacy: {
    tag: string;
    heading: string;
    updated: string;
    intro: string;
    sections: { title: string; body: string }[];
    contactLead: string;
    contactLink: string;
  };
}
