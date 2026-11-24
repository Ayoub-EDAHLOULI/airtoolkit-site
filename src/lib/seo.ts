import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/i18n/config";

export const SITE_URL = "https://airtoolkit.ayoubedahlouli.com";
export const SITE_NAME = "AirToolkit";

/** Every public page, relative to /{lang}. "" is the home page. */
export const PAGES = ["", "tools", "security", "faq", "about", "privacy"] as const;
export type PagePath = (typeof PAGES)[number];

/** hreflang codes — Chinese content is Simplified. */
const HREFLANG: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  es: "es",
  de: "de",
  ar: "ar",
  zh: "zh-Hans",
};

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
  de: "de_DE",
  ar: "ar_AR",
  zh: "zh_CN",
};

export function localizedUrl(lang: Locale, path: PagePath): string {
  return `${SITE_URL}/${lang}${path ? `/${path}` : ""}`;
}

/** hreflang map for one page: every locale plus x-default (English). */
export function languageAlternates(path: PagePath): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) languages[HREFLANG[locale]] = localizedUrl(locale, path);
  languages["x-default"] = localizedUrl(DEFAULT_LOCALE, path);
  return languages;
}

/**
 * Title, description, canonical, hreflang alternates and social cards for a
 * page. The preview image comes from app/[lang]/opengraph-image.tsx.
 */
export function pageMetadata({
  lang,
  path,
  title,
  description,
}: {
  lang: Locale;
  path: PagePath;
  title: string;
  description: string;
}): Metadata {
  const url = localizedUrl(lang, path);
  // Set explicitly: a page that overrides openGraph would otherwise lose the
  // image inherited from app/[lang]/opengraph-image.tsx.
  const image = {
    url: `${SITE_URL}/${lang}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: "AirToolkit: 38 developer tools in one offline workspace for Windows",
  };
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url,
      title,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

/** Serialize JSON-LD safely for a <script> tag (no "</script>" breakouts). */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
