"use client";

import type Lenis from "lenis";
import { useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import { useCallback, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SplitType from "split-type";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/config";
import { gsap } from "@/lib/animations";

import "swiper/css";
import "swiper/css/effect-fade";

const HERO_SLIDES = [
  {
    id: "1",
    src: "/images/hero-1.jpg",
    alt: "Welcoming modern dental reception and waiting area",
  },
  {
    id: "2",
    src: "/images/hero-2.jpg",
    alt: "Modern dental practice interior with comfortable seating",
  },
  {
    id: "3",
    src: "/images/hero-3.jpg",
    alt: "Bright dental clinic reception and waiting area",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=1920&q=80",
    alt: "Welcoming dental office with warm lighting",
  },
] as const;

const AUTOPLAY_MS = 4000;

function resolveHeroImageSrc(src: string) {
  if (src.startsWith("/")) {
    return `${src}?v=${SITE_CONFIG.heroLocalImagesCacheKey}`;
  }
  return src;
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const lenis = useLenis(
    useCallback((l: Lenis) => {
      const hero = rootRef.current;
      if (!hero) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches;
      const layers = hero.querySelectorAll<HTMLElement>("[data-hero-parallax]");
      if (reduced) {
        layers.forEach((node) => {
          node.style.transform = "";
        });
        return;
      }
      const h = hero.offsetHeight || 1;
      const progress = Math.min(1, Math.max(0, l.scroll / h));
      const yPercent = -7.5 + progress * 15;
      layers.forEach((node) => {
        node.style.transform = `translate3d(0,${yPercent}%,0)`;
      });
    }, []),
  );

  const handleBookVisit = useCallback(() => {
    const nav = document.querySelector("header");
    const offset = -(nav?.getBoundingClientRect().height ?? 72);
    lenis?.scrollTo("#contact", { offset });
  }, [lenis]);

  useGSAP(
    () => {
      const el = headlineRef.current;
      if (!el) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches;
      if (reduced) {
        gsap.set(el, { opacity: 1 });
        return;
      }

      const split = new SplitType(el, { types: "words" });
      gsap.from(split.words, {
        opacity: 0,
        y: 24,
        duration: 0.75,
        stagger: 0.06,
        ease: "power2.out",
        delay: 0.12,
      });

      return () => {
        split.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative isolate h-[70vh] w-full md:h-[min(90vh,56rem)]"
      aria-label="Welcome"
    >
      <div className="absolute inset-0 z-0 min-h-[inherit]">
        <Swiper
          className="hero-swiper h-full min-h-[inherit] w-full"
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={900}
          loop
          autoplay={{
            delay: AUTOPLAY_MS,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiper}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
        >
          {HERO_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id} className="!h-full min-h-[inherit]">
              <div className="relative h-full min-h-[inherit] w-full overflow-hidden">
                <div
                  data-hero-parallax
                  className="absolute inset-x-0 -top-[7.5%] h-[115%] w-full will-change-transform"
                >
                  <img
                    key={resolveHeroImageSrc(slide.src)}
                    src={resolveHeroImageSrc(slide.src)}
                    alt={slide.alt}
                    className="h-full w-full object-cover object-center"
                    sizes="100vw"
                    loading={slide.id === "1" ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={slide.id === "1" ? "high" : undefined}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(30,30,28,0.85) 0%, rgba(30,30,28,0.6) 40%, rgba(30,30,28,0.15) 65%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="absolute inset-0 z-[2] flex items-center px-4 md:px-6 lg:pl-10 lg:pr-8">
        <div className="pointer-events-none flex w-[48%] min-w-0 flex-col items-start text-left">
          <h1
            ref={headlineRef}
            className="font-heading mb-4 text-[2rem] leading-tight font-semibold text-white md:text-[clamp(2.5rem,5vw,4rem)]"
          >
            Dental Care That Feels Different
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/92 md:text-lg">
            Warm, unhurried visits in a modern Austin practice — where comfort,
            clarity, and a calm environment come first.
          </p>

          <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:gap-4">
            <Button
              type="button"
              variant="primary"
              className="w-full sm:w-auto"
              onClick={handleBookVisit}
            >
              Book Your Visit
            </Button>
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex w-full flex-col items-center justify-center rounded-md border-2 border-[var(--color-sage)] bg-transparent px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-[var(--color-sage)]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sage)] sm:w-auto"
            >
              <span>Call Us Now</span>
              <span className="mt-0.5 text-xs font-normal text-white/85">
                {SITE_CONFIG.phone}
              </span>
            </a>
          </div>

          <div
            className="pointer-events-auto mt-8 flex justify-start gap-2"
            role="tablist"
            aria-label="Hero slides"
          >
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Show slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                  activeIndex === i
                    ? "w-7 bg-white"
                    : "w-2 bg-white/45 hover:bg-white/70"
                }`}
                onClick={() => swiper?.slideToLoop(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
