export function routeHref(path) {
  if (!path || path === "/") return "#/";
  return `#${path.startsWith("/") ? path : `/${path}`}`;
}

export default function RouteLink({ to, children, onClick, ...props }) {
  return (
    <a href={routeHref(to)} onClick={onClick} {...props}>
      {children}
    </a>
  );
}
