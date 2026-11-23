import Link from "next/link";
import { SquareTerminal } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { container, eyebrow, heading2, lede, sectionY, textLink } from "./ui";

export default function Proof({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const t = dict.home.proof;

  return (
    <section
      aria-labelledby="proof-title"
      className="border-t border-border bg-background"
    >
      <div
        className={`${container} ${sectionY} grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16`}
      >
        <div>
          <p className={eyebrow}>{t.eyebrow}</p>
          <h2 id="proof-title" className={`${heading2} mt-3`}>
            {t.heading}
          </h2>
          <p className={lede}>{t.body}</p>

          <ol className="mt-8 flex flex-col gap-6">
            {t.methods.map((method, i) => (
              <li key={method.title} className="flex gap-4">
                <span className="font-mono text-sm text-blue-300">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight text-text">
                    {method.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-subtext">
                    {method.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Link href={`/${lang}/security`} className={`${textLink} mt-6`}>
            {t.cta}
          </Link>
        </div>

        <figure className="min-w-0 overflow-hidden rounded-xl border border-border bg-[#0d1420]">
          <figcaption
            dir="ltr"
            className="flex items-center gap-2.5 border-b border-white/8 bg-white/2.5 px-5 py-3 font-mono text-[0.8125rem] text-slate-300"
          >
            <SquareTerminal
              aria-hidden="true"
              size={16}
              className="text-blue-400"
            />
            audit.sh
          </figcaption>
          <pre
            dir="ltr"
            className="overflow-x-auto px-5 py-6 text-left font-mono text-[0.8125rem] leading-6 text-slate-300 sm:text-sm"
          >
            <code>
              <span className="text-slate-500"># frontend</span>
              {"\n"}
              <span className="text-slate-500">$</span>{" "}
              <span className="text-blue-300">rg</span> -n \{"\n  "}
              <span className="text-emerald-300">
                &quot;fetch\(|XMLHttpRequest|WebSocket|EventSource|sendBeacon&quot;
              </span>{" "}
              \{"\n  "}src/
              {"\n"}
              src/pages/ApiTester.tsx{" "}
              <span className="text-slate-500"># {t.exceptionComment}</span>
              {"\n\n"}
              <span className="text-slate-500"># rust side</span>
              {"\n"}
              <span className="text-slate-500">$</span>{" "}
              <span className="text-blue-300">rg</span> -n{" "}
              <span className="text-emerald-300">
                &quot;reqwest|TcpStream|UdpSocket&quot;
              </span>{" "}
              src-tauri/src/
              {"\n"}
              <span className="text-slate-500"># {t.noMatches}</span>
              <span className="animate-caret text-blue-300">▍</span>
            </code>
          </pre>
        </figure>
      </div>
    </section>
  );
}
