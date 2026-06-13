import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <div className="text-mono flex flex-col items-center justify-center gap-3 text-muted-foreground md:flex-row md:gap-6">
          <span className="inline-flex items-center gap-2">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Bhargav Shekokar &copy; 2026
          </span>
          <span className="hidden md:inline">/</span>
          <span>Built with React, Tailwind &amp; Framer Motion</span>
        </div>
      </Container>
    </footer>
  );
}
