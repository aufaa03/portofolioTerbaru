import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ToolsPlatforms from "@/components/ToolsPlatforms";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import WhyMe from "@/components/WhyMe";
import PersonalSide from "@/components/PersonalSide";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Single-page portfolio — Muhammad Aufa Rozaky
 * Sections: Hero → About → Experience → Skills → ToolsPlatforms → Achievements → Projects → WhyMe → PersonalSide → Contact → Footer
 */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ToolsPlatforms />
      <Achievements />
      <Projects />
      <WhyMe />
      <PersonalSide />
      <Contact />
      <Footer />
    </main>
  );
}
