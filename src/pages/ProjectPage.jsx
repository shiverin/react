import { ArrowIcon, ArrowUpRightIcon, BackIcon, CheckIcon } from "../components/Icons";
import ProjectArtwork from "../components/ProjectArtwork";
import Reveal from "../components/Reveal";
import RouteLink from "../components/RouteLink";
import { projects } from "../data/portfolio";

export default function ProjectPage({ slug }) {
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) return null;

  return (
    <main className="content-page project-page" id="main-content" tabIndex="-1">
      <Reveal className="project-back-row">
        <RouteLink to="/work" className="text-link"><BackIcon /> Back to all work</RouteLink>
        <span>{project.code} / {String(projects.length).padStart(2, "0")}</span>
      </Reveal>

      <header className="project-hero">
        <Reveal className="project-hero__copy">
          <div className="project-kicker"><span>{project.category}</span><span>{project.year}</span></div>
          <h1>{project.title}</h1>
          <p className="project-hero__subtitle">{project.subtitle}</p>
          <p className="project-hero__lede">{project.oneLiner}</p>
          <a className="glass-button glass-button--ink" href={project.github} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRightIcon /></a>
        </Reveal>
        <Reveal className="project-hero__index" delay={120}>
          <span>Case study</span>
          <strong>{project.code}</strong>
        </Reveal>
      </header>

      <Reveal className="project-showcase">
        <ProjectArtwork variant={project.visual} />
      </Reveal>

      <section className="project-story section-block">
        <Reveal className="project-story__intro">
          <span className="eyebrow">Overview</span>
          <h2>{project.description}</h2>
        </Reveal>
        <div className="project-story__columns">
          <Reveal className="story-card glass-panel">
            <span>01</span><h3>The challenge</h3><p>{project.challenge}</p>
          </Reveal>
          <Reveal className="story-card glass-panel" delay={90}>
            <span>02</span><h3>The response</h3><p>{project.response}</p>
          </Reveal>
        </div>
      </section>

      <section className="project-results section-block">
        <Reveal className="section-heading-row">
          <div><span className="eyebrow">Outcomes</span><h2>What the build delivered.</h2></div>
        </Reveal>
        <div className="project-results__grid">
          {project.impact.map((item, index) => (
            <Reveal className="result-row" delay={index * 70} key={item}>
              <span><CheckIcon /></span><p>{item}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="project-details section-block">
        <Reveal className="detail-card glass-panel">
          <span className="eyebrow">My contribution</span>
          <ol>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ol>
        </Reveal>
        <Reveal className="detail-card glass-panel" delay={90}>
          <span className="eyebrow">Technology</span>
          <div className="large-tag-cloud">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
        </Reveal>
      </section>

      <Reveal className="next-project glass-panel section-block">
        <div><span className="eyebrow">Next case study</span><h2>{nextProject.title}</h2><p>{nextProject.subtitle}</p></div>
        <RouteLink to={`/work/${nextProject.slug}`} aria-label={`View ${nextProject.title}`}><ArrowIcon size={34} /></RouteLink>
      </Reveal>
    </main>
  );
}
