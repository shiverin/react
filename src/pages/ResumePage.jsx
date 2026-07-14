import { ArrowUpRightIcon, DocumentIcon, DownloadIcon } from "../components/Icons";
import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { education, experiences, profile, skillGroups } from "../data/portfolio";

export default function ResumePage() {
  return (
    <main className="content-page resume-page" id="main-content" tabIndex="-1">
      <PageIntro
        eyebrow="Resume · 04"
        title={<>One page.<br />The current picture.</>}
        copy="The downloadable PDF is the source of truth for dates, roles, education and the most recent project highlights."
        aside={<div className="resume-actions"><a className="glass-button glass-button--ink" href={profile.resume} download><DownloadIcon /> Download PDF</a><a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">Open in a new tab <ArrowUpRightIcon /></a></div>}
      />

      <section className="resume-layout">
        <Reveal className="resume-paper-wrap">
          <div className="resume-paper-shadow" />
          <object className="resume-object" data={profile.resume} type="application/pdf" aria-label="Zhao Shizhen resume PDF">
            <div className="resume-fallback">
              <DocumentIcon size={42} />
              <p>Your browser cannot preview the PDF here.</p>
              <a href={profile.resume} target="_blank" rel="noreferrer">Open the resume</a>
            </div>
          </object>
        </Reveal>

        <div className="resume-summary">
          <Reveal className="resume-summary__block glass-panel">
            <span className="eyebrow">Education</span>
            <h2>{education.institution}</h2>
            <p>{education.degree}<br />{education.secondMajor}</p>
            <div><strong>{education.gpa}</strong><span>{education.duration}</span></div>
          </Reveal>

          <Reveal className="resume-summary__block glass-panel" delay={90}>
            <span className="eyebrow">Experience</span>
            {experiences.map((experience) => (
              <article key={experience.company}>
                <span>{experience.period}</span>
                <h3>{experience.company}</h3>
                <p>{experience.role}</p>
              </article>
            ))}
          </Reveal>

          <Reveal className="resume-summary__block glass-panel" delay={150}>
            <span className="eyebrow">Core toolkit</span>
            <div className="resume-skills">
              {skillGroups.slice(0, 4).map((group) => <span key={group.title}>{group.title}</span>)}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
