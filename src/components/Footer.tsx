import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 font-mono text-sm text-subtext sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} airtoolkit</span>

        <nav className="flex items-center gap-6">
          <Link href="/tools" className="hover:text-text transition-colors">
            tools
          </Link>
          <Link href="/security" className="hover:text-text transition-colors">
            security
          </Link>
          <Link href="/faq" className="hover:text-text transition-colors">
            faq
          </Link>
          <Link href="/about" className="hover:text-text transition-colors">
            about
          </Link>
          <a
            href="https://github.com/Ayoub-EDAHLOULI/AirToolkit"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text transition-colors"
          >
            github
          </a>
        </nav>
      </div>
    </footer>
  );
}
