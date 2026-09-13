import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-wide text-text">
          AirToolkit
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-subtext sm:flex">
          <a href="#why-offline" className="hover:text-text transition-colors">
            Why offline
          </a>
          <a href="#tools" className="hover:text-text transition-colors">
            Tools
          </a>
          <a href="#how-it-works" className="hover:text-text transition-colors">
            How it works
          </a>
          <a href="#verification" className="hover:text-text transition-colors">
            Verification
          </a>
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
