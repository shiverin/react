import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  GithubIcon,
} from "../components/Icons";
import ProjectVisual from "../components/ProjectVisual";
import RouteLink from "../components/RouteLink";

export default function ProjectPage({ slug }) {
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) return null;

  const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="route-page project-detail-page">
      <section className="project-detail-hero page-shell">
        <motion.div
          className="project-detail-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72 }}
        >
          <RouteLink className="back-link" to="/work"><ArrowLeftIcon /> All work</RouteLink>
          <div className="project-detail-meta">
            <span>{project.code}</span><span>{project.category}</span><span>{project.year}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="project-detail-subtitle">{project.subtitle}</p>
          <p className="project-detail-lead">{project.oneLiner}</p>
          <div className="project-detail-actions">
            <a className="primary-button" href={project.github} target="_blank" rel="noreferrer">
              <GithubIcon /><span>Open repository</span><ArrowUpRightIcon />
            </a>
            <div className="mini-tag-row project-detail-tags">
              {project.tech.slice(0, 5).map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="project-detail-visual glass-panel"
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          <ProjectVisual project={project} expanded />
        </motion.div>
      </section>

      <section className="project-story page-shell">
        <article className="story-block glass-panel story-block-wide">
          <span className="story-index">01 / Context</span>
          <h2>The system</h2>
          <p>{project.description}</p>
        </article>
        <article className="story-block glass-panel">
          <span className="story-index">02 / Friction</span>
          <h2>The challenge</h2>
          <p>{project.challenge}</p>
        </article>
        <article className="story-block glass-panel">
          <span className="story-index">03 / Response</span>
          <h2>The build</h2>
          <p>{project.response}</p>
        </article>

        <article className="story-block glass-panel story-block-wide">
          <span className="story-index">04 / Evidence</span>
          <h2>What came out of it</h2>
          <ul className="project-impact-list">
            {project.impact.map((item) => (
              <li key={item}><span><CheckIcon /></span><p>{item}</p></li>
            ))}
          </ul>
        </article>

        <article className="story-block glass-panel">
          <span className="story-index">05 / Role</span>
          <h2>My contribution</h2>
          <div className="contribution-list">
            {project.contributions.map((item, index) => (
              <span key={item}><i>0{index + 1}</i>{item}</span>
            ))}
          </div>
        </article>

        <article className="story-block glass-panel">
          <span className="story-index">06 / Stack</span>
          <h2>Technology</h2>
          <div className="stack-cloud">
            {project.tech.map((item) => <span key={item}>{item}</span>)}
          </div>
        </article>
      </section>

      <nav className="project-pagination page-shell" aria-label="Project navigation">
        <RouteLink className="project-pagination-link glass-panel" to={`/work/${previous.slug}`}>
          <ArrowLeftIcon /><span><small>Previous</small><strong>{previous.title}</strong></span>
        </RouteLink>
        <RouteLink className="project-pagination-link project-pagination-link-next glass-panel" to={`/work/${next.slug}`}>
          <span><small>Next</small><strong>{next.title}</strong></span><ArrowRightIcon />
        </RouteLink>
      </nav>
    </main>
  );
}
