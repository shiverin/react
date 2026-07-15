import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer site-footer--minimal">
      <p>Designed and built by {profile.name}.</p>
      <p>© {new Date().getFullYear()} · Singapore</p>
    </footer>
  );
}
