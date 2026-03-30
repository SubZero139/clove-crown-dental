"use client";

import type { RefObject } from "react";
import { useEffect } from "react";

type UseMagneticHoverOptions = {
  /** Max translation in px toward cursor (default 4). */
  strength?: number;
  enabled?: boolean;
};

/**
 * Subtle magnetic pull: element translates slightly toward the pointer on hover.
 */
export function useMagneticHover<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options?: UseMagneticHoverOptions,
) {
  const strength = options?.strength ?? 4;
  const enabled = options?.enabled ?? true;

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const half = strength;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (e.clientX - cx) / Math.max(rect.width / 2, 1);
      const ny = (e.clientY - cy) / Math.max(rect.height / 2, 1);
      const dx = Math.max(-1, Math.min(1, nx)) * half;
      const dy = Math.max(-1, Math.min(1, ny)) * half;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const onLeave = () => {
      el.style.transform = "";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.style.transform = "";
    };
  }, [ref, strength, enabled]);
}
