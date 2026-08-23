import type { Metadata } from "next";
import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import { PublicationExplorer } from "@/components/PublicationExplorer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Publications",
  description: "Search and filter publications from the Quantum Systems Engineering Group.",
  alternates: { canonical: "/publications/" },
};

export default function PublicationsPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" className="archive-main">
        <header className="archive-hero section-shell">
          <Link className="back-link" href="/">← Back to home</Link>
          <p className="eyebrow">Research output</p>
          <h1>Publications</h1>
          <p>Filter by research area or search across titles, authors and venues.</p>
        </header>
        <section className="section-shell archive-content" aria-label="Publication archive">
          <PublicationExplorer />
        </section>
      </main>
      <SiteFooter />
      <FloatingNav />
    </>
  );
}
