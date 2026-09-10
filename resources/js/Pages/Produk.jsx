import React, { useState, useMemo } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { 
  ShoppingBag, 
  Search, 
  MapPin, 
  Phone, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  X, 
  ShieldCheck, 
  Truck, 
  HeartHandshake,
  MessageCircle
} from 'lucide-react';

/* ─── DATA PRODUK ─── */
const productsData = [
  {
    id: 1,
    name: "Pisang Kepok Enggano",
    category: "Hasil Kebun",
    seller: "Hotimah",
    sellerTitle: "Ibu Hotimah",
    phone: "082376388696",
    waNumber: "6282376388696",
    image: "/images/timeline/produk/pisang.jpg",
    tags: ["Organik", "Panen Segar", "Khas Enggano"],
    shortDesc: "Pisang kepok organik khas perkebunan Enggano dengan tekstur padat serta rasa manis legit alami.",
    fullDesc: "Ditanam langsung di tanah vulkanik subur Pulau Enggano tanpa pestisida kimia sintetis. Pisang kepok ini terkenal dengan daging buahnya yang padat, manis legit, dan sangat cocok dijadikan pisang goreng renyah, kolak, rebusan, atau olahan keripik pisang istimewa. Dipanen langsung dari pohon saat tingkat kematangan sempurna.",
    highlights: [
      "100% Organik dari kebun warga lokal",
      "Daging buah padat dan manis alami",
      "Bagus untuk konsumsi harian maupun olahan UMKM",
      "Dipanen segar saat ada pesanan"
    ],
    unit: "Per Sisir / Tandan (Hubungi Penjual)"
  },
  {
    id: 2,
    name: "Melinjo Enggano",
    category: "Hasil Kebun",
    seller: "Hotimah",
    sellerTitle: "Ibu Hotimah",
    phone: "082376388696",
    waNumber: "6282376388696",
    image: "/images/timeline/produk/melinjo1.jpeg",
    gallery: ["/images/timeline/produk/melinjo1.jpeg", "/images/timeline/produk/melinjo2.jpeg"],
    tags: ["Kualitas Super", "Pilihan", "Bahan Emping"],
    shortDesc: "Biji melinjo pilihan kualitas super dari pohon-pohon melinjo liar dan budidaya alami di pelosok Pulau Enggano.",
    fullDesc: "Melinjo Enggano dikenal memiliki kualitas biji yang padat, berkulit merah matang segar, dan berukuran optimal. Merupakan bahan baku utama bagi produsen emping khas Bengkulu dan Enggano yang legendaris. Dipetik secara berkala oleh petani lokal dengan seleksi biji terbaik.",
    highlights: [
      "Biji utuh padat berkualitas tinggi",
      "Bahan baku terbaik untuk emping gurih",
      "Hasil petik segar perkebunan warga",
      "Melayani partai kecil maupun pesanan rutin"
    ],
    unit: "Per Kilogram (Hubungi Penjual)"
  },
  {
    id: 3,
    name: "Emping Melinjo Enggano (Pak Arifi)",
    displayName: "Emping Melinjo Enggano",
    category: "Olahan Emping",
    seller: "Arifi",
    sellerTitle: "Pak Arifi",
    phone: "082141426099",
    waNumber: "6282141426099",
    image: "/images/timeline/produk/emping1.jpeg",
    tags: ["Olahan Tradisional", "Renyah Gurih", "Tanpa Pengawet"],
    shortDesc: "Emping melinjo murni buatan tangan Pak Arifi dengan ketipisan pas, tekstur renyah, dan aroma gurih otentik tanpa campuran.",
    fullDesc: "Diproduksi secara tradisional menggunakan teknik sangrai pasir dan penumbukan manual satu per satu oleh keluarga Pak Arifi di Enggano. Tanpa tambahan tepung atau bahan kimia pengawet apapun. Menghasilkan emping yang mekar sempurna saat digoreng, renyah gurih, dan memiliki sedikit rasa pahit khas melinjo yang nikmat.",
    highlights: [
      "100% Melinjo asli tanpa campuran tepung",
      "Olahan tangan (handmade) tradisional",
      "Dijemur alami di bawah sinar matahari laut",
      "Tahan lama disimpan dalam wadah kedap udara"
    ],
    unit: "Kemasan 500g / 1 Kg (Hubungi Penjual)"
  },
  {
    id: 4,
    name: "Emping Melinjo Enggano (Ibu Hotimah)",
    displayName: "Emping Melinjo Enggano",
    category: "Olahan Emping",
    seller: "Hotimah",
    sellerTitle: "Ibu Hotimah",
    phone: "082376388696",
    waNumber: "6282376388696",
    image: "/images/timeline/produk/emping2.jpeg",
    tags: ["Otentik Enggano", "Kering Sempurna", "Higienis"],
    shortDesc: "Emping melinjo kualitas premium olahan tangan Ibu Hotimah, diproses bersih dengan penjemuran kering matahari pulau.",
    fullDesc: "Emping melinjo produksi Ibu Hotimah menghadirkan cita rasa khas olahan rumahan Enggano. Dibuat dari melinjo pilihan yang baru dipetik, disangrai, ditumbuk tipis, dan dijemur hingga kering sempurna agar menghasilkan kerenyahan maksimal setelah digoreng. Cocok sebagai teman santap lauk pauk maupun camilan santai.",
    highlights: [
      "Produksi rumahan bersih dan higienis",
      "Tekstur renyah garing dan mekar merata",
      "Kualitas kering optimal untuk pengiriman luar pulau",
      "Oleh-oleh favorit wisatawan nusantara"
    ],
    unit: "Kemasan 500g / 1 Kg (Hubungi Penjual)"
  },
  {
    id: 5,
    name: "Ikan Asin Kakap Putih",
    category: "Hasil Laut",
    seller: "Arifi",
    sellerTitle: "Pak Arifi",
    phone: "082141426099",
    waNumber: "6282141426099",
    image: "/images/timeline/produk/ikan_asin1.jpeg",
    tags: ["Kakap Putih", "Tangkapan Laut Dalam", "Garam Murni"],
    shortDesc: "Ikan asin dari kakap putih segar hasil pancingan nelayan perairan karang Enggano, berdaging tebal dan lezat.",
    fullDesc: "Dibuat dari ikan kakap putih segar hasil tangkapan nelayan lokal Enggano di Samudera Hindia. Ikan langsung dibersihkan, dibelah rapi, dan diasinkan menggunakan garam laut murni tanpa formalin atau pengawet berbahaya. Dagingnya yang tebal menghasilkan rasa asin gurih yang pas dan tidak alot setelah digoreng.",
    highlights: [
      "Bahan baku ikan kakap putih segar pilihan",
      "Daging tebal dan lembut gurih",
      "Bebas bahan pengawet kimia / formalin",
      "Pengasinan seimbang dan penjemuran higienis"
    ],
    unit: "Per Kilogram / Pack (Hubungi Penjual)"
  },
  {
    id: 6,
    name: "Ikan Asin Enggano",
    category: "Hasil Laut",
    seller: "Hotimah",
    sellerTitle: "Ibu Hotimah",
    phone: "082376388696",
    waNumber: "6282376388696",
    image: "/images/timeline/produk/ikan_asin2.jpeg",
    tags: ["Hasil Nelayan Lokal", "Gurih Mantap", "Lauk Favorit"],
    shortDesc: "Ikan asin tradisional khas pulau hasil olahan Ibu Hotimah, cita rasa asin gurih alami yang menggugah selera makan.",
    fullDesc: "Pilihan ikan laut segar hasil tangkapan nelayan pesisir Enggano yang diolah menjadi ikan asin bermutu tinggi. Sangat nikmat digoreng garing lalu disajikan bersama nasi putih panas, sayur asem, dan sambal terasi. Awet dan tahan disimpan dalam perjalanan pengiriman antar pulau.",
    highlights: [
      "Olahan nelayan pesisir asli Enggano",
      "Kering maksimal dan harum khas ikan laut",
      "Sangat cocok untuk stok lauk makan keluarga",
      "Harga langsung dari produsen lokal"
    ],
    unit: "Per Kilogram / Pack (Hubungi Penjual)"
  }
];

