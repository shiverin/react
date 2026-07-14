import { profile } from "../data/portfolio";
import RouteLink from "./RouteLink";
import SocialLinks from "./SocialLinks";
import { ArrowIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__statement">
        <span className="eyebrow">Have a hard problem?</span>
        <h2>Let’s make it useful.</h2>
        <RouteLink to="/contact" className="text-link">Start a conversation <ArrowIcon /></RouteLink>
      </div>
      <div className="site-footer__meta">
        <SocialLinks />
        <p>Designed and built by {profile.name}.</p>
        <p>© {new Date().getFullYear()} · Singapore</p>
      </div>
    </footer>
  );
}
