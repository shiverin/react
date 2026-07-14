import { profile } from "../data/portfolioData";
import { ArrowUpRightIcon } from "./Icons";
import RouteLink from "./RouteLink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer page-shell">
      <div className="footer-panel glass-panel">
        <div className="footer-brand">
          <span className="footer-mark">{profile.initials}</span>
          <div><strong>{profile.name}</strong><p>AI, data, and backend systems.</p></div>
        </div>
        <nav aria-label="Footer navigation">
          <RouteLink to="/work">Work</RouteLink>
          <RouteLink to="/experience">Experience</RouteLink>
          <RouteLink to="/about">About</RouteLink>
          <RouteLink to="/resume">Resume</RouteLink>
          <RouteLink to="/contact">Contact</RouteLink>
        </nav>
        <a className="footer-email" href={`mailto:${profile.email}`}>
          <span>{profile.email}</span><ArrowUpRightIcon />
        </a>
      </div>
      <div className="footer-bottom">
        <span>(c) {year} {profile.name}</span>
        <span>Designed as a living glass interface.</span>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>
      </div>
    </footer>
  );
}
