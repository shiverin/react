import RouteLink from "./RouteLink";
import { MenuIcon } from "./Icons";

export default function SiteHeader({ onMenu, darkText = false }) {
  return (
    <header className={`site-header ${darkText ? "site-header--ink" : ""}`}>
      <RouteLink to="/" className="site-logo" aria-label="Zhao Shizhen home">ZS.</RouteLink>
      <button className="menu-trigger" type="button" onClick={onMenu} aria-label="Open navigation menu">
        <span>Menu</span>
        <span className="round-control round-control--small"><MenuIcon size={16} /></span>
      </button>
    </header>
  );
}
