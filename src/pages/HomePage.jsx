import portraitWebp from "../assets/portrait.webp";
import portraitJpg from "../assets/portrait.jpg";
import TiltSurface from "../components/TiltSurface";

export default function HomePage() {
  return (
    <section className="home-page long-page__section" id="home" tabIndex="-1">
      <section className="home-composition" aria-labelledby="home-title">
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

      </section>
    </section>
  );
}
