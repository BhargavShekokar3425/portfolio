import { motion } from "framer-motion";

const BackgroundLayer: React.FC = () => {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        opacity: 0.15,
        filter: "brightness(1.1) contrast(1.05)",
        mixBlendMode: "screen",
      }}
      animate={{ backgroundPositionY: ["0px", "140px"] }}
      transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
    />
  );
};

export default BackgroundLayer;
