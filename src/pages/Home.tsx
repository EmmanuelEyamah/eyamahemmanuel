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
    <div>
      <Hero />
      <Services />
      <Works />
      <Experience />
      <Skills />
      <Testimonies />
      <ContactUs />
    </div>
  );
};
