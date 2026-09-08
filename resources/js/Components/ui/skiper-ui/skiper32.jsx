import React from 'react';

export default function Skiper32({ items = [], speed = 40, direction = "left", pauseOnHover = true }) {
  if (!items || items.length === 0) return null;

  // Duplicate items for infinite scroll effect
  const multipliedItems = [...items, ...items, ...items];

  return (
    <div className="relative flex overflow-hidden w-full h-full bg-transparent group">
      <div 
        className={`flex w-max animate-marquee ${
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
        } ${direction === "right" ? '[animation-direction:reverse]' : ''}`}
        style={{ '--duration': `${speed}s` }}
      >
        {multipliedItems.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 mx-4 w-[260px] md:w-[360px] aspect-[4/5] rounded-2xl overflow-hidden relative shadow-lg group/card cursor-pointer">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
              <span className="inline-block px-3 py-1 bg-teal text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider shadow-sm">
                {item.cat}
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/80 text-xs md:text-sm line-clamp-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
      `}</style>
    </div>
  );
}
