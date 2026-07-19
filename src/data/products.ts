/* Catálogo completo de aluminiosmariposa.com.uy — fotos y variantes respetadas al 100% */

import { PRICE_MAP } from "./prices";

export type CategoryId =
  | "familiar"
  | "industrial"
  | "profesional"
  | "acero"
  | "cobre"
  | "hierro"
  | "ceniceros"
  | "especiales";

export interface Variant {
  code: string;
  size: string;
  detail?: string;
  price?: number;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  img: string;
  note?: string;
  variants: Variant[];
}

export const CATEGORIES: { id: CategoryId; label: string; short: string; blurb: string }[] = [
  { id: "familiar", label: "Aluminio Familiar", short: "Familiar", blurb: "Línea clásica del hogar uruguayo." },
  { id: "industrial", label: "Aluminio Industrial", short: "Industrial", blurb: "Reforzados para máximo trabajo." },
  { id: "profesional", label: "Aluminio Profesional", short: "Profesional", blurb: "El estándar de las cocinas exigentes." },
  { id: "acero", label: "Acero Inoxidable", short: "Acero Inox", blurb: "Brillo permanente y precisión quirúrgica." },
  { id: "cobre", label: "Cobre", short: "Cobre", blurb: "Conducción calórica de culto." },
  { id: "hierro", label: "Hierro", short: "Hierro", blurb: "Para fuego fuerte y sabor real." },
  { id: "ceniceros", label: "Ceniceros — Papeleras", short: "Ceniceros", blurb: "Equipamiento para espacios públicos." },
  { id: "especiales", label: "Trabajos Especiales", short: "Especiales", blurb: "Piezas a medida, a pedido del cliente." },
];

/* El servidor original solo sirve por HTTP sin TLS; se sirven las fotos originales
   a través de images.weserv.nl (proxy HTTPS) para evitar contenido mixto. */
const U = "https://images.weserv.nl/?url=www.aluminiomariposa.com.uy/wp-content/uploads/";

