import { useCallback, useEffect, useMemo, useState } from "react";
import AmbientBackground from "./components/AmbientBackground";
import Footer from "./components/Footer";
import MenuOverlay from "./components/MenuOverlay";
import NotebookRail from "./components/NotebookRail";
import ScrollProgress from "./components/ScrollProgress";
import SiteHeader from "./components/SiteHeader";
import { projects, routeMeta } from "./data/portfolio";
import useDocumentMeta from "./hooks/useDocumentMeta";
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
  if (route === "/about") return { kind: "about", element: <AboutPage /> };
  if (route === "/work") return { kind: "work", element: <WorkPage /> };
  if (route.startsWith("/work/")) {
    const slug = route.slice("/work/".length);
    const project = projects.find((item) => item.slug === slug);
    if (project) return { kind: "project", project, element: <ProjectPage slug={slug} /> };
  }
  if (route === "/experience") return { kind: "experience", element: <ExperiencePage /> };
  if (route === "/resume") return { kind: "resume", element: <ResumePage /> };
  if (route === "/contact") return { kind: "contact", element: <ContactPage /> };
  return { kind: "notFound", element: <NotFoundPage /> };
}

export default function App() {
  const route = useHashRoute();
  const resolved = useMemo(() => resolveRoute(route), [route]);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const meta = resolved.kind === "project"
    ? { title: `${resolved.project.title} — Zhao Shizhen`, description: resolved.project.oneLiner }
    : routeMeta[resolved.kind] || routeMeta.notFound;
  useDocumentMeta(meta);

  useEffect(() => {
    closeMenu();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [route, closeMenu]);

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

  const showFooter = !["home", "notFound"].includes(resolved.kind);

  return (
    <div className={`app route-${resolved.kind}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollProgress />
      <div className="site-frame">
        <AmbientBackground />
        <div className="pointer-light" aria-hidden="true" />
        <NotebookRail route={route} />
        <SiteHeader onMenu={() => setMenuOpen(true)} route={route} />
        <div className="page-stage" key={route}>
          {resolved.element}
        </div>
        {showFooter ? <Footer /> : null}
      </div>
      <MenuOverlay open={menuOpen} onClose={closeMenu} route={route} />
    </div>
  );
}
