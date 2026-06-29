"use client";

import { motion } from "framer-motion";
import { Braces, Component, Gauge, Layers3, Palette, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const tiles = [
  {
    title: "Архитектура React",
    copy: "Композиционные системы, понятные границы состояния и компоненты, рассчитанные на развитие.",
    icon: Component,
    className: "md:col-span-2"
  },
  {
    title: "Next.js App Router",
    copy: "Server-first маршрутизация, метаданные, оптимизация изображений и продуманные состояния загрузки.",
    icon: Rocket
  },
  {
    title: "Motion-дизайн",
    copy: "Переходы на Framer Motion, которые проясняют иерархию и делают продукт более цельным.",
    icon: Sparkles
  },
  {
    title: "Дизайн-системы",
    copy: "Токены, варианты, состояния взаимодействия и переиспользуемые паттерны, которые масштабируются.",
    icon: Layers3
  },
  {
    title: "Производительность",
    copy: "Core Web Vitals, контроль размера bundle, стратегия изображений и плавные взаимодействия в 60 fps.",
    icon: Gauge,
    className: "md:col-span-2"
  },
  {
    title: "Доступность",
    copy: "Читаемый контраст, сценарии для клавиатуры, семантическая структура и поддержка reduced motion.",
    icon: ShieldCheck
  },
  {
    title: "Визуальная точность",
    copy: "Чёткий ритм layout, аккуратная типографика и детали, благодаря которым интерфейс запоминается.",
    icon: Palette
  },
  {
    title: "Готовность к TypeScript",
    copy: "Типизированные контракты данных и более надёжная UI-логика, когда продукт становится сложнее.",
    icon: Braces
  }
];

export default function ExperienceSkills() {
  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Опыт / Навыки</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">Frontend-навыки в рабочей форме</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Объединяю инженерную дисциплину и продуктовый вкус: быстрые интерфейсы, устойчивые паттерны и анимацию, которая действительно помогает.
          </p>
        </SectionReveal>

        <div className="mt-10 grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-4">
          {tiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <SectionReveal key={tile.title} delay={index * 0.04} className={tile.className}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-border group relative h-full overflow-hidden rounded-lg p-6"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.16),transparent_42%)] opacity-0 transition group-hover:opacity-100" />
                  <div className="relative">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-200/12 text-cyan-100 ring-1 ring-cyan-200/25">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-white">{tile.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{tile.copy}</p>
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
