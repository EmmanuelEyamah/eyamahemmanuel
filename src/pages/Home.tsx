import {
  ContactUs,
  Experience,
  Hero,
  Services,
  Skills,
  Testimonies,
  Works,
} from "./Sections";

export const Home = () => {
  return (
    <div className="pt-4 sm:pt-8">
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="testimonies">
        <Testimonies />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
};
