import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Certifications from "@/components/sections/certifications";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "Punith KJ - Senior Tax Consultant";
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <CTA />
      <Contact />
    </>
  );
}
