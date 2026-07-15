import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { profile } from "../data/portfolio";
import resumePreview from "../assets/resume/zhaoshizhen-resume.png";

export default function ResumePage() {
  return (
    <section className="content-page resume-page long-page__section" id="resume" tabIndex="-1">
      <PageIntro eyebrow="Resume · 05" />

      <section className="resume-layout resume-layout--single">
        <Reveal className="resume-paper-wrap">
          <div className="resume-paper-shadow" />
          <a className="resume-download-preview" href={profile.resume} download="Zhao-Shizhen-Resume.pdf" aria-label="Download Zhao Shizhen's resume as a PDF">
            <img src={resumePreview} alt="Zhao Shizhen resume" />
          </a>
        </Reveal>
      </section>
    </section>
  );
}
