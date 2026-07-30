import { Reveal } from '../ui/Reveal';
import { BentoCard } from '../ui/BentoCard';
import { SectionHeading } from '../ui/SectionHeading';

const facts: Array<{ k: string; v: string; accent?: boolean }> = [
  { k: 'stack', v: 'Laravel · Vue · Inertia' },
  { k: 'banco', v: 'MySQL · PostgreSQL · MongoDB' },
  { k: 'idiomas', v: 'PT-BR · EN' },
  { k: 'localização', v: 'Brasil' },
  { k: 'modo', v: 'Remoto' },
  { k: 'status', v: 'Open to work', accent: true },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-[6vw] py-[100px]">
      <SectionHeading kicker="01 / Sobre" title="Quem sou." />

      <div className="grid grid-cols-3 grid-rows-2 gap-4 max-md:grid-cols-1">
        <Reveal delay={0.1} className="col-span-2 max-md:col-span-1">
          <BentoCard shimmer>
            <div className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-fg-dim uppercase">
              <span className="text-accent">//</span> bio.md
            </div>
            <p className="text-[15px] leading-[1.65] text-fg-muted">
              Desenvolvedor full-stack com visão de produto. Trabalho com Laravel + Vue/Inertia no dia a dia, mas o
              que realmente me move é traduzir um problema confuso num produto simples — daquele jeito que parece
              óbvio depois de pronto.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-fg-muted">
              Minha trajetória começou no suporte técnico. Ver o produto pelo olhar do cliente — entender onde ele
              trava, onde abandona, onde sofre — entrou no meu DNA antes de eu escrever a primeira linha de backend.
              Hoje isso se reflete em cada decisão de UX e cada API que entrego.
            </p>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.2} className="col-start-3 row-span-2 max-md:col-start-1 max-md:row-span-1">
          <BentoCard className="h-full">
            <div className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-fg-dim uppercase">
              <span className="text-accent">~/</span> about.json
            </div>
            <ul className="font-mono text-xs">
              {facts.map((f, i) => (
                <li
                  key={f.k}
                  className={`flex items-center justify-between gap-3 py-2.5 ${i < facts.length - 1 ? 'border-b border-dashed border-border' : ''}`}
                >
                  <span className="text-fg-dim">{f.k}</span>
                  <span className={`text-right ${f.accent ? 'text-accent' : 'text-fg'}`}>{f.v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-dim px-4.5 py-2.5 font-mono text-[11px] tracking-[0.08em] text-accent before:h-2 before:w-2 before:animate-[pulse-dot_2s_ease-in-out_infinite] before:rounded-full before:bg-accent before:content-['']">
                Disponível para projetos
              </div>
              <div className="font-mono text-xs tracking-[0.06em] text-fg-dim">
                <span className="text-fg-muted">🇧🇷 Brasil</span> · Remoto
              </div>
            </div>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.3}>
          <BentoCard>
            <div className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-fg-dim uppercase">
              <span className="text-accent">//</span> experiência
            </div>
            <div className="font-display text-5xl leading-none font-bold tracking-[-0.03em] text-accent">3+</div>
            <p className="mt-2 font-mono text-[11px] tracking-[0.08em] text-fg-dim uppercase">
              Anos na área técnica
            </p>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.4}>
          <BentoCard>
            <div className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-fg-dim uppercase">
              <span className="text-accent">//</span> empresas
            </div>
            <div className="font-display text-5xl leading-none font-bold tracking-[-0.03em] text-accent">4</div>
            <p className="mt-2 font-mono text-[11px] tracking-[0.08em] text-fg-dim uppercase">
              Empresas, crescendo
            </p>
          </BentoCard>
        </Reveal>
      </div>
    </section>
  );
}
