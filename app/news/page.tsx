import type { Metadata } from "next";
import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import { NewsCard } from "@/components/NewsCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { newsItems } from "@/content/news";

export const metadata: Metadata = {
  title: "News & media",
  description: "News, papers, media coverage and opportunities from the Quantum Systems Engineering Group.",
  alternates: { canonical: "/news/" },
};

export default function NewsPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" className="archive-main">
        <header className="archive-hero section-shell">
          <Link className="back-link" href="/">← Back to home</Link>
          <p className="eyebrow">From the group</p>
          <h1>News & media</h1>
          <p>Papers, people, coverage and opportunities—newest first.</p>
        </header>
        <section className="section-shell news-archive" aria-label="All news items">
          {newsItems.map((item) => <NewsCard item={item} compact key={`${item.date}-${item.title}`} />)}
        </section>
      </main>
      <SiteFooter />
      <FloatingNav />
    </>
  );
}
