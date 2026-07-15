import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { achievements, certifications, education, interests, principles, profile, skillGroups } from "../data/portfolio";

export default function AboutPage() {
  return (
    <section className="content-page about-page long-page__section" id="about" tabIndex="-1">
      <PageIntro
        eyebrow="About · 02"
      />

      <section className="about-opening about-opening--single">
        <Reveal className="about-opening__statement glass-panel">
          <span className="eyebrow">In my own words</span>
          <p>{profile.longIntroduction}</p>
          <p>I make technically ambitious work understandable, operable and useful beyond a demo.</p>
        </Reveal>
      </section>

      <section className="section-block">
        <Reveal className="section-heading-row">
          <div><span className="eyebrow">How I work</span><h2>Three operating principles.</h2></div>
        </Reveal>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <Reveal className="principle-card glass-panel" delay={index * 90} key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-block certification-section">
        <Reveal className="section-heading-row">
          <div><span className="eyebrow">Continued learning</span><h2>Credentials, with receipts.</h2></div>
        </Reveal>
        <div className="certification-list">
          {certifications.map((certificate, index) => (
            <Reveal as="a" className="certification-row" delay={index * 45} href={certificate.href} target="_blank" rel="noreferrer" key={certificate.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{certificate.title}</strong>
              <small>{certificate.issuer}</small>
              <small>{certificate.issued}</small>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="education-layout section-block">
        <Reveal className="education-card glass-panel">
          <span className="eyebrow">Education</span>
          <div className="education-card__top">
            <h2>{education.institution}</h2>
            <span>{education.duration}</span>
          </div>
          <p>{education.degree}<br />with a {education.secondMajor}</p>
          <div className="education-card__gpa"><strong>{education.gpa}</strong><span>Current GPA</span></div>
          <div className="tag-cloud">
            {education.coursework.map((course) => <span key={course}>{course}</span>)}
          </div>
        </Reveal>
        <Reveal className="achievement-stack" delay={100}>
          <span className="eyebrow">Recognition</span>
          {achievements.map((achievement) => (
            <article className="achievement-row" key={achievement.title}>
              <span>{achievement.code}</span>
              <div><h3>{achievement.title}</h3><p>{achievement.detail}</p></div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="section-block">
        <Reveal className="section-heading-row">
          <div><span className="eyebrow">Toolbox</span><h2>Skills, organised by use.</h2></div>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal className="skill-card glass-panel" delay={index * 55} key={group.title}>
              <h3>{group.title}</h3>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="interests-band glass-panel section-block">
        <Reveal>
          <span className="eyebrow">Away from the keyboard</span>
          <h2>Music, watches, puzzles &amp; long games.</h2>
        </Reveal>
        <Reveal className="interests-list" delay={100}>
          {interests.map((interest, index) => <span key={interest}><small>0{index + 1}</small>{interest}</span>)}
        </Reveal>
      </section>
    </section>
  );
}
