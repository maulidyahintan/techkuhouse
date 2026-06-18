import type { Metadata } from "next";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan jasa pembuatan website dan aplikasi dari TechKuHouse: Website Company Profile, E-Commerce, Landing Page, Mobile App Development, UI/UX Design, dan SEO Optimization dengan harga terjangkau mulai dari Rp 5 juta.",
  openGraph: {
    title: "Layanan | TechKuHouse",
    description:
      "Layanan lengkap: Web Development, Mobile App, UI/UX Design, SEO Optimization dengan harga terjangkau.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com"}/layanan`,
    type: "website",
  },
};

const services = [
  {
    id: "web-development",
    icon: "💻",
    title: "Web Development",
    description:
      "Pembuatan website profesional dengan teknologi terkini yang responsive, cepat, dan SEO-friendly.",
    features: [
      "Website Company Profile",
      "E-Commerce / Toko Online",
      "Landing Page / Sales Page",
      "Web Application Custom",
      "Blog / Portal Berita",
      "Sistem Informasi",
    ],
    pricing: "Mulai dari Rp 5.000.000",
    technologies: ["Next.js", "React", "Laravel", "WordPress", "Node.js"],
  },
  {
    id: "mobile-app",
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa optimal dan user experience yang maksimal.",
    features: [
      "iOS Native App (Swift)",
      "Android Native App (Kotlin)",
      "Cross-Platform (Flutter)",
      "Cross-Platform (React Native)",
      "App Maintenance & Update",
      "App Store Deployment",
    ],
    pricing: "Mulai dari Rp 15.000.000",
    technologies: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    id: "uiux-design",
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang menarik dan user experience yang intuitif untuk meningkatkan konversi dan kepuasan pengguna.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design / Mockup",
      "Design System Creation",
      "Usability Testing",
      "Responsive Design",
    ],
    pricing: "Mulai dari Rp 7.500.000",
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
  },
  {
    id: "seo-optimization",
    icon: "🚀",
    title: "SEO Optimization",
    description:
      "Optimasi website agar mudah ditemukan di mesin pencari Google dan meningkatkan traffic organik secara signifikan.",
    features: [
      "On-Page SEO Optimization",
      "Technical SEO Audit",
      "Content Strategy & Creation",
      "Backlink Building",
      "Google Analytics Setup",
      "Monthly SEO Report",
    ],
    pricing: "Mulai dari Rp 3.000.000/bulan",
    technologies: [
      "Google Analytics",
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
    ],
  },
  {
    id: "web-maintenance",
    icon: "🛠️",
    title: "Website Maintenance",
    description:
      "Layanan pemeliharaan website berkala untuk menjaga performa, keamanan, dan update konten website Anda.",
    features: [
      "Regular Backup & Security",
      "Content Update",
      "Bug Fixing & Troubleshooting",
      "Performance Monitoring",
      "SSL Certificate Management",
      "Monthly Report",
    ],
    pricing: "Mulai dari Rp 1.500.000/bulan",
    technologies: ["cPanel", "CloudFlare", "AWS", "Google Cloud"],
  },
  {
    id: "consultation",
    icon: "💡",
    title: "Digital Consultation",
    description:
      "Konsultasi strategi digital untuk membantu bisnis Anda berkembang dengan solusi teknologi yang tepat.",
    features: [
      "Digital Strategy Planning",
      "Technology Stack Selection",
      "Budget & Timeline Planning",
      "Business Process Analysis",
      "Competitor Analysis",
      "Growth Roadmap",
    ],
    pricing: "Mulai dari Rp 2.000.000",
    technologies: ["Business Analysis", "Market Research", "Planning Tools"],
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Konsultasi",
    description: "Diskusi kebutuhan dan tujuan project Anda dengan tim kami",
  },
  {
    step: "02",
    title: "Perencanaan",
    description: "Membuat proposal, timeline, dan estimasi biaya yang detail",
  },
  {
    step: "03",
    title: "Desain",
    description: "Membuat mockup dan prototype untuk approval klien",
  },
  {
    step: "04",
    title: "Development",
    description: "Proses coding dan development dengan update berkala",
  },
  {
    step: "05",
    title: "Testing",
    description: "Quality assurance dan testing menyeluruh sebelum launch",
  },
  {
    step: "06",
    title: "Launch & Support",
    description: "Deploy project dan memberikan support berkelanjutan",
  },
];

export default function LayananPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Layanan Kami
            </h1>
            <p className="text-lg md:text-xl text-dark-light leading-relaxed">
              Solusi digital lengkap untuk berbagai kebutuhan bisnis Anda dengan
              teknologi terkini dan harga yang kompetitif
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start mb-6">
                  <div className="text-5xl mr-4">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-dark mb-2">
                      {service.title}
                    </h2>
                    <p className="text-dark-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-dark mb-3">
                    Fitur Layanan:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-dark-light"
                      >
                        <span className="text-primary mr-2 mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-dark mb-2">Teknologi:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-dark-light mb-1">
                        Harga
                      </div>
                      <div className="text-xl font-bold text-primary">
                        {service.pricing}
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890"}?text=Halo%20TechKuHouse%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200"
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-lg text-dark-light max-w-2xl mx-auto">
              Metodologi yang terstruktur untuk hasil maksimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      <section className="py-20">
        <div className="container-custom">
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
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890"}?text=Halo%20TechKuHouse%2C%20saya%20ingin%20diskusi%20tentang%20paket%20custom`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Diskusi Paket Custom
                </a>
                <a
                  href="mailto:info@techkuhouse.com"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Kirim Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
