import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import { NewsCard } from "@/components/NewsCard";
import { ResearchCard } from "@/components/ResearchCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredNews } from "@/content/news";
import { people } from "@/content/people";
import { researchThemes } from "@/content/research";
import { selectedPublications } from "@/content/publications";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">NUS · Electrical & Computer Engineering</p>
            <h1 id="hero-title">Interfacing quantum systems.</h1>
            <p className="hero-lede">
              We study how quantum systems behave and evolve in real-world environments. By precisely controlling quantum
              degrees of freedom (e.g., spins and phonons), we develop innovative approaches to&nbsp;
              <em>interface quantum systems to other scientific domains</em>.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                Explore our research
              </a>
              <a className="button button-quiet" href="mailto:tan.anthony@nus.edu.sg">
                Work with us <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <figure className="hero-visual">
            <img
              src="/images/research/nv-scanning.png"
              alt="Illustration of a scanning diamond quantum sensor above a magnetic texture"
              width="510"
              height="456"
            />
          </figure>
        </section>

        <section id="news" className="news-section section-shell" data-nav-section aria-labelledby="news-heading">
          <div className="section-heading heading-with-link">
            <div>
              <p className="eyebrow">News & media</p>
              <h2 id="news-heading">What’s happening now</h2>
            </div>
            <Link className="text-link" href="/news/">
              All updates <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="news-grid">
            {featuredNews.map((item) => (
              <NewsCard item={item} key={`${item.date}-${item.title}`} />
            ))}
          </div>
        </section>

        <section id="research" className="research-section section-shell" data-nav-section aria-labelledby="research-heading">
          <div className="section-heading research-heading">
            <div>
              <p className="eyebrow">Four broad themes</p>
              <h2 id="research-heading">Our research</h2>
            </div>
          </div>
          <div className="research-grid">
            {researchThemes.map((theme) => (
              <ResearchCard theme={theme} key={theme.slug} />
            ))}
          </div>
        </section>

        <section
          id="publications"
          className="recent-publications section-shell"
          data-nav-section
          aria-labelledby="recent-publications-heading"
        >
          <div className="section-heading heading-with-link">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="recent-publications-heading">Recent publications</h2>
            </div>
            <Link className="text-link" href="/publications/">
              Search all publications <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="recent-publication-list">
            {selectedPublications.slice(0, 5).map((publication, index) => (
              <article className="recent-publication" key={publication.href}>
                <span className="publication-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="publication-venue">
                    {publication.venue} · {publication.year}
                  </p>
                  <h3>
                    <a href={publication.href} target="_blank" rel="noreferrer">
                      {publication.title}
                    </a>
                  </h3>
                  <p className="publication-authors">{publication.authors}</p>
                </div>
                <a className="round-link" href={publication.href} target="_blank" rel="noreferrer" aria-label={`Open ${publication.title}`}>
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="people" className="people-section section-shell" data-nav-section aria-labelledby="people-heading">
          <div className="section-heading research-heading">
            <div>
              <p className="eyebrow">People</p>
              <h2 id="people-heading">Interdisciplinary minds, crossing boundaries</h2>
            </div>
            <p>We work across quantum optics, condensed matter, microwave control, cryogenics and device engineering.</p>
          </div>
          <div className="people-grid">
            {people.map((person) => (
              <article className="person-card" key={person.name}>
                <div className="person-photo">
                  <img src={person.image} alt={person.alt} width="1653" height="2302" loading="lazy" />
                </div>
                <div className="person-copy">
                  <h3>{person.name}</h3>
                  <p className="person-role">{person.role}</p>
                  {person.email ? <a href={`mailto:${person.email}`}>Email ↗</a> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="join" className="join-section section-shell" data-nav-section aria-labelledby="join-heading">
          <div className="join-copy">
            <p className="eyebrow">Join & collaborate</p>
            <h2 id="join-heading">Bring us an interesting idea or problem.</h2>
            <p>
              We welcome PhD, postdoctoral and internship enquiries, as well as collaborations with scientists and industry teams.
            </p>
            <a className="button button-dark" href="mailto:tan.anthony@nus.edu.sg">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="location-card">
            <div className="location-marker" aria-hidden="true">
              <span />
            </div>
            <p className="eyebrow">Find us</p>
            <h3>National University of Singapore</h3>
            <p>Electrical and Computer Engineering<br />Kent Ridge, Singapore</p>
            <a href="https://maps.google.com/?q=National+University+of+Singapore+Electrical+and+Computer+Engineering" target="_blank" rel="noreferrer">
              Open map <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingNav />
    </>
  );
}
