import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";
import { ArrowRightIcon, CheckIcon, MapPinIcon } from "./Icons";
import RouteLink from "./RouteLink";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection({ showHeading = true, limit }) {
  const visibleExperiences = typeof limit === "number" ? experiences.slice(0, limit) : experiences;

  return (
    <section id="experience" className="content-section page-shell experience-section">
      {showHeading ? (
        <SectionHeading
          index="01"
          eyebrow="Field notes"
          title={<>Where product judgment meets <em>technical depth.</em></>}
          body="My work sits at the edge between complex systems and the people who need them to produce an outcome."
        />
      ) : null}

      <div className="experience-stack">
        {visibleExperiences.map((experience, index) => (
          <motion.article
            className="experience-card glass-panel"
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="experience-rail">
              <div className="company-monogram" style={{ "--company-accent": experience.accent }}>
                <span>{experience.monogram}</span>
              </div>
              <span className="experience-index">0{index + 1}</span>
              <span className="experience-line" />
            </div>

            <div className="experience-main">
              <div className="experience-headline">
                <div>
                  <p>{experience.company}</p>
                  <h3>{experience.role}</h3>
                </div>
                {index === 0 ? <span className="current-role-chip">Current</span> : null}
              </div>
              <div className="experience-meta">
                <span>{experience.department}</span>
                <span>{experience.duration}</span>
                <span><MapPinIcon /> {experience.location}</span>
              </div>
              <p className="experience-summary">{experience.summary}</p>
              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span className="check-orb"><CheckIcon /></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="tag-row">
                {experience.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {limit ? (
        <div className="section-end-link">
          <RouteLink className="text-link" to="/experience">
            Read the complete timeline <ArrowRightIcon />
          </RouteLink>
        </div>
      ) : null}
    </section>
  );
}
