# Rakesh Gowda B P — Developer Portfolio

A responsive single-page portfolio for a **Java Full Stack Developer**, featuring dark/light themes, scroll animations, a VS Code–style code card, contact form integration, and a built-in **Prime AI** chatbot.

---

## Features

- **Hero** — Typewriter animation, availability badge, social links, CTAs
- **About** — Bio, badges, education & experience timeline, optional photo upload (browser-only)
- **Skills** — Frontend, backend, and database groupings
- **Experience** — Internship details and tech tags
- **Projects** — Featured Academia-360 card + portfolio project grid
- **Contact** — Web3Forms-powered message form
- **Prime AI chatbot** — Keyword-based assistant about skills, projects, and hiring
- **UI extras** — Theme toggle (persisted), mobile nav, scroll reveal, back-to-top button

---

## Tech Stack

| Layer | Technologies |
|--------|----------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Fonts & icons | Google Fonts (Fira Code, Space Grotesk, Syne), Font Awesome 6 |
| Backend | Node.js, Express |
| Contact form | [Web3Forms](https://web3forms.com) |

No React, Vite, or build step — the UI lives in a single `index.html` file.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes with Node.js)

---

## Installation

```bash
git clone <your-repo-url>
cd Demo_Portfolio
npm install
```

---

## Running Locally

### Option 1 — Express server (recommended)

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

Health check: [http://localhost:3000/api/health](http://localhost:3000/api/health)

### Option 2 — Open HTML directly

Double-click `index.html` or use **Live Server** in VS Code/Cursor.  
Some features (routing via `server.js`) work best with Option 1.

### Custom port

```bash
set PORT=8080
npm start
```

On macOS/Linux: `PORT=8080 npm start`

---

## Configuration

Before deploying, update these placeholders in `index.html`:

| Item | Location | What to set |
|------|----------|-------------|
| Web3Forms access key | Contact form hidden input `access_key` | Your key from [web3forms.com](https://web3forms.com) |
| Resume link | Hero CTA `YOUR_RESUME_LINK_HERE` | URL to your PDF (Google Drive, GitHub, etc.) |

---

## Project Structure

```
Demo_Portfolio/
├── index.html          # Full SPA: markup, CSS, and JavaScript
├── server.js           # Express static server + SPA fallback
├── package.json        # Dependencies and npm scripts
├── PROJECT_STRUCTURE.md  # Detailed architecture notes
└── README.md           # This file
```

### Page sections (`index.html`)

| Section ID | Content |
|------------|---------|
| `#hero` | Introduction, code card, CTAs |
| `#about` | Bio, photo upload, timeline |
| `#skills` | Tech stack cards |
| `#experience` | Work experience |
| `#projects` | Academia-360 + portfolio |
| `#contact` | Contact info + form |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts Express on port 3000 (or `PORT` env var) |

---

## Deployment

1. Set Web3Forms and resume URLs in `index.html`.
2. Deploy to any Node host (Render, Railway, Heroku, etc.) with start command: `npm start`.
3. Ensure `PORT` is provided by the host (most platforms set it automatically).

You can also host **only** `index.html` on GitHub Pages or Netlify static hosting — no server required for the frontend.

---

## Author

**Rakesh Gowda B P** — Java Full Stack Developer

- Email: [rakeshgowdabp05@gmail.com](mailto:rakeshgowdabp05@gmail.com)
- GitHub: [github.com/rakeshgowdabp05](https://github.com/rakeshgowdabp05)
- LinkedIn: [linkedin.com/in/rakesh-gowda-bp](https://www.linkedin.com/in/rakesh-gowda-bp)
- Live project: [Academia-360](https://academia-360.onrender.com/)

---

## License

ISC (see `package.json`)
