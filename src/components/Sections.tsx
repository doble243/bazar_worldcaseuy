import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Ruler, Wrench, Hammer, Quote } from "lucide-react";
import ProductImage from "./ProductImage";
import { CATEGORIES, PRODUCTS_ENRICHED, SPECIAL, CONTACT, type CategoryId } from "../data/products";

const ease = [0.16, 1, 0.3, 1] as const;

const REP_IMG: Record<CategoryId, string> = {
  familiar: PRODUCTS_ENRICHED.find((p) => p.id === "olla-recta-madera")!.img,
  industrial: PRODUCTS_ENRICHED.find((p) => p.id === "olla-reforzada")!.img,
  profesional: PRODUCTS_ENRICHED.find((p) => p.id === "sarten-asas-cabo")!.img,
  acero: PRODUCTS_ENRICHED.find((p) => p.id === "bano-maria")!.img,
  cobre: PRODUCTS_ENRICHED.find((p) => p.id === "plato-faina-cobre")!.img,
  hierro: PRODUCTS_ENRICHED.find((p) => p.id === "pizzeras-hierro")!.img,
  ceniceros: PRODUCTS_ENRICHED.find((p) => p.id === "cenicero-papelera")!.img,
  especiales: SPECIAL.img,
};

/* ------------------------------ LÍNEAS ------------------------------ */

export function Lines({ onPick }: { onPick: (c: CategoryId) => void }) {
  const cats = CATEGORIES.filter((c) => c.id !== "especiales");
  return (
    <section id="lineas" className="scroll-mt-20 border-t border-line bg-white/60">
      <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-forge"
          >
            <span className="h-px w-10 bg-forge" /> 01 — Líneas de metal
          </motion.p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="max-w-3xl font-display text-5xl uppercase leading-[0.95] text-paper sm:text-6xl md:text-7xl"
            >
              Siete metales, <span className="text-stroke">una obsesión</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-sm text-sm leading-relaxed text-fog"
            >
              Cada línea con códigos y medidas originales, lista para el hogar o la cocina profesional.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cats.map((c, i) => {
            const count = PRODUCTS_ENRICHED.filter((p) => p.category === c.id).length;
            const big = i === 0 || i === 5;
            return (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease, delay: (i % 4) * 0.08 }}
                onClick={() => onPick(c.id)}
                className={`group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white text-left shadow-2xs transition-all duration-300 hover:border-forge/60 hover:shadow-md ${
                  big ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={`paper-studio noise relative w-full overflow-hidden border-b border-line ${big ? "aspect-[2/1] lg:aspect-auto lg:flex-1" : "aspect-[16/9]"}`}>
                  <div className="flex h-full w-full items-center justify-center p-8 transition-transform duration-700 ease-out group-hover:scale-105">
                    <ProductImage
                      src={REP_IMG[c.id]}
                      alt={c.label}
                      className="max-h-full max-w-full object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.1)]"
                    />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full border border-line bg-white/90 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-paper backdrop-blur">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-2xl uppercase tracking-wide text-paper md:text-[26px]">{c.short}</h3>
                    <p className="mt-1 text-xs text-fog">{c.blurb}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-forge font-semibold">
                      {count} piezas
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-line bg-panel text-fog transition-all duration-300 group-hover:border-forge group-hover:bg-forge group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}

          {/* especiales teaser */}
          <motion.a
            href="#especiales"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease, delay: 0.24 }}
            className="group relative flex items-end overflow-hidden rounded-xl border border-copper/40 bg-gradient-to-br from-copper/10 via-white to-white p-5 text-left transition-all hover:border-copper hover:shadow-md shadow-2xs"
          >
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-copper font-bold">08</p>
              <h3 className="mt-2 font-display text-2xl uppercase text-paper">Especiales</h3>
              <p className="mt-1 text-xs text-fog">A medida · Piezas únicas para marcas</p>
            </div>
            <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-copper text-white shadow-xs">
              <ArrowUpRight className="size-4" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CRAFT STRIP ------------------------------ */

export function Craft() {
  const pillars = [
    { icon: Hammer, t: "Despacho en el día", d: "Compras confirmadas antes de las 14 hs se despachan en el día." },
    { icon: Ruler, t: "Medidas exactas", d: "Códigos de fábrica y tolerancias de siempre, sin sorpresas." },
    { icon: Flame, t: "Stock disponible", d: "Tenemos inventario listo para entrega inmediata." },
    { icon: Wrench, t: "Envíos a todo Uruguay", d: "Realizamos envíos a todo el país." },
  ];
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 divide-y divide-line px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:px-10">
        {pillars.map((p, i) => (
          <motion.div
            key={p.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: i * 0.08 }}
            className="flex flex-col gap-3 py-10 sm:px-8 sm:py-12 sm:first:pl-0"
          >
            <p.icon className="size-5 text-forge" strokeWidth={1.75} />
            <h3 className="font-display text-xl uppercase tracking-wide text-paper">{p.t}</h3>
            <p className="text-sm leading-relaxed text-fog">{p.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ ESPECIALES ------------------------------ */

export function Specials() {
  return (
    <section id="especiales" className="relative scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute left-[-15%] top-1/3 size-[520px] rounded-full bg-copper/10 blur-[130px]" />
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-copper"
          >
            <span className="h-px w-10 bg-copper" /> 03 — Trabajos especiales
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-5xl uppercase leading-[0.95] text-paper sm:text-6xl md:text-7xl"
          >
            Si no existe, <span className="metal-text">lo fabricamos</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="mt-8 flex gap-4 rounded-xl border border-line bg-white p-6 shadow-2xs"
          >
            <Quote className="size-6 shrink-0 rotate-180 text-copper" strokeWidth={1.5} />
            <p className="text-[15px] leading-relaxed text-paper">{SPECIAL.text}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-fog">
              Confían en el taller
            </p>
            <div className="flex flex-wrap gap-2">
              {SPECIAL.clients.slice(0, 10).map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-line bg-white px-4 py-2 text-xs text-paper shadow-2xs transition-colors hover:border-copper hover:text-copper"
                >
                  {c}
                </span>
              ))}
              <span className="rounded-full border border-copper/50 bg-copper/5 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-copper">
                + {SPECIAL.clients.length - 10} más
              </span>
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Trabajo especial — consulta")}`}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-copper px-7 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_4px_24px_rgba(184,115,51,0.3)] transition-all hover:shadow-[0_8px_36px_rgba(184,115,51,0.45)]"
          >
            Encargar una pieza
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease }}
          className="paper-studio noise relative overflow-hidden rounded-2xl border border-line shadow-[0_30px_90px_rgba(0,0,0,0.12)]"
        >
          <ProductImage src={SPECIAL.img} alt="Trabajos especiales" className="h-auto w-full object-cover" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-copper/30" />
          <span className="absolute bottom-4 left-4 rounded-full border border-line bg-white/90 px-4 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-copper backdrop-blur shadow-2xs">
            Piezas a pedido del cliente
          </span>
        </motion.div>
      </div>
    </section>
  );
}
