import type { Dictionary } from "@/i18n/types";
import { container } from "./ui";

export default function KeyFacts({ dict }: { dict: Dictionary }) {
  const facts = dict.home.facts;

  return (
    <section className="border-b border-border bg-background-subtle">
      <dl
        className={`${container} grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:grid-cols-3 sm:py-12 lg:grid-cols-5`}
      >
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col-reverse gap-1.5 border-s border-border ps-4">
            <dt className="text-sm leading-snug text-subtext">{fact.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight text-text tabular-nums sm:text-4xl">
              <bdi>{fact.value}</bdi>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
