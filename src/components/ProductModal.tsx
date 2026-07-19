import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ClipboardPlus, MessageCircle, Check, Ruler, Hash, Info } from "lucide-react";
import ProductImage from "./ProductImage";
import { CATEGORIES, CONTACT, type Product, type Variant } from "../data/products";

interface Props {
  product: Product | null;
  onClose: () => void;
  onAdd: (p: Product, v: Variant) => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProductModal({ product, onClose, onAdd }: Props) {
  const [sel, setSel] = useState(0);
  const [added, setAdded] = useState<string | null>(null);

  useEffect(() => {
    setSel(0);
    setAdded(null);
  }, [product]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  const whatsapp = (p: Product, v: Variant) =>
    `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(
      `Hola WORLDCASEUY BAZAR — Aluminios Mariposa. Me interesa: ${p.name} (Cód. ${v.code}, ${v.size}${
        v.detail ? ", " + v.detail : ""
      }). ¿Me pasan precio y disponibilidad?`
    )}`;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-paper/60 backdrop-blur-md sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[92vh] w-full max-w-5xl grid-cols-1 overflow-hidden rounded-t-2xl border border-line bg-white shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:rounded-2xl md:grid-cols-[1fr_1.15fr]"
          >
            {/* image */}
            <div className="paper-studio noise relative hidden min-h-[420px] border-r border-line md:block">
              <div className="flex h-full w-full items-center justify-center p-10">
                <ProductImage
                  src={product.img}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_20px_28px_rgba(0,0,0,0.15)]"
                />
              </div>
              <span className="absolute left-5 top-5 rounded-full border border-line bg-white/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-forge backdrop-blur">
                {CATEGORIES.find((c) => c.id === product.category)?.label}
              </span>
              <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.2em] text-fog/60">
                Foto original de fábrica
              </span>
            </div>

            {/* content */}
            <div className="flex max-h-[92vh] flex-col overflow-hidden md:max-h-none">
              <div className="flex items-start justify-between gap-4 border-b border-line p-6 md:p-8">
                <div>
                  {/* mobile image */}
                  <div className="paper-studio mb-5 flex h-44 items-center justify-center overflow-hidden rounded-lg border border-line p-4 md:hidden">
                    <ProductImage src={product.img} alt={product.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-forge">
                    {CATEGORIES.find((c) => c.id === product.category)?.label}
                  </p>
                  <h3 className="font-display text-3xl uppercase leading-tight text-paper md:text-4xl">
                    {product.name}
                  </h3>
                  {product.note && (
                    <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-fog">
                      <Info className="mt-0.5 size-3.5 shrink-0 text-forge" />
                      {product.note}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-fog transition-all hover:border-forge hover:text-forge"
                  aria-label="Cerrar"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* variants */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                    Variantes disponibles
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-forge">
                    {product.variants.length} {product.variants.length === 1 ? "medida" : "medidas"}
                  </p>
                </div>

                <div className="overflow-hidden rounded-lg border border-line">
                  <div className="grid grid-cols-[28px_70px_1fr_80px] items-center gap-2 border-b border-line bg-panel px-3 py-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-fog sm:grid-cols-[28px_86px_1fr_1fr_90px]">
                    <span />
                    <span className="flex items-center gap-1">
                      <Hash className="size-3" /> Cód.
                    </span>
                    <span className="flex items-center gap-1">
                      <Ruler className="size-3" /> Medidas
                    </span>
                    <span className="hidden sm:block">Detalle</span>
                    <span className="text-right">Precio</span>
                  </div>
                  {product.variants.map((v, i) => {
                    const active = sel === i;
                    return (
                      <button
                        key={v.code + i}
                        onClick={() => setSel(i)}
                        className={`grid w-full grid-cols-[28px_70px_1fr_80px] items-center gap-2 border-b border-line/60 px-3 py-3 text-left transition-colors last:border-0 sm:grid-cols-[28px_86px_1fr_1fr_90px] ${
                          active ? "bg-forge/10 font-medium" : "hover:bg-panel/70"
                        }`}
                      >
                        <span
                          className={`grid size-4 place-items-center rounded-full border transition-all ${
                            active ? "border-forge bg-forge text-white" : "border-line text-transparent"
                          }`}
                        >
                          <Check className="size-2.5" strokeWidth={3.5} />
                        </span>
                        <span className={`font-mono text-xs font-bold ${active ? "text-forge" : "text-paper"}`}>
                          {v.code}
                        </span>
                        <span className="text-[13px] text-paper">{v.size}</span>
                        <span className="hidden text-xs text-fog sm:block">{v.detail ?? "—"}</span>
                        <span className="text-right font-mono text-xs font-semibold text-forge">
                          {v.price != null ? `$${v.price.toLocaleString("es-UY")}` : "—"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {product.variants[sel]?.detail && (
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-fog sm:hidden">
                    {product.variants[sel].detail}
                  </p>
                )}
              </div>

              {/* actions */}
              <div className="flex flex-col gap-3 border-t border-line bg-panel/50 p-5 sm:flex-row md:px-8">
                <button
                  onClick={() => {
                    onAdd(product, product.variants[sel]);
                    setAdded(product.variants[sel].code);
                    setTimeout(() => setAdded(null), 1800);
                  }}
                  className="group flex flex-1 items-center justify-center gap-3 rounded-full bg-forge px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_4px_20px_rgba(242,100,25,0.3)] transition-all hover:shadow-[0_6px_28px_rgba(242,100,25,0.4)]"
                >
                  {added === product.variants[sel].code ? (
                    <>
                      <Check className="size-4" strokeWidth={3} /> Agregado
                    </>
                  ) : (
                    <>
                      <ClipboardPlus className="size-4" /> Agregar a consulta
                    </>
                  )}
                </button>
                <a
                  href={whatsapp(product, product.variants[sel])}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-3 rounded-full border border-line bg-white px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-all hover:border-[#25D366] hover:text-[#25D366] shadow-2xs"
                >
                  <MessageCircle className="size-4 text-[#25D366]" /> Consultar ya
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
