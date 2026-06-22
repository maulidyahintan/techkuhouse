import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/sections/CTA";
import PricingPackages from "@/components/sections/PricingPackages";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import PromoFree from "@/components/sections/PromoFree";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan TechKuHouse: website mulai Rp700rb (Silver/Gold/Diamond/Platinum), SEO bergaransi, Google Ads, Social Media Ads, pembuatan aplikasi. Domain & hosting gratis. Garansi selamanya.",
  openGraph: {
    title: "Layanan TechKuHouse | Website, SEO, Ads & Aplikasi",
    description:
      "4 paket website mulai Rp700.000 dengan domain+hosting gratis dan garansi selamanya. Plus SEO bergaransi, Google Ads, dan pembuatan aplikasi mobile.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com"}/layanan`,
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Layanan TechKuHouse" }],
  },
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com"}/layanan` },
};

const services = [
  {
    id: "web-development",
    icon: "💻",
    title: "Pembuatan Website",
    description:
      "Website profesional dengan desain responsif, modern, dan SEO-friendly. Cocok untuk semua jenis bisnis mulai dari UKM hingga perusahaan besar.",
    features: [
      "Website Company Profile",
      "Toko Online / E-Commerce",
      "Landing Page / Sales Page",
      "Blog / Portal Berita",
      "Domain & Hosting Gratis",
      "SSL Gratis (HTTPS)",
      "Template WordPress Premium",
      "Video Panduan Edit Konten",
    ],
    pricing: "Mulai dari Rp 700.000",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "Go", "Express", "PostgreSQL", "Node.js"],
  },
  {
    id: "seo-bergaransi",
    icon: "🚀",
    title: "SEO Bergaransi",
    description:
      "Tingkatkan peringkat website di Google dengan strategi SEO yang telah terbukti. Kami bergaransi hasil nyata untuk meningkatkan traffic organik.",
    features: [
      "On-Page SEO Optimization",
      "Technical SEO Audit",
      "Riset Kata Kunci Mendalam",
      "Optimasi Kecepatan Website",
      "Google Analytics & Search Console",
      "Laporan Bulanan Terperinci",
      "Backlink Building Berkualitas",
      "Garansi Peningkatan Ranking",
    ],
    pricing: "Mulai dari Rp 3.000.000/bulan",
    technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs"],
  },
  {
    id: "mobile-app",
    icon: "📱",
    title: "Pembuatan Aplikasi",
    description:
      "Aplikasi mobile dan web custom untuk memenuhi kebutuhan bisnis spesifik Anda. Dikembangkan dengan teknologi terkini untuk performa optimal.",
    features: [
      "Mobile App Android & iOS",
      "Web Application Custom",
      "E-Commerce Solutions",
      "API Integration Services",
      "UI/UX Design Profesional",
      "Cloud-based Applications",
      "Maintenance & Update",
      "App Store Deployment",
    ],
    pricing: "Mulai dari Rp 5.000.000",
    technologies: ["React Native", "Next.js", "Node.js", "Firebase"],
  },
  {
    id: "google-ads",
    icon: "📢",
    title: "Google Ads",
    description:
      "Kampanye iklan berbayar yang efektif untuk menjangkau calon pelanggan baru dalam waktu singkat dan meningkatkan penjualan secara signifikan.",
    features: [
      "Setup & Konfigurasi Kampanye",
      "Riset & Optimasi Kata Kunci",
      "Iklan Search & Display",
      "Remarketing / Retargeting",
      "A/B Testing Iklan",
      "Optimasi Budget Harian",
      "Laporan Performa Rutin",
      "Konsultasi Strategi Iklan",
    ],
    pricing: "Mulai dari Rp 2.000.000/bulan",
    technologies: ["Google Ads", "Google Analytics", "Google Tag Manager"],
  },
  {
    id: "social-media-ads",
    icon: "📲",
    title: "Jasa Admin",
    description:
      "Membantu menjadi admin bisnis atau toko online anda",
    features: [
      "Instagram & Facebook",
      "TikTok",
      "Desain Kreatif Iklan",
      "Strategi Konten Bisnis",
    ],
    pricing: "Mulai dari Rp 1.500.000/bulan",
    technologies: ["Meta Ads Manager", "TikTok Ads", "Canva Pro", "Adobe"],
  },
  {
    id: "web-maintenance",
    icon: "🛠️",
    title: "Maintenance Website",
    description:
      "Layanan pemeliharaan website berkala untuk menjaga performa, keamanan, dan update konten agar bisnis Anda tetap online dengan optimal.",
    features: [
      "Backup Rutin & Keamanan",
      "Update Plugin & Tema",
      "Pembaruan Konten",
      "Bug Fixing & Troubleshooting",
      "Monitoring Uptime 24/7",
      "SSL Certificate Management",
      "Optimasi Kecepatan",
      "Laporan Bulanan",
    ],
    pricing: "Mulai dari Rp 500.000/bulan",
    technologies: ["cPanel", "CloudFlare", "NexJS", "Google Cloud"],
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Kami menggali kebutuhan, tantangan, dan tujuan bisnis Anda secara mendalam untuk memahami solusi digital yang paling tepat.",
  },
  {
    step: "02",
    title: "Define",
    description: "Bersama Anda, kami menetapkan objektif yang jelas, terukur, dan selaras dengan visi bisnis Anda untuk hasil yang optimal.",
  },
  {
    step: "03",
    title: "Design & Build",
    description: "Tim kami merancang strategi dan membangun solusi digital Anda — dari desain UI hingga pengembangan — dengan standar kualitas tertinggi.",
  },
  {
    step: "04",
    title: "Deliver & Grow",
    description: "Website diluncurkan, dimonitor, dan kami pastikan terus memberikan hasil nyata bagi pertumbuhan bisnis Anda.",
  },
];


