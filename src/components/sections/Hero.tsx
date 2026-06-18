import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20TechKuHouse%2C%20saya%20tertarik%20dengan%20layanan%20Anda`;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Solusi Digital Terbaik untuk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
              Bisnis Anda
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Kami menciptakan website dan aplikasi yang modern, cepat, dan efektif
            untuk membantu bisnis Anda berkembang di era digital
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto shadow-xl hover:shadow-2xl">
                Konsultasi Gratis
              </Button>
            </a>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
              >
                Lihat Portfolio
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Project Selesai" },
              { number: "50+", label: "Klien Puas" },
              { number: "5+", label: "Tahun Pengalaman" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
