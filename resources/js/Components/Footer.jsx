import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-forest text-white/80 pt-10 pb-6 border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-left">
          
          {/* Brand */}
          <div className="space-y-3 text-left">
            <Link href="/" className="inline-block">
              <img 
                src="/images/brand-logo-white.png" 
                alt="EngganoPedia Logo" 
                className="h-8 sm:h-9 w-auto object-contain drop-shadow-md"
              />
            </Link>
            <p className="text-xs leading-relaxed text-white/65 text-left max-w-sm">
              Temukan keajaiban alam asri, warisan budaya leluhur, dan keanekaragaman hayati yang tak tertandingi di ujung barat Samudera Hindia.
            </p>
          </div>

          {/* Dibuat oleh */}
          <div className="space-y-2.5 text-left md:pl-8">
            <h4 className="text-white font-serif text-base font-semibold text-left">Dibuat oleh:</h4>
            <ul className="space-y-1.5 flex flex-col items-start text-left">
              <li className="text-xs text-white/80 font-bold">Dina Nabila</li>
              <li className="text-xs text-white/80 font-bold">Husna</li>
              <li className="text-xs text-white/80 font-bold">Sevi Rina Pertiwi</li>
              <li className="text-xs text-white/80 font-bold">Dewangga Nugroho Anwar</li>
            </ul>
          </div>

        </div>

        <div className="pt-4 border-t border-white/10 flex justify-start items-center text-left">
          <p className="text-xs text-white/40 text-left">
            &copy; {new Date().getFullYear()} Tim Enggano Pedia
          </p>
        </div>
      </div>
    </footer>
  );
}
