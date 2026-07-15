import { ArrowUpRightIcon } from "./Icons";
import ProjectArtwork from "./ProjectArtwork";
import TiltSurface from "./TiltSurface";

export default function ProjectCard({ project, index = 0, compact = false }) {
  const content = (
    <>
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
        {project.github ? <span className="project-card__arrow"><ArrowUpRightIcon /></span> : null}
      </div>
      {!compact ? <p className="project-card__description">{project.oneLiner}</p> : null}
    </>
  );

  return (
    <TiltSurface className={`project-card ${compact ? "project-card--compact" : ""}`}>
      {project.github ? (
        <a href={project.github} className="project-card__link" target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>
          {content}
        </a>
      ) : (
        <article className="project-card__link project-card__link--private" aria-label={`${project.title}, confidential project`}>
          {content}
        </article>
      )}
    </TiltSurface>
  );
}
