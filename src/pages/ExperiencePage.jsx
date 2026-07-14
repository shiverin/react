import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { achievements, experiences, hackathon } from "../data/portfolio";

export default function ExperiencePage() {
  return (
    <main className="content-page experience-page" id="main-content" tabIndex="-1">
      <PageIntro
        eyebrow="Experience · 03"
        title={<>Close to users.<br />Deep in the system.</>}
        copy="I am happiest where technical depth and real-world delivery overlap — turning vague needs into systems people can actually use."
        aside={<p className="aside-note">Across data, ML and product roles, the recurring theme has been ownership from problem framing to implementation and delivery.</p>}
      />

      <section className="experience-timeline">
        {experiences.map((experience, index) => (
          <Reveal className="experience-entry" delay={index * 90} key={experience.company}>
            <div className="experience-entry__rail"><span>0{index + 1}</span><i /></div>
            <article className="experience-card glass-panel">
              <div className="experience-card__top">
                <div className="company-mark">{experience.monogram}</div>
                <div><span>{experience.company}</span><small>{experience.location}</small></div>
                <p>{experience.period}</p>
              </div>
              <div className="experience-card__body">
                <div><h2>{experience.role}</h2><p className="experience-team">{experience.team}</p><p className="experience-intro">{experience.intro}</p></div>
                <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
              <div className="tag-cloud">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section-block hackathon-section">
        <Reveal className="hackathon-intro">
          <span className="eyebrow">Hackathon</span>
          <h2>{hackathon.title}</h2>
          <p>{hackathon.description}</p>
          <div><strong>{hackathon.result}</strong><span>{hackathon.period}</span></div>
        </Reveal>
        <div className="hackathon-grid">
          {hackathon.modules.map((module, index) => (
            <Reveal className="hackathon-card glass-panel" delay={index * 70} key={module.label}>
              <span>0{index + 1}</span><h3>{module.label}</h3><strong>{module.metric}</strong><p>{module.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="recognition-band section-block glass-panel">
        <Reveal><span className="eyebrow">Recognition</span><h2>Signals along the way.</h2></Reveal>
        <div>
          {achievements.map((achievement) => (
            <Reveal className="recognition-band__row" key={achievement.title}>
              <span>{achievement.code}</span><strong>{achievement.title}</strong><p>{achievement.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
