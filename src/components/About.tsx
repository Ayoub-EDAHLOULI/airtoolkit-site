import Link from "next/link";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-primary"># about</p>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Built by someone who needed it first
          </h1>
        </Reveal>

        <Reveal delayMs={100} className="mt-10 flex flex-col gap-5 text-subtext">
          <p>
            I&apos;m Ayoub, a software engineer working on security and
            access-control systems for a B2B company. Part of that job means
            spending a lot of time inside internet-restricted VMs — machines
            deliberately cut off from the outside world, because that&apos;s
            the whole point of the systems running on them.
          </p>

          <p>
            The problem is that most developer tools assume you&apos;re never
            more than one tab away from the internet. Need to format some
            JSON, test a regex, decode a JWT? On a normal machine, that&apos;s
            a search away. On a locked-down VM, it&apos;s not — and the
            &quot;offline&quot; tool sites that claim to work anyway often
            still ship analytics or font CDNs that fail loudly, or quietly
            phone home, the moment they&apos;re blocked.
          </p>

          <p>
            I kept solving this the same way: install a real desktop app,
            once, and never think about the network again. AirToolkit is
            that app, built properly instead of improvised each time —
            39 tools that cover the everyday utility work, running fully
            local, with the zero-network-calls guarantee treated as a real
            engineering constraint rather than a tagline.
          </p>

          <p>
            It&apos;s also the same instinct behind{" "}
            <span className="text-text">NeuroKey</span>, an offline
            password manager I built earlier — no cloud, no server in the
            middle, your data never leaves your device. AirToolkit is that
            same principle applied to the tools developers reach for every
            day.
          </p>
        </Reveal>

        <Reveal delayMs={200} className="mt-12 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted">know more</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="https://ayoubedahlouli.com/en"
              target="_blank"
              rel="noreferrer"
              className="border border-border px-5 py-2.5 font-mono text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface"
            >
              about the developer →
            </Link>
            <a
              href="https://github.com/Ayoub-EDAHLOULI/AirToolkit"
              target="_blank"
              rel="noreferrer"
              className="border border-border px-5 py-2.5 font-mono text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface"
            >
              source on github →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
