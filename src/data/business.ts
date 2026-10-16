export const business = {
  name: 'Ly Kosmetik Jambi',
  slug: 'ly-kosmetik-jambi',
  category: 'Skincare & Kosmetik',
  city: 'Kota Jambi',
  rating: 5.0,
  reviewCount: 80,
  phone: '6281234567890',
  phoneDisplay: 'Info menyusul',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ly+Kosmetik+Jambi',
  mapsQuery: 'Ly Kosmetik Jambi',
  address: 'Alamat menyusul — cari "Ly Kosmetik Jambi" di Google Maps',
  addressStatus: 'Info menyusul',
  hours: 'Estimasi 09.00–21.00 (placeholder)',
  hoursStatus: 'Info menyusul',
  instagram: '#',
  instagramLabel: 'Info menyusul',
  title: 'Ly Kosmetik Jambi — Katalog Skincare & Info Toko Terbaru',
  description: 'Ly Kosmetik Jambi: katalog skincare & info toko segera update. Alamat, WA & jam menyusul — cari di Maps atau tanya via WA sementara.',
  canonicalPath: '/',
  ogImage: '/images/ly-hero.jpg',
};

export const socials: Array<{ label: string; url: string; note: string }> = [
  { label: 'Info menyusul', url: '#', note: 'Akun resmi toko belum terverifikasi — Info menyusul' },
];

export const storeNotes: string[] = [
  'Belum ada data publik terverifikasi: alamat, WA & jam masih placeholder — Info menyusul',
  'Produk di bawah placeholder realistis + disclaimer.',
];

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  { name: 'Skincare Brightening Series', price: 'Rp 50–150rb', badge: 'Info menyusul', stock: 'Tanya Stok', image: '/images/ly-p1.jpg', alt: 'Ilustrasi generik brand Skintific — foto resmi skintific.com, hanya pemanis', w: 800, h: 800, source: 'Sumber: skintific.com — Info menyusul' },
  { name: 'Clay Mask Series', price: 'Rp 80–130rb', badge: 'Info menyusul', stock: 'Tanya Stok', image: '/images/ly-p2.jpg', alt: 'Ilustrasi generik brand Skintific — foto resmi skintific.com, hanya pemanis', w: 800, h: 800, source: 'Sumber: skintific.com — Info menyusul' },
  { name: 'Moisturizer Series', price: 'Rp 50–80rb', badge: 'Info menyusul', stock: 'Tanya Stok', image: '/images/ly-p3.jpg', alt: 'Ilustrasi generik brand Glad2Glow — foto resmi glad2glow.com, hanya pemanis', w: 800, h: 800, source: 'Sumber: glad2glow.com — Info menyusul' },
  { name: 'Serum Series', price: 'Rp 50–80rb', badge: 'Info menyusul', stock: 'Tanya Stok', image: '/images/ly-p4.jpg', alt: 'Ilustrasi generik brand Glad2Glow — foto resmi glad2glow.com, hanya pemanis', w: 800, h: 800, source: 'Sumber: glad2glow.com — Info menyusul' },
  { name: 'Barrier Moisturizer Series', price: 'Rp 50–80rb', badge: 'Info menyusul', stock: 'Tanya Stok', image: '/images/ly-p5.jpg', alt: 'Ilustrasi generik brand Glad2Glow — foto resmi glad2glow.com, hanya pemanis', w: 800, h: 800, source: 'Sumber: glad2glow.com — Info menyusul' },
  { name: 'Sunscreen Series', price: 'Rp 40–90rb', badge: 'Info menyusul', stock: 'Tanya Stok', image: '/images/ly-p6.jpg', alt: 'Ilustrasi generik brand Facetology — foto resmi facetology.id, hanya pemanis', w: 800, h: 800, source: 'Sumber: facetology.id — Info menyusul' },
  { name: 'Toner Series', price: 'Rp 40–90rb', badge: 'Info menyusul', stock: 'Tanya Stok', image: '/images/ly-p7.jpg', alt: 'Ilustrasi generik brand Facetology — foto resmi facetology.id, hanya pemanis', w: 800, h: 800, source: 'Sumber: facetology.id — Info menyusul' },
  { name: 'Cream Series', price: 'Rp 50–120rb', badge: 'Info menyusul', stock: 'Tanya Stok', image: '/images/ly-p8.jpg', alt: 'Ilustrasi generik brand Facetology — foto resmi facetology.id, hanya pemanis', w: 800, h: 800, source: 'Sumber: facetology.id — Info menyusul' },
];

export const promos = [
  { title: 'Info Promo Menyusul', desc: 'Promo toko akan ditampilkan setelah data resmi terverifikasi.', status: 'Info menyusul.' },
  { title: 'Usulan Katalog Sementara', desc: 'Contoh bundling placeholder — jangan dijadikan acuan harga.', status: 'Info menyusul.' },
  { title: 'Bantu Verifikasi?', desc: 'Kenal pemilik Ly Kosmetik? Minta update info resmi via WA sementara.', status: 'Info menyusul.' },
];
