import PageIntro from "../components/PageIntro";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/portfolio";

export default function WorkPage() {
  const featured = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  return (
    <section className="content-page work-page long-page__section" id="work" tabIndex="-1">
      <PageIntro
        eyebrow="Selected work · 03"
        copy="A selection of products and experiments across quantitative research, real-time software, machine learning and useful developer tools."
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
        </Reveal>
        <div className="archive-grid">
          {archive.map((project, index) => (
            <Reveal key={project.slug} delay={index * 55}>
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  );
}
