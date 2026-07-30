import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { stackCloud } from '../../data/stack';

interface Badge {
  name: string;
  primary?: boolean;
  x: number;
  y: number;
  floatAmp: number;
  floatDuration: number;
  floatDelay: number;
}

const RING_SIZE = 6;
/** Below this width the radial cloud can't fit the badges without overlap — fall back to a flex-wrap list. */
const MOBILE_BREAKPOINT = 768;

function badgeClass(primary?: boolean) {
  return `inline-block rounded-xl border px-4.5 py-2.5 font-mono text-xs whitespace-nowrap select-none ${
    primary ? 'border-accent/25 font-medium text-fg' : 'border-border text-fg-muted'
  } bg-surface`;
}

export function StackCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 900, height: 480 });

  useLayoutEffect(() => {
    function measure() {
      if (!containerRef.current) return;
      setSize({
        width: containerRef.current.offsetWidth || 900,
        height: containerRef.current.offsetHeight || 480,
      });
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const isCompact = size.width < MOBILE_BREAKPOINT;

  const badges = useMemo<Badge[]>(() => {
    if (isCompact) return [];
    const cx = size.width / 2;
    const cy = size.height / 2;
    const maxRx = Math.max(size.width / 2 - 90, 120);
    const maxRy = Math.max(size.height / 2 - 50, 90);
    const ringScale = [0.42, 0.7, 1];

    return stackCloud.map((item, i) => {
      const ring = Math.floor(i / RING_SIZE);
      const indexInRing = i % RING_SIZE;
      // Angle within the ring (not the whole set) so each ring spans the full circle on its own.
      const angle = (indexInRing / RING_SIZE) * Math.PI * 2 + ring * 0.55;
      const rx = maxRx * ringScale[ring];
      const ry = maxRy * ringScale[ring];
      return {
        ...item,
        x: cx + Math.cos(angle) * rx,
        y: cy + Math.sin(angle) * ry,
        floatAmp: 4 + ((i * 37) % 8),
        floatDuration: 2 + ((i * 53) % 3),
        floatDelay: (i * 0.17) % 2,
      };
    });
  }, [size, isCompact]);

  if (isCompact) {
    return (
      <div ref={containerRef} className="flex flex-col items-center gap-8 py-10">
        <h3 className="font-display text-4xl font-bold tracking-[-0.04em] text-fg [text-shadow:0_0_60px_rgba(0,255,136,0.3)]">
          &lt;dev/&gt;
        </h3>
        <div className="flex flex-wrap justify-center gap-2.5 px-2">
          {stackCloud.map((item) => (
            <span key={item.name} className={badgeClass(item.primary)}>
              {item.name}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative flex h-[480px] items-center justify-center">
      <div className="pointer-events-none absolute z-10 text-center">
        <h3 className="font-display text-6xl font-bold tracking-[-0.04em] text-fg [text-shadow:0_0_80px_rgba(0,255,136,0.3)]">
          &lt;dev/&gt;
        </h3>
        <p className="font-mono text-[11px] tracking-[0.14em] text-fg-dim uppercase">hover nas badges</p>
      </div>

      {badges.map((b) => (
        <div
          key={b.name}
          style={{ left: b.x, top: b.y, transform: 'translate(-50%, -50%)' }}
          className="absolute"
        >
          <motion.span
            className={`${badgeClass(b.primary)} backdrop-blur-sm hover:z-10 hover:border-accent hover:bg-accent-dim hover:text-accent hover:shadow-[0_20px_40px_-10px_rgba(0,255,136,0.2)]`}
            animate={{ y: [0, -b.floatAmp, 0] }}
            whileHover={{ y: -6, scale: 1.06 }}
            transition={{ duration: b.floatDuration, delay: b.floatDelay, repeat: Infinity, ease: 'easeInOut' }}
          >
            {b.name}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
