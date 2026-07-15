import { useEffect, useRef } from "react";

export default function TiltSurface({ as: Component = "div", className = "", children, ...props }) {
  const ref = useRef(null);
  const frameRef = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  function handlePointerMove(event) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (event.pointerType === "touch") return;
    const { clientX, clientY } = event;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      node.style.setProperty("--tilt-x", `${(0.5 - y) * 2.6}deg`);
      node.style.setProperty("--tilt-y", `${(x - 0.5) * 3.4}deg`);
      node.style.setProperty("--glow-x", `${x * 100}%`);
      node.style.setProperty("--glow-y", `${y * 100}%`);
    });
  }

  function resetTilt() {
    cancelAnimationFrame(frameRef.current);
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--tilt-x", "0deg");
    node.style.setProperty("--tilt-y", "0deg");
    node.style.setProperty("--glow-x", "50%");
    node.style.setProperty("--glow-y", "50%");
  }

  return (
    <Component
      ref={ref}
      className={`tilt-surface ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      {...props}
    >
      {children}
    </Component>
  );
}
