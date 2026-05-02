# Starter NextJS 🚀

A **stubbornly opinionated** starter template for Next.js projects — designed to get you productive fast with a modern, well-structured setup.

This template reflects my preferred workflow and best practices, aiming to reduce boilerplate while keeping things explicit, predictable, and maintainable.

---

## ✨ Features

* ⚡ **Next.js (App Router)** — modern routing & layout structure
* 🟦 **TypeScript** — strict and type-safe by default
* 🎨 **Tailwind CSS** — utility-first styling with PostCSS
* 🌗 **Theme support** — built-in light / dark mode
* 🌍 **Internationalization (i18n)** — ready-to-use locale structure
* 🧹 **ESLint (v9)** — opinionated lint rules
* 🧪 **lint-staged + simple-git-hooks** — fast, lightweight git hooks
* 📦 **pnpm** — fast and disk-efficient package management
* ☁️ **Vercel-ready** — zero-config deployment support

---

## 📁 Project Structure

```
.
├── src/                # Application source code
│   ├── app/            # Next.js App Router
│   ├── components/     # Shared UI components
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
├── locales/            # i18n message files
├── public/             # Static assets
├── .github/workflows/  # CI configuration
└── vercel.ts           # Vercel-specific config
```

---

## 🚀 Getting Started

### 1. Create a new project

Use this repository as a template:

```bash
git clone git@github.com:clovu/starter-nextjs.git
```

Or click **“Use this template”** on GitHub.

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start development

```bash
pnpm dev
```

---

## 🌍 Internationalization

* Locale files live in the `locales/` directory
* Supports language switching with graceful loading states

---

## 📄 License

MIT License © 2026 [Clover You](https://github.com/clovu)
