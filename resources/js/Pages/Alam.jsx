import React, { useEffect, useState, useRef } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Skiper32 from '@/Components/ui/skiper-ui/skiper32';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Alam() {
  const [filter, setFilter] = useState('Semua');
  const [activeAccordion, setActiveAccordion] = useState(null);
  const parallaxRef = useRef(null);

  const destinasi = [
    { title: "Pantai Bak Blau", desc: "Pasir putih lembut, air biru kristal", cat: "Pantai", img: "/images/timeline/bak_blau.webp" },
    { title: "Batu Lubang", desc: "Formasi batu berlubang unik", cat: "Geologi", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80" },
    { title: "Danau Hutan", desc: "Danau tersembunyi di hutan lebat", cat: "Hutan", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80" },
    { title: "Kolam Alami", desc: "Kolam alami bersih di tengah hutan", cat: "Hutan", img: "https://images.unsplash.com/photo-1534705867302-2a4128f117bc?w=800&q=80" },
    { title: "Spot Snorkeling", desc: "Terumbu karang terjaga, ikan berwarna", cat: "Bahari", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80" },
    { title: "Sunset Point", desc: "Panorama matahari terbenam ikonik", cat: "Pantai", img: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80" },
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80', title: 'Pantai asri' },
    { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80', title: 'Batu Karang' },
    { url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80', title: 'Hutan Tropis' },
    { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', title: 'Bawah Laut' },
    { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80', title: 'Senja' },
  ];

  const tips = [
    { q: "Waktu terbaik berkunjung", a: "Musim kemarau (Mei hingga September) adalah waktu terbaik dengan curah hujan rendah dan ombak yang bersahabat untuk penyeberangan." },
    { q: "Perlengkapan yang dibawa", a: "Bawa uang tunai secukupnya, obat-obatan pribadi, sunblock, perlengkapan snorkeling, dan pakaian yang nyaman untuk iklim tropis." },
    { q: "Cara menuju Enggano", a: "Bisa menggunakan Kapal Ferry (KMP Pulo Tello) dari Pelabuhan Pulau Baai Bengkulu, berlayar sekitar 12 jam. Tersedia jadwal 2 kali seminggu." },
    { q: "Akomodasi yang tersedia", a: "Terdapat homestay yang dikelola warga lokal dan beberapa penginapan sederhana. Jangan harapkan resor mewah, namun keramahtamahan warga sangat hangat." },
    { q: "Estimasi biaya perjalanan", a: "Untuk backpacker sekitar Rp 1.500.000 - Rp 2.500.000 selama 4 hari 3 malam termasuk tiket kapal penyeberangan." },
  ];

  // GSAP Filter Animation
  useEffect(() => {
    const cards = gsap.utils.toArray('.destinasi-card');
    
    cards.forEach(card => {
      const isVisible = filter === 'Semua' || card.dataset.cat === filter;
      
      if (isVisible) {
        gsap.to(card, {
          scale: 1,
          opacity: 1,
          display: 'block',
          duration: 0.4,
          ease: 'power2.out'
        });
      } else {
        gsap.to(card, {
          scale: 0.8,
          opacity: 0,
          display: 'none',
          duration: 0.4,
          ease: 'power2.in'
        });
      }
    });
  }, [filter]);

  // Parallax Essay Animation
  useEffect(() => {
    if (parallaxRef.current) {
      const sections = gsap.utils.toArray('.parallax-section');
      
      sections.forEach((sec) => {
        const bg = sec.querySelector('.parallax-bg');
        
        gsap.to(bg, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: sec,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      });
    }
  }, []);

  return (
    <MainLayout>
      <Head title="Keindahan Alam | Enggano Pedia" />

      {/* HEADER SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)' }}
        ></div>
        <div className="absolute inset-0 bg-teal/60 mix-blend-multiply"></div>
        <div className="relative z-10 text-center px-4" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4">Keindahan Alam Pulau Enggano</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">Dari pantai asri hingga hutan lebat — eksplorasi keajaiban alam Enggano yang belum tersentuh.</p>
        </div>
      </section>

      {/* 4.1 GRID DESTINASI ALAM (Filter) */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-4xl font-serif font-bold text-forest" data-aos="fade-right">Eksplorasi</h2>
            
            <div className="flex flex-wrap justify-center gap-2" data-aos="fade-left">
              {['Semua', 'Pantai', 'Hutan', 'Bahari', 'Geologi'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    filter === f ? 'bg-forest text-white shadow-md' : 'bg-white text-dark/70 hover:bg-forest/10 border border-forest/10'
                  }`}
                >
                  {f === 'Semua' ? f : f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
            {destinasi.map((item, idx) => (
              <div key={idx} data-cat={item.cat} className="destinasi-card bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/5 hover:shadow-xl transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-teal/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {item.cat}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-forest mb-2">{item.title}</h3>
                  <p className="text-dark/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.2 PARALLAX PHOTO ESSAY */}
      <section ref={parallaxRef} className="bg-dark">
        {[
          { text: "Heningnya Hutan asri", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80" },
          { text: "Bisikan Ombak Samudera", img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80" },
          { text: "Rahasia Bawah Laut", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80" },
        ].map((item, idx) => (
          <div key={idx} className="parallax-section relative h-[70vh] flex items-center justify-center overflow-hidden">
            <div 
              className="parallax-bg absolute inset-0 bg-cover bg-center h-[130%] -top-[15%]"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
            <div className="relative z-10 text-center px-4" data-aos="fade-up">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide">{item.text}</h2>
            </div>
          </div>
        ))}
      </section>

      {/* 4.3 AKTIVITAS WISATA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-serif font-bold text-forest mb-4">Aktivitas Seru</h2>
            <div className="w-20 h-1 bg-teal mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['Snorkeling', 'Surfing', 'Bird Watch', 'Trekking', 'Fishing', 'Photography'].map((act, idx) => (
              <div key={idx} className="bg-cream p-8 rounded-2xl text-center hover:bg-mint transition-colors group cursor-pointer" data-aos="zoom-in" data-aos-delay={(idx%3)*100}>
                <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">—</div>
                <h3 className="text-lg font-bold text-forest">{act}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.4 GALERI ALAM (Skiper32) */}
      <section className="py-24 bg-forest text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12" data-aos="fade-right">
          <h2 className="text-4xl font-serif font-bold mb-4">Potret Keindahan</h2>
          <p className="text-white/70">Sudut-sudut memukau Pulau Enggano.</p>
        </div>
        <div data-aos="fade-up">
          <Skiper32 images={galleryImages} />
        </div>
      </section>

      {/* 4.5 TIPS PERJALANAN (Accordion) */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-serif font-bold text-forest mb-4">Tips Perjalanan</h2>
            <p className="text-dark/70">Informasi penting sebelum berkunjung.</p>
          </div>

          <div className="space-y-4">
            {tips.map((tip, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl shadow-sm border border-forest/5 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <button 
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-forest/5 transition-colors focus:outline-none"
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                >
                  <span className="font-bold text-forest">{tip.q}</span>
                  <ChevronDown className={`text-teal transition-transform duration-300 ${activeAccordion === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-dark/70 text-sm leading-relaxed">{tip.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
