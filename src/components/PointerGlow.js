import { useEffect, useRef } from "react";

export default function PointerGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const element = glowRef.current;
    if (!element || window.matchMedia("(pointer: coarse)").matches) return undefined;

    let frame = 0;
    const onMove = (event) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        element.style.setProperty("--pointer-x", `${event.clientX}px`);
        element.style.setProperty("--pointer-y", `${event.clientY}px`);
        element.classList.add("is-visible");
      });
    };
    const onLeave = () => element.classList.remove("is-visible");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={glowRef} className="pointer-glow" aria-hidden="true" />;
}
