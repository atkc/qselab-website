# People portraits

Add portrait images to this folder. The site reads them automatically during deployment and accepts `.png`, `.jpg`, and `.jpeg` files, including uppercase variants.

Use one of these filename prefixes:

- `PI_` — Principal Investigator
- `PD_` — Postdoctoral Researcher
- `RE_` — Research Engineer
- `PHD_` — PhD Student
- `UG_` — Undergraduate

Write the person's name after the prefix, separating words with underscores. For example:

```text
PI_Anthony_K_C_Tan.jpg
PD_Jane_Doe.jpeg
PHD_Alex_Tan.png
```

The People section is regenerated whenever the website is deployed. Profiles are ordered by role and then alphabetically by name.

For someone without a portrait, add their announced name and role prefix to `portraitless.json`. Their card displays an initial instead of an image. If a matching portrait is added later, the generated profile uses it automatically without creating a duplicate.
