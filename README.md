# Ridwan Syambudi — Portfolio

Personal portfolio built with **React + Vite**.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 🏗️ Build

```bash
npm run build
```

## ☁️ Deploy

### Vercel (Recommended)
1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Auto-detected as Vite → Deploy ✅

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Add to `vite.config.js`: `base: '/your-repo-name/'`
4. Run: `npm run build && npm run deploy`

## 📁 Structure

```
src/
├── components/       # React components
│   ├── Navbar
│   ├── Hero
│   ├── Experience
│   ├── Projects
│   ├── Skills
│   ├── EducationContact
│   └── Footer
├── data/
│   └── index.js      # ← Edit your data here!
├── hooks/
│   └── useScrollFade.js
└── App.jsx
```

## ✏️ Customization

All content is in `src/data/index.js` — edit your profile, experience, projects, and skills there.
