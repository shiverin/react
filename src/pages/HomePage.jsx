import portraitWebp from "../assets/portrait.webp";
import portraitJpg from "../assets/portrait.jpg";
import { homeCards, profile } from "../data/portfolio";
import { ArrowIcon } from "../components/Icons";
import RouteLink from "../components/RouteLink";
import TiltSurface from "../components/TiltSurface";

export default function HomePage() {
  return (
    <main className="home-page" id="main-content" tabIndex="-1">
      <section className="home-composition" aria-labelledby="home-title">
        <span className="registration-mark registration-mark--top" aria-hidden="true" />
        <span className="registration-mark registration-mark--bottom" aria-hidden="true" />
        <div className="home-intro">
          <p className="home-intro__hello">Hi, I’m</p>
          <h1 id="home-title"><span>Zhao</span><span>Shizhen</span></h1>
          <p className="home-intro__role">Computer Scientist &amp; Systems Builder</p>
        </div>

        <div className="portrait-collage">
          <span className="portrait-collage__paper" aria-hidden="true" />
          <TiltSurface className="portrait-cutout" aria-label="Portrait of Zhao Shizhen">
            <picture>
              <source srcSet={portraitWebp} type="image/webp" />
              <img src={portraitJpg} alt="Zhao Shizhen" />
            </picture>
          </TiltSurface>
          <span className="portrait-collage__note">Singapore — 2026</span>
        </div>

        <p className="home-availability">{profile.availability}</p>

        <div className="home-gateways">
          {homeCards.map((card, index) => (
            <article className={`home-gateway ${card.className}`} key={card.eyebrow}>
              <RouteLink to={card.href} className="home-gateway__link">
                <span className="home-gateway__number">0{index + 1}</span>
                <h2>{card.eyebrow}</h2>
                <p>{card.copy}</p>
                <span className="home-gateway__action" aria-hidden="true"><ArrowIcon size={18} /></span>
              </RouteLink>
            </article>
          ))}
          <div className="home-invitation">
            <p>Let’s create something<br />great together.</p>
            <RouteLink to="/contact" className="home-contact-link">Contact me <ArrowIcon /></RouteLink>
          </div>
        </div>
      </section>
    </main>
  );
}
