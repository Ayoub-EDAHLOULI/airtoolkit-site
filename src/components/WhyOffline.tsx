import Link from "next/link";
import Reveal from "./Reveal";

const POINTS = [
  {
    num: "01",
    title: "Placeholder point one",
    body: "Placeholder body text describing a problem with browser-based dev tools on locked-down machines.",
  },
  {
    num: "02",
    title: "Placeholder point two",
    body: "Placeholder body text describing hidden telemetry/analytics in most 'offline' tool sites.",
  },
  {
    num: "03",
    title: "Placeholder point three",
    body: "Placeholder body text describing AirToolkit's zero-network-calls guarantee.",
  },
];

export default function WhyOffline() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Placeholder section title — &quot;Why offline matters&quot;
          </h2>
          <p className="mt-3 max-w-xl text-subtext">
            Placeholder intro paragraph setting up the problem statement.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {POINTS.map((point, i) => (
            <Reveal key={point.num} delayMs={i * 120}>
              <div className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <span className="font-mono text-sm text-muted">
                  {point.num}
                </span>
                <div>
                  <h3 className="font-semibold text-text">{point.title}</h3>
                  <p className="mt-1.5 text-sm text-subtext">{point.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Link
          href="/security"
          className="mt-8 inline-block font-mono text-sm text-primary transition-colors hover:text-primary-hover"
        >
          → see how this is verified
        </Link>
      </div>
    </section>
  );
}
