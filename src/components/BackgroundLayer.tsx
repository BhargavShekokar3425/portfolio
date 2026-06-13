import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundLayer: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0vw", "-18vw"]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-0 h-full w-[140vw] max-w-none pointer-events-none"
      style={{
        x: backgroundX,
        backgroundImage: `url('/background.jpg')`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "140vw auto",
        opacity: 0.2,
        filter: "brightness(1.08) contrast(1.05)",
        mixBlendMode: "screen",
      }}
    />
  );
};

export default BackgroundLayer;
