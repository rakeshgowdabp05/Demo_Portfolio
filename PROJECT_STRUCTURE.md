# Demo Portfolio - Code Structure

## 1) Project Overview

This project is built as a **single-page portfolio website** served by a small **Node.js + Express** backend.

- Frontend: `index.html` (HTML + CSS + JavaScript in one file)
- Backend server: `server.js` (serves static files and handles fallback route)
- Package config: `package.json` (`npm start` runs the server)

---

## 2) File-Level Structure

### `index.html`

Contains:
- Full page markup (`<nav>`, `<section>`, `<footer>`, chatbot UI)
- Internal CSS inside `<style>`
- Internal JavaScript inside `<script>`

Main page sections:
- `#hero`
- `#about`
- `#skills`
- `#experience`
- `#projects`
- `#contact`
- `footer`

Key frontend features:
- Dark/Light theme toggle using `data-theme`
- Mobile menu
- Typewriter title animation
- Reveal-on-scroll animations (`IntersectionObserver`)
- Active nav link tracking on scroll
- Back-to-top floating button
- Photo upload preview (client-side `FileReader`)
- Contact form submission via Web3Forms API
- Prime AI chatbot (keyword-based local knowledge base)

### `server.js`

Responsibilities:
- Creates Express app
- Serves static assets from project root
- Exposes health endpoint: `/api/health`
- Fallback route sends `index.html` for all other paths
- Starts server on `PORT` (default `3000`)

### `package.json`

Important script:
- `"start": "node server.js"`

Dependencies currently installed:
- `express`
- `compression`
- `cors`
- `express-rate-limit`
- `helmet`
- `morgan`

Note: Only `express` is actively used in the current `server.js`.

---

## 3) Runtime Flow

1. Run: `npm start`
2. Node starts `server.js`
3. Express serves static files from the project folder
4. Browser loads `index.html`
5. All UI behavior runs in client-side JavaScript embedded in `index.html`
6. Contact form sends data to Web3Forms (`https://api.web3forms.com/submit`)

---

## 4) Architecture Style

Current architecture is:
- **Monolithic frontend file** (`index.html`)
- **Minimal backend entrypoint** (`server.js`)
- **No bundler/build pipeline** (no React/Vite/Webpack)

This is simple and fast for deployment, but as features grow, splitting into:
- `css/styles.css`
- `js/main.js`
- `js/chatbot.js`
can improve maintainability.
