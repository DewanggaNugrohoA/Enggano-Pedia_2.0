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
          {/* Logo with Frosted Glass Pill matching Menu (Always Visible) */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 md:px-7 md:py-3 rounded-full shadow-lg border border-forest/10 transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02] flex items-center">
              <span 
                className="font-serif text-xl md:text-2xl font-bold tracking-wide"
                style={{
                  background: 'linear-gradient(to right, #0F3445, #0d9488, #2563eb)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Enggano Pedia
              </span>
            </div>
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
          <div 
            className={`md:hidden flex items-center transition-all duration-300 ${
              showMenu || mobileMenuOpen 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 -translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto'
            }`}
          >
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-white/95 backdrop-blur-md p-2.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-forest/5 text-forest hover:text-teal transition-colors"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-forest shadow-xl border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            {links.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-center py-3 text-lg transition-colors ${url === link.href ? 'text-teal font-semibold' : 'text-white/80 hover:text-white'}`}
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
