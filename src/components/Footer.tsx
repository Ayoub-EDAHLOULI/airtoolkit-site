import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const pages = ["tools", "security", "faq", "about", "privacy"] as const;

  return (
    <footer className="border-t border-border bg-background-subtle">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-9 text-sm text-subtext sm:px-8 md:flex-row md:items-center lg:px-12">
        <div className="flex items-center gap-3">
          <Link href={`/${lang}`} className="flex items-center gap-2 rounded-md text-base font-semibold tracking-[-0.045em] text-text">
            <Image src="/logo.png" alt="" width={28} height={28} className="rounded-md" />
            <span dir="ltr">AirToolkit</span>
          </Link>
          <span className="border-s border-border ps-3 text-xs" dir="auto">© {new Date().getFullYear()}</span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {pages.map((page) => (
            <Link
              key={page}
              href={`/${lang}/${page}`}
              className="rounded-sm py-1.5 first-letter:uppercase transition-colors hover:text-text"
            >
              <span className={page === "faq" ? "uppercase" : undefined}>
                {page === "privacy" ? dict.footer.privacy : dict.nav[page]}
              </span>
            </Link>
          ))}
          <a
            href="https://github.com/Ayoub-EDAHLOULI/AirToolkit"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm py-1.5 transition-colors hover:text-text"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
