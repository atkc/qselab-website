import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FloatingNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { publications } from "@/content/publications";
import { getResearchTheme, researchThemes } from "@/content/research";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return researchThemes.map((theme) => ({ slug: theme.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const theme = getResearchTheme(slug);
  if (!theme) return {};
  return {
    title: theme.title,
    description: theme.summary,
    alternates: { canonical: `/research/${theme.slug}/` },
    openGraph: { title: theme.title, description: theme.summary, images: [] },
    twitter: { title: theme.title, description: theme.summary, images: [] },
  };
}

function relatedPublications(slug: string) {
  const tagsByTheme: Record<string, string[]> = {
    "emergent-physics": ["Quantum sensing", "Quantum materials"],
    "quantum-diagnostics": ["Quantum sensing"],
    "magnons-phonons": ["Magnonics", "Phonons & Brillouin", "Quantum optomechanics"],
    "rare-earth-interfaces": ["Phonons & Brillouin", "Quantum materials"],
  };
  const tags = tagsByTheme[slug] ?? [];
  return publications.filter((publication) => publication.tags.some((tag) => tags.includes(tag))).slice(0, 4);
}

export default async function ResearchDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const theme = getResearchTheme(slug);
  if (!theme) notFound();
  const related = relatedPublications(theme.slug);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" className={`research-detail accent-${theme.accent}`}>
        <section className="research-detail-hero section-shell">
          <div className="research-detail-copy">
            <Link className="back-link" href="/#research">← All research themes</Link>
            <p className="eyebrow">{theme.number} · {theme.eyebrow}</p>
            <h1>{theme.title}</h1>
            <p className="detail-thesis">{theme.thesis}</p>
          </div>
          <figure className="research-detail-image">
            <img src={theme.image} alt={theme.imageAlt} width="1045" height="1051" />
          </figure>
        </section>

        <section className="detail-question section-shell" aria-labelledby="question-heading">
          <p className="eyebrow">The question</p>
          <h2 id="question-heading">What becomes visible when the probe is part of the system?</h2>
          <p>{theme.question}</p>
        </section>

        <section className="detail-approach section-shell" aria-labelledby="approach-heading">
          <div className="section-heading">
            <p className="eyebrow">How we approach it</p>
            <h2 id="approach-heading">Platform, measurement, target</h2>
          </div>
          <div className="approach-grid">
            {theme.approach.map((item, index) => (
              <article key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-projects section-shell" aria-labelledby="projects-heading">
          <div className="section-heading research-heading">
            <div>
              <p className="eyebrow">Current directions</p>
              <h2 id="projects-heading">Questions in motion</h2>
            </div>
            <p>These project areas evolve as experiments and collaborations develop.</p>
          </div>
          <div className="project-grid">
            {theme.projects.map((project) => (
              <article key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
          {theme.collaborators?.length ? (
            <div className="collaborator-note">
              <span>Collaborating with</span>
              {theme.collaborators.map((collaborator) => <strong key={collaborator}>{collaborator}</strong>)}
            </div>
          ) : null}
        </section>

        <section className="detail-publications section-shell" aria-labelledby="theme-publications-heading">
          <div className="section-heading heading-with-link">
            <div>
              <p className="eyebrow">Selected reading</p>
              <h2 id="theme-publications-heading">Related publications</h2>
            </div>
            <Link className="text-link" href="/publications/">Full archive ↗</Link>
          </div>
          <div className="detail-publication-grid">
            {related.map((publication) => (
              <a href={publication.href} target="_blank" rel="noreferrer" key={publication.href}>
                <span>{publication.venue} · {publication.year}</span>
                <h3>{publication.title}</h3>
                <p>{publication.authors}</p>
                <strong>Read paper ↗</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="detail-cta section-shell">
          <p className="eyebrow">Work with us</p>
          <h2>Have a material, mode or measurement that belongs here?</h2>
          <a className="button button-dark" href="mailto:tan.anthony@nus.edu.sg">Start a conversation ↗</a>
        </section>
      </main>
      <SiteFooter />
      <FloatingNav />
    </>
  );
}
