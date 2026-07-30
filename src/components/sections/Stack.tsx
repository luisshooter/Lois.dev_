import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Tag } from '../ui/Tag';
import { StackCloud } from './StackCloud';
import { stackGroups } from '../../data/stack';

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-[1200px] px-[6vw] py-[100px]">
      <SectionHeading kicker="02 / Stack" title="Ferramentas." />

      <Reveal delay={0.1}>
        <StackCloud />
      </Reveal>

      <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {stackGroups.map((group, i) => (
          <Reveal key={group.label} delay={0.05 * i} y={80}>
            <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong">
              <div className="mb-4 font-mono text-[10px] tracking-[0.14em] text-fg-dim uppercase">
                <span className="text-accent">{group.num}</span> {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((name) => (
                  <Tag key={name} label={name} icon={group.icon} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
