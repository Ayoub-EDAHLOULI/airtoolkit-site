import Link from "next/link";
import { Plus } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { container, heading2, sectionY, textLink } from "./ui";

export default function FaqPreview({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.home.faqPreview;
  const questions = dict.faq.questions.slice(0, 4);

  return (
    <section aria-labelledby="faq-preview-title" className="border-t border-border bg-background">
      <div className={`${container} ${sectionY} grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <div>
          <h2 id="faq-preview-title" className={heading2}>{t.heading}</h2>
          <Link href={`/${lang}/faq`} className={`${textLink} mt-4`}>{t.cta}</Link>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {questions.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-start font-medium text-text [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  aria-hidden="true"
                  size={18}
                  className="shrink-0 text-subtext transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="pb-5 text-base leading-relaxed text-subtext">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
