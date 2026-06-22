"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Hendra Kusuma",
    position: "Owner Toko Bangunan Online, Surabaya",
    content:
      "TechKuHouse sangat profesional! Website toko online saya selesai dalam 5 hari kerja. Sekarang pelanggan bisa order 24 jam lewat website. Omzet naik signifikan sejak punya website yang proper!",
    rating: 5,
    avatar: "HK",
  },
  {
    id: 2,
    name: "Ustaz Faisal Rahman",
    position: "Ketua DKM Masjid Al-Ikhlas, Jakarta",
    content:
      "Alhamdulillah, TechKuHouse memberikan website gratis untuk masjid kami. Sekarang jadwal kajian, pengumuman, dan donasi online bisa diakses jamaah dengan mudah. Sangat berterima kasih!",
    rating: 5,
    avatar: "FR",
  },
  {
    id: 3,
    name: "Dewi Rahmawati",
    position: "Pemilik Klinik Kecantikan, Bandung",
    content:
      "Pesan website via Shopee ternyata aman banget! Dana baru cair setelah website jadi dan saya approve. Hasilnya pun memuaskan, desainnya modern dan pelanggan makin banyak yang datang dari online.",
    rating: 5,
    avatar: "DR",
  },
  {
    id: 4,
    name: "PT. Sinar Maju Teknologi",
    position: "Perusahaan IT, Jakarta Timur",
    content:
      "Sudah 3x pakai jasa TechKuHouse untuk project berbeda. Selalu on-time, hasilnya bagus, dan after-sales support responsif. Recommended banget untuk bisnis yang butuh solusi digital cepat!",
    rating: 5,
    avatar: "SM",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Kata Mereka
          </h2>
          <p className="text-lg md:text-xl text-dark-light max-w-2xl mx-auto">
            Kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-lg md:text-xl text-dark-light text-center mb-8 leading-relaxed italic">
              &ldquo;{testimonials[activeIndex].content}&rdquo;
            </p>

            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                {testimonials[activeIndex].avatar}
              </div>
              <div>
                <div className="font-bold text-dark text-lg">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-dark-light text-sm">
                  {testimonials[activeIndex].position}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
