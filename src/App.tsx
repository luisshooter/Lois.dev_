import { Scene } from './components/scene/Scene';
import { Nav } from './components/layout/Nav';
import { CursorFollower } from './components/layout/CursorFollower';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Stack } from './components/sections/Stack';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

export function App() {
  return (
    <>
      <Scene />
      <CursorFollower />
      <Nav />

      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Stack />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
    </>
  );
}
