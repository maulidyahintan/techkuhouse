import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio TechKuHouse: 100+ project website company profile, toko online, landing page, dan aplikasi mobile yang telah selesai untuk klien di seluruh Indonesia.",
  openGraph: {
    title: "Portfolio TechKuHouse | 100+ Project Website & Aplikasi",
    description:
      "Lihat hasil karya TechKuHouse — website dan aplikasi untuk berbagai industri di Indonesia. E-commerce, company profile, mobile app, dan lebih banyak lagi.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com"}/portfolio`,
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Portfolio TechKuHouse" }],
  },
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com"}/portfolio` },
};


const portfolioItems = [
  {
    id: 1,
    title: "Kang Cetak",
    category: "Company Profile",
    image: "/kangcetak.png",
    description:
      "Website company profile untuk jasa percetakan profesional. Menampilkan layanan cetak, portofolio hasil cetak, kalkulator harga, dan sistem pemesanan online yang memudahkan pelanggan.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    client: "Kang Cetak",
    year: "2025",
    url: "https://kang-cetak.vercel.app",
  },
  {
    id: 2,
    title: "Coffee Shop",
    category: "Landing Page",
    image: "/coffeshop.png",
    description:
      "Landing page modern untuk kedai kopi lokal dengan desain yang cozy dan elegan. Menampilkan menu, lokasi, jam operasional, dan galeri suasana kedai untuk menarik pelanggan baru.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    client: "Coffee Shop",
    year: "2025",
    url: "https://coffee-shop-porto.vercel.app",
  }
];

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-20 sm:pt-24 pb-24 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&h=900&fit=crop&auto=format"
          alt="Portfolio TechKuHouse"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 to-dark/70" />
        {/* Content */}
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Portfolio Kami
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Beberapa project yang telah kami selesaikan dengan hasil yang memuaskan dan memberikan dampak positif bagi bisnis klien kami
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
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
          </div> */}

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
                      {item.url !== "#" ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold text-sm hover:underline"
                        >
                          Lihat Projek →
                        </a>
                      ) : (
                        <span className="text-dark-light/50 font-semibold text-sm cursor-not-allowed">
                          Lihat Projek →
                        </span>
                      )}
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
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285785741046"}?text=Halo%20TechKuHouse%2C%20saya%20ingin%20konsultasi%20project`}
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
