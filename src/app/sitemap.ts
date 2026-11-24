import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/config";
import { PAGES, languageAlternates, localizedUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.flatMap((path) =>
    LOCALES.map((lang) => ({
      url: localizedUrl(lang, path),
      lastModified,
      changeFrequency: path === "" || path === "tools" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "tools" ? 0.9 : path === "privacy" ? 0.3 : 0.7,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
