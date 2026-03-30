"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/config";

export function Communication() {
  const lenis = useLenis();

  const scrollToContact = useCallback(() => {
    const nav = document.querySelector("header");
    const offset = -(nav?.getBoundingClientRect().height ?? 72);
    lenis?.scrollTo("#contact", { offset });
  }, [lenis]);

  const handleTryChat = useCallback(() => {
    console.log("Chat widget trigger");
  }, []);

  return (
    <section
      className="bg-[var(--color-sand)] py-12 md:py-16"
      aria-labelledby="communication-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="communication-heading" className="text-center">
          We&apos;re Here When You Need Us
        </SectionHeading>

        <ul className="mt-10 grid list-none gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          <li>
            <article className="flex h-full flex-col rounded-xl border border-[var(--color-sage)]/25 bg-[#FEFCF9] p-6 shadow-[0_2px_12px_rgba(124,144,130,0.12)] md:p-8">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-sage)]/2 text-[var(--color-sage)] ring-1 ring-[var(--color-sage)]/20"
                aria-hidden
              >
                <MessageCircle className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-[var(--color-charcoal)]">
                Chat
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-charcoal)]/85 md:text-base">
                Have a question? Chat with us right now.
              </p>
              <button
                type="button"
                className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-[var(--color-sage)] underline-offset-4 transition-colors hover:text-[var(--color-terracotta)] hover:underline"
                onClick={handleTryChat}
              >
                Try it now
                <span aria-hidden>→</span>
              </button>
            </article>
          </li>

          <li>
            <article className="flex h-full flex-col rounded-xl border border-[#E8E4DD] bg-[#FEFCF9] p-6 shadow-[0_1px_3px_rgba(45,45,45,0.06)] md:p-8">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-sage)]/15 text-[var(--color-sage)]"
                aria-hidden
              >
                <Phone className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-[var(--color-charcoal)]">
                Call
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-charcoal)]/85 md:text-base">
                Prefer to talk? Our phone assistant is available 24/7.
              </p>
              <a
                href={SITE_CONFIG.phoneTel}
                className="mt-5 inline-flex text-sm font-semibold text-[var(--color-sage)] underline-offset-4 transition-colors hover:text-[var(--color-terracotta)] hover:underline md:text-base"
              >
                {SITE_CONFIG.phone}
              </a>
            </article>
          </li>

          <li>
            <article className="flex h-full flex-col rounded-xl border border-[#E8E4DD] bg-[#FEFCF9] p-6 shadow-[0_1px_3px_rgba(45,45,45,0.06)] md:p-8">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-sage)]/15 text-[var(--color-sage)]"
                aria-hidden
              >
                <CalendarCheck className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-[var(--color-charcoal)]">
                Book Online
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-charcoal)]/85 md:text-base">
                Schedule your appointment in seconds.
              </p>
              <Button
                type="button"
                variant="primary"
                magnetic
                className="mt-5 w-fit"
                onClick={scrollToContact}
              >
                Book Now
              </Button>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}
