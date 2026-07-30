import type { TechIcon as TechIconType } from '../../data/stack';

const common = {
  viewBox: '0 0 24 24',
  width: 12,
  height: 12,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** One of four recurring glyphs (code / framework / database / infra) used across stack tags. */
export function TechIcon({ icon, className }: { icon: TechIconType; className?: string }) {
  switch (icon) {
    case 'code':
      return (
        <svg {...common} className={className}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'polygon':
      return (
        <svg {...common} className={className}>
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        </svg>
      );
    case 'db':
      return (
        <svg {...common} className={className}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'server':
      return (
        <svg {...common} className={className}>
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
  }
}
