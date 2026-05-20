import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Partners } from "@/components/sections/Partners";
import { Eligibility } from "@/components/sections/Eligibility";
import { ProgrammeStructure } from "@/components/sections/ProgrammeStructure";
import { Benefits } from "@/components/sections/Benefits";
import { Venue } from "@/components/sections/Venue";
import { ApplicationCTA } from "@/components/sections/ApplicationCTA";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Partners />
        <Eligibility />
        <ProgrammeStructure />
        <Benefits />
        <Venue />
        <ApplicationCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
