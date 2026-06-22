"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Users, Briefcase, FolderOpen, Phone, LucideIcon } from "lucide-react";
import { NavBar } from "@/components/ui/Navbar";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { name: "Beranda", url: "/", icon: Home },
  { name: "Tentang", url: "/tentang", icon: Users },
  { name: "Layanan", url: "/layanan", icon: Briefcase },
  // { name: "Portfolio", url: "/portfolio", icon: FolderOpen },
  { name: "Kontak", url: "/kontak", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(navItems[0].name);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const matched = navItems.find((item) =>
      item.url === "/" ? pathname === "/" : pathname.startsWith(item.url)
    );
    if (matched) setActiveTab(matched.name);
  }, [pathname]);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285785741046";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20TechKuHouse%2C%20saya%20tertarik%20dengan%20layanan%20Anda`;

  return (
    <>
      {/* ============ HEADER — satu baris penuh ============ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        )}
      >
        <div className="container-custom flex items-center justify-between h-16 sm:h-20 gap-4">

          {/* LOGO — selalu bg white, kiri */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 bg-white rounded-xl px-3 py-1.5 shadow-md backdrop-blur-md"
          >
            <Image
              src="/logo.png"
              alt="TechKuHouse Logo"
              width={200}
              height={80}
              className="h-9 sm:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* TUBELIGHT NAV — hanya desktop (sm+), tengah */}
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex items-center gap-1 bg-[#1a2870]/85 border border-white/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
              {navItems.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200",
                      "text-white/70 hover:text-white",
                      isActive && "text-white"
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="lamp-desktop"
                        className="absolute inset-0 w-full bg-white/10 rounded-full -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#4d84d4] rounded-t-full">
                          <div className="absolute w-12 h-6 bg-[#4d84d4]/30 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-[#4d84d4]/30 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-[#4d84d4]/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA BUTTON — hanya desktop (sm+), kanan */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-md flex-shrink-0",
              isScrolled
                ? "bg-[#2952B3] hover:bg-[#1a2870] text-white"
                : "bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-sm"
            )}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hubungi Kami
          </a>

        </div>
      </header>

      {/* MOBILE BOTTOM NAV — hanya tampil di mobile (hidden sm+) */}
      <NavBar items={navItems} className="sm:hidden" />
    </>
  );
}
