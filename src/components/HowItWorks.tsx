const STEPS = [
  { title: "Placeholder step 1", body: "Placeholder step description." },
  { title: "Placeholder step 2", body: "Placeholder step description." },
  { title: "Placeholder step 3", body: "Placeholder step description." },
];

import Link from "next/link";

export default function HowItWorks() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-text sm:text-4xl">
          Placeholder section title — &quot;How it works&quot;
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex flex-col gap-3">
              <span className="text-sm font-mono text-primary">0{i + 1}</span>
              <h3 className="font-semibold text-text">{step.title}</h3>
              <p className="text-sm text-subtext">{step.body}</p>
            </div>
          ))}
        </div>

        {/* Placeholder screenshot slot */}
        <div className="mt-12 flex aspect-video items-center justify-center rounded-xl border border-dashed border-border bg-card text-sm text-subtext">
          Screenshot placeholder
        </div>

        <Link
          href="/tools"
          className="mt-8 inline-block text-sm font-medium text-primary hover:opacity-80 transition-opacity"
        >
          Browse all tools →
        </Link>
      </div>
    </section>
  );
}
