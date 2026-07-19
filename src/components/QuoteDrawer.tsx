import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, MessageCircle, Mail, ClipboardList, Minus, Plus } from "lucide-react";
import ProductImage from "./ProductImage";
import { CONTACT, type Product, type Variant } from "../data/products";

export interface QuoteItem {
  key: string;
  product: Product;
  variant: Variant;
  qty: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  items: QuoteItem[];
  setQty: (key: string, qty: number) => void;
  removeItem: (key: string) => void;
  clearAll: () => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function QuoteDrawer({ open, onClose, items, setQty, removeItem, clearAll }: Props) {
  const message = items
    .map((it) => {
      const price = it.variant.price ? ` · $${it.variant.price.toLocaleString("es-UY")}` : "";
      return `• ${it.product.name} — Cód. ${it.variant.code} (${it.variant.size}) × ${it.qty}${price}`;
    })
    .join("\n");
  const waLink = `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(
    `Hola WORLDCASEUY BAZAR — Aluminios Mariposa.\nQuiero consultar por:\n\n${message}\n\n¿Está disponible?`
  )}`;
  const mailLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Consulta de productos — WORLDCASEUY BAZAR")}&body=${encodeURIComponent(
    `Hola, quiero consultar por:\n\n${message}\n\nGracias.`
  )}`;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-paper/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-line bg-white shadow-[0_20px_80px_rgba(0,0,0,0.2)]"
          >
            <div className="flex items-center justify-between border-b border-line p-6">
              <div>
                <h3 className="font-display text-2xl uppercase text-paper">Tu consulta</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
                  {items.length} {items.length === 1 ? "ítem" : "ítems"} seleccionados
                </p>
              </div>
              <button
                onClick={onClose}
                className="grid size-10 place-items-center rounded-full border border-line text-fog transition-all hover:border-forge hover:text-forge"
                aria-label="Cerrar"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <span className="grid size-16 place-items-center rounded-full border border-dashed border-line text-fog bg-panel/30">
                    <ClipboardList className="size-6" strokeWidth={1.5} />
                  </span>
                  <p className="font-display text-xl uppercase text-fog">Lista vacía</p>
                  <p className="max-w-[240px] font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-fog/70">
                    Elegí una medida en cualquier producto y agregala a tu consulta
                  </p>
                </div>
              ) : (
                <ul className="flex flex-col gap-3">
                  {items.map((it) => (
                    <li key={it.key} className="flex gap-3 rounded-lg border border-line bg-panel/50 p-3 shadow-2xs">
                      <div className="paper-studio grid size-16 shrink-0 place-items-center overflow-hidden rounded-md border border-line p-1.5">
                        <ProductImage src={it.product.img} alt={it.product.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="truncate text-[13px] font-semibold text-paper">{it.product.name}</p>
                        <p className="mt-0.5 font-mono text-[10px] text-forge font-medium">
                          Cód. {it.variant.code} · <span className="text-fog">{it.variant.size}</span>
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-full border border-line bg-white px-1">
                            <button
                              onClick={() => setQty(it.key, Math.max(1, it.qty - 1))}
                              className="grid size-6 place-items-center text-fog hover:text-paper"
                              aria-label="Menos"
                            >
                              <Minus className="size-3" />
                            </button>
                            <span className="w-6 text-center font-mono text-xs font-bold text-paper">{it.qty}</span>
                            <button
                              onClick={() => setQty(it.key, it.qty + 1)}
                              className="grid size-6 place-items-center text-fog hover:text-paper"
                              aria-label="Más"
                            >
                              <Plus className="size-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(it.key)}
                            className="grid size-7 place-items-center text-fog transition-colors hover:text-forge"
                            aria-label="Quitar"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="flex flex-col gap-3 border-t border-line bg-panel/40 p-5">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all hover:shadow-[0_6px_28px_rgba(37,211,102,0.45)]"
                >
                  <MessageCircle className="size-4" /> Enviar por WhatsApp
                </a>
                <a
                  href={mailLink}
                  className="flex items-center justify-center gap-3 rounded-full border border-line bg-white px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper shadow-2xs transition-all hover:border-forge hover:text-forge"
                >
                  <Mail className="size-4" /> Enviar por email
                </a>
                <button
                  onClick={clearAll}
                  className="mx-auto mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-fog/70 underline-offset-4 hover:text-fog hover:underline"
                >
                  Vaciar lista
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
