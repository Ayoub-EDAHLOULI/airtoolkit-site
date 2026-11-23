import Link from "next/link";
import { GlobeLock, MonitorOff, ShieldCheck, SquareTerminal } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const pointIcons = [MonitorOff, GlobeLock, ShieldCheck];

export default function WhyOffline({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const t = dict.whyOffline;

  return (
    <section aria-labelledby="offline-title" className="border-t border-border bg-background-subtle">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.91fr_1.09fr] lg:items-start lg:gap-20 lg:px-12 lg:py-24">
        <div className="min-w-0">
          <h2 id="offline-title" className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-subtext">{t.subheading}</p>

          <figure className="mt-8 overflow-hidden rounded-xl border border-border bg-[#0d1420]">
            <figcaption dir="ltr" className="flex items-center gap-2.5 border-b border-white/8 bg-white/[0.025] px-5 py-3 font-mono text-[0.8125rem] text-slate-300">
              <SquareTerminal aria-hidden="true" size={16} className="text-blue-400" />
              verify-offline.ps1
            </figcaption>
            <pre dir="ltr" className="whitespace-pre-wrap break-words px-5 py-6 text-left font-mono text-[0.8125rem] leading-6 text-slate-300 sm:text-sm">
              <code>
                <span className="text-slate-400">{dict.hero.terminalComment1}</span>
                {"\n"}
                <span className="text-sky-300">$app</span>{" = ("}<span className="text-blue-300">Get-Process</span>{" AirToolkit -ErrorAction Stop)[0].Path"}
                {"\n\n"}
                <span className="text-blue-300">New-NetFirewallRule</span>{" `\n"}
                {"  -DisplayName "}<span className="text-emerald-300">&quot;Block-AirToolkit&quot;</span>{" `\n"}
                {"  -Direction Outbound `\n"}
                {"  -Program "}<span className="text-sky-300">$app</span>{" -Action Block"}
              </code>
            </pre>
          </figure>
          <Link href={`/${lang}/security`} className="mt-4 inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-blue-300 underline decoration-blue-300/40 underline-offset-4 transition-colors first-letter:uppercase hover:text-white">
            {t.seeVerification.replace(/^[←→]\s*/, "")}
          </Link>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {t.points.map((point, index) => {
            const Icon = pointIcons[index] ?? ShieldCheck;
            return (
              <li key={point.num} className="flex gap-4 py-6 sm:gap-5">
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg border border-blue-400/15 bg-blue-400/[0.06] text-blue-300">
                  <Icon aria-hidden="true" size={20} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-lg leading-snug font-semibold tracking-tight text-text">{point.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-subtext">{point.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
