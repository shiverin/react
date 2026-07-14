import { motion } from "framer-motion";
import { hackathon } from "../data/portfolioData";
import { BrainIcon, SparkIcon, TrophyIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function HackathonSection({ showHeading = true }) {
  return (
    <section id="hackathon" className="content-section page-shell hackathon-section">
      {showHeading ? (
        <SectionHeading
          index="04"
          eyebrow="Pressure tested"
          title={<>Four AI domains. One clock. <em>Top-four finish.</em></>}
          body="BrainHack compressed speech, vision, OCR, and multi-agent reinforcement learning into one intensely practical build cycle."
        />
      ) : null}

      <motion.article
        className="hackathon-card glass-panel"
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="hackathon-copy">
          <div className="achievement-pill"><TrophyIcon /><span>{hackathon.achievement}</span></div>
          <p className="hackathon-label">DSTA / Singapore / {hackathon.duration}</p>
          <h3>{hackathon.title}</h3>
          <p>{hackathon.description}</p>
          <div className="hackathon-module-grid">
            {hackathon.modules.map((module, index) => (
              <div className="hackathon-module" key={module.title}>
                <span>0{index + 1}</span>
                <strong>{module.title}</strong>
                <em>{module.metric}</em>
                <p>{module.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hackathon-orbit" aria-hidden="true">
          <div className="orbit-core"><BrainIcon /><strong>AI</strong><span>system</span></div>
          {hackathon.modules.map((module, index) => (
            <div className={`orbit-node orbit-node-${index + 1}`} key={module.title}>
              <SparkIcon /><span>{module.title}</span>
            </div>
          ))}
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <div className="orbit-ring orbit-ring-three" />
        </div>
      </motion.article>
    </section>
  );
}
