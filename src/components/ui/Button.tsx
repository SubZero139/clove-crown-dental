"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useRef } from "react";
import { useMagneticHover } from "@/hooks/useMagneticHover";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  /** Subtle pull toward cursor (Book Now / Book Your Visit CTAs). */
  magnetic?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  magnetic = false,
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  useMagneticHover(ref, { enabled: magnetic, strength: 4 });

  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const magneticCls = magnetic
    ? "transition-transform duration-300 ease-out will-change-transform"
    : "";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--color-terracotta)] text-white hover:opacity-95 focus-visible:outline-[var(--color-terracotta)]",
    secondary:
      "border-2 border-[var(--color-sage)] bg-transparent text-[var(--color-charcoal)] hover:bg-[var(--color-sage)]/10 focus-visible:outline-[var(--color-sage)]",
  };

  return (
    <button
      ref={ref}
      type={type}
      className={`${base} ${variants[variant]} ${magneticCls} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
