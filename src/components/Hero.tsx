export default function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
      <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-subtext">
        Placeholder eyebrow — e.g. "100% offline · zero network calls"
      </span>

      <h1 className="text-4xl font-bold tracking-tight text-text sm:text-6xl">
        Placeholder headline goes here
      </h1>

      <p className="max-w-2xl text-lg text-subtext">
        Placeholder subheadline — one or two sentences pitching AirToolkit as
        an offline-first developer toolbox for air-gapped and locked-down
        machines.
      </p>

      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
        {/* Placeholder — link to a real GitHub Releases URL once published. */}
        <a
          href="#"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Download for Windows
        </a>
        <a
          href="#"
          className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text hover:bg-card transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}
