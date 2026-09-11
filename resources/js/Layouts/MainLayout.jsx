import React, { useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

export default function MainLayout({ children }) {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initialize AOS with continuous interactive scroll animation
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out-cubic',
    });

    // Clean up
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-dark w-full max-w-[100vw] overflow-x-hidden relative">
      <Navbar />
      
      <main className="flex-grow w-full max-w-[100vw] overflow-x-hidden">
        {children}
      </main>

      <Footer />
    </div>
  );
}
