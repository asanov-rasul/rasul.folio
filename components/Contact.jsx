"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Github, Mail, Send } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Не удалось отправить сообщение.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Сообщение отправлено в Telegram");
      window.setTimeout(() => {
        setStatus("idle");
        setFeedback("");
      }, 3200);
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Не удалось отправить сообщение.");
    }
  }

  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Контакты</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            Давайте создадим интерфейс, который запомнят
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Напишите о продукте, команде или вакансии. Я подключу frontend-опыт, чувство движения и спокойный темп исполнения.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { href: "mailto:rasabet666@gmail.com", label: "Email", icon: Mail },
              { href: "https://github.com/asanov-rasul", label: "GitHub", icon: Github }
            ].map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 text-sm text-slate-200 transition hover:border-cyan-200/60 hover:text-white"
                >
                  <Icon size={17} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <form onSubmit={handleSubmit} className="glass-border relative overflow-hidden rounded-lg p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                Имя
                <input
                  required
                  name="name"
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70"
                  placeholder="Ваше имя"
                />
              </label>
              <label className="text-sm text-slate-300">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-300">
              Сообщение
              <textarea
                required
                name="message"
                rows={6}
                className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70"
                placeholder="Расскажите, что вы создаёте..."
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-200 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-7"
            >
              {status === "loading" ? "Отправляем..." : "Отправить сообщение"}
              <Send size={17} />
            </button>

            <AnimatePresence>
              {(status === "success" || status === "error") && (
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.96 }}
                  className={`absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-xl ${
                    status === "success"
                      ? "border-emerald-300/30 bg-emerald-300/15 text-emerald-100"
                      : "border-rose-300/30 bg-rose-300/15 text-rose-100"
                  }`}
                >
                  {status === "success" ? <CheckCircle2 size={17} /> : <AlertCircle size={17} />}
                  {feedback}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
