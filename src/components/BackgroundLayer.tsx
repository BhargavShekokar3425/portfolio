import { useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundLayer: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  // Keep the background subtle so the page content blends into it.
  const opacity = 0.08;

  // If reduced motion is preferred, still use the same opacity (no animation)
  const finalOpacity = isReducedMotion ? opacity : opacity;

  // Create a subtle parallax effect - background moves at different speed
  // Using a small vertical movement for parallax effect
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-10, 10], // Move background slightly for parallax effect
    { clamp: true },
  );

  return (
    <motion.div
      className="fixed inset-0 z-[-10] pointer-events-none"
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundRepeat: "repeat-y",
        backgroundPosition: `center ${backgroundPositionY}`,
        backgroundSize: "cover",
        opacity: finalOpacity,
        filter: "saturate(0.9) brightness(0.92)",
        transition: isReducedMotion ? "none" : "background-position 0s linear", // Only transition position, not opacity
      }}
      aria-hidden="true"
    />
  );
};

export default BackgroundLayer;
