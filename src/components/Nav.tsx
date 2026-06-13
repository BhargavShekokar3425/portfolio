import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";

const links = [
  { num: "01", label: "Home", href: "#home" },
  { num: "02", label: "About", href: "#about" },
  { num: "03", label: "Work", href: "#work" },
  { num: "04", label: "Experience", href: "#experience" },
  { num: "05", label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <Container className="flex items-center justify-between py-5">
          <a href="#home" className="text-mono text-foreground">
            BHARGAV SHEKOKAR &mdash; 2026
          </a>
          <span className="text-mono hidden text-muted-foreground md:block">
            Based in India &nbsp;/&nbsp; Software &amp; AI Engineer
          </span>
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-mono flex items-center gap-2 text-foreground"
            aria-label="Toggle menu"
          >
            <span className="flex flex-col gap-1">
              <motion.span
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="block h-px w-6 bg-foreground"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                className="block h-px w-6 bg-foreground"
              />
            </span>
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <Container className="flex h-full flex-col justify-center">
              <ul className="flex flex-col gap-4 md:gap-6">
                {links.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-display group flex items-baseline gap-6 text-[12vw] leading-none text-foreground transition-colors hover:text-accent md:text-[8vw]"
                    >
                      <span className="text-mono text-muted-foreground">{l.num}</span>
                      <span>{l.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
