import { useState } from "react";
import PageIntro from "../components/PageIntro";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/portfolio";

const projectFilters = [
  { id: "full-stack", label: "Full-stack" },
  { id: "ai-agents", label: "AI & agents" },
  { id: "quant-systems", label: "Quant systems" },
  { id: "game-dev", label: "Game dev" },
  { id: "all", label: "All projects" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("full-stack");
  const visibleProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.filters.includes(activeFilter));

  return (
    <section className="content-page work-page long-page__section" id="work" tabIndex="-1">
      <PageIntro eyebrow="Selected work · 03" />

      <Reveal className="project-filter" role="group" aria-label="Filter projects by discipline">
        {projectFilters.map((filter) => {
          const count = filter.id === "all"
            ? projects.length
            : projects.filter((project) => project.filters.includes(filter.id)).length;
          const selected = filter.id === activeFilter;
          return (
            <button
              className={selected ? "is-active" : ""}
              key={filter.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span>{filter.label}</span>
              <small>{String(count).padStart(2, "0")}</small>
            </button>
          );
        })}
      </Reveal>

      <div className="project-filter-grid" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <Reveal key={`${activeFilter}-${project.slug}`} delay={Math.min(index * 55, 220)}>
            <ProjectCard project={project} index={index} compact={index > 2} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