export default function Produk() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const categories = ['Semua', 'Hasil Kebun', 'Olahan Emping', 'Hasil Laut'];

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return productsData.filter(item => {
      const matchCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchSearch = searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.seller.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Create formatted WhatsApp link
  const getWhatsAppLink = (product) => {
    const message = `Halo ${product.sellerTitle}, saya tertarik dengan produk ${product.displayName || product.name} yang ada di website EngganoPedia. Apakah stok saat ini masih tersedia?`;
    return `https://api.whatsapp.com/send/?phone=${product.waNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
  };

  return (
    <MainLayout>
      <Head title="Produk Lokal & UMKM | EngganoPedia" />

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-forest">
        {/* Background Image with Ambient Gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: 'url(/images/timeline/produk/pisang.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081d27]/90 via-[#081d27]/80 to-[#081d27]" />
        
        {/* Glow Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/15 border border-teal/30 text-teal text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pasar UMKM & Hasil Bumi</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            Produk Lokal & Oleh-Oleh <br className="hidden sm:block" />
            <span className="text-teal italic">Khas Pulau Enggano</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Dukung langsung petani, pengrajin, dan nelayan lokal Pulau Enggano. Dapatkan hasil bumi organik dan olahan laut otentik dari tangan pertama.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/70 text-xs sm:text-sm font-medium border-t border-white/10 pt-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
              <span>100% Asli Pulau Enggano</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
              <span>Langsung Dari Petani & Nelayan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
              <span>Tanpa Bahan Kimia Pengawet</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEARCH & FILTER CONTROLS ─── */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-forest/10 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-forest text-white shadow-md'
                      : 'bg-cream text-forest/70 hover:bg-teal/15 hover:text-forest'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-dark/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari produk khas Enggano..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-cream text-forest rounded-xl border border-forest/10 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent placeholder-dark/40"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-dark/40 hover:text-dark"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATALOG GRID ─── */}
      <section className="py-16 sm:py-24 bg-[#FAF9F5] min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-forest/10 gap-4">
            <div>
              <p className="text-xs font-bold tracking-wider text-teal uppercase mb-1">
                Katalog UMKM
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
                Daftar Produk Unggulan
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-dark/60 font-medium">
              Menampilkan <span className="font-bold text-forest">{filteredProducts.length}</span> produk
            </p>
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-forest/10 p-8 shadow-sm">
              <ShoppingBag className="w-12 h-12 text-teal/50 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-forest mb-2">Produk tidak ditemukan</h3>
              <p className="text-dark/60 text-sm max-w-md mx-auto mb-6">
                Tidak ada produk yang cocok dengan pencarian "{searchQuery}" atau filter kategori yang dipilih.
              </p>
              <button
                onClick={() => { setSelectedCategory('Semua'); setSearchQuery(''); }}
                className="px-5 py-2.5 rounded-xl bg-teal text-white font-semibold text-xs sm:text-sm hover:bg-forest transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-forest/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                data-aos="fade-up"
              >
                {/* Product Image Header */}
                <div 
                  className="relative aspect-[4/3] bg-dark/5 overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold underline underline-offset-4">
                      Klik untuk melihat detail lengkap
                    </span>
                  </div>

                  {/* Category Chip */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-forest font-bold text-[11px] shadow-sm border border-forest/5">
                    {product.category}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {product.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-forest/5 text-forest/70 text-[10px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => setActiveModalProduct(product)}
                      className="font-serif text-xl sm:text-2xl font-bold text-forest hover:text-teal transition-colors cursor-pointer mb-2"
                    >
                      {product.displayName || product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-dark/70 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                      {product.shortDesc}
                    </p>
                  </div>

                  <div>
                    {/* Seller Box */}
                    <div className="bg-[#FAF9F5] rounded-2xl p-3.5 border border-forest/5 mb-5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal/15 text-teal font-bold flex items-center justify-center font-serif text-base shrink-0 border border-teal/30">
                          {product.seller.charAt(0)}
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-dark/40 tracking-wider">Penjual Langsung</p>
                          <p className="text-sm font-bold text-forest">{product.sellerTitle}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-dark/60">
                          <MapPin className="w-3 h-3 text-teal" />
                          Enggano
                        </span>
                        <p className="text-[11px] font-mono text-dark/50">{product.phone}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveModalProduct(product)}
                        className="py-3 px-4 rounded-xl border border-forest/15 text-forest font-semibold text-xs sm:text-sm hover:bg-forest/5 transition-colors"
                      >
                        Detail
                      </button>

                      <a
                        href={getWhatsAppLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-forest transition-colors group/btn"
                      >
                        <MessageCircle className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                        <span>Hubungi Penjual</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── VALUE PROPOSITION & DIRECT SUPPORT SECTION ─── */}
      <section className="py-20 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(94,234,212,.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-teal text-xs font-bold tracking-widest uppercase mb-3 block">
              Keunggulan Berbelanja Langsung
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Mengapa Berbelanja Langsung dari Warga Enggano?
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Setiap rupiah pembelian Anda berdampak nyata dalam memutar roda ekonomi keluarga di salah satu pulau terluar Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-teal/40 transition-colors" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 rounded-xl bg-teal/20 text-teal flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-white">100% Keuntungan untuk Warga</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Tanpa perantara rantai distribusi panjang. Transaksi dilakukan langsung antara Anda dan para pengrajin serta petani lokal Enggano.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-teal/40 transition-colors" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 rounded-xl bg-teal/20 text-teal flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-white">Kualitas Asli & Otentik</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Diproduksi dari bahan alam murni Pulau Enggano. Dari emping melinjo tanpa campuran hingga ikan asin tanpa bahan pengawet berbahaya.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-teal/40 transition-colors" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 rounded-xl bg-teal/20 text-teal flex items-center justify-center mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-white">Pengiriman Terkoordinasi</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Penjual siap membantu koordinasi pengiriman pesanan Anda melalui jadwal kapal ferry atau penerbangan perintis dari Pulau Enggano ke Bengkulu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PANDUAN PEMESANAN ─── */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
          <span className="text-teal text-xs font-bold tracking-widest uppercase mb-3 block">
            Alur Pemesanan Mudah
          </span>
          <h2 className="font-serif text-3xl font-bold text-forest mb-12">
            Cara Praktis Membeli Produk Enggano
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl border border-forest/10 shadow-sm relative">
              <div className="w-8 h-8 rounded-full bg-forest text-white font-bold flex items-center justify-center text-sm mb-4">
                1
              </div>
              <h4 className="font-bold text-forest text-base mb-2">Pilih Produk</h4>
              <p className="text-dark/70 text-xs sm:text-sm leading-relaxed">
                Telusuri katalog produk di halaman ini dan klik tombol <strong>Hubungi Penjual</strong> pada produk yang Anda minati.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-forest/10 shadow-sm relative">
              <div className="w-8 h-8 rounded-full bg-forest text-white font-bold flex items-center justify-center text-sm mb-4">
                2
              </div>
              <h4 className="font-bold text-forest text-base mb-2">Chat Langsung via WhatsApp</h4>
              <p className="text-dark/70 text-xs sm:text-sm leading-relaxed">
                Tanyakan ketersediaan stok, jumlah pesanan, dan diskusikan opsi pengiriman terbaik bersama penjual.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-forest/10 shadow-sm relative">
              <div className="w-8 h-8 rounded-full bg-forest text-white font-bold flex items-center justify-center text-sm mb-4">
                3
              </div>
              <h4 className="font-bold text-forest text-base mb-2">Produk Dikirim</h4>
              <p className="text-dark/70 text-xs sm:text-sm leading-relaxed">
                Pesanan Anda disiapkan segar dan dikirimkan menggunakan transportasi antarpulau sampai ke alamat tujuan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODAL DETAIL PRODUK ─── */}
      {activeModalProduct && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-dark/75 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setActiveModalProduct(null)}
        >
          <div 
            className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 bg-forest shrink-0 overflow-hidden">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-teal text-white font-bold text-xs uppercase tracking-wider mb-2 inline-block">
                  {activeModalProduct.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {activeModalProduct.displayName || activeModalProduct.name}
                </h3>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-dark/40 mb-2">Tentang Produk</h4>
                <p className="text-dark/80 text-sm sm:text-base leading-relaxed">
                  {activeModalProduct.fullDesc}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-dark/40 mb-3">Keunggulan Utama</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalProduct.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-dark/80 bg-[#FAF9F5] p-2.5 rounded-xl border border-forest/5">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seller Contact Card */}
              <div className="bg-[#FAF9F5] rounded-2xl p-5 border border-forest/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-teal/20 text-teal font-serif font-bold text-lg flex items-center justify-center shrink-0 border border-teal/30">
                    {activeModalProduct.seller.charAt(0)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-dark/40 uppercase tracking-wider">Kontak Penjual</span>
                    <h5 className="font-serif text-base font-bold text-forest">{activeModalProduct.sellerTitle}</h5>
                    <p className="text-xs text-dark/60 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-teal" />
                      Pulau Enggano, Bengkulu Utara
                    </p>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="text-[10px] font-bold text-dark/40 uppercase tracking-wider block">No. WhatsApp</span>
                  <span className="text-sm font-bold font-mono text-forest">{activeModalProduct.phone}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="py-3 px-5 rounded-xl border border-forest/15 text-forest font-semibold text-sm hover:bg-cream transition-colors"
                >
                  Tutup
                </button>
                <a
                  href={getWhatsAppLink(activeModalProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-teal text-white font-semibold text-sm shadow-md hover:bg-forest transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi Penjual via WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </MainLayout>
  );
}
