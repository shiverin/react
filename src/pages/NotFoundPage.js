import { ArrowLeftIcon, SparkIcon } from "../components/Icons";
import RouteLink from "../components/RouteLink";

export default function NotFoundPage() {
  return (
    <main className="route-page not-found-page page-shell">
      <div className="not-found-panel glass-panel">
        <div className="not-found-orbit"><SparkIcon /><span>404</span></div>
        <p>Signal lost</p>
        <h1>This route does not exist in the current system.</h1>
        <RouteLink className="primary-button" to="/"><ArrowLeftIcon /><span>Return home</span></RouteLink>
      </div>
    </main>
  );
}
