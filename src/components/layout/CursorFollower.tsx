import { useCursorFollower } from '../../hooks/useCursorFollower';

export function CursorFollower() {
  const { dotRef, ringRef } = useCursorFollower();

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-screen pointer-events-none transition-[width,height,opacity] duration-150 max-md:hidden"
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-accent/50 pointer-events-none transition-[width,height,border-color] duration-300 max-md:hidden"
      />
    </>
  );
}
