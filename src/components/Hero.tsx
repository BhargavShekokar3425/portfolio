import { motion } from "framer-motion";
import { Container } from "./Container";
import { StatusPill } from "./StatusPill";

const words = ["Bhargav", "Shekokar."];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32">
      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <StatusPill />
        </motion.div>

        <h1
          className="text-display mt-10 text-foreground"
          style={{ fontSize: "clamp(3rem, 13vw, 12rem)" }}
        >
          {words.map((w, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="relative mt-6 inline-block">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-mono text-muted-foreground"
          >
            Software Engineer &mdash; AI &amp; Full-Stack Developer
          </motion.p>
          <span className="draw-line absolute -bottom-2 left-0 right-0 h-px bg-accent" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-mono text-muted-foreground">Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="block h-8 w-px bg-muted-foreground"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
