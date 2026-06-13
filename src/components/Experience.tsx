import { motion } from "framer-motion";
import { Container } from "./Container";

const items = [
  {
    role: "Summer Pod Intern",
    org: "Oracle",
    period: "May 2026 — Present",
    bullets: ["Making Agentic Framework Integrations with Oracle 26ai ", "MultiAgent Runtime Systems"],
    tags: ["Python", "CrewAI", "Multi-Agentic Systems", "OpenSource"],
  },
  {
  role: "Research Intern, Computer Vision & Generative AI",
  org: "IIT Hyderabad",
  period: "May 2025 — Jul 2025",
  bullets: [
    "Built a pipeline generating 300+ autonomous driving videos",
    "Integrated Video Diffusion + ControlNet for weather transitions",
    "Automated preprocessing, generation, and post-processing"
  ],
  tags: ["Python", "PyTorch", "Diffusers", "OpenCV"]
},
{
  role: "Project Team Member",
  org: "Inter IIT Tech Meet 13.0 (ISRO)",
  period: "Oct 2024 — Dec 2024",
  bullets: [
    "Developed a real-time satellite data processing pipeline",
    "Reduced backend data latency by 33%",
    "Built a Digital Twin for trajectory-based mapping simulation"
  ],
  tags: ["Python", "MySQL", "Computer Vision", "Deep Learning"]
}
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="text-mono text-muted-foreground">04 &mdash; Experience</span>
          <h2
            className="text-display mt-6 text-foreground"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Experience
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-[auto_1fr] gap-6 border-t border-border py-8 md:gap-12"
            >
              <span className="text-mono text-muted-foreground">{it.period}</span>
              <div>
                <h3 className="text-display text-2xl text-foreground md:text-3xl">{it.role}</h3>
                <p className="text-mono mt-1 text-accent">{it.org}</p>
                <ul className="mt-4 space-y-1 text-muted-foreground">
                  {it.bullets.map((b) => (
                    <li key={b}>— {b}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {it.tags.map((t) => (
                    <span
                      key={t}
                      className="text-mono rounded-full border border-border px-2.5 py-1 text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
