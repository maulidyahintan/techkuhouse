import { Server, ShieldCheck, Monitor, TrendingUp, Sparkles, PenLine, HeadphonesIcon, RefreshCw, Zap, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Gratis Domain & Hosting",
    description:
      "Setiap pembuatan website sudah termasuk hosting dan domain gratis. Pilih nama domain yang Anda inginkan, dan kami akan urus semuanya.",
  },
  {
    icon: ShieldCheck,
    title: "Sertifikat SSL Gratis",
    description:
      "Website Anda akan dilengkapi sertifikat SSL gratis untuk memastikan keamanan data dan meningkatkan kepercayaan pengunjung.",
  },
  {
    icon: Monitor,
    title: "Desain Responsif",
    description:
      "Website tampil sempurna di semua perangkat — komputer, tablet, maupun ponsel — tanpa kompromi kualitas.",
  },
  {
    icon: TrendingUp,
    title: "Optimasi SEO",
    description:
      "Kami pastikan website Anda mudah ditemukan di Google sejak hari pertama, dengan riset kata kunci dan struktur SEO yang tepat.",
  },
  {
    icon: Sparkles,
    title: "Desain Modern",
    description:
      "Tampilan website menggunakan desain modern dan teknologi terbaru agar kesan profesional dan up-to-date selalu terjaga.",
  },
  {
    icon: PenLine,
    title: "Konten & Copywriting",
    description:
      "Kami bantu menulis konten yang menarik dan efektif — dari headline hingga deskripsi layanan — untuk meningkatkan konversi pengunjung.",
  },
  {
    icon: HeadphonesIcon,
    title: "Full Support Selamanya",
    description:
      "Kami selalu siap membantu kapanpun Anda butuhkan — mulai dari teknis website, update konten, hingga konsultasi pengembangan bisnis digital.",
  },
  {
    icon: RefreshCw,
    title: "Revisi Sampai Puas",
    description:
      "Tidak ada batasan revisi selama masa pengerjaan. Kami terus perbaiki hingga Anda benar-benar puas dengan hasilnya.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description:
      "Tim kami merespons pertanyaan dan permintaan Anda dengan cepat. Rata-rata balasan dalam hitungan menit via WhatsApp.",
  },
  {
    icon: BadgeDollarSign,
    title: "Harga Kompetitif",
    description:
      "Kualitas premium dengan harga yang terjangkau. Tidak ada biaya tersembunyi — semua sudah termasuk sejak awal.",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Apa yang Akan Anda Dapatkan?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
            Setiap paket website TechKuHouse sudah mencakup semua yang Anda
            butuhkan untuk hadir secara profesional di dunia digital.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
                <div className="mt-6 h-1 w-10 rounded-full bg-primary/30 group-hover:bg-primary group-hover:w-16 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
