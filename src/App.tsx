import { useMemo, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import ProductModal from "./components/ProductModal";
import QuoteDrawer, { type QuoteItem } from "./components/QuoteDrawer";
import { Lines, Craft } from "./components/Sections";
import Footer from "./components/Footer";
import { CATEGORIES, PRODUCTS_ENRICHED, type CategoryId, type Product, type Variant } from "./data/products";

export default function App() {
  const [activeCat, setActiveCat] = useState<CategoryId | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [items, setItems] = useState<QuoteItem[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS_ENRICHED.filter((p) => {
      if (activeCat !== "all" && p.category !== activeCat) return false;
      if (!q) return true;
      const hay =
        `${p.name} ${CATEGORIES.find((c) => c.id === p.category)?.label ?? ""} ` +
        p.variants.map((v) => `${v.code} ${v.size} ${v.detail ?? ""}`).join(" ");
      return hay.toLowerCase().includes(q);
    });
  }, [activeCat, query]);

  const addItem = (p: Product, v: Variant) => {
    const key = `${p.id}__${v.code}`;
    setItems((prev) => {
      const found = prev.find((it) => it.key === key);
      if (found) return prev.map((it) => (it.key === key ? { ...it, qty: it.qty + 1 } : it));
      return [...prev, { key, product: p, variant: v, qty: 1 }];
    });
    setDrawer(true);
  };

  const setQty = (key: string, qty: number) =>
    setItems((prev) => prev.map((it) => (it.key === key ? { ...it, qty } : it)));
  const removeItem = (key: string) => setItems((prev) => prev.filter((it) => it.key !== key));
  const clearAll = () => setItems([]);

  const pickCat = (c: CategoryId) => {
    if (c === "especiales") {
      document.getElementById("especiales")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setActiveCat(c);
    setQuery("");
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-ink">
      <Nav basketCount={items.length} onOpenBasket={() => setDrawer(true)} />
      <main>
        <Hero />
        <Lines onPick={pickCat} />
        <Catalog
          products={filtered}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          query={query}
          setQuery={setQuery}
          onSelect={setSelected}
        />
        <Craft />
      </main>
      <Footer />

      <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={addItem} />
      <QuoteDrawer
        open={drawer}
        onClose={() => setDrawer(false)}
        items={items}
        setQty={setQty}
        removeItem={removeItem}
        clearAll={clearAll}
      />
    </div>
  );
}
