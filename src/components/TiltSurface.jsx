import { useRef } from "react";

export default function TiltSurface({ as: Component = "div", className = "", children, ...props }) {
  const ref = useRef(null);

  function handlePointerMove(event) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (event.pointerType === "touch") return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    node.style.setProperty("--tilt-x", `${(0.5 - y) * 8}deg`);
    node.style.setProperty("--tilt-y", `${(x - 0.5) * 10}deg`);
    node.style.setProperty("--glow-x", `${x * 100}%`);
    node.style.setProperty("--glow-y", `${y * 100}%`);
  }

  function resetTilt() {
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
