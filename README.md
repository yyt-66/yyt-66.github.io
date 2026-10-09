# Personal Academic Homepage

A bilingual academic homepage for Yangtian Ye (叶阳天).

Live site: https://yyt-66.github.io/

## Edit content

Edit `content.js` to update names, affiliation, biography, portrait, email, CV, social profiles, news, affiliations, research entries, and notes. Text objects use `en` and `zh` keys. Use paths relative to this repository root for local files, such as `assets/portrait.jpg` or `assets/cv.pdf`.

First-screen directions: `Humanoid`, `Perception`, `Understanding`, `Planning`.

Research groups: `representative`, `projects`, `others`. Research tags: `perception`, `understanding`, `planning`, `models`. Replace sample outlines with verified work and set `placeholder: false`. Missing information is intentionally marked as pending.

The `notes/` directory contains the bilingual notes index. An article URL must point to an existing external article or a local HTML file; article bodies are not generated automatically.

## Preview locally

```sh
python3 -m http.server 4173
```

Open http://localhost:4173/. No dependencies or build step are required.

## Publishing

GitHub Pages publishes `main` from the repository root. Push an update to `main` to deploy. The `.nojekyll` file disables Jekyll processing for this static site.

Both HTML pages currently use `noindex, nofollow` because the personal details and publications are placeholders. Once real content is complete, update this setting in both pages if search engine indexing is desired.

See [ATTRIBUTION.md](ATTRIBUTION.md) for design references.
