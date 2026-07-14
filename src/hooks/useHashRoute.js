import { useEffect, useState } from "react";

function readRoute() {
  const hash = window.location.hash.replace(/^#/, "").trim();
  if (!hash || hash === "/") return "/";
  const path = hash.split("?")[0];
  return path.startsWith("/") ? path.replace(/\/+$/, "") || "/" : `/${path.replace(/\/+$/, "")}`;
}

export default function useHashRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onChange);
    if (!window.location.hash) window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#/`);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
