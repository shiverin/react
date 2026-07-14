import PageIntro from "../components/PageIntro";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/portfolio";

export default function WorkPage() {
  const featured = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  return (
    <main className="content-page work-page" id="main-content" tabIndex="-1">
      <PageIntro
        eyebrow="Selected work · 02"
        title={<>Systems with<br />something at stake.</>}
        copy="A selection of products and experiments across quantitative research, real-time software, machine learning and useful developer tools."
        aside={<div className="work-index"><span>07 projects</span><span>2024 — 2026</span><span>Singapore</span></div>}
      />

      <section className="featured-projects" aria-label="Featured projects">
        {featured.map((project, index) => (
          <Reveal key={project.slug} delay={index * 90}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </section>

      <section className="section-block archive-section">
        <Reveal className="section-heading-row">
          <div><span className="eyebrow">Archive</span><h2>More things I have built.</h2></div>
          <p>Small products are often where the sharpest lessons live.</p>
        </Reveal>
        <div className="archive-grid">
          {archive.map((project, index) => (
            <Reveal key={project.slug} delay={index * 55}>
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
