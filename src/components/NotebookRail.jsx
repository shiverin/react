import RouteLink from "./RouteLink";

const railLinks = [
  { number: "01", label: "About me", to: "/about" },
  { number: "02", label: "Work", to: "/work" },
  { number: "03", label: "Experience", to: "/experience" },
];

export default function NotebookRail({ route }) {
  return (
    <aside className="notebook-rail" aria-label="Featured sections">
      <div className="notebook-rail__binding" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => <i key={index} />)}
      </div>
      <nav>
        {railLinks.map((link) => {
          const active = route === link.to || route.startsWith(`${link.to}/`);
          return (
            <RouteLink
              className={`notebook-tab ${active ? "is-active" : ""}`}
              key={link.to}
              to={link.to}
              aria-current={active ? "page" : undefined}
            >
              <span>{link.number}</span>
              <strong>{link.label}</strong>
            </RouteLink>
          );
        })}
      </nav>
    </aside>
  );
}
