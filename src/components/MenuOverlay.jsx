import { useEffect, useRef } from "react";
import { profile } from "../data/portfolio";
import RouteLink from "./RouteLink";
import { ArrowUpRightIcon, CloseIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const links = [
  { number: "01", label: "Home", to: "/" },
  { number: "02", label: "About", to: "/about" },
  { number: "03", label: "Work", to: "/work" },
  { number: "04", label: "Experience", to: "/experience" },
  { number: "05", label: "Resume", to: "/resume" },
  { number: "06", label: "Contact", to: "/contact" },
];

export default function MenuOverlay({ open, onClose, route }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    document.body.classList.add("menu-is-open");
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", handleKeyDown);
      previous?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div className={`menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="menu-overlay__veil" onClick={onClose} />
      <div className="menu-overlay__panel" role="dialog" aria-modal="true" aria-label="Website navigation">
        <div className="menu-overlay__header">
          <span className="menu-overlay__eyebrow">Navigate</span>
          <button ref={closeRef} className="round-control" type="button" onClick={onClose} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>

        <nav className="menu-overlay__nav" aria-label="Primary navigation">
          {links.map((link) => {
            const active = link.to === "/" ? route === "/" : route === link.to || route.startsWith(`${link.to}/`);
            return (
              <RouteLink
                key={link.to}
                to={link.to}
                className={`menu-overlay__link ${active ? "is-active" : ""}`}
                onClick={onClose}
              >
                <span>{link.number}</span>
                <strong>{link.label}</strong>
                <ArrowUpRightIcon size={26} />
              </RouteLink>
            );
          })}
        </nav>

        <div className="menu-overlay__footer">
          <div>
            <span className="menu-overlay__eyebrow">Say hello</span>
            <a className="menu-overlay__email" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="menu-overlay__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
