import {
  TOOLS,
  TOOL_CATEGORIES,
  CATEGORY_SLUGS,
  NETWORK_TOOL,
} from "@/lib/tools";
import Reveal from "./Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function ToolsShowcase({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const t = dict.toolsShowcase;
  const formatCount = (n: number) =>
    t.toolCount.replace("{n}", new Intl.NumberFormat(lang).format(n));

  const groups = TOOL_CATEGORIES.map((category) => ({
    category,
    slug: CATEGORY_SLUGS[category],
    tools: TOOLS.filter((tool) => tool.category === category),
  }));

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {t.heading}
          </h1>
          <p className="mt-3 max-w-xl text-subtext">{t.subheading}</p>

          <nav
            aria-label={t.jumpTo}
            className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs"
          >
            <span className="me-1 text-muted">{t.jumpTo}:</span>
            {groups.map(({ category, slug, tools }) => (
              <a
                key={slug}
                href={`#${slug}`}
                className="border border-border px-3 py-1.5 text-subtext transition-colors hover:border-border-strong hover:text-text"
              >
                {t.categories[category].toLowerCase()}{" "}
                <span className="text-muted">
                  {new Intl.NumberFormat(lang).format(tools.length)}
                </span>
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16">
          {groups.map(({ category, slug, tools }) => (
            <section key={slug} id={slug} className="scroll-mt-24">
              <Reveal>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="font-mono text-sm text-text">
                    <span className="text-primary">#</span>{" "}
                    {t.categories[category].toLowerCase()}
                  </h2>
                  <span className="font-mono text-xs text-muted">
                    {formatCount(tools.length)}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm text-subtext">
                  {t.categoryDescriptions[category]}
                </p>
              </Reveal>

              <div className="mt-5 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                {tools.map((tool) => {
                  const entry = t.tools[tool.key];
                  const usesNetwork = tool.key === NETWORK_TOOL;

                  return (
                    <article
                      key={tool.key}
                      id={tool.key}
                      className="flex scroll-mt-24 flex-col bg-surface p-6 transition-colors duration-200 hover:bg-surface-hover sm:last:odd:col-span-2"
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <h3 className="font-semibold text-text">
                          {entry.label}
                        </h3>
                        {usesNetwork && (
                          <span className="border border-border-strong px-1.5 py-0.5 font-mono text-[11px] text-subtext">
                            {t.networkBadge}
                          </span>
                        )}
                      </div>

                      <p className="mt-1.5 text-sm text-subtext">
                        {entry.description}
                      </p>

                      <ul className="mt-4 flex flex-col gap-1.5 text-sm text-text/85">
                        {entry.features.map((feature) => (
                          <li key={feature} className="flex gap-2">
                            <span
                              aria-hidden="true"
                              className="font-mono text-primary"
                            >
                              ›
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-5">
                        <p className="border-t border-border pt-4 text-xs leading-relaxed text-subtext">
                          <span className="font-mono text-muted">
                            {t.whyOfflineLabel}:
                          </span>{" "}
                          {entry.whyOffline}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
