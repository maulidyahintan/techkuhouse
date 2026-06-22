import type { Metadata } from "next";
import FreeWebsiteForm from "./FreeWebsiteForm";

export const metadata: Metadata = {
  title: "Daftar Website Gratis untuk Lembaga Sosial & Agama",
  description: "Program website gratis TechKuHouse untuk masjid, pesantren, gereja, pura, yayasan, dan lembaga sosial. Daftar sekarang, terbatas setiap bulan.",
};

export default function Page() {
  return <FreeWebsiteForm />;
}
