import ContactSection from "../components/ContactSection";
import PageIntro from "../components/PageIntro";
import { profile } from "../data/portfolioData";

export default function ContactPage() {
  return (
    <main className="route-page contact-page">
      <PageIntro
        index="04"
        eyebrow="Contact"
        title={<>A direct line for <em>serious, interesting work.</em></>}
        body="Product problem, data challenge, backend build, research collaboration, or an idea that still needs a technical shape - send the context and we can start there."
        aside={
          <div className="intro-signal-card">
            <span>Primary channel</span>
            <strong>Email</strong>
            <p>{profile.email}<br />Based in {profile.location}</p>
          </div>
        }
      />
      <ContactSection showHeading={false} />
    </main>
  );
}
