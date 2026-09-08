import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

export default function Enggano3DMap() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110060.97716832528!2d102.2375355!3d-5.3978439499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e498fcb80ecca2d%3A0xa1798787a6c3def8!2sEnggano%20Island!5e1!3m2!1sen!2sid!4v1788701411863!5m2!1sen!2sid";

  return (
    <section className="pt-6 pb-20 bg-gradient-to-b from-cream via-white to-cream relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-forest/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Grid: Map on Left, Information on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Satellite Map (Compact Size) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-5 shadow-xl border-4 border-white relative overflow-hidden" data-aos="fade-right">
            <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden shadow-inner bg-dark">
              <iframe 
                src={mapUrl}
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Peta Satelit Pulau Enggano"
              ></iframe>
            </div>

            {/* Bottom Bar Info */}
            <div className="mt-3 px-1 flex flex-wrap justify-between items-center gap-3 text-xs font-medium text-dark/70">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal shrink-0" />
                <span className="font-mono">05°24′S 102°16′E · Enggano</span>
              </div>
              <a 
                href="https://maps.google.com/?q=Enggano+Island" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-teal hover:text-forest font-semibold transition-colors"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Information about Pulau Enggano */}
          <div className="lg:col-span-5 flex flex-col justify-center" data-aos="fade-left">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-4">
              Sekilas Pulau Enggano
            </h3>
            <p className="text-dark/80 text-base sm:text-lg leading-relaxed">
              Pulau Enggano adalah salah satu pulau terluar Indonesia yang terletak di barat daya Sumatra, berjarak sekitar 156 km dari Kota Bengkulu. Dikelilingi langsung oleh birunya Samudra Hindia, pulau ini memiliki luas wilayah sekitar 400 km² dengan ekosistem pesisir alami, hamparan terumbu karang, dan hutan tropis dataran rendah yang asri.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
