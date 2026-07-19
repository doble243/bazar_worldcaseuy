import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, Menu, X } from "lucide-react";

function ButterflyMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 10c-1.5-3.5-4.5-6-8-6 0 5 2.5 7.5 6 8-3.5.5-6 2.5-6 7 3.5 0 6.5-2.5 8-5 1.5 2.5 4.5 5 8 5 0-4.5-2.5-6.5-6-7 3.5-.5 6-3 6-8-3.5 0-6.5 2.5-8 6Z" />
      <path d="M12 10v9M12 8.5 10.5 6M12 8.5 13.5 6" />
    </svg>
  );
}

interface Props {
  basketCount: number;
  onOpenBasket: () => void;
}

const LINKS = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#lineas", label: "Líneas" },

  { href: "#contacto", label: "Contacto" },
];

export default function Nav({ basketCount, onOpenBasket }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-line shadow-xs" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-[76px] max-w-[1500px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-9 md:size-10 place-items-center rounded-md bg-forge text-white shadow-[0_0_24px_rgba(242,100,25,0.25)]">
            <ButterflyMark className="size-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg md:text-xl tracking-wide text-paper">
              WORLDCASE<span className="text-forge">UY</span> <span className="hidden sm:inline">BAZAR</span>
            </span>
            <span className="mt-1 block font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-fog">
              by Aluminios Mariposa
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-[11px] uppercase tracking-[0.28em] text-fog transition-colors hover:text-paper"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-forge transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenBasket}
            className="relative flex items-center gap-2.5 rounded-full border border-line bg-white/80 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-silver shadow-2xs transition-all hover:border-forge hover:text-paper"
          >
            <ClipboardList className="size-4 text-forge" />
            <span className="hidden sm:inline">Consulta</span>
            <span className="grid min-w-5 place-items-center rounded-full bg-forge px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
              {basketCount}
            </span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center rounded-full border border-line bg-white text-silver lg:hidden"
            aria-label="Menú"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-line bg-white/95 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col px-6 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-4 font-mono text-xs uppercase tracking-[0.3em] text-silver last:border-0 hover:text-forge"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
