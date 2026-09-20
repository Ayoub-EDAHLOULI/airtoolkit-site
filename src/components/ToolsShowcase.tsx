import { TOOLS, TOOL_CATEGORIES, type ToolKey } from "@/lib/tools";
import Reveal from "./Reveal";
import type { Dictionary } from "@/i18n/types";

export default function ToolsShowcase({ dict }: { dict: Dictionary }) {
  const t = dict.toolsShowcase;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {t.heading}
          </h1>
          <p className="mt-3 max-w-xl text-subtext">{t.subheading}</p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10">
          {TOOL_CATEGORIES.map((category, i) => (
            <Reveal key={category} delayMs={i * 100}>
              <h3 className="font-mono text-xs text-muted">
                # {t.categories[category].toLowerCase()}
              </h3>
              <div className="mt-3 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {TOOLS.filter((tool) => tool.category === category).map(
                  (tool) => {
                    const entry = t.tools[tool.key as ToolKey];
                    return (
                      <div
                        key={tool.key}
                        className="bg-surface p-5 transition-colors duration-200 hover:bg-surface-hover"
                      >
                        <h4 className="font-medium text-text">
                          {entry.label}
                        </h4>
                        <p className="mt-1 text-sm text-subtext">
                          {entry.description}
                        </p>
                      </div>
                    );
                  },
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
