import Image from "next/image";
import { Download, PackageCheck, ServerCog, Store } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { MSI_URL, SETUP_EXE_URL, STORE_URL } from "@/lib/release";
import { card, container, eyebrow, heading2, lede, sectionY } from "./ui";

export default function InstallOptions({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.home.install;
  const [store, exe, msi] = t.options;

  const secondary =
    "mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-md border border-border-strong bg-surface px-3.5 text-sm font-medium text-text transition-colors hover:border-blue-400/60 hover:bg-surface-hover";

  return (
    <section id="install" aria-labelledby="install-title" className="scroll-mt-20 border-t border-border bg-background-subtle">
      <div className={`${container} ${sectionY}`}>
        <p className={eyebrow}>{t.eyebrow}</p>
        <h2 id="install-title" className={`${heading2} mt-3`}>{t.heading}</h2>
        <p className={lede}>{t.body}</p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className={`${card} relative flex flex-col gap-4 border-blue-400/40 bg-blue-400/[0.05] p-6`}>
            <div className="flex items-center justify-between gap-3">
              <Store aria-hidden="true" size={22} strokeWidth={1.6} className="text-blue-300" />
              <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-200">
                {t.recommended}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-text">{store.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-subtext">{store.body}</p>
            </div>
            <a href={STORE_URL} target="_blank" rel="noreferrer" className="store-link mt-auto inline-flex w-fit rounded-md">
              <Image
                src={`/badges/ms-store-${lang}.svg`}
                alt={store.cta}
                width={161}
                height={44}
                unoptimized
                className="h-11 w-auto"
              />
            </a>
          </article>

          <article className={`${card} flex flex-col gap-4 p-6`}>
            <PackageCheck aria-hidden="true" size={22} strokeWidth={1.6} className="text-blue-300" />
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-text">{exe.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-subtext">{exe.body}</p>
            </div>
            <a href={SETUP_EXE_URL} className={secondary}>
              <Download size={16} aria-hidden="true" />
              {exe.cta}
            </a>
          </article>

          <article className={`${card} flex flex-col gap-4 p-6`}>
            <ServerCog aria-hidden="true" size={22} strokeWidth={1.6} className="text-blue-300" />
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-text">{msi.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-subtext">{msi.body}</p>
            </div>
            <a href={MSI_URL} className={secondary}>
              <Download size={16} aria-hidden="true" />
              {msi.cta}
            </a>
          </article>
        </div>

        <p className="mt-6 text-sm text-muted">{t.requirements}</p>
      </div>
    </section>
  );
}
