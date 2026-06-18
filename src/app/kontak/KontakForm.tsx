"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

const contactInfo = [
  {
    icon: "📍",
    title: "Alamat",
    content: "Jakarta Selatan, DKI Jakarta, Indonesia",
  },
  {
    icon: "📧",
    title: "Email",
    content: "info@techkuhouse.com",
    link: "mailto:info@techkuhouse.com",
  },
  {
    icon: "📱",
    title: "WhatsApp",
    content: "+62 812 3456 7890",
    link: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890"}`,
  },
  {
    icon: "🕐",
    title: "Jam Kerja",
    content: "Senin - Jumat, 09:00 - 18:00 WIB",
  },
];

export default function KontakForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890";
    const message = `Halo TechKuHouse,%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0ANo. HP: ${formData.phone}%0ASubjek: ${formData.subject}%0A%0APesan:%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        setSubmitStatus("idle");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">
              Informasi Kontak
            </h2>
            <p className="text-dark-light mb-8 leading-relaxed">
              Kami sangat senang mendengar dari Anda. Hubungi kami melalui
              salah satu channel di bawah ini atau isi form untuk mendapatkan
              respon cepat dari tim kami.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="text-3xl mr-4">{info.icon}</div>
                  <div>
                    <div className="font-semibold text-dark mb-1">
                      {info.title}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <div className="text-dark-light">{info.content}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold text-dark mb-4">
                Follow Kami di Social Media
              </h3>
              <div className="flex space-x-3">
                {[
                  {
                    name: "Facebook",
                    icon: "F",
                    url: "https://facebook.com/techkuhouse",
                  },
                  {
                    name: "Instagram",
                    icon: "I",
                    url: "https://instagram.com/techkuhouse",
                  },
                  {
                    name: "LinkedIn",
                    icon: "L",
                    url: "https://linkedin.com/company/techkuhouse",
                  },
                  {
                    name: "Twitter",
                    icon: "T",
                    url: "https://twitter.com/techkuhouse",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors duration-200 font-semibold"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-dark mb-6">Kirim Pesan</h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Terima kasih! Pesan Anda akan dikirim via WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  No. WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="08123456789"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Subjek *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                >
                  <option value="">Pilih subjek</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Konsultasi">Konsultasi</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Ceritakan tentang project Anda..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan via WhatsApp"}
              </Button>
            </form>

            <p className="text-xs text-dark-light text-center mt-4">
              * Wajib diisi. Pesan akan dikirim melalui WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
