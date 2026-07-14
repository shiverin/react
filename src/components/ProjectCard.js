import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "./Icons";
import ProjectVisual from "./ProjectVisual";
import RouteLink from "./RouteLink";

export default function ProjectCard({ project, index = 0, compact = false }) {
  return (
    <motion.article
      className={`project-card glass-panel ${compact ? "project-card-compact" : ""}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay: Math.min(index * 0.08, 0.24), ease: [0.2, 0.8, 0.2, 1] }}
    >
      <RouteLink className="project-card-link" to={`/work/${project.slug}`} aria-label={`Read ${project.title} case study`}>
        <ProjectVisual project={project} />
        <div className="project-card-copy">
          <div className="project-card-meta">
            <span>{project.code}</span>
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-one-liner">{project.oneLiner}</p>
          <div className="project-card-footer">
            <div className="mini-tag-row">
              {project.tech.slice(0, compact ? 2 : 4).map((item) => <span key={item}>{item}</span>)}
            </div>
            <span className="project-enter"><ArrowUpRightIcon /></span>
          </div>
        </div>
      </RouteLink>
    </motion.article>
  );
}
