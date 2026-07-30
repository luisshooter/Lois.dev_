import { Reveal } from './Reveal';

export function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <>
      <Reveal>
        <div className="mb-4 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] text-accent uppercase before:h-px before:w-6 before:bg-accent before:content-['']">
          {kicker}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mb-14 font-display text-[clamp(36px,6vw,72px)] leading-none font-bold tracking-[-0.03em] text-fg">
          {title}
        </h2>
      </Reveal>
    </>
  );
}
