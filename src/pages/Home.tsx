import {
  AboutMe,
  ContactUs,
  Experience,
  Hero,
  Services,
  Skills,
  Works,
} from "./Sections";
import { CTA } from "./Sections/CTA";

export const Home = () => {
  return (
    <div className="pt-4 sm:pt-8">
      <section id="hero">
        <Hero />
      </section>
      {/* <section id="passion">
        <Passion />
      </section> */}
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Works />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      {/* <section id="testimonies">
        <Testimonies />
      </section> */}
      <section id="contact">
        <ContactUs />
      </section>
      <section id="">
        <CTA />
      </section>
    </div>
  );
};
