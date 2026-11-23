"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Globe } from "lucide-react";
import { isLocale, LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/config";

const languageLabel: Record<Locale, string> = {
  en: "Language",
  fr: "Langue",
  es: "Idioma",
  de: "Sprache",
  ar: "اللغة",
  zh: "语言",
};

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: string) {
    if (!isLocale(next)) return;
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000`;
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") + window.location.search + window.location.hash);
  }

  return (
    <label className="relative inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-lg px-2 text-sm font-medium text-subtext transition-colors focus-within:outline-2 focus-within:outline-primary hover:bg-white/5 hover:text-text">
      <Globe size={16} aria-hidden="true" />
      <span aria-hidden="true" className="uppercase">{lang}</span>
      <ChevronDown size={13} aria-hidden="true" className="hidden sm:inline" />
      <select
        aria-label={languageLabel[lang]}
        value={lang}
        onChange={(event) => switchTo(event.target.value)}
        className="absolute inset-0 size-full cursor-pointer appearance-none rounded-lg bg-surface text-text opacity-0"
      >
        {LOCALES.map((locale) => (
          <option key={locale} value={locale} lang={locale}>
            {LOCALE_LABELS[locale]}
          </option>
        ))}
      </select>
    </label>
  );
}
