import Link from "next/link";

const services = [
  {
    id: "web-development",
    icon: "💻",
    title: "Web Development",
    description:
      "Pembuatan website profesional dengan teknologi terkini. Responsive, cepat, dan SEO-friendly.",
    features: ["Company Profile", "E-commerce", "Landing Page", "Web App"],
  },
  {
    id: "mobile-app",
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa optimal.",
    features: ["iOS App", "Android App", "Flutter", "React Native"],
  },
  {
    id: "uiux-design",
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang menarik dan user experience yang intuitif untuk produk digital Anda.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    id: "seo-optimization",
    icon: "🚀",
    title: "SEO Optimization",
    description:
      "Optimasi website agar mudah ditemukan di mesin pencari dan meningkatkan traffic organik.",
    features: ["On-Page SEO", "Technical SEO", "Content Strategy", "Analytics"],
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg md:text-xl text-dark-light max-w-2xl mx-auto">
            Solusi digital lengkap untuk berbagai kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-dark-light mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-dark-light"
                  >
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/layanan"
                className="text-primary font-semibold text-sm hover:underline inline-flex items-center group"
              >
                Selengkapnya
                <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
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
