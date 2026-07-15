import { ArrowUpRightIcon, DocumentIcon, DownloadIcon } from "../components/Icons";
import PageIntro from "../components/PageIntro";
import Reveal from "../components/Reveal";
import { profile } from "../data/portfolio";

export default function ResumePage() {
  return (
    <section className="content-page resume-page long-page__section" id="resume" tabIndex="-1">
      <PageIntro
        eyebrow="Resume · 05"
        aside={<div className="resume-actions"><a className="glass-button glass-button--ink" href={profile.resume} download><DownloadIcon /> Download PDF</a><a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">Open in a new tab <ArrowUpRightIcon /></a></div>}
      />

      <section className="resume-layout resume-layout--single">
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

      </section>
    </section>
  );
}
