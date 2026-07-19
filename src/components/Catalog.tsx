import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Layers } from "lucide-react";
import ProductImage from "./ProductImage";
import { CATEGORIES, type CategoryId, type Product } from "../data/products";

interface Props {
  products: Product[];
  activeCat: CategoryId | "all";
  setActiveCat: (c: CategoryId | "all") => void;
  query: string;
  setQuery: (q: string) => void;
  onSelect: (p: Product) => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

function Card({ p, index, onSelect }: { p: Product; index: number; onSelect: (p: Product) => void }) {
  const cat = CATEGORIES.find((c) => c.id === p.category)!;
  const first = p.variants[0];
  const codes = p.variants.length;
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease, delay: (index % 4) * 0.05 }}
      onClick={() => onSelect(p)}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white text-left shadow-2xs transition-all duration-300 hover:border-forge/50 hover:shadow-md"
    >
      {/* image studio */}
      <div className="paper-studio noise relative aspect-[5/4] w-full overflow-hidden border-b border-line">
        <span className="absolute left-3.5 top-3 z-10 rounded-full border border-line bg-white/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-silver backdrop-blur">
          {cat.short}
        </span>
        <span className="absolute right-3.5 top-3 z-10 flex items-center gap-1 rounded-full bg-forge px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white shadow-xs">
          <Layers className="size-2.5" />
          {codes} {codes === 1 ? "medida" : "medidas"}
        </span>
        <div className="flex h-full w-full items-center justify-center p-7 transition-transform duration-500 ease-out group-hover:scale-[1.06]">
          <ProductImage
            src={p.img}
            alt={p.name}
            className="max-h-full max-w-full object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.1)]"
          />
        </div>
        <span className="absolute bottom-3 left-3.5 font-mono text-[10px] tracking-[0.15em] text-fog/50">
          N°{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* info */}
      <div className="flex flex-1 items-start justify-between gap-3 p-4">
        <div className="min-w-0">
          <h3 className="clamp-2 text-[15px] font-semibold leading-snug text-paper">{p.name}</h3>
          <p className="mt-1.5 truncate font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
            {first ? `${first.size}${codes > 1 ? "  ·  …" : ""}` : ""}
          </p>
        </div>
        <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-line bg-panel text-fog transition-all duration-300 group-hover:border-forge group-hover:bg-forge group-hover:text-white">
          <Plus className="size-4" />
        </span>
      </div>
    </motion.button>
  );
}

export default function Catalog({ products, activeCat, setActiveCat, query, setQuery, onSelect }: Props) {
  const cats = [
    { id: "all" as const, label: "Todo", short: "Todo", count: undefined as number | undefined },
    ...CATEGORIES.filter((c) => c.id !== "especiales").map((c) => ({
      id: c.id as CategoryId,
      label: c.label,
      short: c.short,
      count: undefined,
    })),
  ];

  return (
    <section id="catalogo" className="relative scroll-mt-20">
      <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        {/* heading */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-forge"
            >
              <span className="h-px w-10 bg-forge" /> 02 — Catálogo completo
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-5xl uppercase leading-[0.95] text-paper sm:text-6xl md:text-7xl"
            >
              Piezas del <span className="text-stroke-forge">taller</span>
            </motion.h2>
          </div>

          {/* search */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="flex w-full max-w-sm items-center gap-3 rounded-full border border-line bg-white px-5 py-3.5 shadow-2xs focus-within:border-forge focus-within:ring-2 focus-within:ring-forge/20 transition-all"
          >
            <Search className="size-4 shrink-0 text-fog" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar: sartén, olla, budinera…"
              className="w-full bg-transparent text-sm text-paper placeholder:text-fog/60 focus:outline-none"
            />
          </motion.div>
        </div>

        {/* filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cats.map((c) => {
            const active = activeCat === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  active
                    ? "border-forge bg-forge font-bold text-white shadow-[0_2px_16px_rgba(242,100,25,0.3)]"
                    : "border-line bg-white text-fog hover:border-paper hover:text-paper shadow-2xs"
                }`}
              >
                {c.short}
              </button>
            );
          })}
        </motion.div>

        {/* count line */}
        <div className="mb-8 flex items-center justify-between border-b border-line pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
            {products.length} {products.length === 1 ? "producto" : "productos"}
            {activeCat !== "all" && ` · ${CATEGORIES.find((c) => c.id === activeCat)?.label}`}
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-fog md:block">
            Códigos originales de fábrica
          </p>
        </div>

        {/* grid */}
        {products.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {products.map((p, i) => (
                <Card key={p.id} p={p} index={i} onSelect={onSelect} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed border-line bg-white/50 py-24 text-center">
            <p className="font-display text-2xl uppercase text-fog">Sin resultados</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog/70">
              Probá con otro término o línea de metal
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveCat("all");
              }}
              className="mt-2 rounded-full border border-forge bg-forge/10 px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-forge hover:bg-forge hover:text-white"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
