export function StatusPill({ label = "Available for freelance" }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 backdrop-blur">
      <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
      <span className="text-mono text-foreground/90">{label}</span>
    </div>
  );
}