export default function LayananPage() {
  return (
    <>
      <section className="relative min-h-[450px] sm:min-h-[520px] flex items-center pt-20 sm:pt-24 pb-16 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&auto=format"
          alt="Layanan Digital TechKuHouse"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 to-dark/70" />
        {/* Content */}
        <div className="relative z-10 container-custom w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Layanan Kami
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Tidak hanya jasa pembuatan website dan app, kami juga menyediakan jasa digital lainnya. Solusi digital lengkap untuk berbagai kebutuhan bisnis Anda dengan teknologi terkini dan harga yang kompetitif
            </p>
          </div>
        </div>
      </section>

      <PricingPackages />

      <section className="py-20">
        <div className="container-custom">
          <ServicesAccordion
            services={services}
            whatsappNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285785741046"}
          />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Metodologi 4D Kami
            </h2>
            <p className="text-lg text-dark-light max-w-2xl mx-auto">
              Pendekatan terstruktur yang telah terbukti menghasilkan website dan solusi digital berkualitas tinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-dark-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container-custom pt-16">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Paket Custom Tersedia
              </h2>
              <p className="text-lg text-dark-light mb-8">
                Tidak menemukan layanan yang sesuai? Kami juga menerima project
                custom sesuai kebutuhan spesifik bisnis Anda. Hubungi kami untuk
                diskusi lebih lanjut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285785741046"}?text=Halo%20TechKuHouse%2C%20saya%20ingin%20diskusi%20tentang%20paket%20custom`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Diskusi Paket Custom
                </a>
                <a
                  href="mailto:admin@techkuhouse.id"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Kirim Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
      </section>

      <PromoFree />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Pesan Aman via Shopee
              </h2>
              <div className="text-xl text-primary font-semibold mb-4">
                Sistem Pre-Order (PO) — Dana Anda 100% Aman
              </div>
              <p className="text-lg text-dark-light leading-relaxed max-w-3xl mx-auto">
                Untuk kenyamanan dan keamanan transaksi Anda, TechKuHouse kini hadir di Shopee. Dengan sistem PO Shopee, dana Anda terlindungi — pembayaran baru akan kami terima setelah website selesai dan Anda puas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-dark mb-3">Dana Aman Terlindungi</h3>
                <p className="text-dark-light leading-relaxed">
                  Dana ditahan oleh Shopee, bukan langsung ke kami. Baru cair ketika website sudah selesai dan Anda konfirmasi.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-dark mb-3">Garansi Uang Kembali</h3>
                <p className="text-dark-light leading-relaxed">
                  Jika pekerjaan tidak sesuai, Anda bisa mengajukan komplain melalui sistem perlindungan Shopee.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-dark mb-3">Mudah & Praktis</h3>
                <p className="text-dark-light leading-relaxed">
                  Pesan langsung dari aplikasi Shopee yang sudah Anda gunakan sehari-hari.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-dark mb-3">Rating & Ulasan</h3>
                <p className="text-dark-light leading-relaxed">
                  Lihat ulasan dari ratusan pelanggan kami sebelum memesan untuk keyakinan lebih.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://shopee.co.id/mauly_shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                <span className="mr-2">🛍️</span>
                Buka Toko Shopee Kami
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285785741046"}?text=Halo%20TechKuHouse%2C%20saya%20ingin%20konsultasi%20tentang%20pembuatan%20website`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
              >
                <span className="mr-2">💬</span>
                Konsultasi via WhatsApp
              </a>
            </div>

            <p className="text-center text-sm text-dark-light mt-8 max-w-2xl mx-auto">
              <strong>Note:</strong> Tersedia juga pembayaran DP langsung via Transfer Bank / QRIS untuk pemesanan di luar Shopee.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
