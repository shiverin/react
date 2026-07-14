import { ArrowUpRightIcon } from "./Icons";
import ProjectArtwork from "./ProjectArtwork";
import RouteLink from "./RouteLink";
import TiltSurface from "./TiltSurface";

export default function ProjectCard({ project, index = 0, compact = false }) {
  return (
    <TiltSurface className={`project-card ${compact ? "project-card--compact" : ""}`}>
      <RouteLink to={`/work/${project.slug}`} className="project-card__link" aria-label={`View ${project.title} case study`}>
        <div className="project-card__meta">
          <span>{project.code}</span>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <ProjectArtwork variant={project.visual} />
        <div className="project-card__copy">
          <div>
            <h2>{project.title}</h2>
            <p>{project.subtitle}</p>
          </div>
          <span className="project-card__arrow"><ArrowUpRightIcon /></span>
        </div>
        {!compact ? <p className="project-card__description">{project.oneLiner}</p> : null}
      </RouteLink>
    </TiltSurface>
  );
}
