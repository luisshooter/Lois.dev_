import { useEffect, useState } from 'react';

/** Types and deletes each phrase in a loop, terminal-style. */
export function useTypewriter(phrases: string[], startDelay = 1400) {
  const [text, setText] = useState('');

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const phrase = phrases[phraseIndex];
      if (!deleting) {
        charIndex++;
        setText(phrase.slice(0, charIndex));
        if (charIndex === phrase.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1800);
          return;
        }
        timeoutId = setTimeout(tick, 60 + Math.random() * 40);
      } else {
        charIndex--;
        setText(phrase.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeoutId = setTimeout(tick, 400);
          return;
        }
        timeoutId = setTimeout(tick, 30);
      }
    }

    const startId = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(startId);
      clearTimeout(timeoutId);
    };
    // phrases is expected to be a stable module-level constant
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}
