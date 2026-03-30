import { AboutDentist } from "@/components/AboutDentist";
import { Communication } from "@/components/Communication";
import { Hero } from "@/components/Hero";
import { PracticeGallery } from "@/components/PracticeGallery";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
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
      <Communication />
      <Testimonials />
      <section
        id="contact"
        className="min-h-[25vh] scroll-mt-24"
        aria-label="Contact"
      />
    </main>
  );
}
