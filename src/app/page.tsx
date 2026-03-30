import { AboutDentist } from "@/components/AboutDentist";
import { Hero } from "@/components/Hero";
import { PracticeGallery } from "@/components/PracticeGallery";
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
      <AboutDentist />
      <PracticeGallery />
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
