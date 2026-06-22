"use client";

import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Globe, Smartphone, TrendingUp, ShoppingCart, Heart } from 'lucide-react';
import { useLucideDrawerAnimation } from '@/components/ui/lucide-icon-drawer';

function HeroSplineBackground() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Spline
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'auto',
        }}
        scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(to right, rgba(26, 40, 112, 0.55), transparent 20%, transparent 80%, rgba(26, 40, 112, 0.55)),
            linear-gradient(to bottom, transparent 80%, rgba(26, 40, 112, 0.55))
          `,
          pointerEvents: 'none',
        }}
      />
      {/* Cover "Built with Spline" watermark at bottom-right */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '180px',
          height: '44px',
          background: 'rgba(26, 40, 112, 0.98)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

const products = [
  {
    icon: Globe,
    label: "Jasa Pembuatan Web",
    desc: "Website profesional mulai Rp700rb",
    href: "/layanan#web-development",
    color: "from-blue-500/30 to-blue-600/20",
  },
  {
    icon: Smartphone,
    label: "Pembuatan Aplikasi",
    desc: "Mobile & web app custom",
    href: "/layanan#mobile-app",
    color: "from-indigo-500/30 to-indigo-600/20",
  },
  {
    icon: TrendingUp,
    label: "SEO Bergaransi",
    desc: "Terbaca pencarian Google",
    href: "/layanan#seo-bergaransi",
    color: "from-cyan-500/30 to-cyan-600/20",
  },
  {
    icon: ShoppingCart,
    label: "Admin Online Shop",
    desc: "Jasa kelola toko online Anda",
    href: "/layanan#social-media-ads",
    color: "from-violet-500/30 to-violet-600/20",
  },
  {
    icon: Heart,
    label: "Website Lembaga Gratis",
    desc: "Gratis untuk lembaga sosial & agama",
    href: "/layanan#website-gratis-lembaga",
    color: "from-emerald-500/30 to-emerald-600/20",
  },
];

function HeroContent() {
  const iconGridRef = useLucideDrawerAnimation();

  return (
    <div className="text-white px-4 max-w-screen-xl mx-auto w-full h-full flex flex-col justify-between items-start lg:items-center py-16">
      <div className="w-full flex flex-col gap-8 pr-0 lg:pr-8 mb-8 lg:mb-0 mt-12">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-wide">
          Wujudkan Kesuksesan<br />Digital Bisnis Anda
        </h1>
        <div className="text-md text-center font-bold mx-auto bg-white rounded-full px-4 py-2 text-black opacity-90 tracking-widest uppercase">
          Website & App yang Bikin Bisnismu Menjadi Lebih Besar
        </div>
        <p className="text-base text-center sm:text-lg opacity-80 mb-6">
          TechKuHouse membantu UMKM dan personal brand naik kelas secara digital<br />
          tanpa budget besar, tanpa ribet teknis, tanpa drama. <br />
          Dari ide jadi website atau app siap pakai — dalam hitungan hari, langsung terealisasi.
        </p>

        {/* Animated product icon grid */}
        <div
          ref={iconGridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full pointer-events-auto mb-10"
        >
          {products.map(({ icon: Icon, label, desc, href, color }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer text-center"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={28} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-white leading-tight">
                  {label}
                </span>
                <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300 leading-tight">
                  {desc}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pointer-events-auto">
          <a
            href="https://wa.me/0?text=Halo%20TechKuHouse%2C%20saya%20ingin%20konsultasi%20Jasa%20Pembuatan%20Website%20%2B%20SEO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-dark text-white font-bold px-4 py-2 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg"
          >
            <svg className="w-5 h-5 text-whiteflex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Konsultasi Jasa Pembuatan Website + SEO
          </a>
        </div>

      </div>
    </div>
  );
}

const HeroSection = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollPosition = window.pageYOffset;
        const maxScroll = 400;
        const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
        if (heroContentRef.current) {
          heroContentRef.current.style.opacity = opacity.toString();
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[calc(100vh+4rem)] sm:h-[calc(100vh+8rem)]">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <HeroSplineBackground />
      </div>

      <div
        ref={heroContentRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <HeroContent />
      </div>
    </div>
  );
};

export { HeroSection };
