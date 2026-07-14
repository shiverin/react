
export function routeHref(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `#${normalized}`;
}

export default function RouteLink({ to, children, onClick, ...props }) {
  const handleClick = (event) => {
    if (onClick) onClick(event);
  };

  return (
    <a href={routeHref(to)} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