export const PRODUCTS: Product[] = [
  {
    id: "asadera-premier",
    name: "Asadera premier",
    category: "familiar",
    img: `${U}2017/08/fotos-176.jpg`,
    variants: [{ code: "0105", size: "28 × 36 × 5 cm", detail: "Fondo fijo." }],
  },
  {
    id: "asadera-recta",
    name: "Asadera recta (con o sin agarradera)",
    category: "industrial",
    img: `${U}2017/08/fotos-021-1024x604.jpg`,
    variants: [
      { code: "0112", size: "30 × 40 × 5 cm" },
      { code: "0113", size: "50 × 40 × 5 cm" },
      { code: "0114", size: "60 × 40 × 5 cm" },
    ],
  },
  {
    id: "asadera-pestana",
    name: "Asadera recta c/pestaña",
    category: "profesional",
    img: `${U}2017/10/fotos-315.jpg`,
    variants: [
      { code: "0106", size: "30 × 40 × 4.5 cm" },
      { code: "0107", size: "50 × 40 × 4.5 cm" },
      { code: "0108", size: "60 × 40 × 4.5 cm" },
    ],
  },
  {
    id: "bano-maria",
    name: "Baño María profesional",
    category: "acero",
    img: `${U}2017/10/fotos-357.jpg`,
    variants: [{ code: "0159", size: "Ø 15 cm × 19 cm de altura", detail: "Capacidad 3.5 litros." }],
  },
  {
    id: "budinera-tubo",
    name: "Budinera con tubo",
    category: "familiar",
    img: `${U}2017/08/fotos-162.jpg`,
    variants: [
      { code: "0206", size: "Ø 18 cm" },
      { code: "0207", size: "Ø 20 cm" },
      { code: "0210", size: "Ø 22 cm" },
    ],
  },
  {
    id: "cacerola-asas-baquelita",
    name: "Cacerola con asas de baquelita",
    category: "familiar",
    img: `${U}2017/08/fotos-145-1024x650.jpg`,
    variants: [
      { code: "4151", size: "Ø 18 cm", detail: "Capacidad 2 litros." },
      { code: "4152", size: "Ø 20 cm", detail: "Capacidad 3 litros." },
      { code: "4153", size: "Ø 22 cm", detail: "Capacidad 4 litros." },
      { code: "4154", size: "Ø 24 cm", detail: "Capacidad 5 litros." },
      { code: "4155", size: "Ø 26 cm", detail: "Capacidad 6 litros." },
      { code: "4156", size: "Ø 28 cm", detail: "Capacidad 8 litros." },
      { code: "4157", size: "Ø 30 cm", detail: "Capacidad 10 litros." },
    ],
  },
  {
    id: "cacerola-asas-madera",
    name: "Cacerola con asas de madera",
    category: "familiar",
    img: `${U}2017/08/fotos-213.jpg`,
    variants: [
      { code: "0507", size: "Ø 18 cm", detail: "Capacidad 2 litros." },
      { code: "0508", size: "Ø 20 cm", detail: "Capacidad 3 litros." },
      { code: "0509", size: "Ø 22 cm", detail: "Capacidad 4 litros." },
      { code: "0510", size: "Ø 24 cm", detail: "Capacidad 5 litros." },
      { code: "0511", size: "Ø 26 cm", detail: "Capacidad 6 litros." },
      { code: "0512", size: "Ø 28 cm", detail: "Capacidad 8 litros." },
      { code: "0513", size: "Ø 30 cm", detail: "Capacidad 10 litros." },
    ],
  },
  {
    id: "cacerola-cabo-baquelita",
    name: "Cacerola con cabo de baquelita",
    category: "familiar",
    img: `${U}2019/07/IMG_20190712_093101_resized_20190716_085809592-1024x768.jpg`,
    variants: [
      { code: "4103", size: "Ø 18 cm", detail: "Capacidad 2 litros." },
      { code: "4104", size: "Ø 20 cm", detail: "Capacidad 3 litros." },
    ],
  },
  {
    id: "cacerola-cabo-madera",
    name: "Cacerola con cabo de madera",
    category: "familiar",
    img: `${U}2017/11/fotos-510.jpg`,
    variants: [
      { code: "0504", size: "Ø 18 cm", detail: "Capacidad 2 litros." },
      { code: "0505", size: "Ø 20 cm", detail: "Capacidad 3 litros." },
    ],
  },
  {
    id: "cacerola-reforzada-aluminio",
    name: "Cacerola reforzada con asas de aluminio",
    category: "industrial",
    img: `${U}2020/06/IMG_20200626_102502-1024x767.jpg`,
    variants: [
      { code: "0536", size: "Ø 36 cm × 20 cm de altura", detail: "Capacidad 20 litros." },
      { code: "0537", size: "Ø 40 cm × 20 cm de altura", detail: "Capacidad 25 litros." },
      { code: "0662", size: "Ø 50 cm × 21 cm de altura", detail: "Capacidad 40 litros." },
    ],
  },
  {
    id: "cacerolas-asas-aluminio",
    name: "Cacerolas c/asas de aluminio",
    category: "profesional",
    img: `${U}2019/02/20190220_143730-1-1024x737.jpg`,
    variants: [
      { code: "0552", size: "Ø 22 cm", detail: "Capacidad 4 litros." },
      { code: "0553", size: "Ø 24 cm", detail: "Capacidad 5 litros." },
      { code: "0554", size: "Ø 26 cm", detail: "Capacidad 6 litros." },
      { code: "0555", size: "Ø 28 cm", detail: "Capacidad 8 litros." },
      { code: "0556", size: "Ø 30 cm", detail: "Capacidad 10 litros." },
      { code: "0557", size: "Ø 32 cm", detail: "Capacidad 15 litros." },
    ],
  },
  {
    id: "cacerolas-cabo-aluminio",
    name: "Cacerolas c/cabo de aluminio",
    category: "profesional",
    img: `${U}2020/03/20190220_144509-1-1024x576.jpg`,
    variants: [
      { code: "0550", size: "Ø 18 cm", detail: "Capacidad 2 litros." },
      { code: "0551", size: "Ø 20 cm", detail: "Capacidad 3 litros." },
    ],
  },
  {
    id: "caldera",
    name: "Caldera",
    category: "familiar",
    img: `${U}2017/11/20171129_133422-1-1009x1024.jpg`,
    variants: [
      { code: "1800", size: "Ø 14 cm", detail: "Capacidad 1,5 litros." },
      { code: "1801", size: "Ø 16 cm", detail: "Capacidad 2 litros." },
      { code: "1802", size: "Ø 18 cm", detail: "Capacidad 2,8 litros." },
      { code: "1805", size: "Ø 22 cm", detail: "Capacidad 5 litros." },
    ],
  },
  {
    id: "cenicero-papelera",
    name: "Cenicero – Papelera cilíndrico",
    category: "ceniceros",
    img: `${U}2019/01/cenicero-papelera-inox.-507x1024.jpg`,
    note: "Opción tapa plana.",
    variants: [
      { code: "0971", size: "Ø 22 cm", detail: "60 cm de altura. Tapa y cuerpo en acero." },
    ],
  },
  {
    id: "cenicero-pie",
    name: "Cenicero de pie con tapa perforada",
    category: "ceniceros",
    img: `${U}2017/11/20171110_135337-1-514x1024.jpg`,
    variants: [{ code: "0906", size: "Ø 18 cm", detail: "60 cm de altura." }],
  },
  {
    id: "colador-4-sectores",
    name: "Colador 4 sectores para cacerola de 40 cm",
    category: "industrial",
    img: `${U}2017/11/20171110_135024-1-1024x923.jpg`,
    variants: [{ code: "0543", size: "Ø 38 cm", detail: "Con cabo móvil o fijo." }],
  },
  {
    id: "colador-cabo-asas",
    name: "Colador c/cabo o asas de aluminio",
    category: "profesional",
    img: `${U}2019/02/20190220_144456-1-1024x850.jpg`,
    variants: [
      { code: "2830", size: "Ø 24 cm" },
      { code: "2822", size: "Ø 30 cm" },
    ],
  },
  {
    id: "colador-asas",
    name: "Colador con asas de aluminio",
    category: "profesional",
    img: `${U}2019/02/20190220_144105-1-1024x676.jpg`,
    variants: [{ code: "4433", size: "Ø 40 cm" }],
  },
  {
    id: "colador-pasta-baquelita",
    name: "Colador de pasta c/asa baquelita",
    category: "familiar",
    img: `${U}2017/10/43.jpg`,
    variants: [
      { code: "4250", size: "Ø 22 cm" },
      { code: "4251", size: "Ø 24 cm" },
      { code: "4252", size: "Ø 26 cm" },
      { code: "4253", size: "Ø 30 cm" },
    ],
  },
  {
    id: "colador-pasta-madera",
    name: "Colador de pasta c/asa madera",
    category: "familiar",
    img: `${U}2017/10/fotos-116-1024x687.jpg`,
    variants: [
      { code: "0601", size: "Ø 22 cm" },
      { code: "0602", size: "Ø 24 cm" },
      { code: "0609", size: "Ø 26 cm" },
      { code: "3841", size: "Ø 30 cm" },
    ],
  },
  {
    id: "cucharon-cabo-aluminio",
    name: "Cucharón cabo aluminio",
    category: "familiar",
    img: `${U}2017/08/fotos-059-1024x687.jpg`,
    variants: [
      { code: "2700", size: "Ø 7 cm", detail: "Capacidad 90 cc." },
      { code: "2706", size: "Ø 9 cm", detail: "Capacidad 150 cc." },
      { code: "2707", size: "Ø 10 cm", detail: "Capacidad 200 cc." },
      { code: "2708", size: "Ø 11 cm", detail: "Capacidad 250 cc." },
    ],
  },
  {
    id: "cucharon-reforzado",
    name: "Cucharón reforzado",
    category: "industrial",
    img: `${U}2017/10/fotos-304.jpg`,
    variants: [
      { code: "2719", size: "Ø 12 cm · mango de 35 cm", detail: "Capacidad 350 cc." },
      { code: "2705", size: "Ø 14 cm · mango de 47 cm", detail: "Capacidad 550 cc." },
    ],
  },
  {
    id: "espatula-familiar",
    name: "Espátula familiar cabo aluminio",
    category: "familiar",
    img: `${U}2017/08/fotos-069-1024x687.jpg`,
    variants: [{ code: "2717", size: "13 × 10 cm" }],
  },
  {
    id: "espumadera-cabo-aluminio",
    name: "Espumadera cabo aluminio",
    category: "familiar",
    img: `${U}2017/08/fotos-061-1024x687.jpg`,
    variants: [
      { code: "2713", size: "Ø 9 cm" },
      { code: "2714", size: "Ø 10 cm" },
      { code: "2715", size: "Ø 11 cm" },
    ],
  },
  {
    id: "espumadera-reforzada",
    name: "Espumadera reforzada",
    category: "industrial",
    img: `${U}2017/10/fotos-307.jpg`,
    variants: [
      { code: "2718", size: "Ø 12 cm · mango de 35 cm" },
      { code: "2712", size: "Ø 16 cm · mango de 47 cm" },
    ],
  },
  {
    id: "jarro-hervidor-madera",
    name: "Jarro hervidor con asa de madera",
    category: "familiar",
    img: `${U}2017/08/fotos-198.jpg`,
    variants: [
      { code: "1403", size: "Ø 12 cm", detail: "Capacidad 1.2 litros." },
      { code: "1404", size: "Ø 14 cm", detail: "Capacidad 2 litros." },
    ],
  },
  {
    id: "jarro-hervidor-baquelita",
    name: "Jarro hervidor con cabo de baquelita",
    category: "familiar",
    img: `${U}2019/07/IMG_20190619_132511-1024x962.jpg`,
    variants: [
      { code: "4297", size: "Ø 12 cm", detail: "Capacidad 1.2 litros." },
      { code: "4298", size: "Ø 14 cm", detail: "Capacidad 2 litros." },
      { code: "4299", size: "Ø 16 cm", detail: "Capacidad 3 litros." },
    ],
  },
  {
    id: "jarro-recto-baquelita",
    name: "Jarro recto con asa de baquelita",
    category: "familiar",
    img: `${U}2017/08/fotos-199.jpg`,
    variants: [
      { code: "4294", size: "Ø 8 cm", detail: "Capacidad 500 cc." },
      { code: "4295", size: "Ø 10 cm", detail: "Capacidad 700 cc." },
      { code: "4296", size: "Ø 11 cm", detail: "Capacidad 1 litro." },
    ],
  },
  {
    id: "jarro-recto-madera",
    name: "Jarro recto con asa de madera",
    category: "familiar",
    img: `${U}2017/08/fotos-198.jpg`,
    variants: [
      { code: "1401", size: "Ø 10 cm", detail: "Capacidad 0,7 litros." },
      { code: "1402", size: "Ø 11 cm", detail: "Capacidad 1 litro." },
    ],
  },
  {
    id: "lebrillo",
    name: "Lebrillo",
    category: "profesional",
    img: `${U}2019/02/20190220_144125-1-1024x693.jpg`,
    variants: [{ code: "4431", size: "Ø 40 cm", detail: "Capacidad 11 litros." }],
  },
  {
    id: "molde-budin-ingles",
    name: "Molde de budín inglés",
    category: "familiar",
    img: `${U}2017/08/FOTOS-446.jpg`,
    variants: [{ code: "1604", size: "27 × 10 × 7 cm" }],
  },
  {
    id: "molde-isla-flotante",
    name: "Molde de Isla Flotante c/tubo",
    category: "familiar",
    img: `${U}2026/05/FOTOS-411.jpg`,
    note: "26 cm de diámetro por 12 cm de altura.",
    variants: [{ code: "—", size: "Ø 26 cm", detail: "12 cm de altura. Con tubo." }],
  },
  {
    id: "moldes-aro",
    name: "Moldes Aro (cortantes)",
    category: "acero",
    img: `${U}2017/09/celu-setiembre-20-17-061-1024x576.jpg`,
    note: "Se hacen medidas especiales.",
    variants: [
      { code: "0168", size: "6 × 4 cm", detail: "Aro" },
      { code: "0169", size: "8 × 5 cm", detail: "Aro" },
      { code: "0170", size: "10 × 6 cm", detail: "Aro" },
      { code: "0167", size: "12 × 8 cm", detail: "Aro" },
      { code: "0165", size: "14 × 8 cm", detail: "Aro" },
      { code: "0166", size: "16 × 8 cm", detail: "Aro" },
      { code: "0171", size: "18 × 8 cm", detail: "Aro" },
      { code: "0172", size: "20 × 8 cm", detail: "Aro" },
      { code: "0173", size: "22 × 8 cm", detail: "Aro" },
      { code: "0174", size: "24 × 8 cm", detail: "Aro" },
      { code: "0175", size: "26 × 8 cm", detail: "Aro" },
      { code: "0176", size: "28 × 8 cm", detail: "Aro" },
      { code: "0177", size: "30 × 8 cm", detail: "Aro" },
    ],
  },
  {
    id: "moldes-flan",
    name: "Moldes para flan individual",
    category: "familiar",
    img: `${U}2017/08/fotos-124.jpg`,
    variants: [
      { code: "1601", size: "Ø 6 cm", detail: "6 cm de altura." },
      { code: "1602", size: "Ø 7 cm", detail: "7 cm de altura." },
      { code: "1603", size: "Ø 8 cm", detail: "6,5 cm de altura (con tubo)." },
    ],
  },
  {
    id: "olla-asas-aluminio",
    name: "Olla con asas de aluminio",
    category: "profesional",
    img: `${U}2019/02/20190220_141006-1-1024x975.jpg`,
    variants: [
      { code: "1753", size: "Ø 24 cm", detail: "Capacidad 10 litros." },
      { code: "1754", size: "Ø 26 cm", detail: "Capacidad 13 litros." },
      { code: "1755", size: "Ø 28 cm", detail: "Capacidad 17 litros." },
      { code: "1756", size: "Ø 30 cm", detail: "Capacidad 20 litros." },
    ],
  },
  {
    id: "olla-recta-baquelita",
    name: "Olla recta con asas de baquelita",
    category: "familiar",
    img: `${U}2017/08/fotos-210.jpg`,
    variants: [
      { code: "4302", size: "Ø 22 cm", detail: "Capacidad 8 litros." },
      { code: "4303", size: "Ø 24 cm", detail: "Capacidad 10 litros." },
      { code: "4304", size: "Ø 26 cm", detail: "Capacidad 13 litros." },
      { code: "4305", size: "Ø 28 cm", detail: "Capacidad 17 litros." },
      { code: "4306", size: "Ø 30 cm", detail: "Capacidad 20 litros." },
    ],
  },
  {
    id: "olla-recta-madera",
    name: "Olla recta con asas de madera",
    category: "familiar",
    img: `${U}2017/08/fotos-212.jpg`,
    variants: [
      { code: "1701", size: "Ø 22 cm", detail: "Capacidad 8 litros." },
      { code: "1702", size: "Ø 24 cm", detail: "Capacidad 10 litros." },
      { code: "1703", size: "Ø 26 cm", detail: "Capacidad 13 litros." },
      { code: "1704", size: "Ø 28 cm", detail: "Capacidad 17 litros." },
      { code: "1705", size: "Ø 30 cm", detail: "Capacidad 20 litros." },
    ],
  },
  {
    id: "olla-reforzada",
    name: "Olla reforzada con asas de aluminio",
    category: "industrial",
    img: `${U}2017/08/DSC00293-1.jpg`,
    variants: [
      { code: "1747", size: "Ø 36 cm × 31 cm de altura", detail: "Capacidad 30 litros." },
      { code: "1743", size: "Ø 39 cm × 37 cm de altura", detail: "Capacidad 45 litros." },
      { code: "1744", size: "Ø 45 cm × 40 cm de altura", detail: "Capacidad 65 litros." },
      { code: "1745", size: "Ø 49 cm × 43 cm de altura", detail: "Capacidad 80 litros." },
      { code: "1746", size: "Ø 55 cm × 46 cm de altura", detail: "Capacidad 110 litros." },
    ],
  },
  {
    id: "panera-aluminio",
    name: "Panera",
    category: "familiar",
    img: `${U}2017/08/fotos-161.jpg`,
    variants: [{ code: "3310", size: "Ø 24 cm" }],
  },
  {
    id: "panera-inox",
    name: "Panera",
    category: "acero",
    img: `${U}2017/11/20171129_133003-1-1024x620.jpg`,
    variants: [{ code: "3311", size: "Ø 24 cm" }],
  },
  {
    id: "pizzeras-hierro",
    name: "Pizzeras",
    category: "hierro",
    img: `${U}2017/08/fotos-108.jpg`,
    variants: [
      { code: "1983", size: "Ø 22 cm", detail: "3 cm de altura." },
      { code: "1984", size: "Ø 24 cm", detail: "3 cm de altura." },
      { code: "1985", size: "Ø 26 cm", detail: "3 cm de altura." },
      { code: "1986", size: "Ø 28 cm", detail: "3 cm de altura." },
      { code: "1987", size: "Ø 30 cm", detail: "3 cm de altura." },
      { code: "1988", size: "Ø 32 cm", detail: "3 cm de altura." },
    ],
  },
  {
    id: "pizzeras-fondo-fijo",
    name: "Pizzeras / Tarteras fondo fijo",
    category: "familiar",
    img: `${U}2017/08/fotos-168.jpg`,
    variants: [
      { code: "1912", size: "Ø 20 cm", detail: "3 cm de altura." },
      { code: "1901", size: "Ø 22 cm", detail: "3 cm de altura." },
      { code: "1902", size: "Ø 24 cm", detail: "3 cm de altura." },
      { code: "1903", size: "Ø 26 cm", detail: "3 cm de altura." },
      { code: "1904", size: "Ø 28 cm", detail: "3 cm de altura." },
      { code: "1905", size: "Ø 30 cm", detail: "3 cm de altura." },
    ],
  },
  {
    id: "pizzeras-fondo-movil",
    name: "Pizzeras / Tarteras fondo móvil",
    category: "familiar",
    img: `${U}2017/11/20170621_115858-1-1024x1014.jpg`,
    variants: [
      { code: "1915", size: "Ø 20 cm", detail: "3 cm de altura." },
      { code: "1906", size: "Ø 22 cm", detail: "3 cm de altura." },
      { code: "1907", size: "Ø 24 cm", detail: "3 cm de altura." },
      { code: "1908", size: "Ø 26 cm", detail: "3 cm de altura." },
      { code: "1909", size: "Ø 28 cm", detail: "3 cm de altura." },
      { code: "1910", size: "Ø 30 cm", detail: "3 cm de altura." },
    ],
  },
  {
    id: "plato-faina-cobre",
    name: "Plato de faina",
    category: "cobre",
    img: `${U}2017/10/fotos-384.jpg`,
    variants: [
      { code: "0073", size: "Ø 35 cm" },
      { code: "0070", size: "Ø 55 cm" },
    ],
  },
  {
    id: "plato-tropa",
    name: "Plato de tropa",
    category: "familiar",
    img: `${U}2017/10/fotos-096-1024x687.jpg`,
    variants: [{ code: "2103", size: "Ø 21 cm" }],
  },
  {
    id: "plato-hondo",
    name: "Plato hondo",
    category: "familiar",
    img: `${U}2017/10/fotos-143.jpg`,
    variants: [{ code: "2102", size: "Ø 22 cm" }],
  },
  {
    id: "plato-llano",
    name: "Plato llano",
    category: "familiar",
    img: `${U}2017/10/fotos-140.jpg`,
    variants: [{ code: "2101", size: "Ø 22 cm" }],
  },
  {
    id: "plato-faina-hierro",
    name: "Plato para faina",
    category: "hierro",
    img: `${U}2017/08/fotos-115.jpg`,
    variants: [
      { code: "2181", size: "Ø 55 cm" },
      { code: "2182", size: "Ø 70 cm" },
    ],
  },
  {
    id: "plato-faina-profesional",
    name: "Plato para faina",
    category: "profesional",
    img: `${U}2017/10/fotos-324.jpg`,
    variants: [
      { code: "2132", size: "Ø 55 cm" },
      { code: "2131", size: "Ø 70 cm" },
    ],
  },
  {
    id: "plato-tipo-tropa",
    name: "Plato tipo tropa",
    category: "acero",
    img: `${U}2017/11/fotos-468.jpg`,
    variants: [{ code: "2104", size: "Ø 20 cm" }],
  },
  {
    id: "platos-inox",
    name: "Platos",
    category: "acero",
    img: `${U}2017/11/20171129_133145-1-1024x824.jpg`,
    variants: [
      { code: "2171", size: "Ø 22 cm", detail: "Llano." },
      { code: "2172", size: "Ø 22 cm", detail: "Hondo." },
      { code: "2173", size: "Ø 18 cm", detail: "Postre." },
    ],
  },
  {
    id: "sarten-asas-cabo",
    name: "Sartén c/asas o c/cabo de aluminio",
    category: "profesional",
    img: `${U}2017/10/DSC00296.jpg`,
    variants: [
      { code: "2305", size: "Ø 18 cm", detail: "Con asas de aluminio." },
      { code: "2306", size: "Ø 20 cm", detail: "Con asas de aluminio." },
      { code: "2307", size: "Ø 22 cm", detail: "Con asas o c/cabo de aluminio." },
      { code: "2308", size: "Ø 24 cm", detail: "Con asas o c/cabo de aluminio." },
      { code: "2309", size: "Ø 26 cm", detail: "Con asas o c/cabo de aluminio." },
      { code: "2313", size: "Ø 28 cm", detail: "Con asas o c/cabo de aluminio." },
      { code: "2314", size: "Ø 30 cm", detail: "Con asas o c/cabo de aluminio." },
      { code: "2332", size: "Ø 40 cm", detail: "Con asas o c/cabo aluminio." },
    ],
  },
  {
    id: "sarten-cabo-baquelita",
    name: "Sartén cabo de baquelita",
    category: "familiar",
    img: `${U}2019/07/IMG_20190619_132726-1024x484.jpg`,
    variants: [
      { code: "2348", size: "Ø 18 cm", detail: "Cabo estándar." },
      { code: "2349", size: "Ø 20 cm", detail: "Cabo estándar." },
      { code: "2350", size: "Ø 22 cm", detail: "Cabo anatómico." },
      { code: "2351", size: "Ø 24 cm", detail: "Cabo anatómico." },
      { code: "2352", size: "Ø 26 cm", detail: "Cabo anatómico." },
      { code: "2355", size: "Ø 28 cm", detail: "Cabo anatómico reforzado." },
      { code: "2356", size: "Ø 30 cm", detail: "Cabo anatómico reforzado." },
    ],
  },
  {
    id: "sarten-mango-planchuela",
    name: "Sartén mango planchuela",
    category: "hierro",
    img: `${U}2017/06/hierro.jpg`,
    variants: [
      { code: "2414", size: "Ø 20 cm" },
      { code: "2415", size: "Ø 22 cm" },
      { code: "2416", size: "Ø 24 cm" },
      { code: "2417", size: "Ø 26 cm" },
      { code: "2418", size: "Ø 28 cm" },
      { code: "2419", size: "Ø 30 cm" },
      { code: "2390", size: "Ø 32 cm", detail: "Mango planchuela y asa de aluminio." },
    ],
  },
  {
    id: "sarten-panquequero",
    name: "Sartén panquequero cabo baquelita",
    category: "familiar",
    img: `${U}2025/11/20170621_112416-1-1024x897.jpg`,
    variants: [{ code: "4339", size: "Ø 17,5 cm", detail: "Cabo anatómico." }],
  },
  {
    id: "sarten-wok-baquelita",
    name: "Sartén wok profesional cabo de baquelita reforzado",
    category: "hierro",
    img: `${U}2019/07/IMG_20190724_221112_resized_20190731_121500924-1024x500.jpg`,
    variants: [
      { code: "2383", size: "Ø 30 cm" },
      { code: "2385", size: "Ø 35 cm" },
    ],
  },
  {
    id: "sarten-wok-planchuela",
    name: "Sartén wok profesional cabo planchuela",
    category: "hierro",
    img: `${U}2017/11/20171113_140324-1.jpg`,
    variants: [
      { code: "2384", size: "Ø 30 cm", detail: "Cabo de hierro y asa aluminio." },
      { code: "2379", size: "Ø 35 cm", detail: "Cabo de hierro y asa aluminio." },
    ],
  },
  {
    id: "tortera-fondo-fijo",
    name: "Tortera fondo fijo",
    category: "familiar",
    img: `${U}2017/11/20171129_133922-1-1024x758.jpg`,
    variants: [
      { code: "2630", size: "Ø 18 cm", detail: "6 cm de altura." },
      { code: "2631", size: "Ø 20 cm", detail: "6 cm de altura." },
      { code: "2632", size: "Ø 22 cm", detail: "6 cm de altura." },
      { code: "2633", size: "Ø 24 cm", detail: "6 cm de altura." },
      { code: "2634", size: "Ø 26 cm", detail: "6 cm de altura." },
      { code: "2635", size: "Ø 28 cm", detail: "6 cm de altura." },
      { code: "2636", size: "Ø 30 cm", detail: "6 cm de altura." },
      { code: "2650", size: "Ø 18 cm", detail: "10 cm de altura." },
      { code: "2651", size: "Ø 20 cm", detail: "10 cm de altura." },
      { code: "2652", size: "Ø 22 cm", detail: "10 cm de altura." },
      { code: "2653", size: "Ø 24 cm", detail: "10 cm de altura." },
      { code: "2654", size: "Ø 26 cm", detail: "10 cm de altura." },
      { code: "2655", size: "Ø 28 cm", detail: "10 cm de altura." },
      { code: "2656", size: "Ø 30 cm", detail: "10 cm de altura." },
    ],
  },
  {
    id: "tortera-fondo-movil",
    name: "Tortera fondo móvil",
    category: "familiar",
    img: `${U}2017/11/20171129_133701-1-1024x807.jpg`,
    variants: [
      { code: "2638", size: "Ø 18 cm", detail: "6 cm de altura." },
      { code: "2639", size: "Ø 20 cm", detail: "6 cm de altura." },
      { code: "2640", size: "Ø 22 cm", detail: "6 cm de altura." },
      { code: "2641", size: "Ø 24 cm", detail: "6 cm de altura." },
      { code: "2642", size: "Ø 26 cm", detail: "6.5 cm de altura." },
      { code: "2643", size: "Ø 28 cm", detail: "6 cm de altura." },
      { code: "2644", size: "Ø 30 cm", detail: "6 cm de altura." },
      { code: "2658", size: "Ø 18 cm", detail: "10 cm de altura." },
      { code: "2659", size: "Ø 20 cm", detail: "10 cm de altura." },
      { code: "2660", size: "Ø 22 cm", detail: "10 cm de altura." },
      { code: "2661", size: "Ø 24 cm", detail: "10 cm de altura." },
      { code: "2662", size: "Ø 26 cm", detail: "10 cm de altura." },
      { code: "2663", size: "Ø 28 cm", detail: "10 cm de altura." },
      { code: "2664", size: "Ø 30 cm", detail: "10 cm de altura." },
    ],
  },
];

