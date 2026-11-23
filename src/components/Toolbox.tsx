import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowUpRight,
  Braces,
  KeyRound,
  Network,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { TOOLS, TOOL_CATEGORIES, CATEGORY_SLUGS } from "@/lib/tools";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { card, container, eyebrow, heading2, lede, sectionY, textLink } from "./ui";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "Formatters & Text": Braces,
  Generators: Sparkles,
  Security: KeyRound,
  "Network & Config": Network,
  "Converters & Media": ArrowLeftRight,
};

export default function Toolbox({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.home.toolbox;
  const s = dict.toolsShowcase;
  const nf = new Intl.NumberFormat(lang);

  return (
    <section aria-labelledby="toolbox-title" className="bg-background">
      <div className={`${container} ${sectionY}`}>
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <p className={eyebrow}>{t.eyebrow}</p>
            <h2 id="toolbox-title" className={`${heading2} mt-3`}>{t.heading}</h2>
            <p className={lede}>{t.body}</p>
          </div>
          <Link href={`/${lang}/tools`} className={textLink}>{t.cta}</Link>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TOOL_CATEGORIES.map((category, i) => {
            const Icon = CATEGORY_ICONS[category];
            const tools = TOOLS.filter((tool) => tool.category === category);
            const wide = i === 0;
            const shown = tools.slice(0, wide ? 9 : 4);
            const rest = tools.length - shown.length;

            return (
              <li key={category} className={wide ? "md:col-span-2" : undefined}>
                <Link
                  href={`/${lang}/tools#${CATEGORY_SLUGS[category]}`}
                  className={`${card} group flex h-full flex-col p-6 hover:border-blue-400/40 hover:bg-surface`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-10 place-items-center rounded-lg border border-blue-400/15 bg-blue-400/[0.06] text-blue-300">
                      <Icon aria-hidden="true" size={20} strokeWidth={1.6} />
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                      {s.toolCount.replace("{n}", nf.format(tools.length))}
                      <ArrowUpRight
                        aria-hidden="true"
                        size={15}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100"
                      />
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-text">
                    {s.categories[category]}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-subtext">
                    {s.categoryDescriptions[category]}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {shown.map((tool) => (
                      <li
                        key={tool.key}
                        className="rounded-md border border-border bg-background/60 px-2 py-1 text-xs text-subtext"
                      >
                        {s.tools[tool.key].label}
                      </li>
                    ))}
                    {rest > 0 && (
                      <li className="px-1 py-1 text-xs text-muted">
                        {t.more.replace("{n}", nf.format(rest))}
                      </li>
                    )}
                  </ul>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
