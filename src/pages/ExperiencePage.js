import ExperienceSection from "../components/ExperienceSection";
import PageIntro from "../components/PageIntro";
import { experiences } from "../data/portfolioData";

export default function ExperiencePage() {
  return (
    <main className="route-page experience-page">
      <PageIntro
        index="02"
        eyebrow="Experience"
        title={<>From internal AI systems to <em>client-facing data delivery.</em></>}
        body="The roles are different on the surface, but the same pattern keeps returning: understand the messy operational reality, reduce it to a useful system, and stay close enough to the user to know whether it worked."
        aside={
          <div className="intro-signal-card">
            <span>Current vector</span>
            <strong>{experiences[0].company}</strong>
            <p>{experiences[0].role}<br />{experiences[0].duration}</p>
          </div>
        }
      />

      <ExperienceSection showHeading={false} />

      <section className="page-shell principles-section">
        <div className="principles-heading">
          <span>Operating principles</span>
          <h2>How I approach technical delivery.</h2>
        </div>
        <div className="principle-grid">
          {[
            ["01", "Start from the decision", "The useful question is rarely what can be built. It is what decision the system needs to improve."],
            ["02", "Instrument the reality", "A polished interface cannot rescue a workflow that hides state, failure modes, or weak data."],
            ["03", "Translate both directions", "Technical depth and client context only compound when each side can understand the other."],
            ["04", "Leave a system behind", "The output should be repeatable, inspectable, and easier for the next person to extend."],
          ].map(([index, title, body]) => (
            <article className="principle-card glass-panel" key={index}>
              <span>{index}</span><h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
