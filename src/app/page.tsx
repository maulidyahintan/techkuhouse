import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "TechKuHouse adalah jasa pembuatan website profesional di Jakarta. Kami menyediakan layanan Web Development, Mobile App Development, UI/UX Design, dan SEO Optimization dengan harga terjangkau.",
  openGraph: {
    title: "TechKuHouse - Solusi Digital Terbaik untuk Bisnis Anda",
    description:
      "Jasa pembuatan website profesional di Jakarta. Web Development, Mobile App, UI/UX Design, dan SEO Optimization.",
    url: siteUrl,
    type: "website",
  },
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
  telephone: "+6281234567890",
  email: "info@techkuhouse.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jakarta Selatan",
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.2608,
    longitude: 106.7811,
  },
  priceRange: "Rp 5.000.000 - Rp 50.000.000",
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, websiteSchema, breadcrumbSchema]} />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}
