# Phuc Linh Ngo — Personal Portfolio

A premium personal website for an AI Engineer & Computer Vision professional, built with React, TypeScript, Vite, Tailwind CSS, Motion, and React Three Fiber.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it.

### Production Build

```bash
npm run build
npm run preview  # Preview the build locally
```

---

## 📦 Deployment to GitHub Pages

Deployment is automated via GitHub Actions. Every push to `main` triggers a build and deploy.

### Manual Setup

1. Go to your GitHub repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow at `.github/workflows/deploy.yml` handles the rest

### Custom Domain

To use a custom domain, add a `CNAME` file in the `public/` directory with your domain name, then configure DNS accordingly.

---

## ✏️ How to Update Content

All content is centralized in **`src/data/content.ts`**. 

### Update Personal Info

Edit the `siteContent` object at the top:

```typescript
export const siteContent: SiteContent = {
  name: 'Your Name',
  title: 'Your Title',
  shortSummary: '...',
  // ...
};
```

### Replace Profile Image

1. Place your image in the `public/` directory (e.g., `public/profile.jpg`)
2. Update `profileImage` in `src/data/content.ts`:
   ```typescript
   profileImage: '/profile.jpg',
   ```

### Add a New Project

Add an entry to the `projects` array in `src/data/content.ts`:

```typescript
{
  id: 'proj-new',
  title: 'Your Project Title',
  summary: 'Brief summary...',
  problem: 'What problem does it solve...',
  approach: 'Technical approach...',
  techStack: ['Python', 'PyTorch'],
  outcome: 'Results...',
  categories: ['Computer Vision', 'Research'],
  githubUrl: 'https://github.com/...',
  demoUrl: '#',
},
```

### Update the Publication

Edit the `publication` object in `src/data/content.ts`:

```typescript
publication: {
  title: 'Your Paper Title',
  authors: 'Author 1, Author 2, ...',
  venue: 'Journal/Conference Name',
  year: 2025,
  summary: 'Paper summary...',
  url: 'https://link-to-paper...',
  scholarUrl: 'https://scholar.google.com/...',
},
```

### Replace Placeholder Links

Search for `#` in `src/data/content.ts` and replace with real URLs.

### Update CV

Place your CV PDF in `public/cv.pdf`.

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── animations/     # AnimateOnScroll, StaggerContainer
│   ├── layout/         # Navbar, Footer
│   ├── three/          # NeuralLattice (3D)
│   └── ui/             # Button, Chip, Modal, SectionHeading
├── data/
│   └── content.ts      # ← All content lives here
├── hooks/
│   ├── useTheme.ts     # Dark/light mode
│   └── useReducedMotion.ts
├── sections/
│   ├── interactive/    # CV Pipeline, Research Ideas, Model Insight, RAG
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Research.tsx
│   ├── Skills.tsx
│   ├── InteractiveAI.tsx
│   └── Contact.tsx
├── types/
│   └── content.ts      # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🔮 Future Backend Integration

This site is designed as a static SPA that can later connect to a backend API.

### Architecture Pattern

The frontend is decoupled from any backend. To add API integration:

1. Create an API client module in `src/lib/api.ts`
2. Use environment variables for API URLs (`VITE_API_URL`)
3. The static site can remain on GitHub Pages while the API is hosted separately

### Potential Backend Options

| Stack | Use Case | Example |
|-------|----------|---------|
| **Node.js / Express** | Fast prototyping, AI API proxying | AI demo endpoints, contact form handler, analytics |
| **Go** | High-performance services | CV inference API, stable production services |
| **Rust** | Maximum performance | Real-time inference, edge computing, WASM modules |

### Example Use Cases

- **AI Demos**: Connect interactive demos to real model endpoints
- **CV Inference**: Send images to a backend for real-time computer vision inference
- **Contact Form**: Replace Formspree with a custom handler
- **Admin Dashboard**: Add a CMS for content management
- **Analytics**: Custom analytics pipeline for visitor insights

### Implementation Example

```typescript
// src/lib/api.ts
const API_URL = import.meta.env.VITE_API_URL || '';

export async function runInference(imageData: string) {
  const res = await fetch(`${API_URL}/api/inference`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: imageData }),
  });
  return res.json();
}
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 6 | Build tool & dev server |
| Tailwind CSS 4 | Utility-first styling |
| Motion | Animations |
| React Three Fiber | 3D graphics (hero) |
| React Icons | Icon library |

---

## 📄 License

© Phuc Linh Ngo. All rights reserved.
