"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import Typewriter from "@/components/Typewriter";

const metrics = [
  ["30+", "готовых интерфейсов"],
  ["98", "ориентир по Lighthouse"],
  ["4 мс", "скорость взаимодействий"]
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block whitespace-nowrap">Асанов Расул</span>
            <span
              className="mt-2 block min-h-[3.25em] max-w-[12ch] overflow-hidden text-[0.84em] leading-[1.05] text-cyan-200 sm:min-h-[2.28em] sm:max-w-[15ch] lg:max-w-[18ch] xl:max-w-[22ch]"
            >
              <Typewriter />
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-balance text-lg leading-8 text-slate-300 sm:text-xl">
            Создаю быстрые и выразительные веб-интерфейсы, где анимация работает на смысл, дизайн-системы остаются аккуратными, а каждое взаимодействие ощущается продуманным.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-200 px-6 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-ink"
            >
              Смотреть проекты
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-200/60 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-ink"
            >
              <MessageCircle size={18} />
              Обсудить задачу
            </a>

            <a
              href="https://docs.google.com/document/d/1CusccIcf-PkbgxLrCs9YR_Kuwp31_hZu/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-200/60 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-ink"
            >
              <Download size={18} />
              Скачать резюме
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div key={label} className="glass-border min-w-0 rounded-lg p-4 last:col-span-2 sm:last:col-span-1">
                <div className="font-display text-2xl font-semibold text-white">{value}</div>
                <div className="mt-1 hyphens-auto text-xs leading-5 text-slate-400 [overflow-wrap:anywhere]">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md sm:aspect-[4/5] lg:max-w-lg"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(45,212,191,0.4),rgba(99,102,241,0.42),rgba(244,114,182,0.32),rgba(45,212,191,0.4))] blur-2xl" />
          <div className="glass-border relative flex flex-col overflow-hidden rounded-[1.75rem] p-5 shadow-card sm:h-full">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-300" />
            </div>

            {/* Photo placeholder */}
            <div className="mt-4 flex-1 overflow-hidden rounded-2xl">
              <img
                src="/images/myPhoto.webp"
                alt="Фото профиля"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/70 p-5 font-mono text-sm text-slate-300">
              <p className="text-cyan-200">const experience = &#123;</p>
              <p className="pl-4">name: &quot;Асанов Расул&quot;,</p>
              <p className="pl-4">stack: [&quot;React&quot;, &quot;Next.js&quot;, &quot;Motion&quot;],</p>
              <p className="pl-4">focus: &quot;живые интерфейсы&quot;,</p>
              <p className="pl-4">quality: &quot;доступно, быстро, запоминается&quot;</p>
              <p className="text-cyan-200">&#125;;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
