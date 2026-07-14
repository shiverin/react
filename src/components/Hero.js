import { useRef, useState } from "react";
import { motion } from "framer-motion";
import portrait from "../assets/myself.jpg";
import { profile, stats } from "../data/portfolioData";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SparkIcon,
} from "./Icons";
import RouteLink from "./RouteLink";

export default function Hero() {
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onPointerMove = (event) => {
    if (!stageRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = stageRef.current.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="hero-section page-shell">
      <div className="hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="availability-pill glass-chip">
            <span className="availability-dot" />
            <span>{profile.currentCompany} / {profile.currentRole}</span>
          </div>

          <p className="hero-eyebrow">{profile.eyebrow}</p>
          <h1>
            Intelligent systems
            <span className="hero-serif"> with technical depth</span>
            <span className="hero-outline"> and human consequence.</span>
          </h1>
          <p className="hero-intro">{profile.shortBio}</p>

          <div className="hero-actions">
            <RouteLink className="primary-button" to="/work">
              <span>Enter selected work</span>
              <ArrowRightIcon />
            </RouteLink>
            <RouteLink className="secondary-button" to="/resume">
              <span>Read current resume</span>
              <ArrowUpRightIcon />
            </RouteLink>
          </div>

          <div className="hero-meta-row">
            <div className="hero-socials" aria-label="Social profiles">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <GithubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <LinkedinIcon />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email Zhao Shizhen">
                <MailIcon />
              </a>
            </div>
            <div className="hero-location">
              <span>Signal origin</span>
              <strong>{profile.location}</strong>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-art-column"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div
            ref={stageRef}
            className="portrait-stage"
            onPointerMove={onPointerMove}
            onPointerLeave={resetTilt}
            style={{ "--tilt-x": `${tilt.x}deg`, "--tilt-y": `${tilt.y}deg` }}
          >
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-orbit portrait-orbit-a" aria-hidden="true" />
            <div className="portrait-orbit portrait-orbit-b" aria-hidden="true" />
            <div className="portrait-cube glass-panel">
              <div className="cube-sheen" aria-hidden="true" />
              <div className="portrait-frame">
                <img src={portrait} alt="Zhao Shizhen" />
                <div className="portrait-color-wash" aria-hidden="true" />
              </div>
              <div className="portrait-topline">
                <span>Field / Interface</span>
                <span>2026</span>
              </div>
              <div className="portrait-nameplate">
                <span className="nameplate-index">{profile.initials}</span>
                <div>
                  <strong>{profile.name}</strong>
                  <span>AI, data, and backend systems</span>
                </div>
                <ArrowUpRightIcon />
              </div>
            </div>

            <motion.div
              className="floating-glass floating-glass-one glass-panel"
              animate={{ y: [0, -12, 0], rotate: [-2, 1, -2] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <SparkIcon />
              <div>
                <span>Current signal</span>
                <strong>Data x Delivery</strong>
              </div>
            </motion.div>

            <motion.div
              className="floating-glass floating-glass-two glass-panel"
              animate={{ y: [0, 10, 0], rotate: [2, -1, 2] }}
              transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="mini-orbit" />
              <div>
                <span>Build mode</span>
                <strong>Useful over impressive</strong>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats glass-panel"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.55 }}
      >
        <div className="stats-intro">
          <span className="stats-spark" aria-hidden="true" />
          <p>Proof points, not decorative counters.</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <button className="scroll-cue" type="button" onClick={scrollToExperience}>
          <span>Descend into the work</span>
          <span className="scroll-cue-line" />
        </button>
      </motion.div>
    </section>
  );
}
