import { Gift, Check, ArrowRight, Building2, Heart, Users, BookOpen, Globe, Star } from "lucide-react";

export default function PromoFree() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark to-dark text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Program Sosial TechKuHouse
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Website GRATIS untuk Lembaga Sosial & Agama
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                TechKuHouse berkomitmen membantu lembaga sosial dan keagamaan hadir di dunia digital secara gratis — tanpa biaya pembuatan, tanpa syarat tersembunyi.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                {/* <h3 className="text-2xl font-bold mb-6">Syarat & Ketentuan</h3> */}
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-light mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Masjid & Musholla</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Pesantren Yatim Piatu & Dhuafa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Yayasan & Organisasi Sosial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Komunitas Kemanusiaan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Fasilitas Kesehatan Sosial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Gerakan Peduli Lingkungan & Satwa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Satuan Tanggap Bencana & Relawan</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-200 leading-relaxed max-w-3xl mx-auto py-4">
                Stock website gratis tersedia setiap bulan. < br />
                Syarat WAJIB : Pembuatan website tidak untuk tujuan komersil / keuntungan pribadi.
              </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Fasilitas yang Diberikan</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl mb-2">📄</div>
                    <div className="font-semibold">Website 5 Halaman</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl mb-2">🌐</div>
                    <div className="font-semibold">Gratis Support</div>
                    <div className="text-xs text-gray-300">Revisi atau edit content</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl mb-2">☁️</div>
                    <div className="font-semibold">Hosting 1 Tahun</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl mb-2">🎨</div>
                    <div className="font-semibold">Template Profesional</div>
                  </div>
                </div>
                <p className="text-sm py-4">*Biaya Domain ditanggung penanggung jawab lembaga secara mandiri</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/pembuatan-website-gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Daftar Program Gratis
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
