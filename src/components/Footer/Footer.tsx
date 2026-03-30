"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";
import { SITE_CONFIG } from "@/lib/config";

const FOOTER_LINKS = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
] as const;

export function Footer() {
  const lenis = useLenis();

  const scrollToSection = useCallback(
    (id: string) => {
      const nav = document.querySelector("header");
      const offset = -(nav?.getBoundingClientRect().height ?? 72);
      lenis?.scrollTo(`#${id}`, { offset });
    },
    [lenis],
  );

  return (
    <footer
      className="border-t border-white/10 bg-[var(--color-charcoal)] text-[var(--color-ivory)]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-md">
            <p className="font-heading text-xl font-semibold tracking-tight md:text-2xl">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-ivory)]/80 md:text-base">
              Dental care that feels different.
            </p>
          </div>

          <nav
            className="flex flex-col gap-3 text-sm md:items-end"
            aria-label="Footer"
          >
            <ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              {FOOTER_LINKS.map(({ label, id }) => (
                <li key={id}>
                  <button
                    type="button"
                    className="text-left text-[var(--color-ivory)]/90 underline-offset-4 transition-colors hover:text-white hover:underline"
                    onClick={() => scrollToSection(id)}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-[var(--color-ivory)]/90 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <a
              href={SITE_CONFIG.social.instagram}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[var(--color-ivory)] transition-colors hover:bg-white/15"
              aria-label="Instagram"
            >
              <IconInstagram className="h-5 w-5" />
            </a>
            <a
              href={SITE_CONFIG.social.facebook}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[var(--color-ivory)] transition-colors hover:bg-white/15"
              aria-label="Facebook"
            >
              <IconFacebook className="h-5 w-5" />
            </a>
            <a
              href={SITE_CONFIG.social.twitter}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[var(--color-ivory)] transition-colors hover:bg-white/15"
              aria-label="Twitter"
            >
              <IconTwitter className="h-5 w-5" />
            </a>
          </div>
          <a
            href={SITE_CONFIG.phoneTel}
            className="text-sm font-medium text-[var(--color-ivory)]/95 transition-colors hover:text-white md:text-base"
          >
            {SITE_CONFIG.phone}
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-[var(--color-ivory)]/55 md:text-left">
          © 2026 Clove &amp; Crown Dental. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconTwitter({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
