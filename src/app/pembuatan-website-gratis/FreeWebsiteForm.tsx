"use client";

import { useState } from "react";
import { Gift, Building, Image, User, Send, Info } from "lucide-react";

export default function FreeWebsiteForm() {
  const [formData, setFormData] = useState({
    namaLembaga: "",
    jenisLembaga: "",
    alamat: "",
    deskripsi: "",
    tujuan: "",
    punyaLogo: "",
    punyaFoto: "",
    referensi: "",
    namaPJ: "",
    jabatan: "",
    nomorWA: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi field wajib
    if (
      !formData.namaLembaga ||
      !formData.jenisLembaga ||
      !formData.alamat ||
      !formData.deskripsi ||
      !formData.tujuan ||
      !formData.punyaLogo ||
      !formData.punyaFoto ||
      !formData.namaPJ ||
      !formData.nomorWA
    ) {
      alert("Harap isi semua field yang wajib diisi (*)");
      return;
    }

    // Format pesan WhatsApp
    const message = `Halo TechKuHouse 👋

*PENDAFTARAN WEBSITE GRATIS LEMBAGA*

📋 *Informasi Lembaga*
• Nama: ${formData.namaLembaga}
• Jenis: ${formData.jenisLembaga}
• Alamat: ${formData.alamat}
• Deskripsi: ${formData.deskripsi}
• Tujuan Website: ${formData.tujuan}

🎨 *Aset*
• Punya Logo: ${formData.punyaLogo}
• Punya Foto: ${formData.punyaFoto}
• Website Referensi: ${formData.referensi || "Tidak ada"}

👤 *Penanggung Jawab*
• Nama: ${formData.namaPJ}
• Jabatan: ${formData.jabatan || "-"}
• WhatsApp: ${formData.nomorWA}
• Email: ${formData.email || "-"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285785741046?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 py-16 md:py-20 pt-24 md:pt-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Program Website GRATIS
            </h1>
            <p className="text-emerald-100 text-lg mt-3 max-w-xl mx-auto">
              Untuk Lembaga Sosial & Keagamaan
            </p>
            <p className="text-emerald-200 mt-4 max-w-2xl mx-auto">
              Isi formulir di bawah ini dengan lengkap dan jujur. Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi pendaftaran.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-10 max-w-3xl mx-auto shadow-xl">
        <div className="p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            {/* Kelompok 1 - Informasi Lembaga */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                <Building className="w-5 h-5 text-emerald-600" />
                Informasi Lembaga
              </h3>

              <div className="space-y-5">
                {/* Nama Lembaga */}
                <div>
                  <label htmlFor="namaLembaga" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lembaga <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="namaLembaga"
                    name="namaLembaga"
                    value={formData.namaLembaga}
                    onChange={handleInputChange}
                    placeholder="Contoh: Masjid Al-Ikhlas Bekasi"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Jenis Lembaga */}
                <div>
                  <label htmlFor="jenisLembaga" className="block text-sm font-semibold text-gray-700 mb-2">
                    Jenis Lembaga <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="jenisLembaga"
                    name="jenisLembaga"
                    value={formData.jenisLembaga}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-gray-900"
                    required
                  >
                    <option value="">Pilih jenis lembaga</option>
                    <option value="Masjid/Mushola">Masjid/Mushola</option>
                    <option value="Pesantren/Madrasah">Pesantren/Madrasah</option>
                    <option value="Yayasan Sosial">Yayasan Sosial</option>
                    <option value="Komunitas Kemanusiaan">Komunitas Kemanusiaan</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Alamat */}
                <div>
                  <label htmlFor="alamat" className="block text-sm font-semibold text-gray-700 mb-2">
                    Alamat Lengkap <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="alamat"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Jalan, kelurahan, kecamatan, kota, provinsi"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Deskripsi */}
                <div>
                  <label htmlFor="deskripsi" className="block text-sm font-semibold text-gray-700 mb-2">
                    Deskripsi Lembaga <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="deskripsi"
                    name="deskripsi"
                    value={formData.deskripsi}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Ceritakan tentang lembaga Anda: sejarah singkat, kegiatan utama, visi & misi"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Tujuan Website */}
                <div>
                  <label htmlFor="tujuan" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tujuan Website <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="tujuan"
                    name="tujuan"
                    value={formData.tujuan}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Untuk apa website ini dibuat? Contoh: menginformasikan jadwal pengajian, publikasi kegiatan sosial, dll"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Kelompok 2 - Aset & Referensi */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                <Image className="w-5 h-5 text-emerald-600" />
                Aset & Referensi
              </h3>

              <div className="space-y-5">
                {/* Punya Logo */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Apakah sudah punya logo? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="punyaLogo"
                        value="Ya"
                        checked={formData.punyaLogo === "Ya"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                        required
                      />
                      <span className="text-gray-700">Ya</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="punyaLogo"
                        value="Belum"
                        checked={formData.punyaLogo === "Belum"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-gray-700">Belum</span>
                    </label>
                  </div>
                  {formData.punyaLogo === "Ya" && (
                    <p className="text-sm text-gray-500 mt-2">
                      Logo dapat dikirim via WhatsApp setelah pendaftaran dikonfirmasi
                    </p>
                  )}
                </div>

                {/* Punya Foto */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Apakah punya foto kegiatan/gedung? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="punyaFoto"
                        value="Ya"
                        checked={formData.punyaFoto === "Ya"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                        required
                      />
                      <span className="text-gray-700">Ya</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="punyaFoto"
                        value="Belum"
                        checked={formData.punyaFoto === "Belum"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-gray-700">Belum</span>
                    </label>
                  </div>
                  {formData.punyaFoto === "Ya" && (
                    <p className="text-sm text-gray-500 mt-2">
                      Foto dapat dikirim via WhatsApp setelah pendaftaran dikonfirmasi
                    </p>
                  )}
                </div>

                {/* Website Referensi */}
                <div>
                  <label htmlFor="referensi" className="block text-sm font-semibold text-gray-700 mb-2">
                    Website referensi/contoh
                  </label>
                  <input
                    type="text"
                    id="referensi"
                    name="referensi"
                    value={formData.referensi}
                    onChange={handleInputChange}
                    placeholder="https://contohwebsite.com (boleh lebih dari satu, pisah dengan koma)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Kelompok 3 - Kontak Penanggung Jawab */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                <User className="w-5 h-5 text-emerald-600" />
                Kontak Penanggung Jawab
              </h3>

              <div className="space-y-5">
                {/* Nama PJ */}
                <div>
                  <label htmlFor="namaPJ" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Penanggung Jawab <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="namaPJ"
                    name="namaPJ"
                    value={formData.namaPJ}
                    onChange={handleInputChange}
                    placeholder="Nama lengkap"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Jabatan */}
                <div>
                  <label htmlFor="jabatan" className="block text-sm font-semibold text-gray-700 mb-2">
                    Jabatan
                  </label>
                  <input
                    type="text"
                    id="jabatan"
                    name="jabatan"
                    value={formData.jabatan}
                    onChange={handleInputChange}
                    placeholder="Contoh: Ketua, Sekretaris, Bendahara"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Nomor WhatsApp */}
                <div>
                  <label htmlFor="nomorWA" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="nomorWA"
                    name="nomorWA"
                    value={formData.nomorWA}
                    onChange={handleInputChange}
                    placeholder="08xxxxxxxxxx"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@lembaga.org"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              Kirim Pendaftaran via WhatsApp
              <Send className="w-5 h-5" />
            </button>

            {/* Note */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mt-6 flex gap-3">
              <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-700">
                Program ini terbatas dan diseleksi setiap bulan. Prioritas diberikan kepada lembaga yang belum memiliki kehadiran digital sama sekali. Keputusan tim TechKuHouse bersifat final.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
