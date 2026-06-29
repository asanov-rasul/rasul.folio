"use client";

import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionReveal from "@/components/SectionReveal";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="relative px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="max-w-3xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Избранные работы</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">Проекты с характером</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Несколько примеров интерфейсов, где важны скорость, ясная структура, аккуратная визуальная подача и приятные детали.
            </p>
          </div>
        </SectionReveal>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {projectsData.map((project) => (
              <motion.div key={project.id} layout exit={{ opacity: 0, scale: 0.96 }}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
