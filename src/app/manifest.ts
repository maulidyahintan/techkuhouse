import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TechKuHouse - Solusi Digital Terbaik untuk Bisnis Anda",
    short_name: "TechKuHouse",
    description:
      "Jasa pembuatan website profesional di Jakarta. Web Development, Mobile App, UI/UX Design, dan SEO Optimization.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
