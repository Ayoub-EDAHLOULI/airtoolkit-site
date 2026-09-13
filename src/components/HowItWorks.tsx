import Link from "next/link";
import Reveal from "./Reveal";

const STEPS = [
  { title: "Placeholder step 1", body: "Placeholder step description." },
  { title: "Placeholder step 2", body: "Placeholder step description." },
  { title: "Placeholder step 3", body: "Placeholder step description." },
];

export default function HowItWorks() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Placeholder section title — &quot;How it works&quot;
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delayMs={i * 150}>
              <span className="font-mono text-sm text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-semibold text-text">{step.title}</h3>
              <p className="mt-1.5 text-sm text-subtext">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Link
          href="/tools"
          className="mt-10 inline-block font-mono text-sm text-primary transition-colors hover:text-primary-hover"
        >
          → browse all tools
        </Link>
      </div>
    </section>
  );
}
