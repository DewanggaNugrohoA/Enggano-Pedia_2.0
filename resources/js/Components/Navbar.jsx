import React, { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Skiper40 } from '@/Components/ui/skiper-ui/skiper40';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { url } = usePage();
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Beranda', href: '/' },
    { label: 'Transportasi', href: '/transportasi' },
    { label: 'Wisata', href: '/wisata' },
    { label: 'Produk', href: '/produk' },
    { label: 'Penginapan', href: '/penginapan' },
    { label: 'Budaya', href: '/budaya' },
  ];

  const showMenu = !scrolled || isHovered;

  return (
    <nav 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group/nav fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo (Floating without white background) */}
          <Link href="/" className="flex items-center group shrink-0 py-1">
            <img 
              src="/images/brand-logo-white.png" 
              alt="EngganoPedia Logo" 
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
            />
          </Link>

          {/* Desktop Menu (Hides on scroll, smoothly reappears on cursor hover) */}
          <div 
            className={`hidden md:flex items-center space-x-8 bg-white/95 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-forest/10 transition-all duration-300 ease-out transform ${
              showMenu 
                ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' 
                : 'opacity-0 -translate-y-4 pointer-events-none scale-95 group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto group-hover/nav:scale-100'
            }`}
          >
            {links.map((link) => (
              <Skiper40 
                key={link.href} 
                href={link.href}
                active={url === link.href}
                variant="dark"
                className="text-sm font-semibold tracking-wider"
              >
                {link.label}
              </Skiper40>
            ))}
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-white/95 backdrop-blur-md p-2.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-forest/10 text-forest hover:text-teal transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-forest/95 backdrop-blur-xl shadow-2xl border-t border-white/10 z-50 transition-all duration-300">
          <div className="px-6 py-6 space-y-2 flex flex-col items-stretch max-h-[calc(100vh-80px)] overflow-y-auto">
            {links.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  url === link.href 
                    ? 'bg-teal/20 text-teal font-bold border-l-4 border-teal pl-3' 
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
