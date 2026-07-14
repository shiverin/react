import AboutSection from "../components/AboutSection";
import HackathonSection from "../components/HackathonSection";
import PageIntro from "../components/PageIntro";
import { profile } from "../data/portfolioData";

export default function AboutPage() {
  return (
    <main className="route-page about-page">
      <PageIntro
        index="03"
        eyebrow="About"
        title={<>A generalist by range, <em>an engineer by method.</em></>}
        body={profile.longBio}
        aside={
          <div className="intro-coordinate-card">
            <span className="coordinate-dot" />
            <div><small>Base</small><strong>{profile.location}</strong></div>
            <div><small>Focus</small><strong>AI / Data / Systems</strong></div>
            <div><small>Degree</small><strong>NUS CS + Quant Finance</strong></div>
          </div>
        }
      />
      <AboutSection />
      <HackathonSection />
    </main>
  );
}
