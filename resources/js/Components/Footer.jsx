import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-forest text-white/80 pt-10 pb-6 border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-left">
          
          {/* Brand */}
          <div className="space-y-2.5 text-left">
            <span 
              className="font-serif text-xl md:text-2xl font-bold tracking-wide block"
              style={{
                background: 'linear-gradient(to right, #38bdf8, #2dd4bf, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Enggano Pedia
            </span>
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
