# TechKuHouse - Website Jasa Pembuatan Website

Website company profile untuk jasa pembuatan website yang dibuat dengan Next.js 14+, TypeScript, dan Tailwind CSS.

## Fitur

- ✅ Next.js 14+ dengan App Router
- ✅ TypeScript strict mode
- ✅ Tailwind CSS untuk styling
- ✅ SEO Optimization lengkap (Metadata API, Sitemap, Robots.txt)
- ✅ Structured Data (JSON-LD)
- ✅ Responsive design (mobile-first)
- ✅ Image optimization dengan next/image
- ✅ Font optimization dengan next/font
- ✅ Web App Manifest (PWA-ready)
- ✅ Konten dalam Bahasa Indonesia

## Halaman

1. **Beranda** (`/`) - Hero, Services, Portfolio, Testimonials, CTA
2. **Tentang Kami** (`/tentang`) - Informasi perusahaan, tim, nilai-nilai
3. **Layanan** (`/layanan`) - Detail layanan dan pricing
4. **Portfolio** (`/portfolio`) - Showcase project yang telah dikerjakan
5. **Kontak** (`/kontak`) - Form kontak dan informasi kontak

## Instalasi

1. Clone repository:
```bash
git clone <repository-url>
cd techkuhouse
```

2. Install dependencies:
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. Copy file environment:
```bash
cp .env.example .env
```

4. Edit `.env` dan sesuaikan dengan konfigurasi Anda:
```
NEXT_PUBLIC_SITE_URL=https://techkuhouse.com
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```

5. Jalankan development server:
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

6. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Build untuk Production

```bash
npm run build
npm run start
```

## Struktur Folder

```
techkuhouse/
├── public/                 # Static assets
├── src/
│   ├── app/               # App Router pages
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   ├── tentang/       # About page
│   │   ├── layanan/       # Services page
│   │   ├── portfolio/     # Portfolio page
│   │   ├── kontak/        # Contact page
│   │   ├── sitemap.ts     # Sitemap generator
│   │   ├── robots.ts      # Robots.txt generator
│   │   └── manifest.ts    # Web App Manifest
│   ├── components/
│   │   ├── ui/            # Reusable UI components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   ├── sections/      # Section components
│   │   └── JsonLd.tsx     # Structured data component
│   └── lib/
│       └── utils.ts       # Utility functions (cn)
├── .env.example           # Environment variables template
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Kustomisasi

### Mengubah Konten

- **Informasi perusahaan**: Edit file di `src/app/` dan `src/components/`
- **Layanan**: Edit `src/app/layanan/page.tsx`
- **Portfolio**: Edit `src/app/portfolio/page.tsx`
- **Contact Info**: Edit `src/app/kontak/page.tsx` dan `src/components/layout/Footer.tsx`

### Mengubah Warna

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#2563EB", // Ubah warna primary
    dark: "#1E40AF",
    light: "#3B82F6",
  },
}
```

### Menambah Gambar

Tempatkan gambar di folder `public/` dan gunakan dengan `next/image`:

```tsx
import Image from "next/image";

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

## SEO

Website ini sudah dilengkapi dengan:
- Metadata API untuk setiap halaman
- Open Graph tags
- Twitter Card tags
- Sitemap XML otomatis
- Robots.txt
- Structured Data (JSON-LD) untuk LocalBusiness
- Web App Manifest

## WhatsApp Integration

Form kontak akan mengirim pesan melalui WhatsApp. Pastikan `NEXT_PUBLIC_WHATSAPP_NUMBER` di `.env` sudah benar (format: 6281234567890).

## License

MIT License - bebas digunakan untuk project komersial maupun personal.

## Support

Jika ada pertanyaan, silakan hubungi:
- Email: info@techkuhouse.com
- WhatsApp: +62 812 3456 7890