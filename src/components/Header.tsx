"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import LanguageSwitcher from "./LanguageSwitcher";
import { SETUP_EXE_URL } from "@/lib/release";

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const routes = ["tools", "security", "faq", "about"] as const;
  const links = routes.map((route) => {
    const href = `/${lang}/${route}`;
    return (
      <Link
        key={route}
        href={href}
        onClick={() => setOpen(false)}
        aria-current={pathname === href ? "page" : undefined}
        className="rounded-lg px-3 py-2.5 text-sm font-medium text-subtext transition-colors hover:bg-white/5 hover:text-text aria-[current=page]:text-text"
      >
        <span className={route === "faq" ? "uppercase" : "block first-letter:uppercase"}>{dict.nav[route]}</span>
      </Link>
    );
  });

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/95 backdrop-blur-xl"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (open && event.key === "Escape") {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-1 px-5 sm:h-[70px] sm:gap-3 sm:px-8 lg:px-12">
        <Link
          href={`/${lang}`}
          className="me-auto flex shrink-0 items-center gap-2.5 rounded-md"
          onClick={() => setOpen(false)}
        >
          <Image src="/logo.png" alt="" width={34} height={34} className="rounded-lg" />
          <span dir="ltr" className="text-xl font-semibold tracking-[-0.055em] text-text">AirToolkit</span>
        </Link>

        <nav className="me-auto hidden items-center gap-1 md:flex lg:gap-3">
          {links}
        </nav>
        <LanguageSwitcher lang={lang} />
        <a
          href={SETUP_EXE_URL}
          aria-label={dict.nav.download}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.055] px-3 text-sm font-semibold text-text transition-colors first-letter:uppercase hover:border-white/30 hover:bg-white/10"
        >
          <Download size={15} aria-hidden="true" />
          <span className="hidden first-letter:uppercase min-[400px]:block">{dict.nav.download}</span>
        </a>
        <button
          ref={menuButton}
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
          aria-controls="main-navigation"
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-lg text-text transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>
      <nav
        id="main-navigation"
        className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b border-border bg-background px-5 py-3 shadow-lg sm:px-8 md:hidden`}
      >
        {links}
      </nav>
    </header>
  );
}
