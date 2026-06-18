import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  perusahaan: [
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/layanan", label: "Layanan" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/kontak", label: "Kontak" },
  ],
  layanan: [
    { href: "/layanan#web-development", label: "Web Development" },
    { href: "/layanan#mobile-app", label: "Mobile App" },
    { href: "/layanan#uiux", label: "UI/UX Design" },
    { href: "/layanan#seo", label: "SEO Optimization" },
  ],
};

const socialLinks = [
  { href: "https://facebook.com/techkuhouse", label: "Facebook", icon: "F" },
  { href: "https://instagram.com/techkuhouse", label: "Instagram", icon: "I" },
  { href: "https://linkedin.com/company/techkuhouse", label: "LinkedIn", icon: "L" },
  { href: "https://twitter.com/techkuhouse", label: "Twitter", icon: "T" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890";

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Image
              src="/logo.png"
              alt="TechKuHouse"
              width={200}
              height={67}
              className="h-14 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Solusi digital terbaik untuk mengembangkan bisnis Anda. Kami
              menciptakan website dan aplikasi yang modern, cepat, dan efektif.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-dark-light hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <span className="text-sm font-semibold">{social.icon}</span>
                </a>
              ))}
            </div>
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
                <span>Jakarta Selatan, DKI Jakarta, Indonesia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:info@techkuhouse.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  info@techkuhouse.com
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
            &copy; {currentYear} TechKuHouse. All rights reserved. Made with ❤️
            in Jakarta.
          </p>
        </div>
      </div>
    </footer>
  );
}
