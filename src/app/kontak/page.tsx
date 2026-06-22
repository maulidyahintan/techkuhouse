import type { Metadata } from "next";
import Image from "next/image";
import KontakForm from "./KontakForm";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi TechKuHouse untuk konsultasi gratis pembuatan website. Respon cepat 2 jam. WhatsApp, email, atau pesan aman via Shopee. Program website gratis untuk lembaga agama tersedia.",
  openGraph: {
    title: "Kontak TechKuHouse | Konsultasi Gratis Pembuatan Website",
    description:
      "Konsultasi gratis tanpa syarat. Respon dalam 2 jam jam kerja. Hubungi via WhatsApp, email, atau kunjungi toko Shopee kami.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com"}/kontak`,
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Kontak TechKuHouse" }],
  },
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com"}/kontak` },
};

export default function KontakPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop&auto=format"
          alt="Hubungi TechKuHouse"
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
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Ada pertanyaan atau ingin konsultasi tentang website Anda? Kami siap membantu setiap hari. Respon cepat maksimal 2 jam di jam kerja.
            </p>
          </div>
        </div>
      </section>

      <KontakForm />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark mb-4">Lokasi Kami</h2>
            <p className="text-dark-light">
              Jakarta Timur, DKI Jakarta, Indonesia
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.26142338103!2d106.68942934335938!3d-6.229386799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TechKuHouse Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
