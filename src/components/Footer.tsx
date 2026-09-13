export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-sm text-subtext sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} AirToolkit</span>

        <a
          href="https://github.com/Ayoub-EDAHLOULI/AirToolkit"
          target="_blank"
          rel="noreferrer"
          className="hover:text-text transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
