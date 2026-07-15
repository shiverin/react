const railLinks = [
  { number: "01", label: "Home", id: "home" },
  { number: "02", label: "About me", id: "about" },
  { number: "03", label: "Work", id: "work" },
  { number: "04", label: "Experience", id: "experience" },
  { number: "05", label: "Resume", id: "resume" },
  { number: "06", label: "Contact", id: "contact" },
];

export default function NotebookRail({ activeSection, onNavigate }) {
  return (
    <aside className="notebook-rail" aria-label="Portfolio sections">
      <div className="notebook-rail__binding" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
      </div>
      <nav>
        {railLinks.map((link) => {
          const active = activeSection === link.id;
          return (
            <a
              className={`notebook-tab ${active ? "is-active" : ""}`}
              href={`#${link.id}`}
              key={link.id}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(link.id);
              }}
              aria-current={active ? "location" : undefined}
            >
              <span>{link.number}</span>
              <strong>{link.label}</strong>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
