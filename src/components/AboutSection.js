import { motion } from "framer-motion";
import { achievements, education, interests, skillGroups } from "../data/portfolioData";
import { ArrowRightIcon, BookIcon, SparkIcon } from "./Icons";
import RouteLink from "./RouteLink";
import SectionHeading from "./SectionHeading";

export default function AboutSection({ compact = false }) {
  return (
    <section id="about" className="content-section page-shell about-section">
      <SectionHeading
        index="05"
        eyebrow="The operating system"
        title={<>Computer science, quant thinking, and <em>creative range.</em></>}
        body="The through-line is curiosity: understanding the system deeply enough to make a better decision about what to build."
      />

      <div className="about-bento">
        <motion.article
          className="education-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bento-icon"><BookIcon /></div>
          <p className="bento-label">Education</p>
          <h3>{education.institution}</h3>
          <p className="education-degree">{education.degree}</p>
          <p>{education.secondMajor}</p>
          <div className="education-metrics">
            <div><span>GPA</span><strong>{education.gpa}</strong></div>
            <div><span>Timeline</span><strong>{education.duration}</strong></div>
          </div>
          <div className="course-cloud">
            {education.coursework.slice(0, compact ? 3 : education.coursework.length).map((course) => <span key={course}>{course}</span>)}
          </div>
        </motion.article>

        <motion.article
          className="achievements-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="bento-icon"><SparkIcon /></div>
          <p className="bento-label">Recognition</p>
          <div className="achievement-list">
            {achievements.map((achievement) => (
              <div key={achievement.title}>
                <span>{achievement.code}</span>
                <div><strong>{achievement.title}</strong><p>{achievement.context}</p></div>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          className="skill-matrix-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.16 }}
        >
          <div className="skill-matrix-header">
            <div><p className="bento-label">Technical matrix</p><h3>Tools grouped by how I use them.</h3></div>
            <span className="skill-radar" aria-hidden="true"><i /><i /><i /></span>
          </div>
          <div className="skill-group-grid">
            {skillGroups.slice(0, compact ? 3 : skillGroups.length).map((group) => (
              <div className="skill-group" key={group.title}>
                <strong>{group.title}</strong>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          className="interests-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="bento-label">Outside the terminal</p>
          <div className="interest-tape">
            {interests.map((interest, index) => (
              <span key={interest}><i>0{index + 1}</i>{interest}</span>
            ))}
          </div>
        </motion.article>
      </div>

      {compact ? (
        <div className="section-end-link">
          <RouteLink className="text-link" to="/about">Open the full profile <ArrowRightIcon /></RouteLink>
        </div>
      ) : null}
    </section>
  );
}
