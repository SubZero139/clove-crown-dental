import { SectionHeading } from "@/components/ui/SectionHeading";

const CREDENTIALS = [
  "University of Texas Dental School",
  "American Dental Association Member",
  "15+ Years in Practice",
] as const;

/** Placeholder portrait — replace with optimised stock in Phase 10. */
const PORTRAIT_PLACEHOLDER_SRC =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=640&h=800&fit=crop&q=80";

export function AboutDentist() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[var(--color-ivory)] py-12 md:py-16"
      aria-labelledby="about-dentist-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="about-dentist-heading" className="text-center">
          Meet Your Dentist
        </SectionHeading>

        <div className="mt-10 grid items-center gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-14">
          <div
            data-about-media
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <div className="overflow-hidden rounded-xl bg-[var(--color-sand)] shadow-[0_4px_24px_rgba(45,45,45,0.08)]">
              <img
                src={PORTRAIT_PLACEHOLDER_SRC}
                alt="Placeholder portrait of Dr. Sarah Chen — replace with final stock photo before launch."
                className="aspect-[4/5] w-full object-cover object-center"
                width={640}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mt-2 text-center text-xs text-[var(--color-charcoal)]/55 lg:text-left">
              Placeholder image — swap in Phase 10
            </p>
          </div>

          <div data-about-copy className="text-center lg:text-left">
            <h3 className="font-heading text-2xl font-semibold text-[var(--color-charcoal)] sm:text-3xl">
              Dr. Sarah Chen
            </h3>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-charcoal)]/88 md:text-lg">
              Dr. Chen believes every patient deserves to feel heard, understood,
              and comfortable. With over 15 years of experience and a passion
              for modern dental technology, she&apos;s built Clove & Crown
              around one idea: dental care should feel different. She stays
              active in continuing education and takes pride in making care feel
              personal, never rushed.
            </p>
            <ul
              className="mt-8 flex list-none flex-wrap justify-center gap-2 lg:justify-start"
              aria-label="Credentials"
            >
              {CREDENTIALS.map((label) => (
                <li key={label}>
                  <span className="inline-block rounded-full border border-[#E8E4DD] bg-[#FEFCF9] px-3.5 py-1.5 text-xs font-medium text-[var(--color-charcoal)]/90 md:text-sm">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
