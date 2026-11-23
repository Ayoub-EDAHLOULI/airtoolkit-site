import Image from "next/image";
import { Download } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import ProductPreview from "./ProductPreview";
import { MSI_URL, RELEASE_NOTES_URL, SETUP_EXE_URL, STORE_URL } from "@/lib/release";


const previews = [
  ["jsonFormatter", "json-formatter"],
  ["jwtDecoder", "jwt-decoder"],
  ["regexTester", "regex-tester"],
  ["colorPaletteExtractor", "color-palette"],
] as const;

export default function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.hero;
  const captures = previews.map(([key, file]) => ({
    src: `/previews/${file}.webp`,
    name: dict.toolsShowcase.tools[key].label,
    description: dict.toolsShowcase.tools[key].description,
  }));

  return (
    <section className="home-hero border-b border-border">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pt-20">
        <div className="grid items-end gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <p className="mb-5 flex items-center gap-2.5 font-mono text-xs font-medium tracking-wide text-blue-200 sm:text-sm">
              <span aria-hidden="true" className="windows-mark" />{t.badge}
            </p>
            <h1 className="hero-title">
              <span className="block">{t.title}</span>
              <span className="hero-accent block">{t.titleAccent}</span>
            </h1>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-base leading-relaxed text-subtext sm:text-lg">{t.body}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a className="store-link inline-flex rounded-md" href={STORE_URL} target="_blank" rel="noreferrer">
                <Image src={`/badges/ms-store-${lang}.svg`} alt={t.getFromStore} width={161} height={44} unoptimized className="h-11 w-auto" />
              </a>
              <a href={SETUP_EXE_URL} className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong bg-surface px-3.5 text-sm font-medium text-text transition-colors hover:border-blue-400/60 hover:bg-surface-hover">
                <Download size={16} aria-hidden="true" />{t.downloadWindows}
              </a>
            </div>
            <div className="mt-3.5 flex flex-wrap items-center gap-x-3 text-sm text-muted">
              <a href={RELEASE_NOTES_URL} target="_blank" rel="noreferrer" className="hover:text-text hover:underline">{t.viewGithub}</a>
              <span aria-hidden="true">·</span>
              <a href={MSI_URL} className="hover:text-text hover:underline">{t.grabMsi}</a>
            </div>
          </div>
        </div>
        <ProductPreview captures={captures} label={t.previewLabel} expand={t.expandPreview} />
      </div>
    </section>
  );
}
