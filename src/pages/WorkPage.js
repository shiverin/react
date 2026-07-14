import { useMemo, useState } from "react";
import { projects } from "../data/portfolioData";
import PageIntro from "../components/PageIntro";
import ProjectCard from "../components/ProjectCard";

const filters = ["All", "Featured", "Full Stack", "Machine Learning", "Quant Systems", "Archive"];

export default function WorkPage() {
  const [filter, setFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (filter === "All") return projects;
    if (filter === "Featured") return projects.filter((project) => project.featured);
    if (filter === "Archive") return projects.filter((project) => !project.featured);
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <main className="route-page work-page">
      <PageIntro
        index="01"
        eyebrow="Selected work"
        title={<>Systems, experiments, and <em>products with an engine.</em></>}
        body="The archive spans quantitative infrastructure, real-time products, machine learning, and early full-stack experiments. Open a project to see the decisions underneath the surface."
        aside={
          <div className="intro-signal-card">
            <span>Archive state</span>
            <strong>{projects.length} projects</strong>
            <p>{projects.filter((project) => project.featured).length} detailed case studies and {projects.filter((project) => !project.featured).length} earlier builds.</p>
          </div>
        }
      />

      <section className="page-shell work-archive-section">
        <div className="filter-bar glass-panel" role="group" aria-label="Project filters">
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="work-archive-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} compact={!project.featured} />
          ))}
        </div>
      </section>
    </main>
  );
}
