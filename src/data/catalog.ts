import { products } from './business';

/**
 * Turunan tampilan dari katalog (bukan data bisnis baru).
 * "jenis" diambil dari nama produk dengan menghapus akhiran "Series".
 */
export const typeOf = (name: string) => name.replace(/\s*Series$/i, '');

/** Kategori grosir untuk filter & pengelompokan di halaman. */
export const productGroups = [
  { name: 'Perawatan & brightening', match: /brightening|skincare/i },
  { name: 'Masker', match: /mask/i },
  { name: 'Pelembap & krim', match: /moisturizer|cream/i },
  { name: 'Serum', match: /serum/i },
  { name: 'Sunscreen', match: /sunscreen/i },
  { name: 'Toner', match: /toner/i },
];

export const groupOf = (name: string) => productGroups.find((g) => g.match.test(name))?.name ?? 'Lainnya';

export const groupedCatalog = productGroups
  .map((g) => ({ name: g.name, items: products.filter((p) => g.match.test(p.name)) }))
  .filter((g) => g.items.length > 0);
