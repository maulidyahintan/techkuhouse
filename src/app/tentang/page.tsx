import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "TechKuHouse adalah tim profesional yang berpengalaman dalam pembuatan website dan aplikasi. Kami berkomitmen memberikan solusi digital terbaik untuk bisnis Anda dengan teknologi modern dan harga terjangkau.",
  openGraph: {
    title: "Tentang Kami | TechKuHouse",
    description:
      "Tim profesional yang berpengalaman dalam pembuatan website dan aplikasi. Solusi digital terbaik untuk bisnis Anda.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com"}/tentang`,
    type: "website",
  },
};

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    avatar: "JD",
    bio: "10+ tahun pengalaman di industri digital",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    avatar: "JS",
    bio: "Expert dalam web dan mobile development",
  },
  {
    name: "Michael Chen",
    position: "Lead Designer",
    avatar: "MC",
    bio: "Spesialis UI/UX dengan portfolio internasional",
  },
  {
    name: "Sarah Wilson",
    position: "Project Manager",
    avatar: "SW",
    bio: "Berpengalaman mengelola 100+ project",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Fokus pada Kualitas",
    description:
      "Kami tidak pernah berkompromi dengan kualitas. Setiap project dikerjakan dengan standar tertinggi.",
  },
  {
    icon: "⚡",
    title: "Cepat & Efisien",
    description:
      "Timeline yang jelas dan proses pengerjaan yang efisien tanpa mengurangi kualitas hasil.",
  },
  {
    icon: "🤝",
    title: "Komunikasi Transparan",
    description:
      "Update progress berkala dan komunikasi terbuka di setiap tahap pengerjaan project.",
  },
  {
    icon: "💡",
    title: "Inovasi Berkelanjutan",
    description:
      "Selalu menggunakan teknologi terkini dan best practices dalam setiap project.",
  },
];

export default function TentangPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Tentang TechKuHouse
            </h1>
            <p className="text-lg md:text-xl text-dark-light leading-relaxed">
              Kami adalah tim profesional yang berdedikasi untuk memberikan
              solusi digital terbaik bagi bisnis Anda. Dengan pengalaman lebih
              dari 5 tahun, kami telah membantu puluhan klien mencapai tujuan
              digital mereka.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Misi Kami
              </h2>
              <p className="text-dark-light text-lg leading-relaxed mb-6">
                Misi kami adalah memberdayakan bisnis di Indonesia dengan solusi
                digital yang inovatif, terjangkau, dan efektif. Kami percaya
                bahwa setiap bisnis, besar maupun kecil, berhak memiliki
                presence digital yang kuat.
              </p>
              <p className="text-dark-light text-lg leading-relaxed mb-6">
                Melalui kombinasi teknologi modern, desain yang menarik, dan
                strategi yang tepat, kami membantu klien kami untuk tumbuh dan
                bersaing di era digital.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    100+
                  </div>
                  <div className="text-sm text-dark-light">
                    Project Selesai
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    50+
                  </div>
                  <div className="text-sm text-dark-light">Klien Puas</div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-dark-light">
                    Tahun Pengalaman
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-dark-light">Support</div>
                </div>
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

      <section className="py-20">
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
      </section>

      <CTA />
    </>
  );
}
