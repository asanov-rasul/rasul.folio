"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const events = [
  {
    year: "2024 — сейчас",
    role: "Frontend-разработчик",
    place: "Фриланс / Собственные проекты",
    desc: "Разрабатываю коммерческие интерфейсы и SaaS-продукты: Next.js App Router, Framer Motion, дизайн-системы. Фокус на Core Web Vitals и UX-полировке.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    color: "teal",
  },
  {
    year: "2023",
    role: "React-разработчик",
    place: "Учебные и пет-проекты",
    desc: "Построил несколько полноценных приложений: интернет-магазин, дашборд аналитики, AI-ассистент для текстов. Изучил TypeScript, работу с API и state-менеджмент.",
    tags: ["React", "TypeScript", "REST API"],
    color: "violet",
  },
  {
    year: "2022",
    role: "Начало пути",
    place: "Самообучение",
    desc: "Освоил HTML, CSS, JavaScript с нуля. Первые проекты на чистом JS, знакомство с Git и основами responsive-верстки.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    color: "amber",
  },
];

const colorMap = {
  teal: {
    dot: "bg-teal-400 shadow-[0_0_16px_4px_rgba(45,212,191,0.45)]",
    tag: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    year: "text-teal-400",
    line: "from-teal-500/60",
  },
  violet: {
    dot: "bg-violet-400 shadow-[0_0_16px_4px_rgba(167,139,250,0.45)]",
    tag: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    year: "text-violet-400",
    line: "from-violet-500/60",
  },
  amber: {
    dot: "bg-amber-400 shadow-[0_0_16px_4px_rgba(251,191,36,0.45)]",
    tag: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    year: "text-amber-400",
    line: "from-amber-500/60",
  },
};

function TimelineItem({ event, index, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const c = colorMap[event.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -48 : 48 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex gap-8 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } items-start`}
    >
      {/* Карточка */}
      <div className="flex-1">
        <div
          className={`glass-border noise group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
            index % 2 === 0 ? "mr-0 ml-auto" : "ml-0 mr-auto"
          } max-w-md`}
        >
          {/* Градиентный акцент при наведении */}
          <div
            className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
            style={{
              background:
                event.color === "teal"
                  ? "radial-gradient(circle at 50% 0%, rgba(45,212,191,0.08) 0%, transparent 70%)"
                  : event.color === "violet"
                  ? "radial-gradient(circle at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 70%)"
                  : "radial-gradient(circle at 50% 0%, rgba(251,191,36,0.08) 0%, transparent 70%)",
            }}
          />

          <p className={`mb-1 text-xs font-semibold uppercase tracking-widest ${c.year}`}>
            {event.year}
          </p>
          <h3 className="font-display text-lg font-bold text-white">
            {event.role}
          </h3>
          <p className="mt-0.5 text-sm text-slate-500">{event.place}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{event.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${c.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Центральная ось — точка + линия */}
      <div className="relative flex flex-col items-center" style={{ width: 32, flexShrink: 0 }}>
        {/* Точка */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.25, type: "spring", stiffness: 260 }}
          className={`relative z-10 h-4 w-4 rounded-full ${c.dot} ring-4 ring-[var(--bg-primary)] mt-6`}
        />
        {/* Линия вниз */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ transformOrigin: "top" }}
            className={`mt-2 h-full w-px bg-gradient-to-b ${c.line} to-transparent`}
          />
        )}
      </div>

      {/* Пустая колонка для симметрии */}
      <div className="flex-1" />
    </motion.div>
  );
}

export default function Timeline() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Заголовок */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
            Опыт
          </p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Путь в разработке
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500">
            От первых строк кода до коммерческих интерфейсов — ключевые этапы роста.
          </p>
        </motion.div>

        {/* Шкала */}
        <div className="flex flex-col gap-8">
          {events.map((event, i) => (
            <TimelineItem
              key={event.year}
              event={event}
              index={i}
              isLast={i === events.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}