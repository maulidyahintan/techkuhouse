import Button from "@/components/ui/Button";

export default function CTA() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285785741046";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20TechKuHouse%2C%20saya%20ingin%20berkonsultasi%20tentang%20project%20saya`;

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-20" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Siap Memiliki Website Impian Anda?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Konsultasikan kebutuhan website bisnis Anda bersama kami. DP untuk memulai, pelunasan setelah website selesai. Atau pesan lebih aman via Shopee dengan sistem PO — dana terlindungi!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center">
                  <span className="mr-2">💬</span>
                  Chat via WhatsApp
                </span>
              </Button>
            </a>
            <a href="https://shopee.co.id/mauly_shop" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-orange-500 text-white hover:bg-orange-600 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center">
                  <span className="mr-2">🛒</span>
                  Pesan via Shopee
                </span>
              </Button>
            </a>
            <a href="mailto:admin@techkuhouse.id">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
              >
                <span className="flex items-center">
                  <span className="mr-2">✉️</span>
                  Email Kami
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
