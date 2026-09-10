import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, useForm } from '@inertiajs/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import gsap from 'gsap';

export default function Kontak() {
  const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
    nama: '',
    email: '',
    pesan: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post('/kontak', {
      onSuccess: () => reset(),
    });
  };

  return (
    <MainLayout>
      <Head title="Hubungi Kami | EngganoPedia" />

      {/* HEADER SECTION */}
      <section className="bg-forest pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4" data-aos="fade-up">Hubungi Kami</h1>
          <p className="text-white/80 max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="100">Punya pertanyaan atau butuh bantuan merencanakan perjalanan ke Enggano? Kami siap membantu.</p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-forest/5">
            
            {/* Contact Info (Left) */}
            <div className="w-full lg:w-1/3 bg-forest text-white p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal rounded-full opacity-20 -mr-20 -mt-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-moss rounded-full opacity-20 -ml-20 -mb-20 blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-8">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-teal mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Alamat</h4>
                      <p className="text-white/70 text-sm leading-relaxed">Kecamatan Enggano, Kabupaten Bengkulu Utara, Provinsi Bengkulu, Indonesia.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-teal mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Telepon / WhatsApp</h4>
                      <p className="text-white/70 text-sm">+62 812 3456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-teal mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-white/70 text-sm">info@engganotourism.id</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12">
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors">WA</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors">IG</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors">FB</a>
                </div>
              </div>
            </div>

            {/* Contact Form (Right) */}
            <div className="w-full lg:w-2/3 p-10 lg:p-12">
              <h3 className="text-2xl font-serif font-bold text-forest mb-6">Kirim Pesan</h3>
              
              {recentlySuccessful && (
                <div className="mb-6 p-4 bg-mint/50 border border-teal text-forest rounded-lg text-sm font-semibold">
                  Pesan Anda berhasil dikirim! Kami akan segera merespons.
                </div>
              )}

              <form onSubmit={submit} className="space-y-6">
                <div>
                  <label htmlFor="nama" className="block text-sm font-medium text-dark/70 mb-2">Nama Lengkap</label>
                  <input
                    id="nama"
                    type="text"
                    value={data.nama}
                    onChange={e => setData('nama', e.target.value)}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal focus:ring-teal bg-cream/50"
                    placeholder="Masukkan nama Anda"
                  />
                  {errors.nama && <div className="text-red-500 text-sm mt-1">{errors.nama}</div>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark/70 mb-2">Alamat Email</label>
                  <input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal focus:ring-teal bg-cream/50"
                    placeholder="nama@email.com"
                  />
                  {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>

                <div>
                  <label htmlFor="pesan" className="block text-sm font-medium text-dark/70 mb-2">Pesan Anda</label>
                  <textarea
                    id="pesan"
                    rows={5}
                    value={data.pesan}
                    onChange={e => setData('pesan', e.target.value)}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-teal focus:ring-teal bg-cream/50 resize-none"
                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                  ></textarea>
                  {errors.pesan && <div className="text-red-500 text-sm mt-1">{errors.pesan}</div>}
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-teal text-white rounded-full font-bold shadow-md hover:bg-forest transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="h-96 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127393.7153723381!2d102.16480796338183!3d-5.385311059957303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3612807f4ebfb7%3A0xeefb13d298379c16!2sEnggano%20Island!5e1!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Peta Enggano"
        ></iframe>
      </section>

    </MainLayout>
  );
}
