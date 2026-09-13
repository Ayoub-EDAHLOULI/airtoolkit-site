import Reveal from "./Reveal";

const CHECKS = [
  {
    title: "Static code audit",
    body: "Placeholder — grep the entire source for fetch/XMLHttpRequest/WebSocket and Rust-side network primitives; only the API Request Tester should match.",
  },
  {
    title: "OS-level firewall block",
    body: "Placeholder — block all outbound traffic for the packaged binary and confirm every tool still works fully.",
  },
  {
    title: "Network-isolated VM",
    body: "Placeholder — run the same build with no virtual NIC for the strongest guarantee.",
  },
];

export default function Verification() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Placeholder page title — &quot;Verifiable, not just claimed&quot;
          </h1>
          <p className="mt-3 max-w-xl text-subtext">
            Placeholder intro paragraph. Replace with the real offline
            verification writeup (static code audit + OS-level firewall/VM
            test) once it&apos;s finalized in the AirToolkit README.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal delayMs={100}>
            <div className="divide-y divide-border border-t border-border">
              {CHECKS.map((check) => (
                <div key={check.title} className="py-5">
                  <h3 className="font-semibold text-text">{check.title}</h3>
                  <p className="mt-1.5 text-sm text-subtext">{check.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="border border-border bg-surface font-mono text-sm">
              <div className="border-b border-border px-4 py-2 text-xs text-muted">
                verify.sh
              </div>
              <pre className="overflow-x-auto p-4 leading-relaxed text-subtext">
                <code>
                  <span className="text-muted">$</span> grep -rn{" "}
                  <span className="text-text">&quot;fetch(&quot;</span> src/
                  {"\n"}
                  src/pages/ApiTester.tsx{"  "}
                  <span className="text-muted">
                    # the one documented exception
                  </span>
                  {"\n\n"}
                  <span className="text-muted">$</span> New-NetFirewallRule \
                  {"\n"} -Program airtoolkit.exe -Action Block
                  {"\n\n"}
                  <span className="text-primary">
                    ✓ every other tool keeps working normally
                  </span>
                  <span className="animate-caret text-primary">▍</span>
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
