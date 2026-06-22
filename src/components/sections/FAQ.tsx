"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Berapa biaya pembuatan website di TechKuHouse?",
    answer: "Kami menyediakan 4 paket website: Silver (Rp 700.000), Gold (Rp 1.600.000), Diamond (Rp 2.000.000), dan Platinum (Rp 3.000.000). Semua paket sudah termasuk domain gratis, hosting, SSL, template premium, dan garansi selamanya. Tersedia juga pembuatan aplikasi custom mulai dari Rp 5.000.000.",
  },
  {
    question: "Berapa lama proses pembuatan website?",
    answer: "Untuk paket website standar, proses pengerjaan rata-rata 5–7 hari kerja setelah semua materi konten diterima. Untuk website custom atau aplikasi mobile, timeline disesuaikan dengan kompleksitas project — biasanya mulai dari 2 minggu. Kami selalu memberikan update progress secara berkala.",
  },
  {
    question: "Apakah ada garansi setelah website selesai?",
    answer: "Ya! Semua paket website TechKuHouse dilengkapi garansi selamanya. Artinya kami siap membantu jika ada masalah teknis, bug, atau kebutuhan update kecil tanpa biaya tambahan. Kami juga menyediakan layanan maintenance bulanan untuk kebutuhan yang lebih intensif.",
  },
  {
    question: "Bisa pesan via Shopee? Bagaimana sistemnya?",
    answer: "Bisa! TechKuHouse tersedia di Shopee dengan sistem Pre-Order (PO). Dana Anda akan ditahan oleh Shopee dan baru dicairkan ke kami setelah website selesai dan Anda konfirmasi. Ini menjamin keamanan transaksi Anda. Kunjungi toko kami di shopee.co.id/mauly_shop.",
  },
  {
    question: "Apakah ada program website gratis untuk lembaga agama?",
    answer: "Ada! TechKuHouse menyediakan program website GRATIS untuk masjid, mushola, pesantren dan lembaga sosial lainnya. Syaratnya: website digunakan untuk kegiatan keagamaan/sosial, bukan komersial. Biaya pembelian nama domain ditanggung penanggung jawab lembaga. Atau kalau keberatan bisa menggunakan nama domain gratis, contohnya: masjidalikhlas.vercel.com Hubungi kami via WhatsApp untuk mendaftar.",
  },
  {
    question: "Apa yang dimaksud domain dan hosting gratis?",
    answer: "Setiap paket sudah termasuk domain gratis (web.id untuk Silver, .com untuk Gold & Diamond, .com + .co.id untuk Platinum) dan hosting selama 1 tahun tanpa biaya tambahan. Tahun berikutnya akan dikenakan biaya perpanjangan sesuai paket yang dipilih.",
  },
  {
    question: "Apakah website bisa diedit sendiri setelah jadi?",
    answer: "Ya! Kami akan menyerahkan semua source code kepada customer. Kami juga menyediakan layanan edit gratis sesuai paket yang dipilih untuk membantu customer. Dan untuk layanan diluar paket bisa menghubungi lebih lanjut untuk biayanya.",
  },
  {
    question: "Apakah TechKuHouse melayani seluruh Indonesia?",
    answer: "Ya! Kami melayani klien dari seluruh Indonesia — Jakarta, Surabaya, Bandung, Medan, Makassar, Bali, dan kota-kota lainnya. Semua proses bisa dilakukan secara online melalui WhatsApp, email, gmeet, zoom atau video call.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-lg md:text-xl text-dark-light max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan umum seputar layanan TechKuHouse
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-dark pr-4">{faq.question}</span>
                <span
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold transition-transform duration-300",
                    openIndex === index && "rotate-45"
                  )}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-dark-light leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
