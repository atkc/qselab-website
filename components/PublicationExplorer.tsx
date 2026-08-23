"use client";

import { useMemo, useState } from "react";
import { PUBLICATION_TAGS, publications } from "@/content/publications";

const filters = ["All", ...PUBLICATION_TAGS];

export function PublicationExplorer() {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return publications.filter((publication) => {
      const tagMatch = activeTag === "All" || publication.tags.includes(activeTag);
      const text = `${publication.title} ${publication.authors} ${publication.venue} ${publication.year}`.toLowerCase();
      return tagMatch && (!normalizedQuery || text.includes(normalizedQuery));
    });
  }, [activeTag, query]);

  const grouped = useMemo(() => {
    return filtered.reduce<Record<number, typeof publications>>((accumulator, publication) => {
      accumulator[publication.year] ??= [];
      accumulator[publication.year].push(publication);
      return accumulator;
    }, {});
  }, [filtered]);

  return (
    <div className="publication-explorer">
      <div className="publication-tools">
        <div className="filter-row" aria-label="Filter publications by topic">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={activeTag === filter ? "is-active" : undefined}
              onClick={() => setActiveTag(filter)}
              aria-pressed={activeTag === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <label className="publication-search">
          <span className="sr-only">Search publications</span>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4.2 4.2" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search titles, authors, venues…"
          />
        </label>
      </div>

      <p className="result-count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "publication" : "publications"}
      </p>

      {filtered.length ? (
        <div className="publication-groups">
          {Object.entries(grouped)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, items]) => (
              <section className="publication-year" key={year} aria-labelledby={`year-${year}`}>
                <h2 id={`year-${year}`}>{year}</h2>
                <div>
                  {items.map((publication) => (
                    <article className="publication-row" key={publication.href}>
                      <div>
                        <p className="publication-venue">{publication.venue}</p>
                        <h3>
                          <a href={publication.href} target="_blank" rel="noreferrer">
                            {publication.title}
                          </a>
                        </h3>
                        <p className="publication-authors">{publication.authors}</p>
                        <div className="tag-row">
                          {publication.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                      <a className="doi-link" href={publication.href} target="_blank" rel="noreferrer" aria-label={`Open ${publication.title}`}>
                        DOI <span aria-hidden="true">↗</span>
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No publications match those filters.</p>
          <button
            type="button"
            onClick={() => {
              setActiveTag("All");
              setQuery("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
