"use client";

import { useEffect, useRef, useState } from "react";

const COUNT_DURATION_MS = 1500;
const STAGGER_MS = [0, 150, 300, 450] as const;

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

export function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);

  const [patients, setPatients] = useState(0);
  const [rating, setRating] = useState(0);
  const [years, setYears] = useState(0);
  const [sameWeekOpacity, setSameWeekOpacity] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let cancelled = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();

        if (hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;

        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        if (reduced) {
          setPatients(500);
          setRating(4.9);
          setYears(15);
          setSameWeekOpacity(1);
          return;
        }

        const runLoop = (
          delayMs: number,
          onProgress: (easedT: number) => void,
        ) => {
          const wall = performance.now();

          const step = (now: number) => {
            if (cancelled) return;
            if (now < wall + delayMs) {
              requestAnimationFrame(step);
              return;
            }
            const t = Math.min(
              1,
              (now - (wall + delayMs)) / COUNT_DURATION_MS,
            );
            const eased = easeOutQuad(t);
            onProgress(eased);
            if (t < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        };

        runLoop(STAGGER_MS[0], (e) => setPatients(Math.round(500 * e)));
        runLoop(STAGGER_MS[1], (e) =>
          setRating(Number((4.9 * e).toFixed(1))),
        );
        runLoop(STAGGER_MS[2], (e) => setYears(Math.round(15 * e)));
        runLoop(STAGGER_MS[3], (e) => setSameWeekOpacity(e));
      },
      { threshold: 0.25 },
    );

    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="m-0 border-0 bg-[var(--color-ivory)] py-12 shadow-none outline-none md:py-16"
      aria-label="Practice highlights"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6 lg:gap-10">
          <div className="text-center">
            <p className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight text-[var(--color-charcoal)] tabular-nums">
              {patients}
              <span className="font-semibold">+</span>
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--color-charcoal)]/80 md:text-base">
              Happy Patients
            </p>
          </div>

          <div className="text-center">
            <p className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight text-[var(--color-charcoal)] tabular-nums">
              <span className="tabular-nums">{rating}</span>
              <span aria-hidden className="text-[0.9em]">
                ★
              </span>
              <span className="sr-only"> out of five stars</span>
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--color-charcoal)]/80 md:text-base">
              Google Rating
            </p>
          </div>

          <div className="text-center">
            <p className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight text-[var(--color-charcoal)] tabular-nums">
              {years}
              <span className="font-semibold">+</span>
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--color-charcoal)]/80 md:text-base">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <p
              className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight text-[var(--color-charcoal)] transition-opacity duration-300"
              style={{ opacity: sameWeekOpacity }}
            >
              Same-Week
            </p>
            <p
              className="mt-2 text-sm font-medium text-[var(--color-charcoal)]/80 md:text-base transition-opacity duration-300"
              style={{ opacity: sameWeekOpacity }}
            >
              Appointments Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
