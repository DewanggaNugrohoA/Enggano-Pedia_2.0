import React, { useEffect, useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Skiper32 from '@/Components/ui/skiper-ui/skiper32';
import { Bird, Leaf, Fish, ShieldCheck, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hayati() {
  const [activeTab, setActiveTab] = useState('fauna');

  useEffect(() => {
    // Reveal Cards
    gsap.utils.toArray('.biodiv-card').forEach((card, i) => {
      gsap.from(card, {
        y: 50, opacity: 0,
        duration: 0.6,
        delay: (i % 4) * 0.1,
        scrollTrigger: { trigger: card, start: 'top 85%' }
      });
    });
  }, []);

  // Handle Tab Switch Animation
  useEffect(() => {
    gsap.fromTo('.tab-content', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
  }, [activeTab]);

  const faunaList = [
    { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80', title: 'Burung Beo Enggano' },
    { url: 'https://images.unsplash.com/photo-1549467610-d7d825c8d0cd?w=800&q=80', title: 'Biawak Enggano' },
    { url: 'https://images.unsplash.com/photo-1533663001859-009180295171?w=800&q=80', title: 'Ular Enggano' },
    { url: 'https://images.unsplash.com/photo-1540304386926-d39b33783a99?w=800&q=80', title: 'Monyet Ekor Panjang' },
  ];

  const floraList = [
    { url: 'https://images.unsplash.com/photo-1589139265213-91c6e11883be?w=800&q=80', title: 'Pohon Pisang Enggano' },
    { url: 'https://images.unsplash.com/photo-1473138805727-897db67e0e7a?w=800&q=80', title: 'Melinjo Enggano' },
    { url: 'https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?w=800&q=80', title: 'Anggrek Hutan' },
    { url: 'https://images.unsplash.com/photo-1613139366650-25fc4b455013?w=800&q=80', title: 'Jengkol Hutan' },
  ];

  const bahariList = [
    { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', title: 'Terumbu Karang' },
    { url: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80', title: 'Ikan Pelagis' },
    { url: 'https://images.unsplash.com/photo-1588612140409-b68c92a65aeb?w=800&q=80', title: 'Penyu Hijau' },
    { url: 'https://images.unsplash.com/photo-1522069169874-c58ced4e0df7?w=800&q=80', title: 'Ikan Arwana' },
  ];

  return (
    <MainLayout>
      <Head title="Keanekaragaman Hayati | EngganoPedia" />

      {/* HEADER SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80)' }}
        ></div>
        <div className="absolute inset-0 bg-forest/80 mix-blend-multiply"></div>
        <div className="relative z-10 text-center px-4" data-aos="zoom-out">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4">Surga Biodiversitas Pulau Enggano</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">Rumah bagi ratusan spesies flora dan fauna endemik yang unik dan langka di dunia.</p>
        </div>
      </section>

      {/* 3.1 STATS BIODIVERSITAS */}
      <section className="py-16 bg-cream border-b border-forest/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="biodiv-card bg-white p-6 rounded-2xl shadow-sm text-center border border-forest/5">
              <div className="w-12 h-12 mx-auto bg-teal/10 rounded-full flex items-center justify-center text-teal mb-4">
                <Bird size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-forest mb-1">50+</h3>
              <p className="text-dark/70 text-sm">Spesies Burung</p>
            </div>
            <div className="biodiv-card bg-white p-6 rounded-2xl shadow-sm text-center border border-forest/5">
              <div className="w-12 h-12 mx-auto bg-teal/10 rounded-full flex items-center justify-center text-teal mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-forest mb-1">200+</h3>
              <p className="text-dark/70 text-sm">Spesies Flora</p>
            </div>
            <div className="biodiv-card bg-white p-6 rounded-2xl shadow-sm text-center border border-forest/5">
              <div className="w-12 h-12 mx-auto bg-teal/10 rounded-full flex items-center justify-center text-teal mb-4">
                <span className="text-2xl font-bold">!</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-forest mb-1">Unik</h3>
              <p className="text-dark/70 text-sm">Reptil Endemik</p>
            </div>
            <div className="biodiv-card bg-white p-6 rounded-2xl shadow-sm text-center border border-forest/5">
              <div className="w-12 h-12 mx-auto bg-teal/10 rounded-full flex items-center justify-center text-teal mb-4">
                <Fish size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-forest mb-1">Terjaga</h3>
              <p className="text-dark/70 text-sm">Terumbu Karang</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.2 TABS GALERI (Skiper32) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-serif font-bold text-forest mb-4">Spesies Endemik & Eksotis</h2>
            <div className="flex justify-center space-x-2 md:space-x-4 mt-8">
              {['fauna', 'flora', 'bahari'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                    activeTab === tab ? 'bg-teal text-white shadow-md' : 'bg-cream text-dark/60 hover:bg-teal/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="tab-content" data-aos="fade-in">
            {activeTab === 'fauna' && <Skiper32 images={faunaList} />}
            {activeTab === 'flora' && <Skiper32 images={floraList} />}
            {activeTab === 'bahari' && <Skiper32 images={bahariList} />}
          </div>
        </div>
      </section>

      {/* 3.3 INTERACTIVE MAP */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/3" data-aos="fade-right">
              <h2 className="text-4xl font-serif font-bold text-forest mb-6">Peta Habitat</h2>
              <p className="text-dark/70 mb-8 leading-relaxed">
                Jelajahi sebaran habitat flora dan fauna endemik di berbagai penjuru Pulau Enggano. Dari hutan lebat hingga pesisir pantai.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <MapPin className="text-teal" /> <span className="font-semibold text-dark">Hutan Hujan Tropis</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <MapPin className="text-teal" /> <span className="font-semibold text-dark">Pesisir & Terumbu Karang</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <MapPin className="text-teal" /> <span className="font-semibold text-dark">Danau & Sungai Air Tawar</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-2/3" data-aos="fade-left">
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127393.7153723381!2d102.16480796338183!3d-5.385311059957303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3612807f4ebfb7%3A0xeefb13d298379c16!2sEnggano%20Island!5e1!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Enggano"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.4 KONSERVASI */}
      <section className="py-24 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-serif font-bold mb-4">Upaya Konservasi</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Kami berkomitmen untuk menjaga alam Enggano tetap lestari untuk generasi mendatang.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-colors" data-aos="zoom-in" data-aos-delay="0">
              <ShieldCheck className="w-12 h-12 text-teal mx-auto mb-6" />
              <h3 className="text-xl font-bold font-serif mb-3">Hutan Lindung</h3>
              <p className="text-white/70 text-sm">Kawasan hutan yang dilindungi secara ketat untuk mencegah deforestasi.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-colors" data-aos="zoom-in" data-aos-delay="100">
              <ShieldCheck className="w-12 h-12 text-teal mx-auto mb-6" />
              <h3 className="text-xl font-bold font-serif mb-3">Marine Reserve</h3>
              <p className="text-white/70 text-sm">Area perlindungan laut untuk memulihkan ekosistem terumbu karang.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-colors" data-aos="zoom-in" data-aos-delay="200">
              <ShieldCheck className="w-12 h-12 text-teal mx-auto mb-6" />
              <h3 className="text-xl font-bold font-serif mb-3">Suaka Margasatwa</h3>
              <p className="text-white/70 text-sm">Area khusus untuk pelestarian fauna endemik yang terancam punah.</p>
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
