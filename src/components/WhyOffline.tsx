import Link from "next/link";
import Reveal from "./Reveal";

const POINTS = [
  {
    num: "01",
    title: "Locked-down VMs can't reach a browser tool",
    body: "Internet-restricted machines at security- and access-control-focused companies are common. Pulling up a browser-based JSON formatter or regex tester simply isn't an option there.",
  },
  {
    num: "02",
    title: "\"Offline\" web tools usually aren't",
    body: "Most sites claiming to be offline-friendly still ship analytics, font CDNs, or update checks — which fail loudly, or silently phone home, the moment they're blocked.",
  },
  {
    num: "03",
    title: "No network dependency, period",
    body: "AirToolkit makes zero network calls of its own: no telemetry, no auto-update, no phone-home. The one exception — the API Request Tester — is opt-in and documented.",
  },
];

export default function WhyOffline() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Why offline matters
          </h2>
          <p className="mt-3 max-w-xl text-subtext">
            This came out of a real need, not a feature checklist.
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
