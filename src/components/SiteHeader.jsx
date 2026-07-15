import RouteLink from "./RouteLink";
import { MenuIcon } from "./Icons";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Experience", to: "/experience" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader({ onMenu, route }) {
  return (
    <header className="site-header">
      <RouteLink to="/" className="site-logo" aria-label="Zhao Shizhen home">ZS.</RouteLink>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => {
          const active = link.to === "/" ? route === "/" : route === link.to || route.startsWith(`${link.to}/`);
          return (
            <RouteLink className={active ? "is-active" : ""} key={link.to} to={link.to} aria-current={active ? "page" : undefined}>
              {link.label}
            </RouteLink>
          );
        })}
      </nav>
      <button className="menu-trigger" type="button" onClick={onMenu} aria-label="Open navigation menu">
        <span>Menu</span>
        <span className="round-control round-control--small"><MenuIcon size={16} /></span>
      </button>
    </header>
  );
}
