"use client";

import Image from "next/image";
import { useState } from "react";
import { Braces, ScanFace, Regex, Pipette, Maximize2 } from "lucide-react";

const icons = [Braces, ScanFace, Regex, Pipette];

type Capture = { src: string; name: string; description: string };

export default function ProductPreview({ captures, label, expand }: {
  captures: Capture[];
  label: string;
  expand: string;
}) {
  const [index, setIndex] = useState(0);
  const active = captures[index];

  return (
    <figure className="preview-frame mt-9 overflow-hidden rounded-2xl border border-border-strong sm:mt-12">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-white/10 bg-[#101824] px-3 py-2 sm:px-5">
        <span className="ps-1 text-sm font-semibold text-text">{label}</span>
        <div role="group" aria-label={label} className="flex max-w-full flex-wrap gap-1">
          {captures.map((capture, i) => {
            const Icon = icons[i];
            return (
              <button type="button" key={capture.src} aria-pressed={i === index}
                onClick={() => setIndex(i)}
                className="inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-md border border-transparent px-2.5 text-xs font-medium text-subtext transition-colors hover:bg-white/5 hover:text-white aria-pressed:border-blue-400/30 aria-pressed:bg-blue-400/10 aria-pressed:text-blue-200 sm:text-sm">
                <Icon size={15} aria-hidden="true" />{capture.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="preview-stage">
        <a href={active.src} target="_blank" rel="noreferrer" aria-label={`${expand} · ${active.name}`} className="preview-image-link">
          <Image src={active.src} alt={active.name} fill unoptimized loading={index === 0 ? "eager" : "lazy"} className="object-cover object-top" />
        </a>
      </div>
      <figcaption className="flex items-center justify-between gap-4 border-t border-border bg-[#101824] px-4 py-3.5 sm:px-6">
        <p aria-live="polite" className="text-sm leading-relaxed text-subtext">{active.description}</p>
        <a href={active.src} target="_blank" rel="noreferrer" aria-label={expand} title={expand}
          className="inline-flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-md border border-border-strong text-subtext hover:border-blue-400/60 hover:text-text">
          <Maximize2 size={16} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}
