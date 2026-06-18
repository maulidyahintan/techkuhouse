"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    position: "CEO PT. Maju Jaya",
    content:
      "TechKuHouse sangat profesional dalam mengerjakan website perusahaan kami. Hasilnya melebihi ekspektasi dan proses pengerjaannya sangat cepat!",
    rating: 5,
    avatar: "BS",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    position: "Owner Toko Fashion Online",
    content:
      "Setelah menggunakan jasa TechKuHouse untuk membuat toko online, penjualan kami meningkat 300%. Tim yang sangat responsif dan supportnya luar biasa!",
    rating: 5,
    avatar: "SN",
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    position: "Marketing Manager",
    content:
      "Aplikasi mobile yang dibuat oleh TechKuHouse sangat user-friendly. Customer kami sangat puas dengan experience yang diberikan. Highly recommended!",
    rating: 5,
    avatar: "AR",
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
