"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/config";

export function ContactCTA() {
  const lenis = useLenis();

  const scrollToContact = useCallback(() => {
    const nav = document.querySelector("header");
    const offset = -(nav?.getBoundingClientRect().height ?? 72);
    lenis?.scrollTo("#contact", { offset });
  }, [lenis]);

  const hoursLine = `${SITE_CONFIG.hours.weekday} | ${SITE_CONFIG.hours.weekend}`;

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[var(--color-ivory)] py-12 md:py-20"
      aria-labelledby="contact-cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="contact-cta-heading" className="text-center">
          Ready to Book Your Visit?
        </SectionHeading>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="flex flex-col">
            <p className="text-base leading-relaxed text-[var(--color-charcoal)]/90 md:text-lg">
              Take the first step toward a calmer, more comfortable dental
              experience. We&apos;d love to welcome you to Clove &amp; Crown.
            </p>
            <Button
              type="button"
              variant="primary"
              className="mt-8 w-full px-8 py-4 text-base sm:w-fit"
              onClick={scrollToContact}
            >
              Book Now
            </Button>
            <p className="mt-8 text-sm font-medium text-[var(--color-charcoal)] md:text-base">
              {hoursLine}
            </p>
            <a
              href={SITE_CONFIG.phoneTel}
              className="mt-3 inline-flex w-fit text-base font-semibold text-[var(--color-sage)] underline-offset-4 transition-colors hover:text-[var(--color-terracotta)] hover:underline"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-[#E8E4DD] bg-[var(--color-sand)] px-6 py-10 text-center md:min-h-[280px]"
              role="img"
              aria-label="Map placeholder for practice location"
            >
              <span className="font-heading text-lg font-semibold text-[var(--color-charcoal)]/70">
                Map
              </span>
              <span className="mt-2 max-w-xs text-sm text-[var(--color-charcoal)]/60">
                Static map preview — replace with image or embed before launch.
              </span>
            </div>
            <address className="not-italic text-sm leading-relaxed text-[var(--color-charcoal)]/85 md:text-base">
              {SITE_CONFIG.address}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
