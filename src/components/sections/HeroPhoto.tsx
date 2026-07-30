import { useState } from 'react';
import { useTilt } from '../../hooks/useTilt';
import { heroInteraction } from '../../state/heroInteraction';

const floatingTags = [
  { label: 'Laravel', anim: 'animate-[float-tag-1_5s_ease-in-out_infinite]', style: { top: '8%', left: '-22%' } },
  {
    label: 'Vue',
    anim: 'animate-[float-tag-2_6s_ease-in-out_infinite_0.5s]',
    style: { top: '52%', left: '-18%' },
  },
  {
    label: 'Postgres',
    anim: 'animate-[float-tag-1_5.5s_ease-in-out_infinite_1s]',
    style: { top: '20%', right: '-24%' },
  },
  {
    label: 'PHP',
    anim: 'animate-[float-tag-2_6.5s_ease-in-out_infinite_1.5s]',
    style: { bottom: '12%', right: '-16%' },
  },
];

export function HeroPhoto() {
  const { wrapperRef, tiltRef, glareRef } = useTilt();
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => {
        heroInteraction.hovering = true;
      }}
      onMouseLeave={() => {
        heroInteraction.hovering = false;
      }}
      className="group relative mx-auto h-80 w-80 [perspective:1000px] max-md:h-64 max-md:w-64"
    >
      <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_60%)] opacity-[0.18] blur-3xl transition-opacity duration-400 group-hover:opacity-35" />
      <div className="absolute -inset-3.5 animate-[rotate-dashed_25s_linear_infinite] rounded-full border border-dashed border-accent/25" />
      <div className="absolute -inset-1 rounded-full border-[1.5px] border-accent transition-shadow duration-300 group-hover:shadow-[0_0_35px_var(--color-accent)]" />

      <div
        ref={tiltRef}
        className="relative h-full w-full overflow-hidden rounded-full border border-border bg-surface2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-300 [transform-style:preserve-3d] will-change-transform group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.7),0_0_0_1px_rgba(0,255,136,0.2)]"
      >
        {imgFailed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface2 to-bg font-display text-5xl font-bold text-accent">
            LS
          </div>
        ) : (
          <img
            src="/me.png"
            alt="Luis Augusto dos Santos"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgFailed(true)}
          />
        )}
        <div ref={glareRef} className="absolute inset-0 mix-blend-overlay transition-[background] duration-150" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {floatingTags.map((tag) => (
        <span
          key={tag.label}
          style={tag.style}
          className={`absolute z-[6] rounded-full border border-border bg-surface/80 px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] whitespace-nowrap text-fg uppercase shadow-[0_8px_16px_rgba(0,0,0,0.3)] backdrop-blur-sm before:mr-1 before:text-accent before:content-['▸'] max-md:hidden ${tag.anim}`}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
}
