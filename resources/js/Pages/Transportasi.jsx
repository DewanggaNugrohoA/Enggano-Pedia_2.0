import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { X, ChevronRight } from 'lucide-react';

/* ─── DATA ─── */
const ferryData = [
  {
    id: 'ferry-1',
    name: 'KM Enggano Jaya',
    sub: 'Kapal Motor Penumpang (PELNI)',
    badge: 'Tersedia',
    badgeColor: 'green',
    fromCode: 'Baai', fromName: 'Pelabuhan Pulau Baai',
    toCode: 'Malakoni', toName: 'Pelabuhan Malakoni',
    duration: '12 jam', price: 'Rp 67.000',
    schedule: 'Selasa & Jumat', time: '08:00 WIB', pax: '300 pax',
    modal: {
      kondisi: { label: 'Beroperasi', ok: true },
      fasilitas: ['Kantin', 'Toilet', 'AC Eksekutif', 'Kabin VIP', 'Colokan Listrik', 'Angkut Barang'],
      classes: [
        { name: 'Kelas Ekonomi (Dewasa)', price: 'Rp 67.000' },
        { name: 'Kelas Ekonomi (Bayi maks. 2 thn)', price: 'Rp 6.700' },
      ],
    },
  },
  {
    id: 'ferry-2',
    name: 'KMP Baai Indah',
    sub: 'Kapal Motor Penumpang & Barang',
    badge: 'Terbatas',
    badgeColor: 'yellow',
    fromCode: 'Baai', fromName: 'Pelabuhan Pulau Baai',
    toCode: 'Malakoni', toName: 'Pelabuhan Malakoni',
    duration: '14 jam', price: 'Rp 67.000',
    schedule: 'Selasa & Sabtu', time: '07:30 WIB', pax: '200 pax',
    modal: {
      kondisi: { label: 'Terbatas', ok: false },
      fasilitas: ['Kantin', 'Toilet', 'Kursi Standar', 'Angkut Motor', 'Kargo'],
      classes: [
        { name: 'Kelas Ekonomi (Dewasa)', price: 'Rp 67.000' },
        { name: 'Motor Gol. II (+ Penumpang)', price: 'Rp 125.000' },
      ],
    },
  },
];

const pesawatData = [
  {
    id: 'pesawat-1',
    name: 'Susi Air Charter',
    sub: 'Cessna Grand Caravan (12 Kursi)',
    badge: 'Tersedia',
    badgeColor: 'green',
    fromCode: 'BKS', fromName: 'Bandara Fatmawati',
    toCode: 'ENG', toName: 'Bandara Enggano',
    duration: '45 menit', price: 'Rp 750.000',
    schedule: 'Sen, Rab, Jum', time: '09:00 WIB', pax: '12 pax',
    modal: {
      kondisi: { label: 'Beroperasi', ok: true },
      fasilitas: ['Cepat 45 Menit', 'Aman & Terpercaya', 'Pemandangan Udara', 'Booking Mudah'],
      classes: [
        { name: 'Per Orang (One Way)', price: 'Rp 750.000' },
        { name: 'Per Orang (Return)', price: 'Rp 1.400.000' },
      ],
      notice: 'Pemesanan wajib dilakukan minimal 2 hari sebelum keberangkatan.',
    },
  },
  {
    id: 'pesawat-2',
    name: 'Penerbangan Perintis',
    sub: 'Twin Otter DHC-6 (Subsidi Pemerintah)',
    badge: 'Subsidi',
    badgeColor: 'violet',
    fromCode: 'BKS', fromName: 'Bandara Fatmawati',
    toCode: 'ENG', toName: 'Bandara Enggano',
    duration: '50 menit', price: 'Rp 350.000',
    schedule: 'Selasa & Kamis', time: '10:30 WIB', pax: '18 pax',
    modal: {
      kondisi: { label: 'Beroperasi', ok: true },
      fasilitas: ['Harga Terjangkau', 'Subsidi Pemerintah', 'Cepat & Efisien', 'Rutin 2x Seminggu'],
      classes: [
        { name: 'Per Orang (One Way)', price: 'Rp 350.000' },
      ],
      notice: 'Penerbangan perintis bersubsidi pemerintah. Kuota terbatas, segera pesan!',
    },
  },
];


