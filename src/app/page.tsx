export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Tall block so sticky navbar blur (after 100px scroll) can be verified before later phases */}
      <div className="h-[120vh]" aria-hidden />
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
