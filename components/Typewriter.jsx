"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Frontend-разработчик",
  "специалист по React и Next.js",
  "UI/UX-энтузиаст",
  "создаю современные интерфейсы"
];

export default function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activePhrase = phrases[phraseIndex];
    const isComplete = letterIndex === activePhrase.length;
    const isEmpty = letterIndex === 0;
    const speed = isDeleting ? 38 : 72;
    const pause = isComplete && !isDeleting ? 1350 : isEmpty && isDeleting ? 360 : speed;

    const timer = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
        return;
      }

      setLetterIndex((current) => current + (isDeleting ? -1 : 1));
    }, pause);

    return () => window.clearTimeout(timer);
  }, [isDeleting, letterIndex, phraseIndex]);

  return (
    <span className="inline text-cyan-200">
      <span>{phrases[phraseIndex].slice(0, letterIndex)}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] animate-[blink_1s_steps(2,start)_infinite] rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
      />
      <span className="sr-only">{phrases[phraseIndex]}</span>
    </span>
  );
}
