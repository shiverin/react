import { useCallback, useEffect, useRef, useState } from "react";
import AmbientBackground from "./components/AmbientBackground";
import Footer from "./components/Footer";
import NotebookRail from "./components/NotebookRail";
import ScrollProgress from "./components/ScrollProgress";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import WorkPage from "./pages/WorkPage";
import useDocumentMeta from "./hooks/useDocumentMeta";

const sections = ["home", "about", "work", "experience", "resume", "contact"];

function readSectionHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return sections.includes(hash) ? hash : "home";
}

export default function App() {
  const [activeSection, setActiveSection] = useState(readSectionHash);
  const activeSectionRef = useRef(activeSection);

  useDocumentMeta({
    title: "Zhao Shizhen — Computer Scientist & Systems Builder",
    description: "Portfolio of Zhao Shizhen: systems, quantitative research, machine learning and product engineering.",
  });

  const navigateToSection = useCallback((section, options = {}) => {
    if (!sections.includes(section)) return;

    const target = document.getElementById(section);
    if (!target) return;

    activeSectionRef.current = section;
    setActiveSection(section);
    target.scrollIntoView({
      behavior: options.instant || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${section}`);
  }, []);

  useEffect(() => {
    const initialSection = readSectionHash();
    window.requestAnimationFrame(() => navigateToSection(initialSection, { instant: true }));
  }, [navigateToSection]);

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.scrollY + Math.min(window.innerHeight * 0.38, 360);
        let current = sections[0];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && element.offsetTop <= marker) current = section;
        }
        if (current !== activeSectionRef.current) {
          activeSectionRef.current = current;
          setActiveSection(current);
          window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${current}`);
        }
      });
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const onPointerMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div className="app route-one-page">
      <a className="skip-link" href="#home">Skip to content</a>
      <ScrollProgress />
      <div className="site-frame">
        <AmbientBackground />
        <div className="pointer-light" aria-hidden="true" />
        <NotebookRail activeSection={activeSection} onNavigate={navigateToSection} />
        <main className="long-page" id="main-content">
          <HomePage />
          <AboutPage />
          <WorkPage />
          <ExperiencePage />
          <ResumePage />
          <ContactPage />
        </main>
        <Footer />
      </div>
    </div>
  );
}
