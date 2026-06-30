"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Главная" },
  { href: "#projects", label: "Проекты" },
  { href: "#skills", label: "Навыки" },
  { href: "#timeline", label: "Опыт" },
  { href: "#contact", label: "Контакты" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-8"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition ${
          isScrolled ? "border border-white/10 bg-slate-950/72 shadow-glow backdrop-blur-2xl" : "bg-transparent"
        }`}
        aria-label="Основная навигация"
      >
        <a href="#home" className="font-display text-base font-semibold tracking-normal text-white">
          Расул<span className="text-cyan-200">.folio</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 md:inline-flex"
        >
          Связаться
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Открыть или закрыть меню"
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-card backdrop-blur-2xl md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
