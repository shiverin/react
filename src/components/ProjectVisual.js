
const visualLabels = {
  oalpha: ["KALMAN", "HMM", "PAPER"],
  messenger: ["SOCKET", "LIVE", "STATE"],
  cnn: ["CONV", "POOL", "98.97"],
  gotalk: ["POST", "THREAD", "GO"],
  offline: ["LOCAL", "CODE", "RUN"],
  pdf: ["MERGE", "SIGN", "EDIT"],
  finance: ["QUOTE", "BUY", "SELL"],
};

export default function ProjectVisual({ project, expanded = false }) {
  const labels = visualLabels[project.visual] || ["BUILD", "SHIP", "LEARN"];

  return (
    <div
      className={`project-visual visual-${project.visual} ${expanded ? "project-visual-expanded" : ""}`}
      aria-hidden="true"
    >
      <div className="visual-grid" />
      <div className="visual-orb visual-orb-a" />
      <div className="visual-orb visual-orb-b" />
      <div className="visual-orb visual-orb-c" />
      <div className="visual-glass-slab visual-glass-slab-a" />
      <div className="visual-glass-slab visual-glass-slab-b" />
      <div className="visual-axis visual-axis-x" />
      <div className="visual-axis visual-axis-y" />
      <div className="visual-scanline" />
      <span className="visual-code">{project.code}</span>
      <span className="visual-word">{project.title}</span>
      <div className="visual-terminal">
        {labels.map((label, index) => (
          <span key={label} style={{ "--terminal-delay": `${index * 0.8}s` }}>{label}</span>
        ))}
      </div>
      <div className="visual-pulse"><span /><span /><span /></div>
      {project.visual === "cnn" ? (
        <div className="visual-cnn-nodes">
          {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
        </div>
      ) : null}
      {project.visual === "messenger" ? (
        <div className="visual-message-stack"><i /><i /><i /><i /></div>
      ) : null}
      {project.visual === "oalpha" ? (
        <svg className="visual-line-chart" viewBox="0 0 400 150" preserveAspectRatio="none">
          <path d="M0 124 L35 105 L63 115 L92 70 L121 88 L154 42 L186 66 L217 36 L248 73 L282 50 L316 91 L350 58 L400 28" />
          <path className="visual-line-fill" d="M0 124 L35 105 L63 115 L92 70 L121 88 L154 42 L186 66 L217 36 L248 73 L282 50 L316 91 L350 58 L400 28 L400 150 L0 150 Z" />
        </svg>
      ) : null}
    </div>
  );
}
