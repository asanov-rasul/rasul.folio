"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 160, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 160, damping: 20 });

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, rgba(103,232,249,0.22), transparent 42%)`;

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    rotateX.set(((y - rect.height / 2) / rect.height) * -10);
    rotateY.set(((x - rect.width / 2) / rect.width) * 10);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full rounded-lg p-px [perspective:1000px]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 shadow-card backdrop-blur-xl">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={`Превью интерфейса проекта ${project.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-cyan-100">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Смотреть
              <ArrowUpRight size={16} />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Репозиторий ${project.title} на GitHub`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:border-cyan-200/70 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
