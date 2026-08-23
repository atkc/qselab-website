import type { NewsItem } from "@/content/news";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function NewsCard({ item, compact = false }: { item: NewsItem; compact?: boolean }) {
  return (
    <article className={`news-card${compact ? " is-compact" : ""}`}>
      <div className="news-meta">
        <span className="news-type">{item.type}</span>
        <time dateTime={item.date}>{dateFormatter.format(new Date(`${item.date}T00:00:00Z`))}</time>
      </div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      {item.links.length > 0 ? (
        <div className="inline-links">
          {item.links.map((link) => (
            <a key={link.href} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
