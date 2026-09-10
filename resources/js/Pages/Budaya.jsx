import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Skiper32 from '@/Components/ui/skiper-ui/skiper32';
import { 
  Home as HomeIcon, 
  Music, 
  Shirt, 
  Theater, 
  MessageSquare
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── DATA 5 PILAR TRADISI SUKU ENGGANO (BERDASARKAN RISET ETNOGRAFI ASLI) ─── */
const tradisiData = [
  {
    id: 'rumah-adat',
    tabLabel: 'Rumah Adat',
    icon: HomeIcon,
    title: 'Rumah Adat Yubuaho (Kubu)',
    subtitle: 'Arsitektur Panggung Melingkar Tahan Gempa & Pengintaian Maritim',
    badge: 'Arsitektur Tradisional Yubuaho',
    image: '/images/timeline/rumah_adat_kubu.png',
    summary: 'Karya arsitektur panggung melingkar setinggi 2 hingga 6 meter yang dibangun tanpa paku besi, dirancang secara jenius menggunakan pasak kayu ulin dan ikatan rotan untuk meredam gempa tektonik serta menahan badai Samudera Hindia.',
    description: [
      "Rumah adat suku Enggano secara tradisional dikenal dengan nama Yubuaho (atau dalam dialek lokal kerap disebut Rumah Panggung Kubu). Struktur arsitekturnya berbentuk bulat melingkar atau segi delapan (oktagonal) dan berdiri megah di atas tiang-tiang kayu bulat setinggi 2 hingga 6 meter dari permukaan tanah. Desain panggung yang menjulang tinggi ini merupakan bentuk adaptasi arsitektural yang sangat cerdas terhadap kondisi geografis kepulauan terluar yang rawan terhadap pasang surut air laut, badai samudera tropis, kelembapan tanah rawa, serta ancaman binatang liar.",
      "Keistimewaan utama Yubuaho terletak pada sistem konstruksinya yang sepenuhnya tahan gempa (anti-seismic). Bangunan ini didirikan murni tanpa menggunakan satu pun paku besi logam. Seluruh persambungan kerangka mengandalkan sistem pasak kayu dan ikatan rotan hutan alami yang memiliki elastisitas tinggi saat terjadi guncangan tektonik. Tiang-tiang penyangga utamanya menggunakan kayu ulin serta kayu hutan pilihan yang sangat kuat dan awet seperti kayu apua, ehei, dan bintangor. Bagian dinding lantai atas terbuat dari anyaman bilah bambu yang ringan dan fleksibel, sementara lantai dasar sengaja dibiarkan terbuka tanpa dinding.",
      "Pada masa lampau, Yubuaho kerap didirikan di puncak-puncak perbukitan pulau yang berfungsi sangat strategis sebagai benteng pengintaian musuh dari arah laut lepas. Selain berfungsi sebagai tempat kediaman keluarga, Yubuaho juga memegang peranan sentral sebagai balai musyawarah adat, tempat berkumpulnya para pemangku adat dan warga suku untuk memutuskan tatanan sosial, menjaga hukum adat, hingga difungsikan sebagai rumah singgah penghormatan bagi tamu pulau."
    ],
    keyPoints: [
      "Konstruksi pasak kayu ulin, apua, dan ikatan rotan hutan elastis yang terbukti tahan guncangan gempa bumi tektonik",
      "Struktur panggung melingkar atau segi delapan setinggi 2 hingga 6 meter dengan lantai dasar terbuka untuk kelancaran udara",
      "Dinding bilah bambu ringan dan atap kerucut curam berbahan anyaman daun rumbia, rotan, atau ijuk penahan badai samudera",
      "Berfungsi ganda dalam sejarah sebagai pos pertahanan pengintaian maritim sekaligus balai pertemuan musyawarah adat",
      "Simbol kedaulatan tempat tinggal yang mencerminkan identitas dan kemandirian arsitektur asli Suku Enggano"
    ],
    highlightBox: {
      title: 'Karakteristik & Material Asli Yubuaho',
      items: ['Kayu Ulin / Apua / Ehei', 'Pasak Kayu Anti-Gempa', 'Bambu Ringan Fleksibel', 'Atap Daun Rumbia & Ijuk', 'Panggung 2–6 Meter']
    }
  },
  {
    id: 'musik-tari',
    tabLabel: 'Musik Tradisional',
    icon: Music,
    title: 'Seni Tari & Musik Tradisional',
    subtitle: 'Lagu Daerah "Bur Bur", Terompet Kerang Kamiu, & Tari Perang Perdamaian',
    badge: 'Seni Musik & Pertunjukan Adat',
    image: '/images/timeline/tari_tradisional.jpg',
    videoUrl: 'https://www.youtube.com/embed/qNWWjtQptIk',
    videoTitle: 'BUR BUR | Lagu Daerah Pulau Enggano',
    videoArtist: 'Sanggar Kapa-Kapa Dopok',
    youtubeUrl: 'https://youtu.be/qNWWjtQptIk?si=SVbdOrqUpziqZ3Fw',
    summary: 'Karya musik dan tari tradisional Pulau Enggano yang sarat filosofi persaudaraan, diiringi lagu daerah seperti "Bur Bur" karya Sanggar Kapa-Kapa Dopok serta gema tiupan sakral terompet kerang laut Kamiu.',
    description: [
      "Seni tari dan musik Suku Enggano memiliki keterikatan yang sangat erat dengan sejarah maritim dan filosofi kerukunan antarsuku. Salah satu karya seni musik tradisional yang terus dilestarikan oleh generasi pulau adalah lagu daerah 'Bur Bur' yang dibawakan dengan penuh penghayatan oleh para seniman lokal, seperti Sanggar Kapa-Kapa Dopok. Lagu ini merefleksikan ritme kehidupan masyarakat kepulauan, kecintaan pada tanah leluhur, serta harmoni kebersamaan di tengah Samudera Hindia.",
      "Di samping kekayaan lagu daerah, tarian adat yang paling melegenda dan sakral adalah Tari Perang. Tarian ini bukan sekadar unjuk ketangkasan fisik atau hiburan panggung, melainkan sebuah dramaturgi sejarah yang mengisahkan masa-masa perselisihan antarsuku di masa purba (Kaitora, Kauno, Kaharubi, Kaarubi, Kaahoao, dan Kamay) dalam mempertahankan wilayah, yang kemudian berujung pada ikrar perdamaian abadi dan persaudaraan antarsuku yang dijunjung tinggi hingga kini.",
      "Masyarakat adat Enggano juga memiliki Tari Kahinoa (secara harfiah berarti Tari Semut) yang sarat akan muatan spiritual tentang semangat gotong-royong warga pulau. Dalam pertunjukan tradisional, alunan vokal para penari dipadukan dengan Kamiu, yaitu terompet cangkang kerang laut besar (triton shell) yang dahulu ditiup sebagai tanda bahaya serta seruan berkumpul musyawarah adat, bersama seruling bambu dua lubang khas Enggano dan tabuhan ritmis perkusi kayu berongga."
    ],
    keyPoints: [
      "Music Video (MV) Lagu Daerah 'Bur Bur' oleh Sanggar Kapa-Kapa Dopok sebagai wujud pelestarian musik asli Enggano",
      "Tari Perang sebagai simbol sejarah resolusi konflik dan perjanjian damai abadi antarsuku di Pulau Enggano",
      "Tari Kahinoa (Tari Semut) yang mengajarkan filosofi persatuan dan gotong-royong masyarakat pulau terluar",
      "Penggunaan terompet cangkang kerang laut Kamiu sebagai instrumen tiup dan sinyal adat kemaritiman",
      "Dipentaskan secara khidmat pada upacara pengukuhan kepala suku dan penyambutan tamu kehormatan adat"
    ],
    highlightBox: {
      title: 'Elemen Seni Musik & Pertunjukan Asli',
      items: ['Lagu Daerah "Bur Bur"', 'Sanggar Kapa-Kapa Dopok', 'Tari Perang Perdamaian', 'Tari Kahinoa (Semut)', 'Terompet Kerang Kamiu']
    }
  },
  {
    id: 'pakaian-adat',
    tabLabel: 'Pakaian Adat',
    icon: Shirt,
    title: 'Pakaian Adat Eyupa & Busana Kulit Kayu',
    subtitle: 'Keahlian Tempa Kulit Kayu Terap & Estetika Mahkota Alami',
    badge: 'Busana Tradisional Eyupa',
    image: '/images/timeline/kepercayaan_alam.png',
    secondaryImage: '/images/timeline/struktur_sosial.jpg',
    secondaryImageTitle: 'Struktur Sosial · Enam Suku Adat Enggano',
    summary: 'Busana tradisional langka yang dibuat tanpa alat tenun, melainkan melalui penempaan serat kulit kayu terap alami yang dipadukan dengan hiasan mahkota daun muda, bulu burung laut, dan ornamen kerang samudera.',
    description: [
      "Pakaian tradisional masyarakat adat Suku Enggano secara turun-temurun dikenal dengan sebutan Eyupa. Berbeda dengan suku-suku di daratan Sumatera yang mengandalkan teknik pertenunan benang kapas atau sutra, masyarakat adat Enggano secara historis tidak mengenal alat tenun. Sebagai gantinya, para leluhur mengembangkan keahlian etnobotani yang sangat maju dalam mengolah serat kulit kayu pohon hutan tropis, terutama dari pohon terap (Artocarpus elasticus) dan pohon beringin hutan menjadi bahan sandang yang lentur, kuat, dan nyaman digunakan.",
      "Proses pembuatan bahan busana kulit kayu (bark cloth) ini membutuhkan ketelitian dan kesabaran tinggi. Kulit kayu pilihan dikuliti dari batangnya, direndam berhari-hari di aliran air tawar untuk menghilangkan getah alami, lalu ditempa secara manual menggunakan pemukul kayu beralur khusus hingga serat-serat kayunya melar, menjadi tipis, lembut, dan membentuk lembaran kain yang siap dirangkai. Lembaran-lembaran tersebut kemudian dirangkai dan dijahit menggunakan benang dari serat tanaman liar dan rotan halus untuk membentuk pakaian pelindung tubuh maupun busana ritual adat.",
      "Busana Eyupa dilengkapi dengan ornamen kepala berupa mahkota yang dianyam dari daun kelapa muda (janur) dan daun pandan hutan, dihiasi bulu-bulu burung laut serta burung endemik pulau. Para tetua adat juga mengenakan kalung cangkang kerang laut mutiara, batu karang berukir, serta taring binatang buruan sebagai simbol kehormatan dan kedudukan adat. Di era modern saat ini, selain pelestarian Eyupa asli, masyarakat pulau juga mengembangkan kreasi kain Batik Kagano yang mengabadikan motif burung kacamata khas Enggano sebagai ikon kebanggaan budaya kontemporer."
    ],
    keyPoints: [
      "Pakaian adat tradisional Eyupa berbahan dasar serat kulit kayu pohon terap alami (bark cloth)",
      "Diproduksi murni tanpa mesin dan alat tenun melalui teknik penempaan kayu tradisional warisan leluhur",
      "Mahkota anyaman daun pandan dan kelapa muda berhiaskan bulu burung endemik kepulauan Enggano",
      "Aksesoris kalung taring binatang hutan dan cangkang kerang laut mutiara sebagai lambang kehormatan tetua",
      "Pengembangan motif kontemporer Batik Kagano yang terinspirasi dari kekayaan fauna khas Pulau Enggano"
    ],
    highlightBox: {
      title: 'Komponen Busana Adat Eyupa',
      items: ['Busana Kulit Kayu Terap', 'Bark Cloth Tradisional', 'Mahkota Anyaman Daun', 'Kalung Kerang Mutiara', 'Kreasi Batik Kagano']
    }
  },
  {
    id: 'upacara-adat',
    tabLabel: 'Upacara Adat',
    icon: Theater,
    title: 'Upacara Adat & Kepemimpinan Lembaga Adat',
    subtitle: 'Tatanan Dewan Pabuki, Ritual Sedekah Bumi Pahpe, & Hukum Ulayat',
    badge: 'Tatanan Adat & Ritual',
    image: '/images/timeline/struktur_sosial.jpg',
    secondaryImage: '/images/timeline/upacara.png',
    secondaryImageTitle: 'Prosesi Ritual & Upacara Adat Enggano',
    summary: 'Sistem kepemimpinan adat tertinggi yang dikoordinasikan oleh Pabuki bersama para kepala 6 suku, mengawal ritual sakral Pahpe di bibir pantai dan hukum ulayat perlindungan alam pulau.',
    description: [
      "Masyarakat hukum adat Pulau Enggano memiliki sistem tata kelola sosial yang sangat teratur dan terstruktur rapi. Lembaga adat tertinggi di pulau dipimpin oleh seorang koordinator atau ketua dewan adat yang bergelar Pabuki. Posisi Pabuki menaungi dan mengoordinasikan kepala suku dari enam suku yang hidup berdampingan di Enggano, yaitu lima suku asli kepulauan (Kaitora, Kauno, Kaharubi, Kaarubi, dan Kaahoao) serta satu suku pendatang yang diakui dan diangkat secara sah dalam tatanan adat (Suku Kamay). Pabuki dan para kepala suku memegang otoritas moral tertinggi yang pendapatnya sangat dihormati dan dipatuhi dalam setiap musyawarah pengambilan keputusan adat.",
      "Salah satu upacara adat sakral yang paling penting dan rutin digelar adalah Ritual Pahpe. Ritual ini merupakan bentuk 'sedekah bumi dan laut' yang menjadi wujud ungkapan rasa syukur masyarakat adat atas limpahan hasil panen kebun dan tangkapan ikan samudera, sekaligus doa tolak bala agar seluruh warga pulau terhindar dari marabahaya bencana alam laut. Dalam prosesi Pahpe, seluruh warga dari berbagai desa berbondong-bondong membawa hasil bumi terbaik mereka ke tepi pantai, untuk kemudian digantungkan dan didoakan secara sakral pada tiang-tiang kayu adat yang telah disusun oleh para kepala suku.",
      "Selain ritual kesyukuran, masyarakat adat Enggano juga memegang teguh tradisi Hukum Pantangan dan Buka Pantang. Ketika seorang tokoh adat atau kepala suku berpulang, bendera pantangan akan dikibarkan di sekeliling wilayah adat sebagai tanda berkabung resmi, di mana seluruh kegiatan pesta, musik gembira, dan keramaian dihentikan sementara demi menghormati arwah leluhur hingga upacara Buka Pantang resmi dilaksanakan. Tatanan adat ini juga mengatur sanksi tegas terhadap perusakan tanah ulayat, batas hutan larangan, dan terumbu karang laut demi menjaga kelestarian ekosistem pulau terluar."
    ],
    keyPoints: [
      "Kepemimpinan Dewan Adat dipimpin oleh Pabuki yang mengoordinasikan kepala enam suku adat Enggano",
      "Harmoni kehidupan sosial antara lima suku asli (Kaitora, Kauno, Kaharubi, Kaarubi, Kaahoao) dan Suku Kamay",
      "Ritual Pahpe sebagai tradisi sedekah bumi dan laut tahunan di pesisir pantai untuk tolak bala marabahaya",
      "Hukum adat masa berkabung dan prosesi Buka Pantang yang sakral untuk menghormati tokoh adat yang wafat",
      "Hukum ulayat adat yang ketat dalam melindungi hutan lindung pulau dan kawasan terumbu karang laut"
    ],
    highlightBox: {
      title: 'Tatanan Adat & Ritual Sakral',
      items: ['Gelar Adat Pabuki', 'Dewan Enam Suku Adat', 'Ritual Pahpe (Sedekah Pantai)', 'Tradisi Buka Pantang', 'Hukum Perlindungan Ulayat']
    }
  },
  {
    id: 'bahasa-lokal',
    tabLabel: 'Bahasa Lokal',
    icon: MessageSquare,
    title: 'Bahasa Enggano (E-enggano)',
    subtitle: 'Rumpun Bahasa Isolat Samudera yang Paling Berbeda di Nusantara',
    badge: 'Kajian Linguistik Isolat',
    image: '/images/timeline/bahasa_arsitektur.jpeg',
    videoUrl: 'https://www.youtube.com/embed/XxpOcvw1WpM',
    videoTitle: 'Eksplorasi Budaya Bahasa Enggano',
    videoArtist: 'Sanggar Kapa-Kapa Dopok',
    youtubeUrl: 'https://youtu.be/XxpOcvw1WpM?si=FrAeOejQFaUU_hr_',
    summary: 'Bahasa daerah unik yang menjadi fokus kajian para linguis dunia karena sistem fonologi vokal sengau dan leksikon maritim purba yang sangat mandiri akibat isolasi geografis samudra selama berabad-abad.',
    description: [
      "Bahasa Enggano (secara lokal dituturkan sebagai E-enggano) menempati posisi yang sangat unik dan penuh kekaguman dalam kajian linguistik Nusantara dan internasional. Sementara sebagian besar bahasa daerah di daratan Sumatera dan pesisir baratnya tergolong dalam rumpun Austronesia dengan kedekatan kosakata yang mudah dikenali, bahasa Enggano justru menunjukkan perbedaan leksikal dan struktural yang sangat drastis, sehingga para peneliti sering mengkaji bahasa ini sebagai bahasa yang mempertahankan lapisan substratum pra-Austronesia yang sangat tua dan mandiri.",
      "Isolasi geografis Pulau Enggano yang terpisah sejauh lebih dari 100 kilometer di tengah Samudera Hindia dengan perairan laut dalam yang ganas menjadi faktor utama mengapa bahasa ini berkembang secara mandiri selama ratusan tahun tanpa banyak terpengaruh oleh bahasa-bahasa daratan utama Sumatera seperti Minangkabau, Melayu, maupun Rejang. Bahasa ini memiliki sistem fonologi vokal yang unik, termasuk keberadaan bunyi vokal sengau (nasalized vowels) yang khas serta perubahan bunyi morfem yang sangat teratur namun berbeda dari rumpun bahasa di sekitarnya.",
      "Di dalam khazanah bahasanya, Bahasa Enggano merekam kekayaan pengetahuan maritim leluhur yang sangat spesifik, mulai dari penamaan jenis-jenis arus laut dalam, arah pergerakan angin muson samudera, gugusan rasi bintang navigasi pelayaran purba, hingga klasifikasi flora dan fauna endemik kepulauan. Saat ini, masyarakat adat bersama para pemuda dan pemangku adat giat melakukan revitalisasi penuturan bahasa Enggano melalui tradisi lisan, syair pantun, dan pengenalan muatan lokal di sekolah agar bahasa ibu yang bernilai tinggi ini tetap lestari di tengah arus modernisasi."
    ],
    keyPoints: [
      "Posisi linguistik unik yang dianggap sangat berbeda dan menyimpan lapisan bahasa isolat purba kepulauan",
      "Berkembang secara mandiri akibat isolasi geografis samudra lepas selama berabad-abad tanpa pengaruh luar",
      "Sistem fonologi khas dengan kekayaan vokal sengau dan struktur leksikon maritim purba yang autentik",
      "Menyimpan sistem pengetahuan navigasi laut, pergerakan arus angin, dan klasifikasi flora-fauna endemik",
      "Upaya revitalisasi berkelanjutan melalui sastra tutur lisan, cerita rakyat tetua, dan pendidikan generasi muda"
    ],
    highlightBox: {
      title: 'Fokus Linguistik Bahasa Enggano',
      items: ['Bahasa E-enggano', 'Strata Isolat Samudera', 'Fonologi Vokal Sengau', 'Leksikon Maritim Purba', 'Revitalisasi Bahasa Ibu']
    }
  }
];

/* ─── GALERI BUDAYA ASLI ─── */
const galleryImages = [
  { url: '/images/timeline/tari_tradisional.jpg', title: 'Tari Tradisional Adat' },
  { url: '/images/timeline/rumah_adat_kubu.png', title: 'Arsitektur Rumah Panggung Kubu' },
  { url: '/images/timeline/struktur_sosial.jpg', title: 'Tatanan 6 Suku Adat Enggano' },
  { url: '/images/timeline/bahasa_arsitektur.jpeg', title: 'Warisan Busana & Arsitektur' },
  { url: '/images/timeline/kepercayaan_alam.png', title: 'Kepercayaan & Kesakralan Alam' },
  { url: '/images/timeline/upacara.png', title: 'Upacara Kebersamaan Warga' }
];

export default function Budaya() {
  const [activeTradisiIdx, setActiveTradisiIdx] = useState(0);
  const activeTradisi = tradisiData[activeTradisiIdx];

  return (
    <MainLayout>
      <Head title="Budaya Suku | EngganoPedia" />

      {/* ─── HEADER HERO SECTION ─── */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081d27]/90 via-[#081d27]/80 to-[#081d27]/90" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold mb-4 drop-shadow-lg" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.7)' }}>
            Warisan Budaya Suku Enggano
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-base sm:text-lg drop-shadow-md leading-relaxed" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
            Menyelami tradisi luhur, arsitektur pusaka, dan tatanan adat sakral yang dijaga turun-temurun di gerbang Samudera Hindia.
          </p>
        </div>
      </section>

      {/* ─── 2.1 PENGENALAN SUKU & ENAM SUKU ADAT ─── */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Image Column with Real Photo */}
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-forest/10 group">
                <img 
                  src="/images/timeline/kepercayaan_alam.png" 
                  alt="Mengenal Suku Enggano - Kepercayaan & Kesakralan Alam" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <span className="text-xs font-bold tracking-widest uppercase text-teal mb-2 block">
                Masyarakat Adat
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest mb-6 leading-tight">
                Mengenal Suku Enggano
              </h2>
              <div className="w-16 h-1 bg-teal mb-8 rounded-full" />
              
              <p className="text-dark/80 text-base sm:text-lg leading-relaxed mb-6">
                Suku Enggano adalah penduduk asli Pulau Enggano yang telah mendiami pulau terluar ini selama berabad-abad di tengah ganasnya Samudera Hindia. Mereka memiliki bahasa, struktur sosial, hukum adat ulayat, dan kearifan ekologi yang sangat unik dan berbeda dari suku-suku lain di daratan Sumatera.
              </p>
              
              <p className="text-dark/75 leading-relaxed text-sm sm:text-base">
                Tatanan kehidupan masyarakat adat dipayungi oleh sistem persaudaraan enam suku adat, yang terdiri dari lima suku asli (Kaitora, Kauno, Kaharubi, Kaarubi, dan Kaahoao) serta Suku Kamay sebagai suku keenam yang diakui dan diangkat secara sah dalam tatanan adat. Dipimpin oleh koordinator lembaga adat bergelar Pabuki dan para kepala suku, masyarakat senantiasa menjaga keharmonisan tanah ulayat, hukum perlindungan hutan sakral, dan kebersamaan hidup antargenerasi.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2.2 INTERACTIVE TRADISI SHOWCASE (EKSPLORASI BUDAYA MENDALAM) ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-teal text-xs font-bold tracking-widest uppercase mb-2 block">
              Eksplorasi Mendalam
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest mb-4">
              Kekayaan Tradisi Suku Enggano
            </h2>
            <p className="text-dark/65 text-sm sm:text-base">
              Pilih pilar kebudayaan di bawah ini untuk menyelami cerita sejarah, filosofi, foto dokumentasi asli, dan keunikan tradisi secara langsung tanpa perlu berpindah halaman.
            </p>
          </div>

          {/* Interactive Navigation Switcher */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10" data-aos="fade-up">
            {tradisiData.map((item, idx) => {
              const IconComponent = item.icon;
              const isActive = activeTradisiIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTradisiIdx(idx)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shadow-sm border ${
                    isActive
                      ? 'bg-forest text-white border-forest shadow-md scale-105'
                      : 'bg-cream text-forest/70 border-forest/5 hover:bg-teal/15 hover:text-forest'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-teal' : 'text-forest/60'}`} />
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Main Interactive Showcase Card */}
          <div 
            key={activeTradisi.id}
            className="bg-[#FAF9F5] rounded-3xl border border-forest/10 overflow-hidden shadow-xl"
            data-aos="fade-up"
          >
            <div className="flex flex-col lg:flex-row">
              
              {/* Media Column (Left) */}
              <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between bg-forest relative overflow-hidden text-white">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 scale-105"
                  style={{ backgroundImage: `url(${activeTradisi.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-teal/20 border border-teal/40 text-teal text-xs font-bold uppercase tracking-wider">
                      {activeTradisi.badge}
                    </span>
                    <span className="text-xs text-white/50 font-mono">Pilar 0{activeTradisiIdx + 1} / 05</span>
                  </div>

                  {/* 1. Foto di Atas */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group mb-5">
                    <img 
                      src={activeTradisi.image}
                      alt={activeTradisi.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Foto Tambahan di Bawahnya (jika ada) */}
                  {activeTradisi.secondaryImage && (
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group mb-5">
                      <img 
                        src={activeTradisi.secondaryImage}
                        alt={activeTradisi.secondaryImageTitle || activeTradisi.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* 2. MV di Bawah Foto (Khusus Tradisi yang memiliki video) */}
                  {activeTradisi.videoUrl && (
                    <div className="mb-5">
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
                        <iframe
                          src={activeTradisi.videoUrl}
                          title={activeTradisi.videoTitle || activeTradisi.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>

                      {activeTradisi.videoArtist && (
                        <div className="mt-2 flex items-center justify-between text-xs text-white/70 px-1">
                          <span className="text-white/60 truncate pr-2">{activeTradisi.videoTitle || 'Dokumentasi Budaya'}</span>
                          <span className="text-teal font-medium text-[11px] shrink-0">
                            {activeTradisi.videoArtist}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-white/85 text-sm leading-relaxed italic border-l-2 border-teal pl-4">
                    "{activeTradisi.summary}"
                  </p>
                </div>

                {/* Highlight Tags Box */}
                <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal mb-3">
                    {activeTradisi.highlightBox.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {activeTradisi.highlightBox.items.map((it, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-xl bg-white/10 text-white text-xs font-medium border border-white/10">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Storytelling & Content Column (Right) */}
              <div className="lg:w-1/2 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold tracking-wider text-teal uppercase mb-1 block">
                    Penjelasan Budaya & Sejarah
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-2 leading-tight">
                    {activeTradisi.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-dark/50 mb-6">
                    {activeTradisi.subtitle}
                  </p>

                  {/* Multi-paragraph in-depth description */}
                  <div className="space-y-4 text-dark/80 text-sm sm:text-base leading-relaxed">
                    {activeTradisi.description.map((par, pIdx) => (
                      <p key={pIdx}>{par}</p>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── 2.3 GALERI FOTO BUDAYA ─── */}
      <section className="py-24 bg-forest text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12" data-aos="fade-right">
          <span className="text-teal text-xs font-bold tracking-widest uppercase mb-2 block">
            Dokumentasi Visual
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-3">Galeri Warisan Budaya</h2>
          <p className="text-white/70 text-sm sm:text-base max-w-xl">
            Kumpulan potret kehidupan, kesenian, dan tatanan adat Suku Enggano di pulau terluar Nusantara.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Skiper32 images={galleryImages} className="max-w-full" />
        </div>
      </section>

    </MainLayout>
  );
}
