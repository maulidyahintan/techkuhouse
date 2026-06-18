import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techkuhouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TechKuHouse - Solusi Digital Terbaik untuk Bisnis Anda",
    template: "%s | TechKuHouse",
  },
  description:
    "TechKuHouse adalah jasa pembuatan website profesional di Jakarta, Indonesia. Kami menyediakan layanan Web Development, Mobile App, UI/UX Design, dan SEO Optimization untuk mengembangkan bisnis Anda secara digital.",
  keywords: [
    "jasa pembuatan website",
    "web development",
    "pembuatan website jakarta",
    "jasa website murah",
    "toko online",
    "company profile",
    "landing page",
    "mobile app development",
    "UI/UX design",
    "SEO optimization",
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
    title: "TechKuHouse - Solusi Digital Terbaik untuk Bisnis Anda",
    description:
      "Jasa pembuatan website profesional di Jakarta. Web Development, Mobile App, UI/UX Design, dan SEO Optimization.",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#2563EB",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
