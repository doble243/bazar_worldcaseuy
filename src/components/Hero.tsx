import { motion } from "framer-motion";
import { ArrowDown, Ruler, Package, Factory } from "lucide-react";
import ProductImage from "./ProductImage";
import { PRODUCTS_ENRICHED, totalVariants } from "../data/products";

const HERO_IMG = PRODUCTS_ENRICHED.find((p) => p.id === "sarten-asas-cabo")!.img;
const SECOND_IMG = PRODUCTS_ENRICHED.find((p) => p.id === "olla-reforzada")!.img;

const ease = [0.16, 1, 0.3, 1] as const;

function MarqueeRow() {
  const items = [
    "Aluminio Familiar",
    "Aluminio Industrial",
    "Aluminio Profesional",
    "Acero Inoxidable",
    "Cobre",
    "Hierro",
    "Ceniceros — Papeleras",
    "Hecho en Uruguay",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-white/80 py-3.5 shadow-2xs">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.35em] text-fog">
            {it}
            <span className="size-1.5 rotate-45 bg-forge" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="grid-blueprint relative flex min-h-screen flex-col justify-end overflow-hidden pt-24">
      {/* glow */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[640px] rounded-full bg-forge/10 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-[1500px] flex-1 grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-4 lg:px-10">
        {/* Type block */}
        <div className="relative z-10 pb-6 pt-10 lg:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="mb-6 flex items-center gap-3 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-forge"
          >
            <span className="h-px w-10 bg-forge" />
            Productos Aluminio Mariposa · Montevideo
          </motion.p>

          <h1 className="font-display uppercase leading-[0.92] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.25 }}
              className="block text-[15vw] text-paper sm:text-[11vw] lg:text-[7.2rem] xl:text-[8.4rem]"
            >
              Bazar de
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.35 }}
              className="text-stroke block text-[15vw] sm:text-[11vw] lg:text-[7.2rem] xl:text-[8.4rem]"
            >
              metal real
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.45 }}
              className="metal-text block text-[15vw] sm:text-[11vw] lg:text-[7.2rem] xl:text-[8.4rem]"
            >
              para siempre
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.6 }}
            className="mt-7 max-w-xl text-sm leading-relaxed text-fog md:text-base"
          >
            Cacerolas, sartenes, ollas, asaderas y moldes en aluminio, acero inoxidable, cobre y hierro.
            Productos <span className="font-semibold text-paper">Aluminio Mariposa</span> para el hogar y la cocina profesional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.72 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#catalogo"
              className="group flex items-center gap-3 rounded-full bg-forge px-7 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_4px_24px_rgba(242,100,25,0.3)] transition-all hover:shadow-[0_8px_36px_rgba(242,100,25,0.45)] hover:scale-[1.02]"
            >
              Explorar catálogo
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-line border-y border-line py-1"
          >
            {[
              { icon: Package, n: `${PRODUCTS_ENRICHED.length}`, l: "Productos" },
              { icon: Ruler, n: `${totalVariants}`, l: "Medidas / códigos" },
              { icon: Factory, n: "7", l: "Líneas de metal" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col gap-1.5 px-4 py-5 first:pl-0">
                <s.icon className="size-4 text-forge" strokeWidth={1.75} />
                <span className="font-display text-2xl text-paper md:text-3xl">{s.n}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-fog">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual block */}
        <div className="relative z-10 hidden h-[560px] items-center justify-center lg:flex xl:h-[640px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.5 }}
            className="paper-studio noise relative w-[78%] overflow-hidden rounded-2xl border border-line shadow-[0_30px_90px_rgba(0,0,0,0.12)]"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <ProductImage src={HERO_IMG} alt="Sartén profesional de aluminio" className="h-auto w-full object-cover" />
            </motion.div>
            <div className="absolute left-4 top-4 rounded-full border border-line bg-white/90 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-forge shadow-xs backdrop-blur">
              Aluminio profesional
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: 0.85 }}
            className="paper-studio absolute -bottom-2 left-0 w-40 overflow-hidden rounded-xl border border-line shadow-[0_20px_60px_rgba(0,0,0,0.12)] xl:w-48"
          >
            <ProductImage src={SECOND_IMG} alt="Olla reforzada industrial" className="h-auto w-full object-cover" />
          </motion.div>

          {/* rotating badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="absolute -top-3 right-2 grid size-28 place-items-center rounded-full border border-line bg-white/90 shadow-md backdrop-blur"
          >
            <motion.svg
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 size-full"
            >
              <defs>
                <path id="circ" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
              </defs>
              <text className="fill-fog font-mono text-[9.2px] uppercase" style={{ letterSpacing: "0.22em" }}>
                <textPath href="#circ">Hecho en Uruguay · Aluminios Mariposa ·</textPath>
              </text>
            </motion.svg>
            <span className="size-2.5 rotate-45 bg-forge" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <MarqueeRow />
      </motion.div>
    </section>
  );
}
