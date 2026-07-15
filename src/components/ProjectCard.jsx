import { ArrowUpRightIcon } from "./Icons";
import ProjectArtwork from "./ProjectArtwork";
import TiltSurface from "./TiltSurface";

export default function ProjectCard({ project, index = 0, compact = false }) {
  return (
    <TiltSurface className={`project-card ${compact ? "project-card--compact" : ""}`}>
      <a href={project.github} className="project-card__link" target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>
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
      </a>
    </TiltSurface>
  );
}
