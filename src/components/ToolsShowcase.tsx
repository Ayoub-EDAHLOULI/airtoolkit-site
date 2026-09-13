import { TOOLS, TOOL_CATEGORIES } from "@/lib/tools";

export default function ToolsShowcase() {
  return (
    <section id="tools" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-text sm:text-4xl">
          Placeholder section title — "~38 tools, one app"
        </h2>
        <p className="mt-3 max-w-2xl text-subtext">
          Placeholder intro paragraph. Replace the TOOLS array in
          src/lib/tools.ts with the real list from AirToolkit's own
          src/tools.ts.
        </p>

        <div className="mt-12 flex flex-col gap-10">
          {TOOL_CATEGORIES.map((category) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-subtext">
                {category}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {TOOLS.filter((tool) => tool.category === category).map(
                  (tool) => (
                    <div
                      key={tool.label}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <h4 className="font-medium text-text">{tool.label}</h4>
                      <p className="mt-1 text-sm text-subtext">
                        {tool.description}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
