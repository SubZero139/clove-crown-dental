"use client";

import type Lenis from "lenis";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/config";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
] as const;

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolledRef = useRef(false);

  const lenis = useLenis(
    useCallback((l: Lenis) => {
      const over = l.scroll > 100;
      if (over !== scrolledRef.current) {
        scrolledRef.current = over;
        setScrolled(over);
      }
    }, []),
  );

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const scrollToSection = useCallback(
    (id: string) => {
      const offset = -(navRef.current?.offsetHeight ?? 72);
      lenis?.scrollTo(`#${id}`, { offset });
      setMobileOpen(false);
    },
    [lenis],
  );

  const scrollToBook = useCallback(() => {
    scrollToSection("contact");
  }, [scrollToSection]);

  const barStyles = scrolled
    ? "bg-[var(--color-ivory)]/80 shadow-sm backdrop-blur-[12px]"
    : "bg-transparent";

  /** Logo, links, phone, menu icon: white on hero; charcoal on blurred bar */
  const barForegroundClass = scrolled
    ? "text-[#2D2D2D]"
    : "text-[#FFFFFF]";

  return (
    <>
      <header
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,box-shadow,backdrop-filter] duration-300 ${barStyles}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
          <a
            href="#"
            className={`font-heading shrink-0 text-lg font-semibold tracking-tight transition-colors duration-300 md:text-xl ${barForegroundClass}`}
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo(0, { immediate: false });
              setMobileOpen(false);
            }}
          >
            Clove &amp; Crown
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                type="button"
                className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${barForegroundClass}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href={SITE_CONFIG.phoneTel}
              className={`text-sm font-medium whitespace-nowrap transition-colors duration-300 hover:opacity-70 ${barForegroundClass}`}
            >
              {SITE_CONFIG.phone}
            </a>
            <Button type="button" variant="primary" onClick={scrollToBook}>
              Book Now
            </Button>
          </div>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors duration-300 md:hidden ${barForegroundClass}`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-[90] md:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-[var(--color-charcoal)]/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          tabIndex={mobileOpen ? 0 : -1}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 flex h-full w-[min(100%,320px)] flex-col bg-[var(--color-ivory)] shadow-xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[var(--color-dusty-rose)]/40 px-4 py-4">
            <span className="font-heading text-lg font-semibold text-[var(--color-charcoal)]">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--color-charcoal)]"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <IconClose />
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col gap-1 p-4"
            aria-label="Mobile primary"
          >
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                type="button"
                className="rounded-md px-3 py-3 text-left text-base font-medium text-[var(--color-charcoal)] hover:bg-[var(--color-sand)]"
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="border-t border-[var(--color-dusty-rose)]/40 p-4">
            <a
              href={SITE_CONFIG.phoneTel}
              className="mb-4 block text-center text-base font-medium text-[var(--color-charcoal)]"
              onClick={() => setMobileOpen(false)}
            >
              {SITE_CONFIG.phone}
            </a>
            <Button
              type="button"
              variant="primary"
              className="w-full"
              onClick={scrollToBook}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function IconMenu() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
