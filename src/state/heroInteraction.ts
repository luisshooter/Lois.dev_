/**
 * Plain mutable flag (no React re-renders) so the R3F scene can poll, per frame,
 * whether the pointer is currently over the hero photo — same pattern as the
 * scrollRatio/mouse refs in useScrollProgress.
 */
export const heroInteraction = { hovering: false };
