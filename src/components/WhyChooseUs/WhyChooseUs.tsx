import { CalendarClock, Cpu, HeartHandshake, MessageSquareText } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FEATURES = [
  {
    title: "Modern Technology",
    description:
      "Advanced equipment for precise, comfortable treatment. From digital imaging to gentle techniques, we invest in tools that make visits faster, safer, and easier to understand.",
    Icon: Cpu,
  },
  {
    title: "Comfort-First Approach",
    description:
      "Every visit is designed around your comfort. We take time to listen, explain what to expect, and adjust pacing so you never feel rushed or left in the dark.",
    Icon: HeartHandshake,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Early morning, evening, and weekend slots help care fit real life. Tell us what works for you and we will do our best to find an appointment that sticks.",
    Icon: CalendarClock,
  },
  {
    title: "Transparent Communication",
    description:
      "No surprises — clear treatment plans and pricing before we begin. You will always know your options, the why behind our recommendations, and what comes next.",
    Icon: MessageSquareText,
  },
] as const;

export function WhyChooseUs() {
  return (
    <section
      className="bg-[var(--color-sand)] py-12 md:py-16"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="why-choose-heading" className="text-center">
          Why Patients Choose Us
        </SectionHeading>

        <ul className="mt-10 grid list-none grid-cols-2 gap-4 md:gap-6 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {FEATURES.map(({ title, description, Icon }) => (
            <li key={title}>
              <article className="group flex h-full flex-col rounded-xl border border-[#E8E4DD] bg-[#FEFCF9] p-5 shadow-[0_1px_3px_rgba(45,45,45,0.06)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(45,45,45,0.1)] md:p-6">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-sage)]/15 text-[var(--color-sage)] md:h-12 md:w-12"
                  aria-hidden
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-[var(--color-charcoal)] md:text-lg">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-charcoal)]/85">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
