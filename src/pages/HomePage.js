import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import HackathonSection from "../components/HackathonSection";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import SignalStrip from "../components/SignalStrip";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SignalStrip />
      <ExperienceSection limit={3} />
      <ProjectsSection />
      <HackathonSection />
      <AboutSection compact />
      <ContactSection />
    </main>
  );
}
