import Link from "next/link";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Fashion",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Platform e-commerce modern untuk brand fashion lokal",
  },
  {
    id: 2,
    title: "Corporate Website",
    category: "Company Profile",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    description: "Website perusahaan yang profesional dan elegan",
  },
  {
    id: 3,
    title: "Food Delivery App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    description: "Aplikasi delivery makanan dengan fitur real-time tracking",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 md:py-32 bg-[#111827]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Portfolio Kami
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Beberapa project yang telah kami selesaikan dengan hasil memuaskan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs font-semibold mb-2 inline-block">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/portfolio">
                  <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary hover:text-white transition-colors duration-200">
                    Lihat Detail
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <button className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-lg transition-all duration-200 border-2 border-white/50 text-white hover:bg-white hover:text-gray-900">
              Lihat Semua Portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
