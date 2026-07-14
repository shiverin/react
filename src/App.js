import { useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AuroraBackdrop from "./components/AuroraBackdrop";
import Footer from "./components/Footer";
import GlassNav from "./components/GlassNav";
import PointerGlow from "./components/PointerGlow";
import ScrollProgress from "./components/ScrollProgress";
import { projects, routeMeta } from "./data/portfolioData";
import useHashRoute from "./hooks/useHashRoute";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import ResumePage from "./pages/ResumePage";
import WorkPage from "./pages/WorkPage";

function resolveRoute(route) {
  if (route === "/") return { kind: "home", element: <HomePage /> };
  if (route === "/work") return { kind: "work", element: <WorkPage /> };
  if (route.startsWith("/work/")) {
    const slug = route.slice("/work/".length);
    const project = projects.find((item) => item.slug === slug);
    if (project) return { kind: "project", project, element: <ProjectPage slug={slug} /> };
  }
  if (route === "/experience") return { kind: "experience", element: <ExperiencePage /> };
  if (route === "/about") return { kind: "about", element: <AboutPage /> };
  if (route === "/contact") return { kind: "contact", element: <ContactPage /> };
  if (route === "/resume") return { kind: "resume", element: <ResumePage /> };
  return { kind: "notFound", element: <NotFoundPage /> };
}

export default function App() {
  const route = useHashRoute();
  const resolved = useMemo(() => resolveRoute(route), [route]);

  useEffect(() => {
    const meta = resolved.kind === "project"
      ? { title: `${resolved.project.title} - Zhao Shizhen`, description: resolved.project.oneLiner }
      : routeMeta[resolved.kind] || routeMeta.home;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [resolved]);

  return (
    <div className={`app-shell route-${resolved.kind}`}>
      <button className="skip-link" type="button" onClick={() => document.getElementById("main-content")?.focus()}>Skip to content</button>
      <AuroraBackdrop />
      <PointerGlow />
      <ScrollProgress />
      <GlassNav route={route} />
      <div id="main-content" tabIndex="-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
            transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {resolved.element}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
