import { useState, type FormEvent } from 'react';
import { Reveal } from '../ui/Reveal';

type FormState = 'idle' | 'sending' | 'sent';

const contactLinks = [
  {
    href: 'mailto:luisaigustosantos234@gmail.com',
    label: 'E-mail',
    value: 'luisaigustosantos234@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-accent stroke-2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/luisshooter',
    label: 'GitHub',
    value: '@luisshooter',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-accent stroke-2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

export function Contact() {
  const [state, setState] = useState<FormState>('idle');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    setTimeout(() => {
      setState('sent');
      setTimeout(() => {
        setState('idle');
        e.currentTarget.reset();
      }, 3000);
    }, 1200);
  }

  const btnLabel = state === 'sending' ? 'Enviando...' : state === 'sent' ? 'Mensagem enviada!' : 'Enviar mensagem →';

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-[6vw] py-[100px]">
      <div className="grid grid-cols-2 items-start gap-[60px] max-md:grid-cols-1 max-md:gap-10">
        <div>
          <Reveal>
            <div className="mb-4 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] text-accent uppercase before:h-px before:w-6 before:bg-accent before:content-['']">
              06 / Contato
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-5 font-display text-[clamp(36px,5vw,64px)] leading-none font-bold tracking-[-0.03em]">
              Vamos construir
              <br />
              <span className="text-accent">algo bom.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mb-9 text-base leading-[1.65] text-fg-muted">
              Aberto a projetos full-stack, freelas e conversas técnicas.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener' : undefined}
                  className="flex items-center gap-3.5 rounded-xl border border-border bg-surface px-5 py-4 text-fg no-underline transition-all hover:translate-x-1.5 hover:border-border-strong hover:bg-surface2"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-dim">
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.1em] text-fg-dim uppercase">{link.label}</div>
                    <div className="mt-0.5 text-sm text-fg-muted">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.12em] text-fg-dim uppercase">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                required
                className="rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-fg outline-none placeholder:text-fg-dim focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,255,136,0.08)]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.12em] text-fg-dim uppercase">E-mail</label>
              <input
                type="email"
                placeholder="Seu e-mail"
                required
                className="rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-fg outline-none placeholder:text-fg-dim focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,255,136,0.08)]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.12em] text-fg-dim uppercase">Mensagem</label>
              <textarea
                placeholder="Sua mensagem..."
                required
                className="min-h-[140px] resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-fg outline-none placeholder:text-fg-dim focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,255,136,0.08)]"
              />
            </div>
            <button
              type="submit"
              disabled={state !== 'idle'}
              className={`self-start rounded-full px-8 py-4 font-mono text-xs font-semibold tracking-[0.1em] uppercase transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-5px_rgba(0,255,136,0.4)] ${
                state === 'sent' ? 'bg-[#22c55e] text-bg' : 'bg-accent text-bg hover:bg-[#00cc6a]'
              }`}
            >
              {btnLabel}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
