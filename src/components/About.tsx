import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";

const tabs = ["Journey", "Stack", "Info"] as const;
type Tab = (typeof tabs)[number];

const stack = {
  Languages: ["Java", "Python", "JavaScript", "C/C++"],
  "Web & Backend": [
    "React.js",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Flask",
    "Django",
    "JWT",
    "WebSockets",
  ],
  "ML & AI": [
    "PyTorch",
    "LangChain",
    "Transformers",
    "OpenAI",
    "Numpy and pandas",
    "Huggingface",
    "OpenCV",
    "CrewAI",
    "OpenAI SDK",
    "LangGraph",
  ],
  "DevOps & Cloud": [
    "Docker",
    "Heroku",
    "Vercel",
    "GitHub/GitLab",
    "Oracle OCI cloud",
    "Firebase",
    "Google Cloud",
  ],
  Databases: [
    "PostgreSQL",
    "Redis",
    "MongoDB",
    "Oracle 26ai DB",
    "SQLite/MySQL",
    "LanceDB",
    "ChromaDB",
  ],
  Tools: ["Git", "Figma", "Linear", "Notion", "Colab", "Jupyter", "Figma/Canva"],
};

export function About() {
  const [tab, setTab] = useState<Tab>("Journey");

  return (
    <section id="about" className="py-24 md:py-36">
      <Container className="flex flex-col items-center text-center">
        <span className="text-mono text-muted-foreground">02 &mdash; About</span>
        <h2
          className="text-display mt-6 max-w-4xl text-balance text-foreground"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          A software &amp; AI engineer building thoughtful, fast, end-to-end projects to unlock new
          possibilities in the digital landscape.
        </h2>

        <div className="mt-16 flex gap-1 rounded-full border border-border bg-card/50 p-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              data-cursor-hover
              className="relative rounded-full px-5 py-2 text-sm transition-colors"
            >
              {tab === t && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              )}
              <span
                className={`relative z-10 ${tab === t ? "text-accent-foreground" : "text-muted-foreground"}`}
              >
                {t}
              </span>
            </button>
          ))}
        </div>

        <div className="relative mt-12 min-h-[200px] w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {tab === "Journey" && (
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  I'm an engineer with a focus on AI systems and product-grade softwares. Over the
                  last few years I've praticed tools that bridge machine learning research and real
                  users &mdash; from RAG pipelines to interactive front-ends. I care about craft,
                  restraint, and shipping things that feel inevitable.
                </p>
              )}
              {tab === "Stack" && (
                <div className="grid gap-6 text-left md:grid-cols-2">
                  {Object.entries(stack).map(([cat, items]) => (
                    <div key={cat}>
                      <h3 className="text-mono mb-3 text-accent">{cat}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((s) => (
                          <span
                            key={s}
                            className="text-mono rounded-full border border-border px-3 py-1 text-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {tab === "Info" && (
                <dl className="grid gap-4 text-left md:grid-cols-2">
                  {[
                    ["Location", "India - Navi Mumbai \u2014 Hybrid"],
                    ["Current Position", "IC0 Intern at Oracle"],
                    ["Languages", "English, Hindi, Marathi"],
                    ["Focus", "AI, Open Source, Scalable Systems"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-lg border border-border bg-card/30 p-5">
                      <dt className="text-mono text-muted-foreground">{k}</dt>
                      <dd className="mt-2 text-lg text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
