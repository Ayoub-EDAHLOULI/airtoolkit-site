import Reveal from "./Reveal";
import type { Dictionary } from "@/i18n/types";

export default function Privacy({ dict }: { dict: Dictionary }) {
  const t = dict.privacy;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-primary">{t.tag}</p>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {t.heading}
          </h1>
          <p className="mt-3 font-mono text-xs text-muted">{t.updated}</p>
        </Reveal>

        <Reveal delayMs={100} className="mt-10 flex flex-col gap-10 text-subtext">
          <p className="text-text">{t.intro}</p>
          {t.sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-mono text-sm font-semibold text-text">
                {section.title}
              </h2>
              <p className="mt-3">{section.body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delayMs={200} className="mt-12 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted">{t.contactLead}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://github.com/Ayoub-EDAHLOULI/AirToolkit/issues"
              target="_blank"
              rel="noreferrer"
              className="border border-border px-5 py-2.5 font-mono text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface"
            >
              {t.contactLink}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
