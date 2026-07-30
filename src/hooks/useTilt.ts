import { useEffect, useRef } from 'react';

/** 3D tilt + glare effect for the hero photo, following the pointer inside the wrapper. */
export function useTilt(maxTilt = 15) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const tilt = tiltRef.current;
    if (!wrapper || !tilt) return;

    let targetRX = 0;
    let targetRY = 0;
    let curRX = 0;
    let curRY = 0;
    let inside = false;
    let mx = 0.5;
    let my = 0.5;
    let frame: number;

    function handleMove(e: MouseEvent) {
      const rect = wrapper!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mx = x / rect.width;
      my = y / rect.height;
      inside = true;
      targetRY = (mx - 0.5) * 2 * maxTilt;
      targetRX = -(my - 0.5) * 2 * maxTilt;
    }

    function handleEnter() {
      inside = true;
    }

    function handleLeave() {
      inside = false;
      targetRX = 0;
      targetRY = 0;
    }

    function update() {
      curRX += (targetRX - curRX) * 0.1;
      curRY += (targetRY - curRY) * 0.1;
      if (tilt) tilt.style.transform = `rotateX(${curRX}deg) rotateY(${curRY}deg)`;

      const glare = glareRef.current;
      if (glare) {
        const gX = inside ? mx * 100 : 50;
        const gY = inside ? my * 100 : 50;
        const opacity = inside ? 0.35 : 0.1;
        glare.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgba(255,255,255,${opacity}) 0%, transparent 60%)`;
      }
      frame = requestAnimationFrame(update);
    }

    wrapper.addEventListener('mousemove', handleMove);
    wrapper.addEventListener('mouseenter', handleEnter);
    wrapper.addEventListener('mouseleave', handleLeave);
    frame = requestAnimationFrame(update);

    return () => {
      wrapper.removeEventListener('mousemove', handleMove);
      wrapper.removeEventListener('mouseenter', handleEnter);
      wrapper.removeEventListener('mouseleave', handleLeave);
      cancelAnimationFrame(frame);
    };
  }, [maxTilt]);

  return { wrapperRef, tiltRef, glareRef };
}
