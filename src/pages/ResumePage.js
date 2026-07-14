import {
  achievements,
  education,
  experiences,
  hackathon,
  profile,
  projects,
  skillGroups,
} from "../data/portfolioData";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PrinterIcon,
} from "../components/Icons";
import RouteLink from "../components/RouteLink";

export default function ResumePage() {
  return (
    <main className="route-page resume-page page-shell">
      <div className="resume-toolbar glass-panel no-print">
        <RouteLink to="/" className="back-link"><ArrowLeftIcon /> Portfolio</RouteLink>
        <div>
          <a className="resume-download" href={profile.resumePdf} download="Zhao_Shizhen_Resume.pdf"><DownloadIcon /> Download PDF</a>
          <button type="button" onClick={() => window.print()}><PrinterIcon /> Print / Save PDF</button>
          <a className="resume-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRightIcon /></a>
        </div>
      </div>

      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <p>Curriculum Vitae / 2026</p>
            <h1>{profile.name}</h1>
            <h2>Computer Science | Quantitative Finance | AI and Data Solutions | Backend Systems</h2>
          </div>
          <div className="resume-contact">
            <span><MapPinIcon /> {profile.location}</span>
            <a href={`mailto:${profile.email}`}><MailIcon /> {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
            <span>{profile.phone}</span>
          </div>
        </header>

        <section className="resume-section resume-summary">
          <h3>Profile</h3>
          <p>{profile.shortBio}</p>
        </section>

        <section className="resume-section">
          <h3>Education</h3>
          <div className="resume-entry">
            <div className="resume-entry-head">
              <div><strong>{education.institution}</strong><span>{education.degree} - {education.secondMajor}</span></div>
              <div><strong>{education.duration}</strong><span>GPA {education.gpa}</span></div>
            </div>
            <ul>
              {achievements.slice(0, 2).map((item) => <li key={item.title}>{item.title}: {item.context}</li>)}
              <li>Coursework: {education.coursework.join(", ")}</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h3>Experience</h3>
          {experiences.map((experience) => (
            <div className="resume-entry" key={`${experience.company}-${experience.role}`}>
              <div className="resume-entry-head">
                <div><strong>{experience.company}</strong><span>{experience.role} - {experience.department}</span></div>
                <div><strong>{experience.duration}</strong><span>{experience.location}</span></div>
              </div>
              <ul>{experience.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h3>Selected Projects</h3>
          {projects.filter((project) => project.featured).map((project) => (
            <div className="resume-entry" key={project.slug}>
              <div className="resume-entry-head">
                <div><strong>{project.title}</strong><span>{project.subtitle}</span></div>
                <div><strong>{project.year}</strong><a href={project.github} target="_blank" rel="noreferrer">GitHub</a></div>
              </div>
              <ul>{project.impact.slice(0, 2).map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h3>Hackathon</h3>
          <div className="resume-entry">
            <div className="resume-entry-head">
              <div><strong>{hackathon.title}</strong><span>{hackathon.achievement}</span></div>
              <div><strong>{hackathon.duration}</strong><span>Singapore</span></div>
            </div>
            <ul>{hackathon.modules.map((module) => <li key={module.title}>{module.title}: {module.detail} Result: {module.metric}.</li>)}</ul>
          </div>
        </section>

        <section className="resume-section">
          <h3>Technical Skills</h3>
          <div className="resume-skill-list">
            {skillGroups.map((group) => (
              <p key={group.title}><strong>{group.title}:</strong> {group.items.join(", ")}</p>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
