const links = [
  { href: '#about', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#experience', label: 'Exp' },
  { href: '#contact', label: 'Contato' },
];

export function Nav() {
  return (
    <nav className="fixed top-4 left-1/2 z-[1000] flex -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-bg/70 px-3 py-2 backdrop-blur-xl backdrop-saturate-150">
      <span className="mr-1 h-1.5 w-1.5 animate-[pulse-dot_2s_ease-in-out_infinite] rounded-full bg-accent" />
      <span className="px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] text-accent max-sm:hidden">
        Available
      </span>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-full px-3.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-fg-muted uppercase transition-colors hover:bg-accent-dim hover:text-accent max-sm:px-2.5 max-sm:text-[10px]"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
