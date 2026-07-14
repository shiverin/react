import { projects } from "../data/portfolioData";
import { ArrowRightIcon } from "./Icons";
import ProjectCard from "./ProjectCard";
import RouteLink from "./RouteLink";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="content-section page-shell projects-section">
      <SectionHeading
        index="03"
        eyebrow="Selected systems"
        title={<>Projects with a <em>real internal engine.</em></>}
        body="Each project is presented as a system: the problem, the architecture, the decisions, and the evidence that it worked."
      />

      <div className="featured-project-grid">
        {featured.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </div>

      <div className="section-end-link">
        <RouteLink className="text-link" to="/work">
          View the complete project archive <ArrowRightIcon />
        </RouteLink>
      </div>
    </section>
  );
}
