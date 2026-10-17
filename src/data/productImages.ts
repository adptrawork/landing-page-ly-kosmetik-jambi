import type { ImageMetadata } from 'astro';

import p1 from '../assets/products/ly-p1.webp';
import p2 from '../assets/products/ly-p2.webp';
import p3 from '../assets/products/ly-p3.webp';
import p4 from '../assets/products/ly-p4.webp';
import p5 from '../assets/products/ly-p5.webp';
import p6 from '../assets/products/ly-p6.webp';
import p7 from '../assets/products/ly-p7.webp';
import p8 from '../assets/products/ly-p8.webp';

/**
 * Jembatan antara path gambar di `business.ts` (tetap sumber data, tidak diubah)
 * dan aset yang dioptimasi build-time oleh `astro:assets`.
 *
 * Foto produk hanya tampil di slot 72x72 px, jadi Astro memotong varian
 * 96/192/288 px + srcset. Tanpa ini, satu baris katalog menarik ~35 KB WebP
 * 800x800 (~280 KB per halaman katalog) untuk 72 px.
 */
const productImages: Record<string, ImageMetadata> = {
  '/images/ly-p1.webp': p1,
  '/images/ly-p2.webp': p2,
  '/images/ly-p3.webp': p3,
  '/images/ly-p4.webp': p4,
  '/images/ly-p5.webp': p5,
  '/images/ly-p6.webp': p6,
  '/images/ly-p7.webp': p7,
  '/images/ly-p8.webp': p8,
};

/** Aset teroptimasi untuk produk; jatuh ke path mentah bila nama tidak terdaftar. */
export const productImage = (path: string): ImageMetadata | string => productImages[path] ?? path;
