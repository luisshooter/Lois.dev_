import { motion, type Variants } from 'framer-motion';
import { HeroPhoto } from './HeroPhoto';
import { useTypewriter } from '../../hooks/useTypewriter';
import { typewriterPhrases } from '../../data/phrases';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export function Hero() {
  const typed = useTypewriter(typewriterPhrases);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-[1] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] bg-[linear-gradient(rgba(0,255,136,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.025)_1px,transparent_1px)] bg-[length:60px_60px]" />
      <div className="absolute top-[-100px] right-[-100px] z-[1] h-[600px] w-[600px] animate-[float-glow_8s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.06)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-[10%] z-[1] h-[400px] w-[400px] animate-[float-glow_11s_ease-in-out_infinite_reverse] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)]" />

      <div className="relative z-[2] mx-auto w-full max-w-[1100px] px-[6vw] pt-[120px] pb-20 max-md:pt-[100px] max-md:pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-[1.2fr_0.8fr] items-center gap-[60px] max-md:grid-cols-1 max-md:gap-10 max-md:text-center"
        >
          <div>
            <motion.div
              variants={item}
              className="mb-7 inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] text-accent uppercase before:h-px before:w-8 before:bg-accent before:content-['']"
            >
              Full-stack Developer — Brasil · Remoto
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-[clamp(52px,10vw,130px)] leading-[0.92] font-bold tracking-[-0.04em] text-fg"
            >
              Luis<span className="text-accent">shooter</span>
              <span className="text-fg-dim">.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="my-1.5 mb-7 font-mono text-xs tracking-[0.12em] text-fg-dim uppercase"
            >
              Luis Augusto dos Santos
            </motion.p>

            <motion.p
              variants={item}
              className="mb-3 max-w-[650px] text-[clamp(18px,2.2vw,26px)] leading-[1.4] text-fg-muted max-md:mx-auto"
            >
              Construo aplicações web rápidas e bem pensadas — do banco ao pixel.
            </motion.p>

            <motion.p variants={item} className="mb-11 min-h-[22px] font-mono text-sm text-fg-dim">
              <span className="text-accent">$ </span>
              {typed}
              <span className="ml-0.5 inline-block h-3.5 w-2 animate-[blink_0.8s_step-end_infinite] bg-accent align-text-bottom" />
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 max-md:justify-center">
              <a
                href="#experience"
                className="rounded-full border border-accent bg-accent px-7 py-3.5 font-mono text-xs tracking-[0.08em] text-bg uppercase transition-colors hover:bg-[#00cc6a] hover:border-[#00cc6a]"
              >
                Ver projetos →
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-7 py-3.5 font-mono text-xs tracking-[0.08em] text-fg-muted uppercase transition-colors hover:border-accent hover:text-bg hover:bg-accent"
              >
                Falar comigo
              </a>
              <a
                href="https://github.com/luisshooter"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-mono text-xs tracking-[0.08em] text-fg-muted uppercase transition-colors hover:border-accent hover:text-bg hover:bg-accent"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                @luisshooter
              </a>
            </motion.div>
          </div>

          <motion.div variants={item}>
            <HeroPhoto />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-[6vw] flex items-center gap-2.5 font-mono text-[10px] tracking-[0.14em] text-fg-dim uppercase max-md:hidden"
        >
          <span className="h-px w-10 origin-left animate-[expand-line_2s_ease-in-out_infinite] bg-accent" />
          scroll
        </motion.div>
      </div>
    </section>
  );
}
