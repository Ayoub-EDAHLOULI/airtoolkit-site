import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm text-text"
        >
          <span className="text-primary">$</span>
          <span className="font-semibold">airtoolkit</span>
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-sm text-subtext sm:flex">
          <Link href="/tools" className="hover:text-text transition-colors">
            tools
          </Link>
          <Link href="/security" className="hover:text-text transition-colors">
            security
          </Link>
          <Link href="/faq" className="hover:text-text transition-colors">
            faq
          </Link>
        </nav>

        {/* Placeholder — link to a real GitHub Releases URL once published. */}
        <a
          href="#"
          className="border border-primary px-4 py-1.5 font-mono text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          download
        </a>
      </div>
    </header>
  );
}
