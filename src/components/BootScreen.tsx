"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/types";

const SESSION_KEY = "airtoolkit-booted";
const LINE_DELAY_MS = 220;
const HOLD_MS = 350;
const FADE_MS = 500;

function hasAlreadyBooted() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

type Phase = "pending" | "booting" | "leaving" | "done";

// Server render and the first client render must produce identical output,
// so the initial phase can't depend on sessionStorage (client-only) without
// risking a hydration mismatch. Both start "pending" (renders nothing); an
// effect then reads sessionStorage once mounted and moves the phase along.
function initialPhase(): Phase {
  return "pending";
}

export default function BootScreen({ dict }: { dict: Dictionary }) {
  const [phase, setPhase] = useState<Phase>(initialPhase);
  const [shownCount, setShownCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase(hasAlreadyBooted() ? "done" : "booting");
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase !== "booting") return;

    document.documentElement.dataset.booting = "true";

    const lineCount = dict.boot.lines.length;
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < lineCount; i++) {
      timers.push(
        setTimeout(() => setShownCount(i + 1), LINE_DELAY_MS * (i + 1)),
      );
    }

    const totalLinesTime = LINE_DELAY_MS * (lineCount + 1);
    timers.push(
      setTimeout(() => {
        setPhase("leaving");
        delete document.documentElement.dataset.booting;
      }, totalLinesTime + HOLD_MS),
    );

    return () => timers.forEach(clearTimeout);
  }, [phase, dict.boot.lines.length]);

  useEffect(() => {
    if (phase !== "leaving") return;

    const timer = setTimeout(() => {
      setPhase("done");
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // sessionStorage unavailable (private mode, etc.) — safe to ignore
      }
    }, FADE_MS);

    return () => clearTimeout(timer);
  }, [phase]);

  if (phase === "pending" || phase === "done") return null;

  const leaving = phase === "leaving";

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-background transition-opacity ease-out"
      style={{
        opacity: leaving ? 0 : 1,
        transitionDuration: `${FADE_MS}ms`,
        pointerEvents: leaving ? "none" : "auto",
      }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6 px-6">
        <Image
          src="/logo.png"
          alt=""
          width={40}
          height={40}
          className="animate-fade-up"
          priority
        />

        <div
          className="w-72 border border-border bg-surface font-mono text-xs sm:w-80 sm:text-sm"
          dir="ltr"
        >
          <div className="border-b border-border px-4 py-2 text-[11px] text-muted">
            boot.sh
          </div>
          <div className="min-h-32 p-4 leading-relaxed text-subtext">
            {dict.boot.lines.slice(0, shownCount).map((line, i) => (
              <div key={i}>
                <span className="text-primary">›</span> {line}
              </div>
            ))}
            {shownCount >= dict.boot.lines.length && (
              <div className="mt-1 text-text">
                {dict.boot.ready}
                <span className="animate-caret text-primary">▍</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
