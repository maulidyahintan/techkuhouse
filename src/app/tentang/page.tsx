import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "TechKuHouse adalah tim profesional jasa pembuatan website & digital marketing di Indonesia. 100+ project selesai, garansi selamanya, dan program website gratis lembaga agama.",
  openGraph: {
    title: "Tentang TechKuHouse | Tim Expert Digital Agency Indonesia",
    description:
      "Kenali TechKuHouse — tim ahli website & digital marketing yang telah menyelesaikan 100+ project dengan garansi selamanya. Melayani seluruh Indonesia.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com"}/tentang`,
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Tentang TechKuHouse" }],
  },
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com"}/tentang` },
};

const teamMembers = [
  {
    name: "Reza Firmansyah",
    position: "CEO & Founder",
    avatar: "RF",
    bio: "Berpengalaman 8+ tahun di industri digital dan startup Indonesia",
  },
  {
    name: "Andika Pratama",
    position: "Lead Developer",
    avatar: "AP",
    bio: "Full-stack developer spesialis Next.js, Laravel, dan WordPress",
  },
  {
    name: "Nadia Putri",
    position: "UI/UX Designer",
    avatar: "NP",
    bio: "Desainer kreatif dengan 200+ project website yang berhasil",
  },
  {
    name: "Fajar Nugroho",
    position: "Digital Marketing",
    avatar: "FN",
    bio: "Ahli SEO dan Google Ads yang telah menangani 100+ campaign",
  },
];

const values = [
  {
    icon: "⚡",
    title: "Cepat & Profesional",
    description:
      "Website selesai 5-7 hari kerja dengan proses pengerjaan yang efisien dan komunikasi update berkala.",
  },
  {
    icon: "💰",
    title: "Harga Transparan",
    description:
      "Tidak ada biaya tersembunyi. Semua biaya dijelaskan di awal dengan paket yang jelas dan terjangkau.",
  },
  {
    icon: "🔒",
    title: "Bayar Setelah Jadi",
    description:
      "DP untuk memulai, pelunasan hanya setelah website selesai dan Anda menyetujui hasilnya.",
  },
  {
    icon: "🎯",
    title: "Garansi Selamanya",
    description:
      "Semua paket website kami dilengkapi garansi selamanya dengan dukungan teknis gratis tanpa batas.",
  },
];

export default function TentangPage() {
  return (
    <>
      <section className="relative min-h-[450px] sm:min-h-[520px] flex items-center pt-20 sm:pt-24 pb-16 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&auto=format"
          alt="Tim TechKuHouse"
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
              Tentang TechKuHouse
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              TechKuHouse hadir untuk menciptakan desain yang memukau, fitur yang canggih, dan strategi digital yang tepat sasaran. Kami menjadikan website dan aplikasi Anda sebagai mesin pertumbuhan bisnis yang nyata.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Visi & Misi
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">Visi</h3>
                <p className="text-dark-light text-lg leading-relaxed">
                  Menjadi mitra digital terpercaya yang membantu bisnis bisnis di Indonesia bertumbuh dan bersaing di era digital.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">Misi</h3>
                <ul className="space-y-3 text-dark-light text-lg leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">✓</span>
                    <span>Memberikan layanan pembuatan website berkualitas dengan harga terjangkau dan garansi selamanya.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">✓</span>
                    <span>Mendukung UMKM, perusahaan, dan lembaga — termasuk lembaga agama — dalam membangun kehadiran digital yang kuat.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">✓</span>
                    <span>Menghadirkan solusi digital yang terukur, modern, dan memberikan dampak nyata bagi pertumbuhan bisnis klien.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Tim TechKuHouse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-dark-light max-w-2xl mx-auto">
              Prinsip yang kami pegang teguh dalam setiap project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Tim Kami
            </h2>
            <p className="text-lg text-dark-light max-w-2xl mx-auto">
              Kenali para expert yang siap membantu mewujudkan visi digital Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-dark mb-1">
                  {member.name}
                </h3>
                <div className="text-primary font-semibold mb-2">
                  {member.position}
                </div>
                <p className="text-dark-light text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <CTA />
    </>
  );
}
