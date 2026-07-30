import { useEffect, useRef } from 'react';

/** Drives a dot + trailing ring that follow the mouse, ring lerped for smooth trail. */
export function useCursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frame: number;

    function handleMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
    }

    function animate() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      frame = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', handleMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return { dotRef, ringRef };
}
