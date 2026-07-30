export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1200px] items-center justify-between border-t border-border px-[6vw] py-8 max-sm:flex-col max-sm:gap-2 max-sm:text-center">
      <p className="font-mono text-[11px] tracking-[0.06em] text-fg-dim">
        Construído à mão, com café e teclado mecânico.
      </p>
      <p className="font-mono text-[11px] tracking-[0.06em] text-fg-dim">
        Luis Augusto dos Santos ·{' '}
        <a href="https://github.com/luisshooter" className="text-accent no-underline">
          GitHub
        </a>
      </p>
    </footer>
  );
}
