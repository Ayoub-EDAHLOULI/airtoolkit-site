import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-wide text-text">
          AirToolkit
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-subtext sm:flex">
          <Link href="/tools" className="hover:text-text transition-colors">
            Tools
          </Link>
          <Link href="/security" className="hover:text-text transition-colors">
            Security
          </Link>
          <Link href="/faq" className="hover:text-text transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Placeholder — link to a real GitHub Releases URL once published. */}
        <a
          href="#"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Download
        </a>
      </div>
    </header>
  );
}