/* Trabajos especiales — respetando el texto original del sitio */
export const SPECIAL = {
  id: "trabajos-especiales",
  name: "Trabajos especiales",
  img: `${U}2017/09/20170921_133821-1.jpg`,
  text: "Se realizan a necesidad del cliente trabajos especiales que en muchas oportunidades son totalmente atípicos al rubro gastronómico.",
  clients: [
    "Johnnie Walker",
    "Oscar Álvarez",
    "Antel",
    "Nevado",
    "Coronado",
    "Garnier",
    "Nuvó",
    "Shigot",
    "Microsoft",
    "Punta Carretas Shopping",
    "Seguros Alico",
    "L.A.T.U.",
    "Mac Pay",
    "Empresas de Televisión por Cable",
    "Empresas de Marketing (Go, Ogilvy and Mather, etc.)",
    "Tuuci the Ultimate Umbrella (USA)",
  ],
};

export const CONTACT = {
  address: "Domingo Aramburú 1784, Montevideo — Uruguay",
  tel: "+598 93 594 716",
  email: "hola@simplemente.com.uy",
  phoneDisplay: "+598 93 594 716",
  phoneIntl: "59893594716",
};

const enrich = (v: Variant): Variant => ({
  ...v,
  price: PRICE_MAP[v.code] ?? undefined,
});

export const PRODUCTS_ENRICHED: Product[] = PRODUCTS.map((p) => ({
  ...p,
  variants: p.variants.map(enrich),
}));

export const totalVariants = PRODUCTS.reduce((acc, p) => acc + p.variants.length, 0);
