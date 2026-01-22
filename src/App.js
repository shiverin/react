import { ChakraProvider } from "@chakra-ui/react";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Header from "./components/Header";
import ExperienceSection from "./components/ExperienceSection";
import HackathonSection from "./components/HackathonSection";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ExperienceSection />
          <HackathonSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
          <BackToTop />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
