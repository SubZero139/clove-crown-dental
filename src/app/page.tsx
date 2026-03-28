import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <section
        id="services"
        className="min-h-[25vh] scroll-mt-24"
        aria-label="Services"
      />
      <section
        id="about"
        className="min-h-[25vh] scroll-mt-24"
        aria-label="About"
      />
      <section
        id="reviews"
        className="min-h-[25vh] scroll-mt-24"
        aria-label="Reviews"
      />
      <section
        id="contact"
        className="min-h-[25vh] scroll-mt-24"
        aria-label="Contact"
      />
    </main>
  );
}
