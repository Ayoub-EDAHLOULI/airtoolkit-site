import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-sm text-subtext sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} AirToolkit</span>

        <nav className="flex items-center gap-6">
          <Link href="/tools" className="hover:text-text transition-colors">
            Tools
          </Link>
          <Link href="/security" className="hover:text-text transition-colors">
            Security
          </Link>
          <Link href="/faq" className="hover:text-text transition-colors">
            FAQ
          </Link>
          <a
            href="https://github.com/Ayoub-EDAHLOULI/AirToolkit"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
