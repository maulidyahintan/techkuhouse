import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio project TechKuHouse: Website Company Profile, E-Commerce, Mobile App, dan Landing Page yang telah kami kerjakan untuk berbagai klien dengan hasil memuaskan.",
  openGraph: {
    title: "Portfolio | TechKuHouse",
    description:
      "Lihat portfolio project website dan aplikasi yang telah kami kerjakan dengan hasil memuaskan.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com"}/portfolio`,
    type: "website",
  },
};

const categories = [
  "Semua",
  "Website",
  "Mobile App",
  "E-Commerce",
  "Company Profile",
  "Landing Page",
];

const portfolioItems = [
  {
    id: 1,
    title: "Fashion Store Online",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description:
      "Platform e-commerce modern untuk brand fashion lokal dengan fitur live chat, payment gateway terintegrasi, dan sistem inventory management.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    client: "PT. Fashion Indo",
    year: "2024",
    url: "#",
  },
  {
    id: 2,
    title: "Corporate Website",
    category: "Company Profile",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    description:
      "Website corporate profesional dengan CMS untuk memudahkan update konten, multi-language support, dan optimasi SEO yang maksimal.",
    technologies: ["Next.js", "WordPress", "MySQL"],
    client: "PT. Sentosa Group",
    year: "2024",
    url: "#",
  },
  {
    id: 3,
    title: "Food Delivery App",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    description:
      "Aplikasi delivery makanan dengan real-time tracking, multiple payment options, dan sistem rating & review untuk driver dan restaurant.",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    client: "GoMakan",
    year: "2023",
    url: "#",
  },
  {
    id: 4,
    title: "Property Listing Website",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    description:
      "Portal listing properti dengan advanced search filters, virtual tour 360°, dan sistem appointment booking terintegrasi.",
    technologies: ["React", "Laravel", "MySQL", "AWS S3"],
    client: "PropertiKu",
    year: "2023",
    url: "#",
  },
  {
    id: 5,
    title: "SaaS Landing Page",
    category: "Landing Page",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    description:
      "Landing page yang engaging untuk SaaS product dengan animated sections, conversion-optimized layout, dan A/B testing ready.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    client: "CloudSync",
    year: "2024",
    url: "#",
  },
  {
    id: 6,
    title: "Health & Fitness App",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    description:
      "Aplikasi tracking fitness dengan workout plans, nutrition tracking, progress analytics, dan social features untuk motivasi.",
    technologies: ["React Native", "Node.js", "MongoDB"],
    client: "FitLife",
    year: "2023",
    url: "#",
  },
  {
    id: 7,
    title: "Restaurant Booking System",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    description:
      "Sistem reservasi restaurant online dengan table management, menu digital, dan sistem queue management yang efisien.",
    technologies: ["Next.js", "Express", "PostgreSQL"],
    client: "Resto Premium",
    year: "2024",
    url: "#",
  },
  {
    id: 8,
    title: "Online Course Platform",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    description:
      "Platform pembelajaran online dengan video streaming, quiz system, progress tracking, dan certificate generation otomatis.",
    technologies: ["Next.js", "Laravel", "MySQL", "Vimeo API"],
    client: "EduTech Indonesia",
    year: "2023",
    url: "#",
  },
  {
    id: 9,
    title: "Crypto Wallet App",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    description:
      "Digital wallet untuk cryptocurrency dengan multi-chain support, biometric security, dan real-time market data integration.",
    technologies: ["Flutter", "Blockchain API", "Firebase"],
    client: "CryptoVault",
    year: "2024",
    url: "#",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Portfolio Kami
            </h1>
            <p className="text-lg md:text-xl text-dark-light leading-relaxed">
              Beberapa project yang telah kami selesaikan dengan hasil yang
              memuaskan dan memberikan dampak positif bagi bisnis klien kami
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  index === 0
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-dark-light hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-dark-light">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-dark mb-2">
                    {item.title}
                  </h3>

                  <p className="text-dark-light text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs text-dark-light mb-2">
                      Teknologi:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-dark-light text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-dark-light">Klien</div>
                        <div className="font-semibold text-dark">
                          {item.client}
                        </div>
                      </div>
                      <button className="text-primary font-semibold text-sm hover:underline">
                        Lihat Detail →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Project Anda Bisa Jadi Berikutnya
            </h2>
            <p className="text-lg text-dark-light mb-8">
              Kami siap membantu mewujudkan ide digital Anda menjadi kenyataan.
              Hubungi kami untuk konsultasi gratis dan dapatkan estimasi project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890"}?text=Halo%20TechKuHouse%2C%20saya%20ingin%20konsultasi%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark shadow-md hover:shadow-lg transition-all duration-200"
              >
                Mulai Project Anda
              </a>
              <a
                href="/layanan"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
