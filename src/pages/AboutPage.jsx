import portraitWebp from "../assets/portrait.webp";
import portraitJpg from "../assets/portrait.jpg";
import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import StatStrip from "../components/StatStrip";
import TiltSurface from "../components/TiltSurface";
import { achievements, education, interests, principles, profile, skillGroups } from "../data/portfolio";

export default function AboutPage() {
  return (
    <main className="content-page about-page" id="main-content" tabIndex="-1">
      <PageIntro
        eyebrow="About · 01"
        title={<>Curiosity is the<br />through-line.</>}
        copy="I like problems that refuse to stay inside one discipline. My work moves between systems, markets, AI, data and product judgment."
        aside={<p className="aside-note">Currently building client-facing commodity data solutions at Kpler while studying Computer Science and Quantitative Finance at NUS.</p>}
      />

      <section className="about-opening section-grid">
        <Reveal className="about-opening__statement glass-panel">
          <span className="eyebrow">In my own words</span>
          <p>{profile.longIntroduction}</p>
          <p>I care about making technically ambitious work understandable, operable and genuinely useful beyond a demo.</p>
        </Reveal>
        <Reveal className="about-opening__portrait" delay={100}>
          <TiltSurface className="about-portrait-card">
            <picture>
              <source srcSet={portraitWebp} type="image/webp" />
              <img src={portraitJpg} alt="Zhao Shizhen in Tokyo" />
            </picture>
            <div><span>Based in</span><strong>Singapore</strong></div>
          </TiltSurface>
        </Reveal>
      </section>

      <StatStrip />

      <section className="section-block">
        <Reveal className="section-heading-row">
          <div><span className="eyebrow">How I work</span><h2>Three operating principles.</h2></div>
          <p>Not rules. More like useful defaults.</p>
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
          <p>I choose tools around the problem, not the other way around.</p>
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
    </main>
  );
}
