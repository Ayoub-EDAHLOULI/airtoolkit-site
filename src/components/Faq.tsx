"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const QUESTIONS = [
  {
    question: "Placeholder question one?",
    answer: "Placeholder answer text.",
  },
  {
    question: "Placeholder question two?",
    answer: "Placeholder answer text.",
  },
  {
    question: "Placeholder question three?",
    answer: "Placeholder answer text.",
  },
  {
    question: "Placeholder question four?",
    answer: "Placeholder answer text.",
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
            Placeholder page title — &quot;Frequently asked questions&quot;
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
