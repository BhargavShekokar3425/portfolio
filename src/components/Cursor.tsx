import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 400, mass: 0.5 });
  const sy = useSpring(y, { damping: 30, stiffness: 400, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!enabled) setEnabled(true);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor-hover], [role='button']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-accent mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: hovering ? 48 : 14,
        height: hovering ? 48 : 14,
        backgroundColor: hovering ? "transparent" : "var(--color-accent)",
      }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    />
  );
}
