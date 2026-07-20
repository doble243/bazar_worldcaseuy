import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUp, MessageCircle } from "lucide-react";
import { CONTACT } from "../data/products";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  return (
    <footer id="contacto" className="relative scroll-mt-20 border-t border-line bg-white/80">
      {/* CTA band */}
      <div className="border-b border-line bg-panel/30">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:py-24 lg:flex-row lg:items-end lg:px-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-forge"
            >
              <span className="h-px w-10 bg-forge" /> 04 — Hablemos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-5xl uppercase leading-[0.95] text-paper sm:text-6xl md:text-8xl"
            >
              Pasá por nuestro <span className="text-stroke-forge">showroom</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            href={`https://wa.me/${CONTACT.phoneIntl}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_4px_24px_rgba(37,211,102,0.3)] transition-all hover:shadow-[0_8px_36px_rgba(37,211,102,0.45)] hover:scale-[1.02]"
          >
            <MessageCircle className="size-4" />
            WhatsApp (+598 93 594 716)
          </motion.a>
        </div>
      </div>

      {/* Interactive Map Block */}
      <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Info panel */}
            <div className="flex flex-col justify-between border-b border-line bg-panel/30 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-forge shadow-2xs backdrop-blur">
                  <MapPin className="size-3.5" /> Showroom & Local
                </span>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-paper sm:text-3xl">
                  Domingo Aramburú 1784
                </h3>
                <p className="mt-2 text-sm text-fog leading-relaxed">
                  Montevideo, Uruguay. Vení a conocer todo el catálogo y stock disponible en aluminio, acero, cobre y hierro.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://maps.google.com/?q=Domingo+Arambur%C3%BA+1784+Montevideo+Uruguay"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-forge px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_4px_20px_rgba(242,100,25,0.25)] transition-all hover:shadow-[0_6px_28px_rgba(242,100,25,0.4)] hover:scale-[1.01]"
                >
                  <MapPin className="size-4" /> Abrir en Google Maps
                </a>
              </div>
            </div>

            {/* Map iframe */}
            <div className="relative min-h-[340px] h-[340px] sm:h-[400px] lg:col-span-2 lg:h-full">
              <iframe
                title="Ubicación de WORLDCASEUY — Aluminios Mariposa"
                src="https://maps.google.com/maps?q=Domingo+Arambur%C3%BA+1784,+Montevideo,+Uruguay&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0 contrast-[1.03] transition-all hover:contrast-100"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* contact grid */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3.5">
            <img src="/logo_sinfondo_WC.png" alt="WORLDCASEUY Logo" className="h-12 w-auto object-contain" />
            <div>
              <p className="font-display text-2xl uppercase text-paper">
                WORLDCASE<span className="text-forge">UY</span> BAZAR
              </p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.35em] text-fog">by Aluminios Mariposa</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-fog">
            Bazar y menaje en aluminio, acero inoxidable, cobre y hierro. Para hogares, restaurantes y trabajos especiales.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-forge">Visitanos</p>
          <a
            href="https://maps.google.com/?q=Domingo+Arambur%C3%BA+1784+Montevideo+Uruguay"
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-3 text-sm text-paper"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-forge transition-colors group-hover:scale-110" />
            {CONTACT.address}
          </a>
          <a href={`https://wa.me/${CONTACT.phoneIntl}`} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-sm text-paper font-mono">
            <Phone className="size-4 shrink-0 text-forge transition-colors group-hover:scale-110" />
            WhatsApp: {CONTACT.tel}
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-forge">Escribinos</p>
          <a href={`mailto:${CONTACT.email}`} className="group flex items-start gap-3 text-sm text-paper break-all">
            <Mail className="mt-0.5 size-4 shrink-0 text-forge transition-colors group-hover:scale-110" />
            {CONTACT.email}
          </a>
          <a
            href="#top"
            className="mt-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fog transition-colors hover:text-paper"
          >
            <ArrowUp className="size-3.5" /> Volver arriba
          </a>
        </div>
      </div>

      {/* giant outline */}
      <div className="overflow-hidden px-4 sm:px-6 lg:px-10">
        <motion.p
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="text-stroke whitespace-nowrap text-center font-display text-[13.5vw] uppercase leading-[0.85] opacity-35"
        >
          Mariposa
        </motion.p>
      </div>

      <div className="border-t border-line bg-panel/40">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-2 px-4 py-5 font-mono text-[9px] uppercase tracking-[0.25em] text-fog sm:flex-row sm:px-6 lg:px-10">
          <p>© {new Date().getFullYear()} WORLDCASEUY BAZAR — by Aluminios Mariposa</p>
          <p>Montevideo, Uruguay</p>
        </div>
      </div>
    </footer>
  );
}
