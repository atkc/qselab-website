# People portraits

Add portrait images to this folder. The site reads them automatically during deployment and accepts `.png`, `.jpg`, and `.jpeg` files, including uppercase variants.

Use one of these filename prefixes:

- `PI_` — Principal Investigator
- `PD_` — Postdoctoral Researcher
- `PHD_` — PhD Student
- `RE_` — Research Engineer
- `UG_` — Undergraduate

Write the person's name after the prefix, separating words with underscores. For example:

```text
PI_Anthony_K_C_Tan.jpg
PD_Jane_Doe.jpeg
PHD_Alex_Tan.png
RE_Priyanshu_Bhattacharya.jpeg
```

The People section is regenerated whenever the website is deployed. Profiles are ordered by role (Principal Investigator, Postdoctoral Researcher, PhD Student, Research Engineer, Undergraduate) and then alphabetically by name.
