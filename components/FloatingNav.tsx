"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
  { id: "news", href: "/#news", long: "News", short: "News" },
  { id: "research", href: "/#research", long: "Research", short: "Research" },
  { id: "publications", href: "/#publications", long: "Publications", short: "Papers" },
  { id: "people", href: "/#people", long: "People", short: "People" },
  { id: "join", href: "/#join", long: "Join us", short: "Join" },
];

export function FloatingNav() {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname.startsWith("/publications") ? "publications" : "");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (pathname !== "/") {
      return () => window.removeEventListener("scroll", onScroll);
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-34% 0px -54% 0px", threshold: [0, 0.2, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname.startsWith("/publications")) setActive("publications");
    else if (pathname.startsWith("/news")) setActive("news");
    else if (pathname.startsWith("/research")) setActive("research");
  }, [pathname]);

  return (
    <nav className={`floating-nav${scrolled ? " is-scrolled" : ""}`} aria-label="Primary navigation">
      <a className="floating-home" href="/" aria-label="QSE home">
        QSE
      </a>
      <span className="floating-divider" aria-hidden="true" />
      {items.map((item) => (
        <a
          key={item.id}
          className={active === item.id ? "is-active" : undefined}
          href={item.href}
          aria-current={active === item.id ? "location" : undefined}
        >
          <span className="nav-long">{item.long}</span>
          <span className="nav-short">{item.short}</span>
        </a>
      ))}
    </nav>
  );
}
