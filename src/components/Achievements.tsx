import { Container } from "./Container";

export function Achievements() {
  return (
    <section id="achievements" className="py-12 md:py-20">
      <Container className="flex flex-col items-center text-center">
        <span className="text-mono text-muted-foreground">02.5 &mdash; Achievements</span>
        <h2
          className="text-display mt-6 max-w-4xl text-balance text-foreground"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Notable Achievements
        </h2>

        <div className="mt-10 space-y-6 max-w-2xl text-center">
          <div className="flex flex-col items-center space-y-3 bg-card/50 p-6 rounded-xl">
            {/* <span className="text-mono text-accent"></span> */}
            <h3 className="text-xl font-semibold text-foreground">
              Ranked among Top 25 Fastest Coders
            </h3>
            <p className="text-muted-foreground">HackOn with Amazon - Season 5 (pan-India)</p>
          </div>

          <div className="flex flex-col items-center space-y-3 bg-card/50 p-6 rounded-xl">
            {/* <span className="text-mono text-accent"></span> */}
            <h3 className="text-xl font-semibold text-foreground">Secured 3rd Place</h3>
            <p className="text-muted-foreground">
              Inter IIT Tech Meet 13.0 (ISRO Data Challenge) among 23 IITs
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 bg-card/50 p-6 rounded-xl">
            {/* <span className="text-mono text-accent"></span> */}
            <h3 className="text-xl font-semibold text-foreground">Achieved AIR 22xx </h3>
            <p className="text-muted-foreground">
              JEE Advanced 2023 (Top 1.2% of 180,000+ candidates)
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
