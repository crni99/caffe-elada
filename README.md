# ☕ Caffe Elada — Vanilla Edition

> This repository is **public for portfolio and demonstration purposes only**. All rights reserved — see [License](https://github.com/crni99/caffe-elada/blob/main/LICENSE).

This is the **`vanilla` branch** of the Caffe Elada project — a clean, dependency-light **Multi-Page Static Site** built with plain **HTML, CSS, and Vanilla JavaScript**. It's one half of a dual-implementation demonstration; the [`main` branch](https://github.com/crni99/caffe-elada/tree/main) contains the equivalent site rebuilt as a component-based **React SPA**.

Both versions share the exact same design, content, and multi-language support (English, Serbian, and Greek) for a real café website (Caffe Elada, Ljig, Serbia) — allowing a direct comparison between a lightweight static build and a dynamic, scalable component-based architecture.

<br />

## ⭐ Live Demo

<table>
  <thead>
    <tr>
      <th>Application</th>
      <th>Platform</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vanilla (this branch)</td>
      <td>GitHub Pages</td>
      <td><a href="https://crni99.github.io/caffe-elada/"><b>Launch Site 🡥</b></a></td>
    </tr>
    <tr>
      <td>React SPA</td>
      <td>Primary Domain</td>
      <td><a href="https://caffeelada.rs/"><b>Launch Site 🡥</b></a></td>
    </tr>
    <tr>
      <td>React SPA (Mirror)</td>
      <td>Vercel (Subdomain)</td>
      <td><a href="https://caffe-elada.vercel.app/"><b>Launch Site 🡥</b></a></td>
    </tr>
  </tbody>
</table>

<br />

## ✨ Features

- 🌍 **Multi-language support** — English, Serbian, and Greek via a custom lightweight `i18n.js` module (locale detection + JSON translation files, no external i18n library)
- 🎨 **Responsive UI** — Bootstrap 5 + custom CSS, with AOS scroll animations
- 🖼️ **Interactive gallery & lightbox** — GLightbox, with Isotope.js for gallery filtering/layout
- 📱 **Installable** — includes a web app manifest with icons for "Add to Home Screen" support
- 🔍 **SEO-ready** — sitemap, robots.txt, and an `llms.txt` for AI/LLM discoverability
- 🔒 **Security-hardened deployment** — strict Content-Security-Policy, HSTS, X-Frame-Options, and other headers, configured for both Vercel and Apache (`.htaccess`)
- ⚡ **Zero build step** — no bundler, no framework, no `node_modules` at runtime; just static files served as-is

<br />

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Markup** | Semantic HTML5 (multi-page: `index.html`, `drinks.html`) |
| **Styling** | Bootstrap 5, custom CSS |
| **Internationalization** | Custom vanilla JS module (`js/i18n.js`) + JSON locale files |
| **Gallery / Layout** | Isotope.js |
| **Lightbox** | GLightbox |
| **Animations** | AOS (Animate On Scroll) |
| **Deployment** | GitHub Pages, Vercel backup config, GitLab/Bitbucket mirrors |
| **CI/CD** | GitHub Actions |

<br />

## 📁 Project Structure

```
caffe-elada (vanilla branch)/
├── index.html              # Home page
├── drinks.html              # Drinks menu page
├── css/                       # Bootstrap, AOS, GLightbox styles + custom style.css
├── js/                          # main.js, navigation.js, i18n.js, and vendored libraries
├── lang/                          # en.json / sr.json / gr.json translation files
├── images/
│   ├── gallery/                    # Café photos used in the gallery
│   ├── icons/                       # Favicon, language flags
│   └── logos/                        # Logo assets
├── manifest.json                # Web app manifest (installable site)
├── vercel_backup.json            # Backup Vercel config for this branch
├── htaccess-backup.txt            # Apache config backup (headers, redirects)
└── .github/workflows/              # Mirroring pipeline (GitLab / Bitbucket)
```

<br />

## ☁️ Deployment and Mirroring

[![Mirror to GitLab and Bitbucket](https://github.com/crni99/caffe-elada/actions/workflows/mirror-to-gitlab-and-bitbucket.yml/badge.svg)](https://github.com/crni99/caffe-elada/actions/workflows/mirror-to-gitlab-and-bitbucket.yml)

This branch is served directly as a static site via **GitHub Pages** — no build step required. It's also mirrored to **GitLab** and **Bitbucket** for redundancy.
