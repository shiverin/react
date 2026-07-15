import Reveal from "./Reveal";

export default function PageIntro({ eyebrow, title, copy, aside }) {
  return (
    <header className={`page-intro ${title ? "" : "page-intro--compact"}`.trim()}>
      <Reveal className="page-intro__main">
        <span className="eyebrow">{eyebrow}</span>
        {title ? <h1>{title}</h1> : null}
        {copy ? <p>{copy}</p> : null}
      </Reveal>
      {aside ? <Reveal className="page-intro__aside" delay={120}>{aside}</Reveal> : null}
    </header>
  );
}
