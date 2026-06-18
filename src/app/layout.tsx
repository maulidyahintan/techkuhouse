import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TechKuHouse | Jasa Pembuatan Website Profesional & SEO Bergaransi",
    template: "%s | TechKuHouse",
  },
  description:
    "Jasa pembuatan website profesional mulai Rp700.000. Domain & hosting gratis, SSL, template premium, garansi selamanya. Pesan aman via Shopee PO. Tersedia website gratis lembaga agama.",
  keywords: [
    "jasa pembuatan website",
    "jasa website murah",
    "buat website profesional",
    "pembuatan website jakarta",
    "website company profile",
    "toko online murah",
    "jasa SEO bergaransi",
    "web developer indonesia",
    "website wordpress murah",
    "jasa digital marketing",
    "website gratis masjid",
    "pesan website shopee",
    "TechKuHouse",
  ],
  authors: [{ name: "TechKuHouse" }],
  creator: "TechKuHouse",
  publisher: "TechKuHouse",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "TechKuHouse",
    title: "TechKuHouse | Jasa Pembuatan Website Profesional & SEO Bergaransi",
    description:
      "Jasa pembuatan website profesional mulai Rp700.000 dengan domain & hosting gratis, SSL, garansi selamanya. Tersedia paket Silver, Gold, Diamond, Platinum.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "TechKuHouse - Jasa Pembuatan Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechKuHouse - Solusi Digital Terbaik untuk Bisnis Anda",
    description:
      "Jasa pembuatan website profesional di Jakarta. Web Development, Mobile App, UI/UX Design, dan SEO Optimization.",
    images: ["/logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [{ url: "/icon-logo.png", type: "image/png" }],
    apple: "/icon-logo.png",
    shortcut: "/icon-logo.png",
  },
  themeColor: "#2952B3",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
