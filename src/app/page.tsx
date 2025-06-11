// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Commissions from "./commissions";
import Experience from "./experience";
import Contact from "./contact";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Commissions />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
