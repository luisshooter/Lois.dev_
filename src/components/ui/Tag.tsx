import { TechIcon } from './TechIcon';
import type { TechIcon as TechIconType } from '../../data/stack';

export function Tag({ label, icon }: { label: string; icon: TechIconType }) {
  return (
    <span className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-surface2 px-3 py-1.5 font-mono text-xs text-fg-muted transition-all duration-200 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 hover:border-accent hover:bg-surface hover:text-accent hover:shadow-[0_4px_12px_rgba(0,255,136,0.1)]">
      <TechIcon icon={icon} className="shrink-0" />
      {label}
    </span>
  );
}
