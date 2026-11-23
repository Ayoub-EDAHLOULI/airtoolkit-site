import Link from "next/link";
import { Download, PanelsTopLeft, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const stepIcons = [Download, PanelsTopLeft, ShieldCheck];

export default function HowItWorks({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const t = dict.howItWorks;

  return (
    <section aria-labelledby="steps-title" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <h2 id="steps-title" className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {t.heading}
          </h2>
          <Link href={`/${lang}/tools`} className="inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-blue-300 underline decoration-blue-300/40 underline-offset-4 transition-colors first-letter:uppercase hover:text-white">
            {t.browseTools.replace(/^[←→]\s*/, "")}
          </Link>
        </div>

        <ol className="mt-6 grid border-t border-border md:mt-9 md:grid-cols-3">
          {t.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? PanelsTopLeft;
            return (
              <li key={step.title} className="flex gap-4 border-b border-border py-6 last:border-b-0 md:block md:border-b-0 md:border-s md:px-7 md:pt-7 md:pb-0 md:first:border-s-0 md:first:ps-0 md:last:pe-0">
                <Icon aria-hidden="true" size={23} strokeWidth={1.6} className="mt-0.5 shrink-0 text-blue-300 md:mb-4" />
                <div>
                  <h3 className="text-lg leading-snug font-semibold tracking-tight text-text">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-subtext">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
