import React, { useEffect, useRef, useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, MapPin, ChevronDown, Info } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    name: "Bird Watching",
    cat: "Ekowisata",
    desc: "Keanekaragaman burung endemik yang tinggi dan habitat alam yang masih alami menjadikan Enggano sebagai surga para pengamat burung.",
    location: "Teluk Burung",
    img: "/images/timeline/bird_watching.jpg",
  },
  {
    name: "Kolam Podipo",
    cat: "Danau",
    desc: "Kolam alami tersembunyi di tengah hutan dengan air yang jernih dan sejuk. Spot berendam favorit warga lokal yang jarang diketahui wisatawan.",
    location: "Desa Kahyapu",
    cta: "Hubungi Guide",
    ctaLink: "https://api.whatsapp.com/send/?phone=6282182808791&text=Halo+Bubut%2C+saya+ingin+mengunjungi+Kolam+Podipo+Enggano&type=phone_number&app_absent=0",
    img: "/images/timeline/podipo3.jpeg",
  },
  {
    name: "Batu Lobang",
    cat: "Geologi",
    desc: "Formasi batu alam unik berlubang yang terbentuk secara alami oleh proses geologi ribuan tahun. Spot foto ikonik yang wajib dikunjungi.",
    location: "Desa Banjarsari",
    note: "Dapat ditempuh kendaraan",
    img: "/images/timeline/batu_lubang.png",
  },
  {
    name: "Danau Bak Blau",
    cat: "Danau",
    desc: "Danau alami dengan air jernih kehijauan yang dikelilingi hutan tropis lebat. Keindahan alam yang masih sangat terjaga dan memukau.",
    location: "Desa Meok",
    img: "/images/timeline/bak_blau.webp",
  },
];

export default function Wisata() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [activeVideo, setActiveVideo] = useState(1);
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
    // Hero video parallax + slow zoom
    gsap.to('.wisata-hero-video', {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Hero text reveal
    const tl = gsap.timeline({ delay: 0.4 });
    tl.from('.hero-title > span', { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out' })
      .from('.hero-sub', { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .from('.scroll-cue', { opacity: 0, duration: 0.5 }, '-=0.3');

    // Editorial Section Animations - fully interactive on scroll up & down
    gsap.utils.toArray('.editorial-row').forEach((row, i) => {
      const img = row.querySelector('.editorial-img');
      const text = row.querySelector('.editorial-text');

      gsap.fromTo(img, 
        {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          scale: 0.95
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 82%',
            end: 'bottom 18%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );

      gsap.fromTo(text,
        {
          x: i % 2 === 0 ? 60 : -60,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 82%',
            end: 'bottom 18%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    });

    // Quote band parallax
    gsap.to('.quote-bg', {
      yPercent: -25,
      ease: 'none',
      scrollTrigger: {
        trigger: '.quote-band',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <MainLayout>
      <Head title="Wisata | EngganoPedia" />

      {/* ===== HERO IMAGE ===== */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center bg-[#081d27]">
        {/* Hero Background Image */}
        <div className="wisata-hero-video absolute inset-0 w-full h-full scale-105 pointer-events-none overflow-hidden bg-[#081d27]">
          <img
            src="/images/hero-bg.jpg"
            alt="Wisata Pulau Enggano"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/30 to-dark/85 z-10 pointer-events-none"></div>

        <div className="relative z-20 text-center px-4">
          <h1 ref={titleRef} className="hero-title font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.2]">
            <span className="block overflow-hidden pb-1">
              <span className="block pb-2 -mb-2">Jelajahi</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="block pb-2 -mb-2 text-teal">Keajaiban Alam</span>
            </span>
          </h1>
          <p className="hero-sub text-white/85 text-lg md:text-xl max-w-2xl mx-auto mt-8">
            Surga tersembunyi di tengah samudera hindia.
          </p>
        </div>

        <div className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs tracking-[0.3em] uppercase">Gulir</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* ===== EDITORIAL LIST ===== */}
      <section className="py-32 bg-cream text-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="inline-block text-teal text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Destinasi Wisata Populer
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-forest">
              4 Destinasi Pilihan di <span className="italic text-teal">Pulau Enggano</span>
            </h2>
            <div className="w-16 h-1 bg-teal mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="space-y-32">
            {destinations.map((d, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`editorial-row flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                  {/* Image Column */}
                  <div className="editorial-img w-full md:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={d.img}
                        alt={d.name}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className="editorial-text w-full md:w-1/2 space-y-6">
                    <div className="flex items-center gap-3 text-teal">
                      <div className="w-10 h-[1px] bg-teal"></div>
                      <span className="text-sm tracking-widest font-bold uppercase">0{i + 1}</span>
                    </div>
                    <h3 className="font-serif text-4xl lg:text-5xl font-bold text-forest leading-tight">
                      {d.name}
                    </h3>
                    <p className="text-dark/70 text-lg leading-relaxed max-w-lg">
                      {d.desc}
                    </p>

                    <div className="pt-6 border-t border-forest/10 space-y-4">
                      <div className="flex items-center gap-3 text-dark/80">
                        <MapPin className="w-5 h-5 text-teal shrink-0" />
                        <span className="font-medium text-lg">{d.location}</span>
                      </div>
                      
                      {(d.note || d.cta) && (
                        <div className="flex flex-wrap gap-4 pt-2">
                          {d.note && (
                            <div className="flex items-center gap-2 text-sm text-dark/60 bg-forest/5 px-4 py-2 rounded-lg">
                              <Info className="w-4 h-4" />
                              <span>{d.note}</span>
                            </div>
                          )}
                          {d.cta && (
                            d.ctaLink ? (
                              <a
                                href={d.ctaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-semibold text-teal bg-teal/10 px-4 py-2 rounded-lg hover:bg-teal hover:text-white transition-colors cursor-pointer"
                              >
                                <span>{d.cta}</span>
                              </a>
                            ) : (
                              <div className="flex items-center gap-2 text-sm font-semibold text-teal bg-teal/10 px-4 py-2 rounded-lg hover:bg-teal hover:text-white transition-colors cursor-pointer">
                                <span>{d.cta}</span>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== QUOTE BAND PARALLAX ===== */}
      <section className="quote-band relative h-[50vh] md:h-[65vh] overflow-hidden flex items-center justify-center bg-[#081d27]">
        <div
          className="quote-bg absolute w-full h-[150%] top-0 left-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80)' }}
        ></div>
        {/* Dark overlay for optimal text contrast */}
        <div 
          className="absolute inset-0 z-10"
          style={{ backgroundColor: 'rgba(8, 29, 39, 0.65)' }}
        ></div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight drop-shadow-md">
            "Enggano, <span className="text-teal">Dimana Alam Masih Berbicara</span>"
          </h2>
          <p className="text-white/90 mt-6 max-w-xl mx-auto drop-shadow-sm text-base md:text-lg">Aktivitas favorit: snorkeling, memancing, jelajah mangrove, dan menikmati mentari di bibir pantai.</p>
        </div>
      </section>
    </MainLayout>
  );
}