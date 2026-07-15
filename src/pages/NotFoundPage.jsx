import { ArrowIcon } from "../components/Icons";
import RouteLink from "../components/RouteLink";

export default function NotFoundPage() {
  return (
    <main className="not-found-page" id="main-content" tabIndex="-1">
      <span>404</span>
      <h1>This page drifted out of frame.</h1>
      <p>The route does not exist, but the rest of the portfolio is right where it should be.</p>
      <RouteLink to="/" className="glass-button glass-button--ink">Return home <ArrowIcon /></RouteLink>
    </main>
  );
}
