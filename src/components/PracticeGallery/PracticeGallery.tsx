import { SectionHeading } from "@/components/ui/SectionHeading";

const GALLERY_ITEMS = [
  {
    id: "office",
    label: "Office interior (placeholder)",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=600&fit=crop&q=80",
  },
  {
    id: "waiting",
    label: "Waiting area (placeholder)",
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&h=600&fit=crop&q=80",
  },
  {
    id: "treatment",
    label: "Treatment room (placeholder)",
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&h=600&fit=crop&q=80",
  },
] as const;

export function PracticeGallery() {
  return (
    <section
      className="bg-[var(--color-ivory)] py-12 md:py-16"
      aria-labelledby="practice-gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="practice-gallery-heading" className="text-center">
          See Our Practice
        </SectionHeading>
        <p
          data-scroll-lead
          className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--color-charcoal)]/60"
        >
          Placeholder photos — replace with warm-toned practice photography in
          Phase 10.
        </p>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:mt-12 lg:gap-6">
          {GALLERY_ITEMS.map(({ id, label, src }) => (
            <li key={id}>
              <figure className="group overflow-hidden rounded-xl bg-[var(--color-sand)] shadow-[0_2px_12px_rgba(45,45,45,0.06)]">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={src}
                    alt={label}
                    className="aspect-[4/3] w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    width={900}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
