"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { ResearchTheme } from "@/content/research";

export function ResearchCard({ theme }: { theme: ResearchTheme }) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!image || reduceMotion.matches) return;

    let animationFrame = 0;

    const updateImagePosition = () => {
      animationFrame = 0;
      const rect = image.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      const shift = -20 + progress * 16;
      image.style.setProperty("--image-shift", `${shift.toFixed(2)}%`);
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateImagePosition);
    };

    updateImagePosition();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <Link className={`research-card accent-${theme.accent}`} href={`/research/${theme.slug}/`}>
      <div className="research-card-image" ref={imageRef}>
        <img src={theme.image} alt={theme.imageAlt} width="1045" height="1051" loading="lazy" />
        <span className="research-number" aria-hidden="true">
          {theme.number}
        </span>
      </div>
      <div className="research-card-copy">
        <p className="eyebrow">{theme.eyebrow}</p>
        <h3>{theme.title}</h3>
        <p>{theme.summary}</p>
        <span className="text-link">
          Explore theme <span aria-hidden="true">↗</span>
        </span>
      </div>
    </Link>
  );
}
