import Link from "next/link";

const pricingPackages = [
  {
    name: "Silver",
    price: "Rp 700.000",
    renewal: "Rp 400.000/tahun",
    description: "Untuk bisnis baru dengan kebutuhan website sederhana",
    features: [
      "4 Menu Halaman",
      "Domain .web.id Gratis",
      "Hosting 500 MB",
      "Integrasi Media Sosial",
      "Gratis Revisi Text Content setahun",
      "Bandwidth Unlimited",
      "Contact Form",
      "Support Gratis",
      "Garansi Selamanya",
    ],
    highlighted: false,
    color: "border-gray-200",
    badge: null as string | null,
  },
  {
    name: "Gold",
    price: "Rp 1.600.000",
    renewal: "Rp 500.000/tahun",
    description: "Ideal untuk website lengkap dengan fitur e-commerce dan blog",
    features: [
      "8 Menu Halaman",
      "Domain .com Gratis",
      "Hosting 3 GB",
      "Desain Web Premium",
      "Web Responsif All Platform",
      "SEO Setup",
      "Gratis Revisi Text dan Gambar Content setahun",
      "Banner Gratis",
      "Google Map Integration",
      "WhatsApp/Telepon Button",
      "Support Gratis",
      "Garansi Selamanya",
    ],
    highlighted: true,
    color: "border-primary",
    badge: "Populer" as string | null,
  },
  {
    name: "Diamond",
    price: "Rp 2.000.000",
    renewal: "Rp 800.000/tahun",
    description: "Profil bisnis profesional untuk meningkatkan kehadiran online",
    features: [
      "10 Menu Halaman",
      "Domain .com & .co.id Gratis",
      "Hosting 3 GB",
      "Plugin Premium",
      "Web Responsif All Platform",
      "SEO Setup",
      "Gratis Revisi Text, Gambar, Tema setahun",
      "Logo & Banner Gratis",
      "Google Map Integration",
      "1 Email Routing Gratis",
      "WhatsApp/Telepon Button",
      "Statistik Kunjungan",
      "Support Gratis",
      "Garansi Selamanya",
    ],
    highlighted: false,
    color: "border-gray-200",
    badge: null as string | null,
  },
  {
    name: "Platinum",
    price: "Rp 3.000.000",
    renewal: "40% dari harga/tahun",
    description: "Website kompleks dengan desain unik dan fitur lengkap",
    features: [
      "15-20 Menu Halaman",
      "Domain .com, .id & .co.id Gratis",
      "Hosting 5 GB",
      "Plugin Premium",
      "Web Responsif All Platform",
      "SEO Setup",
      "Gratis Revisi Semua Content setahun",
      "Logo & Banner Gratis",
      "Google Map Integration",
      "1 Email Bisnis Gratis",
      "WhatsApp/Telepon Button",
      "Statistik Kunjungan",
      "Support Gratis",
      "Garansi Selamanya",
    ],
    highlighted: false,
    color: "border-gray-200",
    badge: "Terlengkap" as string | null,
  },
];

export default function PricingPackages() {
  return (
    <section className="py-20 bg-white rounded-t-3xl">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Paket Harga Website
          </h2>
          <p className="text-lg text-dark-light max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPackages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${pkg.color} ${pkg.highlighted ? "scale-105 shadow-2xl" : ""} relative`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    {pkg.badge}
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-dark mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                <div className="text-sm text-dark-light mb-3">Perpanjangan: {pkg.renewal}</div>
                <p className="text-sm text-dark-light leading-relaxed">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-dark-light">
                    <span className="text-primary mr-2 mt-0.5 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285785741046"}?text=Halo%20TechKuHouse%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200 text-center"
                >
                  Pesan Sekarang
                </a>
                <a
                  href="https://shopee.co.id/mauly_shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-center"
                >
                  Pesan via Shopee
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/layanan">
            <button className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-lg transition-all duration-200 bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg">
              Lihat Semua Layanan
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
