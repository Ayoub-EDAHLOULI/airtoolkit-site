export interface ToolEntryDict {
  label: string;
  description: string;
}

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
  };
  hero: {
    badge: string;
    title: string;
    body: string;
    downloadWindows: string;
    viewGithub: string;
    deployNote: string;
    grabMsi: string;
    msiSuffix: string;
    terminalComment1: string;
    terminalComment2: string;
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
  toolsShowcase: {
    heading: string;
    subheading: string;
    categories: Record<string, string>;
    tools: Record<string, ToolEntryDict>;
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
}
