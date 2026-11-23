import Image from "next/image";
import { Download } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { SETUP_EXE_URL, STORE_URL } from "@/lib/release";
import { container } from "./ui";

export default function FinalCta({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.home.finalCta;

  return (
    <section aria-labelledby="final-cta-title" className="border-t border-border bg-background">
      <div className={`${container} py-16 md:py-20`}>
        <div className="cta-panel overflow-hidden rounded-2xl border border-blue-400/25 px-6 py-12 text-center sm:px-12 sm:py-16">
          <Image src="/logo.png" alt="" width={48} height={48} className="mx-auto rounded-xl" />
          <h2
            id="final-cta-title"
            className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl"
          >
            {t.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-subtext sm:text-lg">{t.body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={STORE_URL} target="_blank" rel="noreferrer" className="store-link inline-flex rounded-md">
              <Image
                src={`/badges/ms-store-${lang}.svg`}
                alt={dict.hero.getFromStore}
                width={161}
                height={44}
                unoptimized
                className="h-11 w-auto"
              />
            </a>
            <a
              href={SETUP_EXE_URL}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong bg-surface px-3.5 text-sm font-medium text-text transition-colors hover:border-blue-400/60 hover:bg-surface-hover"
            >
              <Download size={16} aria-hidden="true" />
              {dict.hero.downloadWindows}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
