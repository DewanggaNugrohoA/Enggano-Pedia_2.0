import React, { useEffect, useRef, useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Skiper40 } from '@/Components/ui/skiper-ui/skiper40';
import Skiper32 from '@/Components/ui/skiper-ui/skiper32';
import Enggano3DMap from '@/Components/Enggano3DMap';
import { Leaf, Globe, Map as MapIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Home() {
  const heroRef = useRef(null);
  const h1Ref = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [activeVideo, setActiveVideo] = useState(1);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const isSwitchingRef = useRef(false);

  // Seamless Video Loop & Crossfade Effect
  useEffect(() => {
    const v1 = videoRef1.current;
    const v2 = videoRef2.current;
    if (!v1 || !v2) return;

    const checkLoop = () => {
      const currentV = activeVideo === 1 ? v1 : v2;
      const nextV = activeVideo === 1 ? v2 : v1;
      const nextId = activeVideo === 1 ? 2 : 1;

      if (!currentV.duration || isNaN(currentV.duration)) return;

      // Crossfade 1.5s before end to eliminate black gap / stutter
      const remaining = currentV.duration - currentV.currentTime;
      if (remaining <= 1.5 && !isSwitchingRef.current) {
        isSwitchingRef.current = true;
        nextV.currentTime = 0;
        const playPromise = nextV.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setActiveVideo(nextId))
            .catch(() => setActiveVideo(nextId));
        } else {
          setActiveVideo(nextId);
        }

        setTimeout(() => {
          currentV.pause();
          currentV.currentTime = 0;
          isSwitchingRef.current = false;
        }, 1400);
      }
    };

    const interval = setInterval(checkLoop, 200);
    return () => clearInterval(interval);
  }, [activeVideo]);

  const handleEnded = (finishedId) => {
    if (activeVideo === finishedId) {
      const nextV = finishedId === 1 ? videoRef2.current : videoRef1.current;
      const nextId = finishedId === 1 ? 2 : 1;
      if (nextV) {
        nextV.currentTime = 0;
        nextV.play().catch(() => {});
        setActiveVideo(nextId);
        isSwitchingRef.current = false;
      }
    }
  };

  useEffect(() => {
    // Particles.js initialization
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 30, density: { enable: true, value_area: 800 } },
          color: { value: ["#14b8a6", "#d4edda"] },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: false },
          move: { enable: true, speed: 1, direction: "top", out_mode: "out" }
        },
        interactivity: { detect_on: "canvas", events: { onhover: { enable: false }, onclick: { enable: false } } },
        retina_detect: true
      });
    }

    // Hero GSAP Animations
    const tl = gsap.timeline();
    tl.to(h1Ref.current, { text: "Selamat Datang di\nSurga Tersembunyi\nPulau Enggano", duration: 2, ease: "none", delay: 0.3 })
      .from('.hero-subtitle', { opacity: 0, y: 16, duration: 0.8, ease: "power2.out" }, "-=0.4");

    // Parallax Hero
    gsap.to('.hero-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Stats Counter - triggers once only upon first scroll
    const stats = statsRef.current.querySelectorAll('.stat-number');
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(stat, {
            innerHTML: target,
            duration: 1.8,
            snap: { innerHTML: 1 },
            ease: "power2.out",
          });
        }
      });
    });

    // Reveal Animation for cards - interactive on scroll up & down
    gsap.utils.toArray('.reveal-card').forEach((card, i) => {
      gsap.fromTo(card,
        {
          y: 50,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: (i % 3) * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    });

    // Timeline line animation (scrubs seamlessly up and down with scroll)
    if (timelineRef.current) {
      gsap.fromTo('.timeline-line', 
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 75%',
            scrub: 0.5,
          }
        }
      );

      gsap.fromTo('.timeline-turtle',
        { opacity: 0, scale: 0.4 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 75%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );
      
      gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        const isLeft = i % 2 === 0;
        const dot = item.querySelector('.timeline-dot');

        gsap.fromTo(item, 
          {
            x: isLeft ? -60 : 60,
            opacity: 0,
            scale: 0.95
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );

        if (dot) {
          gsap.fromTo(dot,
            { scale: 0.6, boxShadow: '0 0 0px rgba(20,184,166,0)' },
            {
              scale: 1.25,
              boxShadow: '0 0 14px rgba(20,184,166,0.7)',
              duration: 0.4,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse'
              }
            }
          );
        }
      });
    }
  }, []);

  const destinasi = [
    { title: "Pantai Bak Blau", desc: "Pasir putih, air kristal biru", img: "/images/timeline/bak_blau.webp", cat: "Pantai" },
    { title: "Tari Tradisional", desc: "Tarian perang dan perayaan adat suku", img: "/images/timeline/tari_tradisional.jpg", cat: "Budaya" },
    { title: "Hutan Rimba", desc: "Biodiversitas unik flora & fauna", img: "/images/timeline/hutan_rimba.jpg", cat: "Hutan" },
    { title: "Rumah Adat", desc: "Arsitektur asli suku Enggano", img: "/images/timeline/rumah_adat_kubu.png", cat: "Budaya" },
    { title: "Batu Lubang", desc: "Formasi batu unik ribuan tahun", img: "/images/timeline/batu_lubang.png", cat: "Geologi" },
    { title: "Produk Emping Enggano", desc: "Produk olahan melinjo khas hasil bumi Enggano", img: "/images/timeline/emping1.jpeg", cat: "Kuliner" },
  ];

  const timelines = [
    { 
      era: "Struktur Sosial · Enam Suku Adat", 
      desc: "Masyarakat Enggano terbagi menjadi lima suku asli pemegang hak ulayat (Kaitora, Kauno, Kaharuba, Kaharubi, Kaahua) yang bersama-sama disebut È Loppeh, ditambah satu suku pendatang, Muton. Tiap suku dipimpin oleh seorang Pa'abuki atau kepala suku, mencerminkan sistem adat yang masih dijunjung hingga sekarang.", 
      img: "/images/timeline/struktur_sosial.jpg" 
    },
    { 
      era: "Bahasa & Arsitektur Tradisional", 
      desc: "Bahasa Enggano berakar dari rumpun Austronesia namun berkembang sangat berbeda dari bahasa-bahasa di daratan Sumatera. Dahulu masyarakat tinggal di rumah komunal panggung berbentuk menyerupai sarang lebah, sebuah kearifan arsitektur lokal yang unik dan jarang ditemukan di tempat lain.", 
      img: "/images/timeline/bahasa_arsitektur.jpeg" 
    },
    { 
      era: "Kepercayaan & Kesakralan Alam", 
      desc: "Bagi masyarakat Enggano, tanah dan laut adalah warisan leluhur yang sakral serta tidak boleh dieksploitasi sembarangan, apalagi diperjualbelikan kepada pihak luar. Filosofi ini menjadi kunci mengapa alam pulau tetap terjaga alami hingga kini.", 
      img: "/images/timeline/kepercayaan_alam.png" 
    },
    { 
      era: "Keindahan Pantai & Laut", 
      desc: "Enggano dikelilingi pantai berpasir putih dengan air laut jernih kehijauan, cocok untuk snorkeling maupun sekadar menikmati ketenangan. Ombaknya yang relatif tenang di beberapa titik menjadikannya surga tersembunyi yang belum banyak terjamah wisatawan.", 
      img: "/images/timeline/pantai_laut.png" 
    },
    { 
      era: "Kekayaan Hutan Tropis", 
      desc: "Sebagian besar wilayah pulau masih tertutup hutan tropis lebat dengan flora dan fauna endemik, termasuk beberapa spesies burung dan tumbuhan yang hanya bisa ditemukan di Enggano. Suasana hutannya yang asri berpadu dengan udara segar khas pulau terpencil.", 
      img: "/images/timeline/hutan_tropis.png" 
    },
    { 
      era: "Rumah Adat Kubu Enggano", 
      desc: "Rumah Kubu merupakan arsitektur panggung tradisional tertua di Enggano yang dibangun tinggi di atas tiang kayu hutan alami dengan atap rumbia melingkar. Berfungsi sebagai tempat tinggal komunal pelindung keluarga, pusat musyawarah adat suku, serta simbol kekerabatan dan ketahanan leluhur Pulau Enggano.", 
      img: "/images/timeline/rumah_adat_kubu.png" 
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>Beranda | EngganoPedia</title>
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
      </Head>

      {/* 1.1 HERO SECTION */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#081d27]">
        {/* Background Image */}
        <div className="hero-bg absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none overflow-hidden bg-[#081d27]">
          <img
            src="/images/hero-bg.jpg"
            alt="Keindahan Pulau Enggano"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay - balanced 45% tint */}
        <div 
          className="absolute inset-0 z-10"
          style={{ backgroundColor: 'rgba(8, 29, 39, 0.45)' }}
        ></div>
        
        {/* Particles */}
        <div id="particles-js" className="absolute inset-0 z-20"></div>

        {/* Content */}
        <div className="relative z-30 max-w-4xl mx-auto px-4 text-center mt-12">
          <h1 ref={h1Ref} className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-2 whitespace-pre-line">
            {""}
          </h1>
          <p className="hero-subtitle text-white/85 text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto mt-2 leading-relaxed">
            Menelusuri keasrian alam tropis, kehangatan budaya suku asli, dan keajaiban tersembunyi di ujung barat Samudra Hindia
          </p>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-dark/80 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-4 aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-dark/80 text-white flex items-center justify-center hover:bg-dark transition-colors text-lg font-bold"
            >
              X
            </button>
            <iframe
              src="https://www.youtube.com/embed/RiNglwSi25w?autoplay=1&rel=0"
              title="Video Pulau Enggano"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* 1.2 STATS BAR */}
      <section ref={statsRef} className="py-12 bg-forest relative z-40 border-t-4 border-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div>
              <div className="text-4xl md:text-5xl font-serif text-white font-bold mb-2 flex justify-center items-center">
                <span className="stat-number" data-target="400">0</span>
                <span className="text-2xl ml-1 text-teal">km²</span>
              </div>
              <p className="text-white/70 text-sm uppercase tracking-wider">Luas Pulau</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif text-white font-bold mb-2 flex justify-center items-center">
                <span className="stat-number" data-target="12">0</span>
                <span className="text-2xl ml-1 text-teal">+</span>
              </div>
              <p className="text-white/70 text-sm uppercase tracking-wider">Destinasi Wisata</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif text-white font-bold mb-2 flex justify-center items-center">
                <span className="stat-number" data-target="6">0</span>
              </div>
              <p className="text-white/70 text-sm uppercase tracking-wider">Suku Adat Budaya</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif text-white font-bold mb-2 flex justify-center items-center">
                <span className="stat-number" data-target="1000">0</span>
                <span className="text-2xl ml-1 text-teal">+ Thn</span>
              </div>
              <p className="text-white/70 text-sm uppercase tracking-wider">Warisan Leluhur</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1.3 INTRO MENGAPA ENGGANO */}
      <section className="pt-24 pb-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-forest font-bold mb-4" data-aos="fade-up">Mengapa Enggano?</h2>
            <div className="w-20 h-1 bg-teal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="reveal-card bg-white p-8 rounded-2xl shadow-sm border border-forest/5 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-mint flex items-center justify-center text-forest mb-6">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold text-forest mb-3 font-serif">Alam asri</h3>
              <p className="text-dark/70 leading-relaxed">Hutan tropis yang masih sangat terjaga dan ekosistem pesisir yang belum tersentuh oleh modernisasi berlebih.</p>
            </div>
            <div className="reveal-card bg-white p-8 rounded-2xl shadow-sm border border-forest/5 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-mint flex items-center justify-center text-forest mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-forest mb-3 font-serif">Budaya Autentik</h3>
              <p className="text-dark/70 leading-relaxed">Suku Enggano dengan tradisi ribuan tahun yang masih dilestarikan dalam kehidupan sehari-hari warga lokal.</p>
            </div>
            <div className="reveal-card bg-white p-8 rounded-2xl shadow-sm border border-forest/5 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-mint flex items-center justify-center text-forest mb-6">
                <MapIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-forest mb-3 font-serif">Hayati Unik</h3>
              <p className="text-dark/70 leading-relaxed">Flora & fauna endemik langka seperti Burung Beo Enggano dan Anggrek Hutan yang eksotis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1.4 PERJALANAN WAKTU */}
      <section className="pt-12 pb-24 bg-cream relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-once="false">
            <h2 className="text-4xl font-serif font-bold text-forest mb-4">Perjalanan Waktu</h2>
            <p className="text-dark/60 max-w-2xl mx-auto">Budaya dan kekayaan alam Pulau Enggano dari masa ke masa.</p>
          </div>

          <div className="relative" ref={timelineRef}>
            {/* Center Line Track & Animated Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-forest/20 h-full"></div>
            <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-teal top-0 origin-top">
              {/* Penyu di Ujung Garis Waktu */}
              <div className="timeline-turtle absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 pointer-events-none">
                <div className="turtle-swimming w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 drop-shadow-[0_4px_10px_rgba(20,184,166,0.6)]">
                    {/* Sirip Depan */}
                    <path d="M12 24C6 16 12 10 22 14C23 20 18 24 12 24Z" fill="#14b8a6" />
                    <path d="M52 24C58 16 52 10 42 14C41 20 46 24 52 24Z" fill="#14b8a6" />
                    
                    {/* Sirip Belakang */}
                    <path d="M18 48C14 54 18 58 24 54C24 49 20 47 18 48Z" fill="#0F3445" />
                    <path d="M46 48C50 54 46 58 40 54C40 49 44 47 46 48Z" fill="#0F3445" />
                    
                    {/* Ekor */}
                    <path d="M32 58L29 51H35L32 58Z" fill="#14b8a6" />
                    
                    {/* Kepala */}
                    <ellipse cx="32" cy="11" rx="6" ry="8" fill="#14b8a6" />
                    <circle cx="29.5" cy="9" r="1.2" fill="#ffffff" />
                    <circle cx="34.5" cy="9" r="1.2" fill="#ffffff" />
                    
                    {/* Tempurung Penyu */}
                    <ellipse cx="32" cy="34" rx="16" ry="20" fill="#0F3445" stroke="#14b8a6" strokeWidth="2.5" />
                    
                    {/* Motif Sisik Tempurung */}
                    <path d="M32 18L24 26V38L32 46L40 38V26L32 18Z" stroke="#2dd4bf" strokeWidth="1.5" fill="#17485e" />
                    <line x1="32" y1="18" x2="32" y2="46" stroke="#2dd4bf" strokeWidth="1.2" />
                    <line x1="24" y1="32" x2="40" y2="32" stroke="#2dd4bf" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              {timelines.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className={`timeline-item relative flex items-center justify-between w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
                    <div className="w-5/12">
                      {item.img && (
                        <img
                          src={item.img}
                          alt={item.era}
                          loading="lazy"
                          className="w-full h-44 md:h-52 object-cover rounded-2xl shadow-lg border border-forest/10 transition-transform duration-500 hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="timeline-dot z-20 flex items-center bg-teal shadow-xl w-6 h-6 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 transition-transform duration-300"></div>
                    <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-forest/5 hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-serif font-bold text-forest mb-2">{item.era}</h4>
                        <p className="text-dark/70 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 PETA 3D INTERAKTIF PULAU ENGGANO */}
      <Enggano3DMap />

      {/* 1.6 PESONA ENGGANO */}
      <section className="py-16 bg-forest text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3" data-aos="fade-right">Pesona Enggano</h2>
            <p className="text-white/70 max-w-lg" data-aos="fade-up">Jelajahi sudut-sudut paling memukau dan kekayaan budaya dari Pulau Enggano.</p>
          </div>
        </div>

        <div className="w-full pb-10" data-aos="zoom-in" data-aos-delay="200">
          <Skiper32 items={destinasi} speed={30} direction="left" />
        </div>
      </section>

      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes kenburns {
          0% { transform: scale(1.05) translate(0, 0); }
          50% { transform: scale(1.22) translate(-1.5%, -1.5%); }
          100% { transform: scale(1.1) translate(1.5%, 1%); }
        }
        .hero-bg {
          animation: kenburns 24s ease-in-out infinite alternate;
        }
        @keyframes turtleSwim {
          0%, 100% { transform: rotate(180deg) scale(1) translateY(0); }
          50% { transform: rotate(185deg) scale(1.05) translateY(-3px); }
        }
        .turtle-swimming {
          animation: turtleSwim 2.2s ease-in-out infinite;
        }
      `}</style>
    </MainLayout>
  );
}
