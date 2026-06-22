import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  perusahaan: [
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/layanan", label: "Layanan" },
    { href: "/portfolio", label: "Portfolio" },
    // { href: "/kontak", label: "Kontak" },
  ],
  layanan: [
    { href: "/layanan#web-development", label: "Jasa Pembuatan Web" },
    { href: "/layanan#mobile-app", label: "Jasa Pembuatan Aplikasi" },
    { href: "/layanan#seo", label: "Jasa SEO Bergaransi" },
    { href: "/layanan#online-shop", label: "Jasa Admin Online Shop" },
    { href: "/layanan#promo", label: "Website Lembaga Gratis" },
  ],
};

export default function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285785741046";

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          <div className="col-span-2">
            <Image
              src="/logo.png"
              alt="TechKuHouse"
              width={250}
              height={80}
              className="h-[40%] w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Solusi digital terbaik untuk mengembangkan bisnis Anda. <br />Kami
              menciptakan website dan aplikasi yang modern, cepat, dan efektif.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Jakarta Timur, DKI Jakarta, Indonesia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:admin@techkuhouse.id"
                  className="hover:text-primary transition-colors duration-200"
                >
                  admin@techkuhouse.id
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +{whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; TechKuHouse. All rights reserved. Made with Bissmillah.
          </p>
        </div>
      </div>
    </footer>
  );
}
