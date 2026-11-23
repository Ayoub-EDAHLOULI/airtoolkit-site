import Link from "next/link";
import {
  BadgeCheck,
  FileKey,
  FileLock,
  KeyRound,
  ScrollText,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";
import type { ToolKey } from "@/lib/tools";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { card, container, eyebrow, heading2, lede, sectionY } from "./ui";

// The tools whose input is sensitive by nature — the strongest case for offline.
const SPOTLIGHT: [ToolKey, LucideIcon][] = [
  ["jwtDecoder", KeyRound],
  ["x509CertificateDecoder", BadgeCheck],
  ["certificateCsrGenerator", FileKey],
  ["dotenvDiffValidator", FileLock],
  ["logParserGrep", ScrollText],
  ["curlRequestBuilder", SquareTerminal],
];

export default function Spotlight({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.home.spotlight;
  const tools = dict.toolsShowcase.tools;

  return (
    <section aria-labelledby="spotlight-title" className="border-t border-border bg-background-subtle">
      <div className={`${container} ${sectionY}`}>
        <p className={eyebrow}>{t.eyebrow}</p>
        <h2 id="spotlight-title" className={`${heading2} mt-3 max-w-3xl`}>{t.heading}</h2>
        <p className={lede}>{t.body}</p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SPOTLIGHT.map(([key, Icon]) => (
            <li key={key}>
              <Link
                href={`/${lang}/tools#${key}`}
                className={`${card} flex h-full gap-4 p-5 hover:border-blue-400/40 hover:bg-surface sm:p-6`}
              >
                <Icon aria-hidden="true" size={22} strokeWidth={1.6} className="mt-0.5 shrink-0 text-blue-300" />
                <div>
                  <h3 className="font-semibold tracking-tight text-text">{tools[key].label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-subtext">{tools[key].whyOffline}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
