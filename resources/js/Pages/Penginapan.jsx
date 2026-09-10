import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { 
  MapPin, 
  Phone, 
  CheckCircle2, 
  MessageCircle, 
  X, 
  Compass, 
  ChevronLeft, 
  ChevronRight,
  Info,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';

/* ─── DATA HOMESTAY ─── */
const homestaysData = [
  {
    id: 1,
    name: "Homestay Arina",
    host: "Ibu Arina / Pengelola",
    phone: "081273894167",
    waNumber: "6281273894167",
    price: "Rp 250.000",
    priceUnit: "malam",
    priceSubtitle: "Tarif standar per malam",
    mainImage: "/images/timeline/penginapan/arina1.jpeg",
    images: [
      "/images/timeline/penginapan/arina1.jpeg",
      "/images/timeline/penginapan/arina2.jpeg",
      "/images/timeline/penginapan/arina3.jpeg"
    ],
    shortDesc: "Penginapan homestay bernuansa hangat dan tenang di Pulau Enggano. Menawarkan kenyamanan istirahat maksimal setelah seharian menjelajahi keindahan alam pulau.",
    fullDesc: "Homestay Arina merupakan pilihan tempat menginap yang sangat ideal bagi wisatawan, peneliti, maupun keluarga yang berkunjung ke Pulau Enggano. Menghadirkan kamar yang bersih, ranjang yang nyaman, sirkulasi udara segar, dan suasana pemukiman yang ramah dan aman. Tuan rumah yang ramah siap menyambut dan membantu kebutuhan istirahat Anda selama berada di pulau.",
    location: "Pulau Enggano, Bengkulu Utara"
  },
  {
    id: 2,
    name: "Homestay Arifi",
    host: "Pak Arifi",
    phone: "082141426099",
    waNumber: "6282141426099",
    price: "Rp 175.000 - Rp 250.000",
    priceUnit: "malam",
    priceSubtitle: "Tergantung pilihan tipe kamar",
    mainImage: "/images/timeline/penginapan/arifi1.jpeg",
    images: [
      "/images/timeline/penginapan/arifi1.jpeg",
      "/images/timeline/penginapan/arifi2.jpeg",
      "/images/timeline/penginapan/arifi3.jpeg",
      "/images/timeline/penginapan/arifi4.jpeg",
      "/images/timeline/penginapan/arifi5.jpeg"
    ],
    shortDesc: "Homestay ramah dan terjangkau yang dikelola langsung oleh Pak Arifi. Pilihan tepat untuk solo traveler, backpacker, maupun rombongan jelajah pulau.",
    fullDesc: "Dikelola langsung oleh tokoh lokal yang sangat ramah dan mengenal seluk-beluk Pulau Enggano, Pak Arifi. Homestay ini menawarkan suasana kekeluargaan yang autentik. Selain kamar menginap yang nyaman dan bersih dengan harga fleksibel, Anda juga dapat berkonsultasi mengenai pemandu wisata lokal, rute petualangan terbaik di Enggano, hingga mencicipi olahan emping dan kuliner laut khas pulau.",
    location: "Pulau Enggano, Bengkulu Utara"
  }
];

export default function Penginapan() {
  const [selectedGallery, setSelectedGallery] = useState(null); // { homestay, activeIdx }
  const [activeThumbIndices, setActiveThumbIndices] = useState({ 1: 0, 2: 0 });

  const getWhatsAppLink = (homestay) => {
    const message = `Halo ${homestay.host}, saya ingin menanyakan ketersediaan kamar di ${homestay.name} untuk rencana kunjungan ke Pulau Enggano. Apakah pada tanggal tersebut ada kamar kosong?`;
    return `https://api.whatsapp.com/send/?phone=${homestay.waNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
  };

  const handleNextPhoto = () => {
    if (!selectedGallery) return;
    const { homestay, activeIdx } = selectedGallery;
    const nextIdx = (activeIdx + 1) % homestay.images.length;
    setSelectedGallery({ homestay, activeIdx: nextIdx });
  };

  const handlePrevPhoto = () => {
    if (!selectedGallery) return;
    const { homestay, activeIdx } = selectedGallery;
    const prevIdx = (activeIdx - 1 + homestay.images.length) % homestay.images.length;
    setSelectedGallery({ homestay, activeIdx: prevIdx });
  };

  return (
    <MainLayout>
      <Head title="Penginapan & Homestay | EngganoPedia" />

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[55vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-forest">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: 'url(/images/timeline/penginapan/arina1.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081d27]/90 via-[#081d27]/80 to-[#081d27]" />
        
        {/* Glow Ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            Penginapan & Homestay <br className="hidden sm:block" />
            <span className="text-teal italic">di Pulau Enggano</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Rasakan kehangatan keramahan warga pulau terluar dengan bermalam di homestay yang bersih, nyaman, dan terjangkau bersama keluarga lokal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/70 text-xs sm:text-sm font-medium border-t border-white/10 pt-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
              <span>Bersih & Nyaman</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
              <span>Langsung ke Pemilik</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
              <span>Harga Ramah Wisatawan</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LISTINGS SECTION ─── */}
      <section className="py-20 sm:py-28 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-teal text-xs font-bold tracking-widest uppercase mb-2 block">
              Pilihan Homestay Warga
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
              Daftar Homestay Rekomendasi
            </h2>
            <p className="text-dark/65 text-sm sm:text-base">
              Hubungi langsung pemilik homestay melalui WhatsApp untuk menanyakan ketersediaan kamar dan melakukan pemesanan tanpa biaya perantara.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {homestaysData.map((item, index) => {
              const currentImgIdx = activeThumbIndices[item.id] || 0;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-forest/10 shadow-lg hover:shadow-xl transition-all duration-300"
                  data-aos="fade-up"
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Visual Media Column */}
                    <div className="lg:w-1/2 p-5 sm:p-7 flex flex-col justify-between bg-[#FAF9F5]/60">
                      {/* Main Big Photo */}
                      <div 
                        className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
                        onClick={() => setSelectedGallery({ homestay: item, activeIdx: currentImgIdx })}
                      >
                        <img
                          src={item.images[currentImgIdx]}
                          alt={`${item.name} foto ${currentImgIdx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-white text-xs font-semibold underline underline-offset-4">
                            Klik untuk memperbesar galeri foto ({item.images.length} foto)
                          </span>
                        </div>
                      </div>

                      {/* Thumbnail Strip */}
                      <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
                        {item.images.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            onClick={() => setActiveThumbIndices(prev => ({ ...prev, [item.id]: imgIdx }))}
                            className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                              currentImgIdx === imgIdx 
                                ? 'border-teal ring-2 ring-teal/30 scale-105' 
                                : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Thumbnail ${imgIdx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
                      <div>
                        {/* Title & Price Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-forest/10">
                          <div>
                            <div className="flex items-center gap-2 text-teal text-xs font-bold uppercase tracking-wider mb-1">
                              <MapPin className="w-3.5 h-3.5" />
                              <span>{item.location}</span>
                            </div>
                            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
                              {item.name}
                            </h3>
                            <p className="text-xs text-dark/50 mt-1 font-medium">
                              Tuan Rumah: <span className="font-bold text-forest">{item.host}</span>
                            </p>
                          </div>

                          <div className="sm:text-right bg-teal/10 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                            <p className="text-[10px] uppercase font-bold text-dark/40 tracking-wider">Tarif Menginap</p>
                            <div className="font-serif text-2xl sm:text-3xl font-bold text-teal leading-none mt-0.5">
                              {item.price}
                            </div>
                            <p className="text-[11px] text-dark/50 mt-1">/ {item.priceUnit} ({item.priceSubtitle})</p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-dark/70 text-sm sm:text-base leading-relaxed my-6">
                          {item.fullDesc}
                        </p>
                      </div>

                      {/* Contact & CTA */}
                      <div className="pt-6 border-t border-forest/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <div className="bg-cream px-4 py-2.5 rounded-xl border border-forest/5 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-teal/20 text-teal flex items-center justify-center font-bold text-xs shrink-0">
                            <Phone className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[10px] text-dark/40 uppercase font-bold">WhatsApp / Telepon</p>
                            <p className="font-mono text-sm font-bold text-forest">{item.phone}</p>
                          </div>
                        </div>

                        <a
                          href={getWhatsAppLink(item)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal text-white font-semibold text-sm shadow-md hover:bg-forest transition-all duration-200 group"
                        >
                          <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                          <span>Hubungi & Pesan Kamar</span>
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── TIPS MENGINAP DI ENGGANO ─── */}
      <section className="py-20 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(94,234,212,.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-teal text-xs font-bold tracking-widest uppercase mb-2 block">
              Panduan Praktis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Tips Nyaman Menginap di Pulau Enggano
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Persiapkan perjalanan Anda dengan beberapa catatan penting berikut untuk pengalaman liburan yang menyenangkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-teal/40 transition-colors" data-aos="fade-up" data-aos-delay="100">
              <CalendarCheck className="w-8 h-8 text-teal mb-4" />
              <h4 className="font-serif text-lg font-bold mb-2">Reservasi Lebih Awal</h4>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Kapasitas homestay di pulau terbatas. Pastikan menghubungi pemilik 3–7 hari sebelum jadwal penyeberangan kapal atau pesawat.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-teal/40 transition-colors" data-aos="fade-up" data-aos-delay="200">
              <ShieldCheck className="w-8 h-8 text-teal mb-4" />
              <h4 className="font-serif text-lg font-bold mb-2">Penyediaan Uang Tunai</h4>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Fasilitas ATM dan mesin EDC di pulau sangat minim. Siapkan uang tunai yang cukup untuk akomodasi, makan, dan transportasi lokal.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-teal/40 transition-colors" data-aos="fade-up" data-aos-delay="300">
              <Info className="w-8 h-8 text-teal mb-4" />
              <h4 className="font-serif text-lg font-bold mb-2">Sinyal & Komunikasi</h4>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Jaringan seluler utama yang menjangkau pulau adalah Telkomsel (4G di area pemukiman). Bawalah powerbank saat berpetualang.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-teal/40 transition-colors" data-aos="fade-up" data-aos-delay="400">
              <Compass className="w-8 h-8 text-teal mb-4" />
              <h4 className="font-serif text-lg font-bold mb-2">Sewa Kendaraan</h4>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Tuan rumah homestay dapat membantu mencarikan sewa motor lokal atau pemandu jalan untuk berkeliling antar desa dengan mudah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LIGHTBOX MODAL GALERI FOTO ─── */}
      {selectedGallery && (
        <div 
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedGallery(null)}
        >
          <div 
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between text-white mb-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">{selectedGallery.homestay.name}</h3>
                <p className="text-xs text-white/60">Foto {selectedGallery.activeIdx + 1} dari {selectedGallery.homestay.images.length}</p>
              </div>
              <button
                onClick={() => setSelectedGallery(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Photo Container */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[75vh] bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
              <img
                src={selectedGallery.homestay.images[selectedGallery.activeIdx]}
                alt={`${selectedGallery.homestay.name} preview`}
                className="w-full h-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center backdrop-blur-sm transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center backdrop-blur-sm transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Strip Thumbnails */}
            <div className="flex items-center gap-2 mt-4 overflow-x-auto max-w-full p-2">
              {selectedGallery.homestay.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedGallery(prev => ({ ...prev, activeIdx: i }))}
                  className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedGallery.activeIdx === i ? 'border-teal scale-110' : 'border-transparent opacity-40 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Bottom Book Button */}
            <div className="mt-4">
              <a
                href={getWhatsAppLink(selectedGallery.homestay)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-teal text-white font-semibold text-sm shadow-lg hover:bg-teal/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Kamar Ini Sekarang ({selectedGallery.homestay.price})</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </MainLayout>
  );
}
