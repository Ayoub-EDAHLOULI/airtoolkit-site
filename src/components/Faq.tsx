"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const QUESTIONS = [
  {
    question: "Does AirToolkit really make zero network calls?",
    answer:
      "Yes, with one documented exception: the API Request Tester, whose entire purpose is sending a request you compose on demand. Every other tool never touches the network. See the Security page for exactly how this is checked.",
  },
  {
    question: "Do I need an internet connection to install or run it?",
    answer:
      "No. Once you have the installer, setup and every tool work fully offline — no account, no license server, no update check.",
  },
  {
    question: "What platforms does it support?",
    answer:
      "Windows, built with Tauri. It was built specifically for locked-down Windows VMs, which is the primary target today.",
  },
  {
    question: "Is it open source?",
    answer:
      "Yes — the full source is on GitHub. You're welcome to read it, audit it, or build it yourself instead of trusting a packaged binary.",
  },
  {
    question: "Why not just use browser-based tools?",
    answer:
      "Most browser-based dev tool sites are unreachable on internet-restricted machines, and many that claim to work offline still load analytics or font CDNs that fail (or silently phone home) the moment they're blocked.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-text">{question}</span>
        <span
          className={`shrink-0 font-mono text-subtext transition-transform duration-500 ease-out ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="pb-5 text-sm text-subtext">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Frequently asked questions
          </h1>
        </Reveal>

        <Reveal delayMs={100} className="mt-10 border-t border-border">
          {QUESTIONS.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
