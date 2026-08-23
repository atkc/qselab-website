# Updating the QSE website

The site is intentionally data-driven. Routine updates do not require editing page layouts.

## Add a news item

1. Open `content/news.ts` in GitHub.
2. Copy the first object inside `newsItems`.
3. Paste it at the top of the list and change the date, type, title, summary and links.
4. Set `featured: true` if it should appear on the homepage.
5. Commit the change. The site rebuilds automatically.

Use one of these news types: `Paper`, `Media`, `People`, `Event`, `Opportunity` or `Award`.

## Add a publication

1. Open `content/publications.ts`.
2. Copy an existing publication object and paste it at the top of `publications`.
3. Replace the title, author line, journal, year and DOI link.
4. Choose one or more existing tags from `PUBLICATION_TAGS`.
5. Add `selected: true` only if the paper should appear in the recent-publications block on the homepage.

The publication archive groups papers by year and updates its filters and result count automatically.

## Add a person

Add a portrait to the top-level `people/` folder. A square or portrait image on a plain background works best. The website accepts `.png`, `.jpg`, and `.jpeg` files and generates the People section automatically from the filename prefix:

- `PI_` — Principal Investigator
- `PD_` — Postdoctoral Researcher
- `RE_` — Research Engineer
- `PHD_` — PhD Student
- `UG_` — Undergraduate

Use underscores between the words in each person's name, for example `PHD_Alex_Tan.png`. Profiles are ordered by role and then alphabetically by name.

## Edit a research theme

All four theme summaries and detail-page content live in `content/research.ts`. Keep homepage summaries to one sentence. Longer detail copy belongs in `question`, `approach` and `projects`.

## Publishing

GitHub Pages publishes whenever a change reaches `main`. In the repository settings, set **Pages → Source** to **GitHub Actions**, retain the custom domain `qselab.com`, and enable **Enforce HTTPS**.
