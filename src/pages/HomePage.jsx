import portraitWebp from "../assets/portrait.webp";
import portraitJpg from "../assets/portrait.jpg";
import { homeCards, profile } from "../data/portfolio";
import { ArrowIcon } from "../components/Icons";
import RouteLink from "../components/RouteLink";
import SocialLinks from "../components/SocialLinks";
import TiltSurface from "../components/TiltSurface";

export default function HomePage() {
  return (
    <main className="home-page" id="main-content" tabIndex="-1">
      <section className="home-composition" aria-labelledby="home-title">
        <div className="home-intro">
          <p className="home-intro__hello">Hi, I’m</p>
          <h1 id="home-title">Zhao Shizhen</h1>
          <p className="home-intro__role">Computer Scientist<br />&amp; Systems Builder</p>
        </div>

        <TiltSurface className="portrait-tile" aria-label="Portrait of Zhao Shizhen">
          <picture>
            <source srcSet={portraitWebp} type="image/webp" />
            <img src={portraitJpg} alt="Zhao Shizhen" />
          </picture>
          <span className="portrait-tile__shine" aria-hidden="true" />
          <span className="portrait-tile__label">Singapore · 2026</span>
        </TiltSurface>

        <div className="home-gateways">
          {homeCards.map((card, index) => (
            <TiltSurface className={`home-gateway ${card.className}`} key={card.eyebrow}>
              <RouteLink to={card.href} className="home-gateway__link">
                <span className="home-gateway__dot" aria-hidden="true" />
                <h2>{card.eyebrow}</h2>
                <p>{card.copy}</p>
                <span className="home-gateway__action">{card.action} <ArrowIcon size={16} /></span>
                <span className="home-gateway__number">0{index + 1}</span>
              </RouteLink>
            </TiltSurface>
          ))}
        </div>

        <div className="home-footer-line">
          <p>Let’s create<br />something great together.</p>
          <RouteLink to="/contact" className="home-contact-link">Contact me <ArrowIcon /></RouteLink>
        </div>

        <SocialLinks className="home-socials" />
        <p className="home-availability">{profile.availability}</p>
      </section>
    </main>
  );
}
