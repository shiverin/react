import { useEffect, useState } from "react";
import cafePhoto from "../assets/hero-gallery/cafe.jpg";
import gardenPhoto from "../assets/hero-gallery/garden.jpg";
import snowlinePhoto from "../assets/hero-gallery/snowline.jpg";
import tigerPhoto from "../assets/hero-gallery/tiger-leaping-gorge.jpg";
import originalPortrait from "../assets/portrait.webp";
import TiltSurface from "../components/TiltSurface";

const heroPhotos = [
  {
    src: originalPortrait,
    alt: "Portrait of Zhao Shizhen wearing a light hoodie",
    caption: "Original portrait",
    shape: "original",
  },
  {
    src: gardenPhoto,
    alt: "Zhao Shizhen standing in a garden atrium",
    caption: "Garden pause",
    shape: "garden",
  },
  {
    src: tigerPhoto,
    alt: "Zhao Shizhen at Tiger Leaping Gorge",
    caption: "Tiger Leaping Gorge",
    shape: "gorge",
  },
  {
    src: snowlinePhoto,
    alt: "Zhao Shizhen looking toward a snowy mountain",
    caption: "Above the snowline",
    shape: "snowline",
  },
  {
    src: cafePhoto,
    alt: "Zhao Shizhen sitting with a dog at a cafe",
    caption: "Café afternoon",
    shape: "cafe",
  },
];

export default function HomePage() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photo = heroPhotos[photoIndex];

  useEffect(() => {
    heroPhotos.forEach(({ src }) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  function showNextPhoto() {
    setPhotoIndex((current) => (current + 1) % heroPhotos.length);
  }

  return (
    <section className="home-page long-page__section" id="home" tabIndex="-1">
      <section className="home-composition" aria-labelledby="home-title">
        <div className="home-intro">
          <p className="home-intro__hello">Hi, I’m</p>
          <h1 id="home-title"><span>Zhao</span><span>Shizhen</span></h1>
          <p className="home-intro__role">Computer Scientist &amp; Systems Builder</p>
        </div>

        <div className={`portrait-collage portrait-collage--${photo.shape}`}>
          <span className="portrait-collage__paper" aria-hidden="true" />
          <TiltSurface
            as="button"
            className="portrait-cutout"
            type="button"
            onClick={showNextPhoto}
            aria-label={`Show next photo. Currently showing ${photo.caption}, ${photoIndex + 1} of ${heroPhotos.length}.`}
          >
            <img key={photo.src} src={photo.src} alt={photo.alt} />
          </TiltSurface>
        </div>

      </section>
    </section>
  );
}
