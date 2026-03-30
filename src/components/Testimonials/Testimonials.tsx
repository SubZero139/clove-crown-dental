import { SectionHeading } from "@/components/ui/SectionHeading";

const STAR_ROW = "★★★★★";

const TESTIMONIALS = [
  {
    quote:
      "Best dental experience I've ever had. The office is beautiful and the staff made me feel completely at ease.",
    name: "Sarah T.",
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&q=80",
    avatarAlt: "Placeholder avatar for Sarah T.",
  },
  {
    quote:
      "I was able to book my appointment through the chat in seconds. So convenient!",
    name: "James R.",
    avatarSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&q=80",
    avatarAlt: "Placeholder avatar for James R.",
  },
  {
    quote:
      "Beautiful office, friendly staff, and my teeth have never looked better.",
    name: "Maria L.",
    avatarSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&q=80",
    avatarAlt: "Placeholder avatar for Maria L.",
  },
  {
    quote:
      "Dr. Chen explained everything before starting. First dentist I've actually trusted.",
    name: "David K.",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&q=80",
    avatarAlt: "Placeholder avatar for David K.",
  },
] as const;

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-[var(--color-ivory)] py-12 md:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="testimonials-heading" className="text-center">
          What Our Patients Say
        </SectionHeading>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:mt-12">
          {TESTIMONIALS.map(({ quote, name, avatarSrc, avatarAlt }) => (
            <li key={name}>
              <article className="flex h-full flex-col rounded-xl border border-[#E8E4DD] bg-[#FEFCF9] p-6 shadow-[0_1px_3px_rgba(45,45,45,0.06)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(45,45,45,0.1)] md:p-7">
                <p className="text-sm leading-relaxed text-[var(--color-charcoal)]/90 md:text-base">
                  &ldquo;{quote}&rdquo;
                </p>
                <p
                  className="mt-3 text-sm text-[var(--color-terracotta)]"
                  aria-label="5 out of 5 stars"
                >
                  {STAR_ROW}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-[#E8E4DD]/80 pt-5">
                  <img
                    src={avatarSrc}
                    alt={avatarAlt}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-[var(--color-sand)]"
                  />
                  <span className="font-medium text-[var(--color-charcoal)]">
                    {name}
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
