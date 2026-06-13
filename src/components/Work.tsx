import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "MediHelp Healthcare Platform",
    year: "2025",
    role: "Full Stack Development",
    desc: "Microservice-based healthcare platform supporting real-time ambulance dispatch, appointment scheduling, and secure doctor-patient consultations.",
    tags: ["React", "Node.js", "Microservices"],
    github: "https://github.com/BhargavShekokar3425/medihelppvt",
    img: p1,
  },
  {
    title: "AlgoViz: Interactive ML Visualization Platform",
    year: "2025",
    role: "Machine Learning",
    desc: "Interactive visual analytics platform supporting 10+ ML algorithms including Decision Trees, SVM, K-Means, PCA, ANN, and DBSCAN with dynamic parameter tuning.",
    tags: ["Python", "GCP", "Firestore"],
    github: "https://github.com/BhargavShekokar3425/AlgoViz",
    img: p2,
  },
  {
  title: "QueryLens: High-Performance Analytical Engine",
  year: "2026",
  role: "Algorithms & Systems",
  desc: "Research-grade query engine featuring Segment Trees, Lazy Propagation, Fenwick Trees, and B+ Trees, achieving logarithmic-time analytical queries with an interactive D3.js visualization workspace.",
  tags: ["C++17", "D3.js", "Algorithms"],
  github: "https://github.com/BhargavShekokar3425/QueryLens",
  img: p3,
  },
  {
  title: "RAKD: Resolution-Agnostic Knowledge Distillation for Remote Sensing Imagery",
  year: "2026",
  role: "Computer Vision Research",
  desc: "Cross-resolution knowledge distillation framework for rotated object detection, enabling lightweight models to achieve high accuracy on remote sensing imagery while maintaining real-time inference performance.",
  tags: ["PyTorch", "MMRotate", "Computer Vision"],
  github: "https://github.com/BhargavShekokar3425/RAKDRSOR",
  img: p4,
},
];

export function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 25, stiffness: 250 });
  const sy = useSpring(y, { damping: 25, stiffness: 250 });

  const onMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <section id="work" className="py-24 md:py-36">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="text-mono text-muted-foreground">03 &mdash; Selected Work</span>
          <h2
            className="text-display mt-6 text-foreground"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            //style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
          >
            Selected Work
          </h2>
        </div>

        <div
          ref={sectionRef}
          onMouseMove={onMove}
          onMouseLeave={() => setHovered(null)}
          className="relative mt-16 border-t border-border"
        >
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              //href="#"
              //onClick={(e) => e.preventDefault()}
              onMouseEnter={() => setHovered(i)}
              data-cursor-hover
              className="group block border-b border-border py-8 transition-colors hover:bg-card/40 md:py-12"
            >
              <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-8">
                <div className="flex items-baseline gap-6">
                  <span className="text-mono text-muted-foreground">0{i + 1}</span>
                  <h3
                    className="text-display text-foreground transition-colors group-hover:text-accent"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                  >
                    {p.title}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 md:gap-6">
                  <span className="text-mono text-muted-foreground">{p.year}</span>
                  <span className="text-mono text-muted-foreground">{p.role}</span>
                  <div className="hidden gap-2 md:flex">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-mono rounded-full border border-border px-2.5 py-1 text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground md:ml-14 md:hidden">
                {p.desc}
              </p>
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="mt-4 w-full rounded-md md:hidden"
                width={1024}
                height={1024}
              />
            </a>
          ))}

          <AnimatePresence>
            {hovered !== null && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
                className="pointer-events-none absolute left-0 top-0 z-30 hidden h-64 w-80 overflow-hidden rounded-md shadow-2xl md:block"
              >
                <img
                  src={projects[hovered].img}
                  alt={projects[hovered].title}
                  className="h-full w-full object-cover"
                  width={1024}
                  height={1024}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
