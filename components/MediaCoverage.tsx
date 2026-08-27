import { mediaCoverage } from "@/content/media";

export function MediaCoverage() {
  return (
    <div className="media-coverage" aria-labelledby="media-coverage-heading">
      <div className="media-coverage-heading">
        <div>
          <p className="eyebrow">In the wider world</p>
          <h3 id="media-coverage-heading">Media Coverage</h3>
        </div>
        <p>
          Selected features and commentary on our work in quantum sensing, emergent magnetism and quantum
          optomechanics.
        </p>
      </div>

      <div className="media-logo-grid">
        {mediaCoverage.map((item) => (
          <a
            className="media-logo"
            data-brand={item.brand}
            href={item.href}
            key={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${item.displayName}: ${item.articleTitle}`}
            title={item.articleTitle}
          >
            <span className="media-wordmark" aria-hidden="true">
              {item.displayName}
            </span>
            <span className="media-logo-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
