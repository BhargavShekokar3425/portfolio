import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";

const email = "bnshekokar@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* no-op */
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36">
      <Container className="flex flex-col items-center text-center">
        <span className="text-mono text-muted-foreground">05 &mdash; Contact</span>
        <h2
          className="text-display mt-6 max-w-5xl text-balance text-foreground"
          style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}
        >
          Let&rsquo;s work together.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Open to engineering roles, freelance work, and interesting collaborations. Get in touch.
        </p>

        <button onClick={copy} data-cursor-hover className="group relative mt-12 inline-block">
          <span
            className="text-display text-foreground transition-colors group-hover:text-accent"
            style={{ fontSize: "clamp(1.5rem, 5vw, 4rem)" }}
          >
            {email}
          </span>
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-mono absolute -right-20 top-1/2 -translate-y-1/2 text-accent"
              >
                Copied!
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <div className="text-mono mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Employed
          </span>
          <span>India (Bengaluru) — Hybrid</span>
          <a
            href="https://github.com/BhargavShekokar3425"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:text-accent hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bhargavshekokar/"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:text-accent hover:underline"
          >
            LinkedIn
          </a>
          {/* <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:text-accent hover:underline"
          >
            Twitter / X
          </a> */}
        </div>
      </Container>
    </section>
  );
}
