"use client";

import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

const STAGGER_MS = 0.13;
const DURATION = 0.7;
const EASE = "power2.out";
const Y = 36;
const START = "top 88%";
const ABOUT_X = 40;

export function PageScrollAnimations() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const unsub = lenis.on("scroll", ScrollTrigger.update);
    return () => unsub();
  }, [lenis]);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const once = { once: true } as const;

      const fadeUp = (
        targets: gsap.DOMTarget,
        opts: { stagger?: number; trigger: Element | null },
      ) => {
        const trigger = opts.trigger;
        const list = gsap.utils.toArray(targets);
        if (!trigger || list.length === 0) {
          return;
        }
        gsap.fromTo(
          targets,
          { y: Y, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: DURATION,
            ease: EASE,
            stagger: opts?.stagger,
            scrollTrigger: {
              trigger,
              start: START,
              ...once,
            },
            clearProps: "transform",
          },
        );
      };

      gsap.utils.toArray<HTMLElement>("[data-scroll-heading]").forEach((el) => {
        fadeUp(el, { trigger: el });
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-lead]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: Y, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            ease: EASE,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              ...once,
            },
            clearProps: "transform",
          },
        );
      });

      const trustSection = document.querySelector<HTMLElement>(
        'section[aria-label="Practice highlights"]',
      );
      const trustCells = gsap.utils.toArray<HTMLElement>(
        'section[aria-label="Practice highlights"] .grid > div',
      );
      if (trustSection && trustCells.length) {
        fadeUp(trustCells, {
          trigger: trustSection,
          stagger: STAGGER_MS,
        });
      }

      const servicesSection = document.querySelector("#services");
      const serviceCards = gsap.utils.toArray<HTMLElement>(
        "#services ul > li > article",
      );
      if (servicesSection && serviceCards.length) {
        fadeUp(serviceCards, {
          trigger: servicesSection,
          stagger: STAGGER_MS,
        });
      }

      const whySection = document.querySelector(
        'section[aria-labelledby="why-choose-heading"]',
      );
      const whyBlocks = gsap.utils.toArray<HTMLElement>(
        'section[aria-labelledby="why-choose-heading"] ul > li > article',
      );
      if (whySection && whyBlocks.length) {
        fadeUp(whyBlocks, {
          trigger: whySection,
          stagger: STAGGER_MS,
        });
      }

      const aboutSection = document.querySelector("#about");
      const aboutMedia = document.querySelector("[data-about-media]");
      const aboutCopy = document.querySelector("[data-about-copy]");
      if (aboutSection && aboutMedia && aboutCopy) {
        gsap.fromTo(
          aboutMedia,
          { x: -ABOUT_X, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: DURATION,
            ease: EASE,
            scrollTrigger: {
              trigger: aboutSection,
              start: START,
              ...once,
            },
            clearProps: "transform",
          },
        );
        gsap.fromTo(
          aboutCopy,
          { x: ABOUT_X, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: DURATION,
            ease: EASE,
            scrollTrigger: {
              trigger: aboutSection,
              start: START,
              ...once,
            },
            clearProps: "transform",
          },
        );
      }

      const gallerySection = document.querySelector(
        'section[aria-labelledby="practice-gallery-heading"]',
      );
      const galleryItems = gsap.utils.toArray<HTMLElement>(
        'section[aria-labelledby="practice-gallery-heading"] ul > li > figure',
      );
      if (gallerySection && galleryItems.length) {
        fadeUp(galleryItems, {
          trigger: gallerySection,
          stagger: STAGGER_MS,
        });
      }

      const commSection = document.querySelector(
        'section[aria-labelledby="communication-heading"]',
      );
      const commCols = gsap.utils.toArray<HTMLElement>(
        'section[aria-labelledby="communication-heading"] ul > li > article',
      );
      if (commSection && commCols.length) {
        fadeUp(commCols, {
          trigger: commSection,
          stagger: STAGGER_MS,
        });
      }

      const reviewsSection = document.querySelector("#reviews");
      const reviewCards = gsap.utils.toArray<HTMLElement>(
        "#reviews ul > li > article",
      );
      if (reviewsSection && reviewCards.length) {
        fadeUp(reviewCards, {
          trigger: reviewsSection,
          stagger: STAGGER_MS,
        });
      }

      const contactSection = document.querySelector("#contact");
      const contactBlocks = gsap.utils.toArray<HTMLElement>(
        "#contact .contact-cta-animate",
      );
      if (contactSection && contactBlocks.length) {
        fadeUp(contactBlocks, {
          trigger: contactSection,
          stagger: STAGGER_MS,
        });
      }
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  });

  return null;
}
