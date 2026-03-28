import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
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
