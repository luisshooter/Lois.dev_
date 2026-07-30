import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { timeline } from '../../data/timeline';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1200px] px-[6vw] py-[100px]">
      <SectionHeading kicker="05 / Experiência" title="Trajetória." />

      <div>
        {timeline.map((entry, i) => (
          <motion.div
            key={entry.company}
            initial={{ opacity: 0, x: i % 2 === 0 ? -120 : 120, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mb-5 overflow-hidden rounded-2xl border border-border bg-surface p-7 px-8 transition-colors hover:border-border-strong"
          >
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-accent to-accent2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="mb-1.5 font-mono text-[11px] tracking-[0.06em] text-accent">{entry.when}</div>
            <div className="mb-1 font-display text-[22px] font-semibold text-fg">{entry.role}</div>
            <div className="mb-3 font-mono text-sm text-fg-dim">{entry.company}</div>
            <p className="mb-4 max-w-[680px] text-sm leading-[1.65] text-fg-muted">{entry.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-fg-dim"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