/* ─── MODAL ─── */
function DetailModal({ item, type, onClose, onBook }) {
  const [selectedClass, setSelectedClass] = useState(null);
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center bg-dark/70 backdrop-blur-sm p-0 sm:p-4" onClick={onClose}>
      <div
        className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Banner */}
        <div className="h-20 bg-forest flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(94,234,212,.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="font-serif text-2xl font-bold text-forest">{item.name}</h2>
            <p className="text-dark/50 text-sm mt-0.5">{item.sub}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-cream flex items-center justify-center hover:bg-gray-200 transition-colors ml-4 flex-shrink-0">
            <X size={16} className="text-dark" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {/* Fasilitas */}
          <p className="text-xs font-bold uppercase tracking-wider text-dark/40 mb-3">Fasilitas</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {item.modal.fasilitas.map((f, i) => (
              <span key={i} className="px-3 py-1 text-xs rounded-full bg-mint text-forest font-medium border border-forest/10">{f}</span>
            ))}
          </div>

          <div className="h-px bg-gray-100 my-4" />

          {/* Kelas Tiket */}
          <p className="text-xs font-bold uppercase tracking-wider text-dark/40 mb-3">Pilih Kelas Tiket</p>
          <div className="space-y-2 mb-5">
            {item.modal.classes.map((cls, i) => (
              <div
                key={i}
                onClick={() => setSelectedClass(i)}
                className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer border-2 transition-all ${
                  selectedClass === i ? 'border-teal bg-mint' : 'border-transparent bg-cream hover:border-teal/40'
                }`}
              >
                <span className="text-sm font-medium text-forest">{cls.name}</span>
                <span className="font-serif text-lg font-bold text-teal">{cls.price}</span>
              </div>
            ))}
          </div>

          {/* Notice */}
          {item.modal?.notice && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-700 leading-relaxed">{item.modal.notice}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-forest/10 text-dark/60 font-semibold hover:bg-cream transition-all text-sm">
              Tutup
            </button>
            <button
              onClick={() => onBook(item.name)}
              className="flex-1 py-3 rounded-xl bg-teal text-white font-semibold shadow-md hover:bg-forest transition-colors text-sm"
            >
              Pesan via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── TRANSPORT CARD ─── */
function TransportCard({ item, type, onOpenModal }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
      data-aos="fade-up"
      onClick={() => onOpenModal(item)}
    >
      {/* Top */}
      <div className="bg-forest p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(94,234,212,.4) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />

        <h3 className="font-serif text-2xl font-bold text-white mb-1 relative z-10">{item.name}</h3>
        <p className="text-white/50 text-xs relative z-10">{item.sub}</p>

        {/* Route */}
        <div className="flex items-center gap-3 mt-5 relative z-10">
          <div>
            <div className="font-serif text-xl font-bold text-white">{item.fromCode}</div>
            <div className="text-white/40 text-[10px] mt-0.5 leading-tight">{item.fromName}</div>
          </div>
          <div className="flex flex-col items-center gap-0.5 flex-1 px-2">
            <div className="flex items-center w-full">
              <div className="h-px flex-1 bg-teal/40" />
            </div>
            <span className="text-white/30 text-[10px]">{item.duration}</span>
          </div>
          <div className="text-right">
            <div className="font-serif text-xl font-bold text-white">{item.toCode}</div>
            <div className="text-white/40 text-[10px] mt-0.5 leading-tight">{item.toName}</div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="mb-5">
          <p className="text-dark/40 text-xs mb-1">Harga mulai dari</p>
          <p className="font-serif text-3xl font-bold text-teal leading-none">{item.price}<span className="text-sm text-dark/40 font-sans font-normal ml-1">/ orang</span></p>
        </div>

        <div className="h-px bg-gray-100 mb-4" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="px-3 py-1.5 bg-cream rounded-full text-xs text-forest font-medium">
            {item.schedule}
          </span>
          <span className="px-3 py-1.5 bg-cream rounded-full text-xs text-forest font-medium">
            {item.time}
          </span>
          <span className="px-3 py-1.5 bg-cream rounded-full text-xs text-forest font-medium">
            {item.pax}
          </span>
        </div>

        <button
          onClick={e => { e.stopPropagation(); onOpenModal(item); }}
          className="w-full flex items-center justify-between px-4 py-3 bg-cream rounded-xl border border-forest/5 group-hover:border-teal/30 group-hover:bg-mint transition-all"
        >
          <span className="text-sm font-semibold text-forest">Lihat Detail & Pesan</span>
          <ChevronRight size={16} className="text-teal" />
        </button>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function Transportasi() {
  const [activeTab, setActiveTab] = useState('ferry');
  const [modalItem, setModalItem] = useState(null);

  const handleBook = (name) => {
    const msg = encodeURIComponent(`Halo, saya ingin memesan tiket ${name} ke Pulau Enggano. Mohon informasi ketersediaan dan jadwalnya.`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
    setModalItem(null);
  };

  const data = activeTab === 'ferry' ? ferryData : pesawatData;

  return (
    <MainLayout>
      <Head title="Transportasi | EngganoPedia" />

      {/* HERO */}
      <section className="relative h-[55vh] flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: activeTab === 'ferry'
            ? 'url(https://images.pexels.com/photos/31050023/pexels-photo-31050023.jpeg)'
            : 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/70 to-dark/85" />
        <div className="relative z-10 text-center px-4" data-aos="fade-up">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg" style={{ color: '#ffffff', textShadow: '0 2px 16px rgba(0,0,0,0.8)' }}>
            Transportasi ke Pulau Enggano
          </h1>
          <p className="max-w-xl mx-auto text-lg drop-shadow-md" style={{ color: 'rgba(255,255,255,0.92)', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>
            Pilih moda transportasi yang nyaman menuju surga tersembunyi di ujung Samudera Hindia.
          </p>
        </div>
      </section>

      {/* TAB BAR */}
      <div className="sticky top-0 z-40 bg-white border-b border-forest/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-1">
          {[
            { key: 'ferry', label: 'Kapal Ferry' },
            { key: 'pesawat', label: 'Pesawat' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-4 text-sm font-semibold border-b-2 -mb-px transition-all ${
                activeTab === tab.key ? 'text-teal border-teal' : 'text-dark/50 border-transparent hover:text-forest'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ROUTE BANNER */}
      <section className="bg-forest py-10 border-b border-white/10 relative overflow-hidden">
        {/* Animated Bubbles Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-teal/20 bg-teal/10"
              style={{
                width:  `${6 + Math.random() * 16}px`,
                height: `${6 + Math.random() * 16}px`,
                left:   `${Math.random() * 100}%`,
                bottom: `-20px`,
                animation: `bubbleFloat ${4 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Radial glow accent */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-white leading-none">{activeTab === 'ferry' ? 'BKS' : 'BKS'}</p>
            <p className="text-white/40 text-xs mt-1">{activeTab === 'ferry' ? 'Pelabuhan Pulau Baai' : 'Bandara Fatmawati'}</p>
            <p className="text-teal text-xs mt-0.5">Bengkulu</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center w-24 md:w-40">
              <div className="w-1.5 h-1.5 rounded-full bg-teal" />
              <div className="h-px flex-1 bg-gradient-to-r from-teal via-teal/50 to-teal/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-teal/40" />
            </div>
            <p className="text-white/30 text-xs">{activeTab === 'ferry' ? '12 jam' : '45 menit'}</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-white leading-none">ENG</p>
            <p className="text-white/40 text-xs mt-1">{activeTab === 'ferry' ? 'Pelabuhan Malakoni' : 'Bandara Enggano'}</p>
            <p className="text-teal text-xs mt-0.5">Enggano</p>
          </div>
        </div>

        {/* Keyframes injected via style tag */}
        <style>{`
          @keyframes bubbleFloat {
            0%   { transform: translateY(0) scale(1);     opacity: 0; }
            10%  { opacity: 0.7; }
            50%  { transform: translateY(-120px) scale(1.1); opacity: 0.4; }
            100% { transform: translateY(-240px) scale(0.5); opacity: 0; }
          }
        `}</style>
      </section>

      {/* CARDS SECTION */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12" data-aos="fade-up">
            <p className="text-xs font-bold tracking-widest uppercase text-teal mb-2">
              {activeTab === 'ferry' ? 'Armada Kapal' : 'Jadwal Penerbangan'}
            </p>
            <h2 className="font-serif text-4xl font-bold text-forest">
              {activeTab === 'ferry' ? 'Pilihan Kapal Ferry' : 'Jadwal Penerbangan'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.map((item, i) => (
              <TransportCard
                key={item.id}
                item={item}
                type={activeTab}
                onOpenModal={setModalItem}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL MODAL */}
      {modalItem && (
        <DetailModal
          item={modalItem}
          type={activeTab}
          onClose={() => setModalItem(null)}
          onBook={handleBook}
        />
      )}
    </MainLayout>
  );
}
