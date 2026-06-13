import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhargav Shekokar — Software & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Bhargav Shekokar — software engineer and AI developer building thoughtful, end-to-end products for the web.",
      },
      { property: "og:title", content: "Bhargav Shekokar — Software & AI Engineer" },
      {
        property: "og:description",
        content: "Editorial portfolio of a software engineer and AI developer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <div className="grain-overlay" aria-hidden />
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Achievements />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
