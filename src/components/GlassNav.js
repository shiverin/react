import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import {
  ArrowUpRightIcon,
  CloseIcon,
  GithubIcon,
  LinkedinIcon,
  MenuIcon,
} from "./Icons";
import RouteLink from "./RouteLink";

const navLinks = [
  { label: "Work", path: "/work", number: "01" },
  { label: "Experience", path: "/experience", number: "02" },
  { label: "About", path: "/about", number: "03" },
  { label: "Contact", path: "/contact", number: "04" },
];

export default function GlassNav({ route }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.classList.add("menu-is-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`site-nav-wrap ${scrolled ? "is-scrolled" : ""}`}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="site-nav glass-panel">
          <RouteLink className="brand-mark" to="/" aria-label="Go to home">
            <span className="brand-orbit" aria-hidden="true" />
            <span>{profile.initials}</span>
          </RouteLink>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <RouteLink
                key={link.path}
                to={link.path}
                className={route === link.path || route.startsWith(`${link.path}/`) ? "active" : ""}
              >
                {link.label}
              </RouteLink>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              className="nav-icon-link desktop-social"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GithubIcon />
            </a>
            <a
              className="nav-icon-link desktop-social"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon />
            </a>
            <RouteLink className="nav-resume-link" to="/resume">
              Resume
            </RouteLink>
            <button
              className="menu-trigger"
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
              <span>Menu</span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.div
              className="mobile-menu-panel glass-panel"
              initial={{ opacity: 0, scale: 0.94, y: -18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="mobile-menu-label">Navigate the field</div>
              <nav aria-label="Mobile navigation">
                {[{ label: "Home", path: "/", number: "00" }, ...navLinks].map((link) => (
                  <RouteLink key={link.path} to={link.path} onClick={() => setMenuOpen(false)}>
                    <span>{link.number}</span>
                    <strong>{link.label}</strong>
                    <ArrowUpRightIcon />
                  </RouteLink>
                ))}
              </nav>
              <div className="mobile-socials">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRightIcon />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRightIcon />
                </a>
                <RouteLink to="/resume" onClick={() => setMenuOpen(false)}>
                  Resume <ArrowUpRightIcon />
                </RouteLink>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
