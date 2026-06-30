import Contact from "@/components/Contact";
import ExperienceSkills from "@/components/ExperienceSkills";
import Hero from "@/components/Hero";
import InteractiveBackground from "@/components/InteractiveBackground";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <InteractiveBackground />
      <Navbar />
      <Hero />
      <Projects />
      <ExperienceSkills />
      <ExperienceTimeline />
      <Contact />
    </main>
  );
}
