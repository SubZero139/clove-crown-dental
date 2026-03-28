import {
  AlertCircle,
  AlignCenter,
  Anchor,
  Sparkles,
  SunMedium,
  Smile,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    name: "General Dentistry",
    description:
      "Comprehensive check-ups, cleanings, and preventive care",
    Icon: Smile,
  },
  {
    name: "Cosmetic Dentistry",
    description: "Veneers, bonding, and complete smile makeovers",
    Icon: Sparkles,
  },
  {
    name: "Teeth Whitening",
    description: "Professional whitening for a brighter, confident smile",
    Icon: SunMedium,
  },
  {
    name: "Dental Implants",
    description: "Permanent, natural-looking tooth replacement",
    Icon: Anchor,
  },
  {
    name: "Emergency Care",
    description: "Same-day appointments for urgent dental needs",
    Icon: AlertCircle,
  },
  {
    name: "Invisalign",
    description: "Clear aligners for a straighter smile without braces",
    Icon: AlignCenter,
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-[var(--color-ivory)] py-12 md:py-16"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="services-heading" className="text-center">
          What We Offer
        </SectionHeading>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:mt-12 lg:grid-cols-3">
          {SERVICES.map(({ name, description, Icon }) => (
            <li key={name}>
              <article className="group flex h-full flex-col rounded-xl border border-[#E8E4DD] bg-[#FEFCF9] p-6 shadow-[0_1px_3px_rgba(45,45,45,0.06)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(45,45,45,0.1)]">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-sage)]/15 text-[var(--color-sage)]"
                  aria-hidden
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-[var(--color-charcoal)]">
                  {name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-charcoal)]/85">
                  {description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-[var(--color-sage)] underline-offset-4 transition-colors hover:text-[var(--color-terracotta)] hover:underline"
                >
                  Learn More
                  <span aria-hidden>→</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
