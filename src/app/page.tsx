import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PricingPackages from "@/components/sections/PricingPackages";
import Features from "@/components/sections/Features";
import OrderFlow from "@/components/sections/OrderFlow";
// import Services from "@/components/sections/Services";
// import Portfolio from "@/components/sections/Portfolio";
// import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import PromoFree from "@/components/sections/PromoFree";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "TechKuHouse — jasa pembuatan website profesional mulai Rp700.000. Domain + hosting gratis, SSL, garansi selamanya. SEO bergaransi, Google Ads, pembuatan aplikasi. Pesan aman via Shopee!",
  openGraph: {
    title: "TechKuHouse | Jasa Website Profesional Mulai Rp700.000",
    description:
      "Website company profile, toko online, landing page — semua dengan domain gratis, hosting gratis, SSL, dan garansi selamanya. Pesan aman via Shopee.",
    url: siteUrl,
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "TechKuHouse - Jasa Pembuatan Website Profesional" }],
  },
  alternates: { canonical: siteUrl },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#organization`,
  name: "TechKuHouse",
  image: `${siteUrl}/og-image.jpg`,
  description:
    "Jasa pembuatan website profesional di Jakarta. Web Development, Mobile App Development, UI/UX Design, dan SEO Optimization.",
  url: siteUrl,
  telephone: "+6285785741046",
  email: "admin@techkuhouse.id",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jakarta Timur",
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.2608,
    longitude: 106.7811,
  },
  priceRange: "Rp 700.000 - Rp 3.000.000",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://facebook.com/techkuhouse",
    "https://instagram.com/techkuhouse",
    "https://linkedin.com/company/techkuhouse",
    "https://twitter.com/techkuhouse",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}#website`,
  url: siteUrl,
  name: "TechKuHouse",
  description:
    "Solusi Digital Terbaik untuk Bisnis Anda - Jasa Pembuatan Website Profesional",
  publisher: {
    "@id": `${siteUrl}#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/portfolio?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: siteUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa biaya pembuatan website di TechKuHouse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami menyediakan 4 paket: Silver (Rp 700.000), Gold (Rp 1.600.000), Diamond (Rp 2.000.000), dan Platinum (Rp 3.000.000). Semua sudah termasuk domain gratis, hosting, SSL, dan garansi selamanya.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses pembuatan website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rata-rata 5–7 hari kerja untuk paket standar. Website custom dan aplikasi mobile 2–8 minggu tergantung kompleksitas.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada garansi setelah website selesai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, semua paket dilengkapi garansi selamanya termasuk support teknis gratis tanpa batas waktu.",
      },
    },
    {
      "@type": "Question",
      name: "Bisa pesan via Shopee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bisa! Tersedia di Shopee dengan sistem PO. Dana aman ditahan Shopee, baru cair setelah website selesai dan disetujui.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada program website gratis untuk lembaga agama?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ada! Program website GRATIS untuk masjid, mushola, pesantren, gereja, pura, vihara dan lembaga agama resmi lainnya.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, websiteSchema, breadcrumbSchema, faqSchema]} />
      <Hero />
      <div className="-mt-12 relative z-10">
        <PricingPackages />
      </div>
      <OrderFlow />
      <Features />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <PromoFree />
      <FAQ />
      <CTA />
    </>
  );
}
