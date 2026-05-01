"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  if (!theme) {
    return <span aria-hidden className="block h-10 w-10 shrink-0 rounded-full" />;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative grid h-10 w-10 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full border border-line text-fg-muted transition-colors hover:border-fg hover:text-fg active:scale-95"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="moon"
            initial={{ y: -16, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 16, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 grid place-items-center"
          >
            <Moon className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: -16, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 16, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 grid place-items-center"
          >
            <Sun className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
