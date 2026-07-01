"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2024 — н.в.",
    role: "Frontend-разработчик",
    company: "Фриланс / Преподавание",
    description:
      "Решил попробовать себя в сфере преподавания. Понравилось учить  людей своему любимому делу. Помимо основной работы так же продолжаю брать заказы онлайн.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    accent: "from-cyan-400 to-teal-400",
    glow: "rgba(34,211,238,0.55)",
  },
  {
    period: "2024 — 2025",
    role: "React-разработчик",
    company: "Стартап",
    description:
      "Начинает затягивать React и стал переписывать все свои проекты на него. Создание переиспользуемых компонентов, интеграция REST API, участие в code review и оптимизация Core Web Vitals.",
    tags: ["React", "TypeScript", "REST API"],
    accent: "from-violet-400 to-indigo-400",
    glow: "rgba(139,92,246,0.5)",
  },
  {
    period: "2023 — 2024",
    role: "Junior Frontend Developer",
    company: "Веб-студия, Kwork",
    description:
      "Работаю с другом на дому. Берём заказы с фриланс бирж. Начинаю зарабатывать первые деньги на разработке. Вёрстка адаптивных страниц, работа с Figma-макетами, базовая анимация на CSS и первые шаги с React.",
    tags: ["HTML/CSS", "JavaScript", "React"],
    accent: "from-pink-400 to-rose-400",
    glow: "rgba(244,114,182,0.5)",
  },
  {
    period: "2022 — 2023",
    role: "Старт в разработке",
    company: "Самообразование",
    description:
      "Изучение основ веб-разработки, первые проекты, участие в хакатонах и формирование понимания, каким должен быть хороший интерфейс.",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "from-amber-400 to-orange-400",
    glow: "rgba(251,191,36,0.45)",
  },
];

function Card({ item, isInView, direction }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <div className={`mb-3 inline-flex items-center rounded-full bg-gradient-to-r ${item.accent} px-3 py-1`}>
        <span className="text-xs font-semibold text-slate-950">{item.period}</span>
      </div>
      <div
        className="glass-border relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-white/20"
        style={{
          boxShadow: `0 0 40px 0 ${item.glow.replace(/[\d.]+\)$/, "0.12)")}, 0 4px 24px 0 rgba(0,0,0,0.4)`,
        }}
      >
        <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${item.accent} opacity-10 blur-3xl`} />
        <h3 className="font-display text-lg font-semibold text-white">{item.role}</h3>
        <p className={`mt-0.5 bg-gradient-to-r ${item.accent} bg-clip-text text-sm font-medium text-transparent`}>
          {item.company}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref}>
      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_20px_1fr] lg:items-center lg:gap-x-10">

        {/* Левая колонка */}
        <div className="flex justify-end">
          {isLeft && (
            <div className="w-full max-w-[420px]">
              <Card item={item} isInView={isInView} direction="left" />
            </div>
          )}
        </div>

        {/* Центральная колонка — точка, всегда по центру линии */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
            className="relative flex h-5 w-5 items-center justify-center"
          >
            <motion.div
              className={`absolute h-5 w-5 rounded-full bg-gradient-to-br ${item.accent}`}
              animate={{ scale: [1, 2.4, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className={`relative z-10 h-4 w-4 rounded-full bg-gradient-to-br ${item.accent}`}
              style={{ boxShadow: `0 0 14px 4px ${item.glow}` }}
            />
          </motion.div>
        </div>

        {/* Правая колонка */}
        <div className="flex justify-start">
          {!isLeft && (
            <div className="w-full max-w-[420px]">
              <Card item={item} isInView={isInView} direction="right" />
            </div>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <Card item={item} isInView={isInView} direction="left" />
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="relative px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Опыт
          </p>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Временная шкала
          </h2>
          <p className="mt-4 max-w-xl text-balance text-base text-slate-400">
            Путь от первых строчек кода до современных продуктовых интерфейсов.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={lineRef}>

          {/* Линия — строго в центре средней колонки (10px от левого края 20px-колонки) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="grid h-full grid-cols-[1fr_20px_1fr] gap-x-10">
              <div />
              <div className="relative">
                {/* Фоновая линия */}
                <div className="absolute left-[9px] top-0 h-full w-px bg-white/[0.08]" />
                {/* Анимированная заливка */}
                <motion.div
                  className="absolute left-[9px] top-0 w-px bg-gradient-to-b from-cyan-400 via-violet-400 to-pink-400"
                  initial={{ height: "0%" }}
                  animate={isLineInView ? { height: "100%" } : {}}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  style={{ boxShadow: "0 0 8px 2px rgba(34,211,238,0.4)" }}
                />
              </div>
              <div />
            </div>
          </div>

          {/* Элементы */}
          <div className="flex flex-col gap-14">
            {experiences.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
