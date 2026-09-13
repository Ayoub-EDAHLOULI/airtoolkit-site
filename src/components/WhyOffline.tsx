const POINTS = [
  {
    title: "Placeholder point one",
    body: "Placeholder body text describing a problem with browser-based dev tools on locked-down machines.",
  },
  {
    title: "Placeholder point two",
    body: "Placeholder body text describing hidden telemetry/analytics in most 'offline' tool sites.",
  },
  {
    title: "Placeholder point three",
    body: "Placeholder body text describing AirToolkit's zero-network-calls guarantee.",
  },
];

export default function WhyOffline() {
  return (
    <section id="why-offline" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-text sm:text-4xl">
          Placeholder section title — "Why offline matters"
        </h2>
        <p className="mt-3 max-w-2xl text-subtext">
          Placeholder intro paragraph setting up the problem statement.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {POINTS.map((point) => (
            <div key={point.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-text">{point.title}</h3>
              <p className="mt-2 text-sm text-subtext">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
