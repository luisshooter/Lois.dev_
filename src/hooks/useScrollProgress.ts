import { useEffect, useRef } from 'react';

/**
 * Tracks scroll progress (0..1) and normalized mouse position (-1..1) in refs,
 * read every frame by the R3F scene without triggering React re-renders.
 */
export function useScrollProgress() {
  const scrollRatio = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function handleScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight || 1;
      scrollRatio.current = window.scrollY / max;
    }
    function handleMouse(e: MouseEvent) {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouse);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return { scrollRatio, mouse };
}
