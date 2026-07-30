import type { ReactNode } from 'react';

export function BentoCard({
  children,
  className = '',
  shimmer = false,
}: {
  children: ReactNode;
  className?: string;
  shimmer?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-border-strong hover:bg-surface2 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {shimmer && (
        <div className="pointer-events-none absolute inset-0 animate-[shimmer_3s_ease-in-out_infinite] bg-[linear-gradient(105deg,transparent_30%,rgba(0,255,136,0.04)_50%,transparent_70%)]" />
      )}
      {children}
    </div>
  );
}
