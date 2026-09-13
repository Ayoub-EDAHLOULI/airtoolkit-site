import { TOOLS, TOOL_CATEGORIES } from "@/lib/tools";
import Reveal from "./Reveal";

export default function ToolsShowcase() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            39 tools, one app
          </h1>
          <p className="mt-3 max-w-xl text-subtext">
            Everything runs locally, in the same window, with no per-tool
            setup. Search the sidebar in the app, or browse by category here.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10">
          {TOOL_CATEGORIES.map((category, i) => (
            <Reveal key={category} delayMs={i * 100}>
              <h3 className="font-mono text-xs text-muted">
                # {category.toLowerCase()}
              </h3>
              <div className="mt-3 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {TOOLS.filter((tool) => tool.category === category).map(
                  (tool) => (
                    <div
                      key={tool.label}
                      className="bg-surface p-5 transition-colors duration-200 hover:bg-surface-hover"
                    >
                      <h4 className="font-medium text-text">{tool.label}</h4>
                      <p className="mt-1 text-sm text-subtext">
                        {tool.description}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
