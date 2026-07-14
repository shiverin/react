import Reveal from "./Reveal";

export default function PageIntro({ eyebrow, title, copy, aside }) {
  return (
    <header className="page-intro">
      <Reveal className="page-intro__main">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {copy ? <p>{copy}</p> : null}
      </Reveal>
      {aside ? <Reveal className="page-intro__aside" delay={120}>{aside}</Reveal> : null}
    </header>
  );
}
