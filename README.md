# Personal Academic Homepage

A bilingual academic homepage for Yangtian Ye (叶阳天).

Live site: https://yyt-66.github.io/

## Edit content

Edit `content.js` to update names, affiliation, biography, portrait, research interests, email, WeChat, CV, social profiles, news, affiliations, research entries, and notes. Text objects use `en` and `zh` keys. Use paths relative to this repository root for local files, such as `assets/portrait.jpg` or `assets/cv.pdf`.

In `bio.en` and `bio.zh`, separate paragraphs with blank lines (`\n\n` in ordinary quoted JavaScript strings), and wrap bold text in `**double asterisks**`. Bold text and links such as `[**display text**](https://example.com/)` are supported. Links accept only HTTP/HTTPS addresses; arbitrary HTML and other Markdown formatting are not supported. Set `affiliationUrl` to link the institution below the name.

The `interests` array controls the four first-screen research labels: `Embodied AI`, `Multimodal Perception`, `Robot Reasoning & Planning`, and `Robot Foundation Models`. These display labels are separate from the research filter tags below.

Set `email` to the public email address and `wechat` to the WeChat ID. The Email entry opens a mail link. In the hero, clicking the WeChat chip copies the ID; in the contact section, Email and WeChat share an icon, account, and separate Copy button layout.

Research groups: `representative`, `projects`, `others`. Research tags: `perception`, `understanding`, `planning`, `models`. Replace sample outlines with verified work and set `placeholder: false`. Missing information is intentionally marked as pending.

News entries accept `date`, bilingual `text`, and an optional `url` for the whole news text. They can also include `image`, bilingual `imageAlt`, and `imageWidth` / `imageHeight` (the actual image dimensions). Images display at a larger size without cropping, with no link or view button. Omit `image` for a text-only update.

Add new updates to the beginning of the `news` array, with the latest first. The compact News panel scrolls vertically when its contents exceed its maximum height. It supports mouse, touch, and keyboard scrolling. Publisher logos display at a consistent 22 px height with their original proportions, and each badge adapts to the logo width; use an official dark/colored logo when displaying it on a light badge.

To add publisher badges below a news item, use `mediaLinks: [{ label: { en: 'Publisher', zh: '媒体名称' }, url: 'https://example.com/article', logo: 'assets/media/publisher.png' }]`. Omit `logo` to show a text badge, or add `theme: 'dark'` for white logos that need a dark background. Empty URLs are hidden. Both News and Research preserve their configured order and use plain text, not Markdown. Use the News `url` or `mediaLinks` and Research `links` fields for links. Official logo sources are recorded in `assets/media/SOURCES.md`.

The `notes/` directory contains the bilingual notes index. An article URL must point to an existing external article or a local HTML file; article bodies are not generated automatically.

Small interface text uses the shared `--font-min: 12px` token in `styles.css` across desktop and mobile layouts. Chinese section headings omit trailing full stops. Design references are recorded in `ATTRIBUTION.md`.

## Preview locally

```sh
python3 -m http.server 4173
```

Open http://localhost:4173/. No dependencies or build step are required.

## Publishing

GitHub Pages publishes `main` from the repository root. Push an update to `main` to deploy. The `.nojekyll` file disables Jekyll processing for this static site.

Both HTML pages currently use `noindex, nofollow` because the personal details and publications are placeholders. Once real content is complete, update this setting in both pages if search engine indexing is desired.

See [ATTRIBUTION.md](ATTRIBUTION.md) for design references.
