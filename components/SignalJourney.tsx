"use client";

import { useEffect, useState } from "react";

const stages = [
  {
    number: "01",
    label: "Probe",
    title: "Place a quantum system close to the question.",
    text: "A diamond spin, optical field or coherent excitation becomes a local transducer of its environment.",
    position: [60, 78],
  },
  {
    number: "02",
    label: "Control",
    title: "Select the physics with light and microwaves.",
    text: "Timing, frequency and polarisation isolate the response we want from drift and background.",
    position: [212, 218],
  },
  {
    number: "03",
    label: "Read out",
    title: "Turn a weak interaction into a measurable signal.",
    text: "Photon counts, spectra and phase-resolved signals carry complementary pieces of the same experiment.",
    position: [86, 364],
  },
  {
    number: "04",
    label: "Understand",
    title: "Connect the signal back to the material.",
    text: "Physical models and reconstruction reveal fields, excitations and dynamics—not merely contrast.",
    position: [220, 520],
  },
] as const;

export function SignalJourney() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>("[data-journey-step]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number((visible.target as HTMLElement).dataset.journeyStep ?? 0));
      },
      { rootMargin: "-28% 0px -36% 0px", threshold: [0.2, 0.55, 0.8] },
    );
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const [x, y] = stages[active].position;

  return (
    <section className="journey section-shell" aria-labelledby="journey-heading">
      <div className="journey-intro">
        <p className="eyebrow">How we work</p>
        <h2 id="journey-heading">From field to insight</h2>
        <p>Our experiments connect four layers. Scroll through the measurement chain.</p>
      </div>
      <div className="journey-layout">
        <div className="journey-steps">
          {stages.map((stage, index) => (
            <article
              className={active === index ? "journey-step is-active" : "journey-step"}
              key={stage.label}
              data-journey-step={index}
            >
              <div className="journey-step-meta">
                <span>{stage.number}</span>
                <span>{stage.label}</span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
        <div className="journey-visual" aria-hidden="true">
          <div className="journey-visual-inner">
            <svg viewBox="0 0 280 600" role="img">
              <path className="journey-path-shadow" d="M60 78 C155 95 245 125 212 218 C178 303 47 285 86 364 C120 433 236 420 220 520" />
              <path className="journey-path" d="M60 78 C155 95 245 125 212 218 C178 303 47 285 86 364 C120 433 236 420 220 520" />
              {stages.map((stage, index) => (
                <g key={stage.label} className={index <= active ? "journey-node is-active" : "journey-node"}>
                  <circle cx={stage.position[0]} cy={stage.position[1]} r="13" />
                  <text x={stage.position[0]} y={stage.position[1] + 4} textAnchor="middle">
                    {stage.number}
                  </text>
                </g>
              ))}
              <g className="journey-marker" transform={`translate(${x} ${y})`}>
                <circle className="journey-marker-halo" r="27" />
                <circle className="journey-marker-core" r="7" />
              </g>
            </svg>
            <div className="journey-readout">
              <span>{stages[active].number}</span>
              <strong>{stages[active].label}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
