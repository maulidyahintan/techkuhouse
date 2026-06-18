import { MessageSquare, ShoppingBag, Code2, ClipboardCheck, Handshake, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Diskusi & Riset",
    description:
      "Kami pelajari bisnis Anda, target audiens, dan tujuan utama website. Sekaligus riset kata kunci yang benar-benar dipakai calon pelanggan saat mencari di Google — fondasi SEO sejak awal.",
  },
  {
    number: 2,
    icon: ShoppingBag,
    title: "Pemesanan & Pembayaran",
    description:
      "Pesan via Shopee untuk keamanan transaksi (dana ditahan sampai selesai), atau bayar DP langsung untuk segera mengamankan nama domain pilihan Anda agar tidak diambil orang lain.",
  },
  {
    number: 3,
    icon: Code2,
    title: "Proses Pembuatan",
    description:
      "Website dibangun secara transparan — Anda bisa memantau progress langsung di domain/alamat web yang sudah disepakati. Feedback bisa diberikan kapan saja agar prosesnya lebih cepat dan tepat sasaran.",
  },
  {
    number: 4,
    icon: ClipboardCheck,
    title: "Testing & Revisi",
    description:
      "Setelah website live, Anda memiliki waktu 2 minggu untuk mengecek, mencoba, dan meminta revisi konten maupun tampilan secara gratis. Puas dulu, baru selesai.",
  },
  {
    number: 5,
    icon: Handshake,
    title: "Serah Terima",
    description:
      "Website resmi diserahterimakan. Setelah masa testing berakhir, setiap perubahan desain atau revisi dikenakan biaya jasa sesuai cakupan perubahan yang diminta.",
  },
];

export default function OrderFlow() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a2870] to-[#0f1a5c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Alur Pemesanan
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Proses transparan dari diskusi hingga website siap pakai
          </p>
        </div>

        {/* Desktop: Horizontal with arrows */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-0 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="bg-white/8 rounded-2xl border border-white/15 backdrop-blur-sm p-6 hover:bg-white/15 hover:border-white/25 transition-all h-full">
                    {/* Step Number */}
                    <div className="flex justify-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#2952B3] text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/40">
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-xl bg-white/15 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/65 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Connector - only show between cards */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-white/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet: 2 columns with dashed lines */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white/8 rounded-2xl border border-white/15 backdrop-blur-sm p-6 hover:bg-white/15 hover:border-white/25 transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#2952B3] text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/40">
                    {step.number}
                  </div>
                </div>

                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white/15 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 text-center">
                  {step.title}
                </h3>

                <p className="text-sm text-white/65 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile: Timeline vertical */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative pl-12">
                {/* Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-white/20" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 top-0">
                  <div className="w-8 h-8 rounded-full bg-[#2952B3] text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/40">
                    {step.number}
                  </div>
                </div>

                {/* Card Content */}
                <div className="bg-white/8 rounded-2xl border border-white/15 backdrop-blur-sm p-6 hover:bg-white/15 hover:border-white/25 transition-all">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white pt-2">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-white/65 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
