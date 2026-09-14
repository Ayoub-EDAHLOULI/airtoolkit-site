export default function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="font-mono text-sm text-primary">
            no telemetry · no auto-update · no network calls
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
            39 dev tools. Zero network calls.
          </h1>

          <p className="mt-4 max-w-lg text-lg text-subtext">
            AirToolkit bundles the utilities you reach for daily — JSON
            formatting, regex testing, hashing, JWT decoding, and more — into
            one desktop app that never makes a network call on its own. No
            telemetry, no auto-update, no phone-home. Ever.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Ayoub-EDAHLOULI/AirToolkit/releases/download/v0.1.0/airtoolkit_0.1.0_x64-setup.exe"
              className="bg-primary px-5 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              download for windows
            </a>
            <a
              href="https://github.com/Ayoub-EDAHLOULI/AirToolkit"
              target="_blank"
              rel="noreferrer"
              className="border border-border px-5 py-2.5 font-mono text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface"
            >
              view on github
            </a>
          </div>

          <p className="mt-4 font-mono text-xs text-muted">
            deploying via Group Policy or SCCM?{" "}
            <a
              href="https://github.com/Ayoub-EDAHLOULI/AirToolkit/releases/download/v0.1.0/airtoolkit_0.1.0_x64_en-US.msi"
              className="text-subtext underline underline-offset-2 transition-colors hover:text-primary"
            >
              grab the .msi
            </a>{" "}
            instead
          </p>
        </div>

        <div
          className="animate-fade-up border border-border bg-surface font-mono text-sm"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="border-b border-border px-4 py-2 text-xs text-muted">
            verify-offline.ps1
          </div>
          <pre className="overflow-x-auto p-4 leading-relaxed text-subtext">
            <code>
              <span className="text-muted"># block all outbound traffic</span>
              {"\n"}
              <span className="text-primary">New-NetFirewallRule</span> `
              {"\n"} -DisplayName{" "}
              <span className="text-text">&quot;Block-AirToolkit&quot;</span>{" "}
              `
              {"\n"} -Program{" "}
              <span className="text-text">airtoolkit.exe</span> -Action{" "}
              <span className="text-text">Block</span>
              {"\n\n"}
              <span className="text-muted"># app keeps working normally</span>
              <span className="animate-caret text-primary">▍</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
