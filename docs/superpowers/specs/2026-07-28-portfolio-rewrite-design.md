# Portfolio rewrite — design spec

**Date:** 2026-07-28
**Status:** Approved, implemented

## Problem

The portfolio lived in a single 1531-line `index.html` with inline CSS and JS, Three.js and GSAP loaded from a CDN, no build step, no types, no component boundaries. Editing content meant finding the right line in a monolith. There was no path to add a real 3D model (`.glb`) without hand-rolling GLTF loading on top of raw Three.js.

## Decision

Rewrite as a **Vite + React + TypeScript** SPA:

- **3D:** `@react-three/fiber` + `@react-three/drei`, replacing raw Three.js scene-graph code with declarative components.
- **DOM animation:** Framer Motion (`whileInView`, `variants`), replacing the IntersectionObserver + GSAP/ScrollTrigger combo.
- **Styling:** Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.js` needed), theme tokens ported 1:1 from the original CSS custom properties.
- **Deploy target:** Vercel (zero-config Vite preset).
- Content and visual identity (palette, fonts) are preserved; the redesign scope is composition/interaction, not a rebrand.

## Architecture

```
src/
  main.tsx, App.tsx
  components/
    layout/    Nav, CursorFollower, Footer
    scene/     Scene, ParticleField, FloatingShapes, ModelSlot, CameraRig
    sections/  Hero, HeroPhoto, About, Stack, StackCloud, Experience, Contact
    ui/        Reveal, BentoCard, Tag, TechIcon, SectionHeading
  data/        stack.ts, timeline.ts, phrases.ts
  hooks/       useTypewriter, useCursorFollower, useTilt, useScrollProgress
  styles/      index.css (Tailwind + theme tokens + keyframes)
public/
  models/      empty, ready for a .glb drop-in
```

Each page section is an isolated component; content (stack list, timeline entries, typewriter phrases) lives in typed `data/` modules instead of inline arrays.

## 3D scene

`Scene.tsx` mounts a single fixed, full-viewport `<Canvas>` behind the page:

- `ParticleField` — 2000-point field, ported from the original `THREE.Points` setup.
- `FloatingShapes` — the six wireframe primitives (icosahedron, octahedron, torus, tetrahedron, torus knot), same positions/speeds as the original.
- `CameraRig` — scroll-driven camera descent + mouse parallax, reading scroll/mouse state from `useScrollProgress` refs (no React re-renders per frame).
- `ModelSlot` — **the "real 3D objects" extension point.** Takes an optional `path` prop pointing at a `.glb` under `public/models/`; loads it via `drei`'s `useGLTF` inside `Suspense`. With no path (today's state), it renders a rotating wireframe dodecahedron placeholder with the same visual language as the rest of the scene. Dropping a model file in and passing its path is the only change needed later — no new loading/fallback code.

Bloom/postprocessing was considered but deliberately left out (YAGNI) — not requested, and it's a cheap opt-in addition later via `@react-three/postprocessing` if wanted.

## Animation

- Hero entrance: a Framer Motion `variants` container with `staggerChildren`, replacing the old per-element `setTimeout` list.
- Scroll reveals (bento cards, stack groups, timeline): `Reveal` wrapper component (`whileInView`, `viewport={{ once: true }}`), or inline `motion.div` where per-item stagger/direction differs (timeline alternates left/right).
- Cursor follower and hero photo tilt: kept as imperative `requestAnimationFrame` hooks (`useCursorFollower`, `useTilt`) — continuous pointer-tracking doesn't fit Framer Motion's declarative model well, and the original lerp-based logic was already correct.
- Stack cloud badges: continuous float via Framer Motion's `animate` with an infinite `y` keyframe array, positions computed with the same polar-layout math as the original.

## Content

No content changes. Bio, timeline entries, stack list, and contact info are ported verbatim into `src/data/`.

## Known gaps / follow-ups

- `public/me.png` (hero/profile photo) is not present in the repo — `HeroPhoto` falls back to a gradient "LS" monogram if the image 404s, so the app runs without it. Drop the real photo in `public/me.png` to restore it.
- No lint/test tooling was added (not requested; YAGNI for a single-page portfolio). `tsc`/Vite's build serve as the correctness gate.
- Contact form has no backend — same as the original, it just simulates a submit state locally.
