# Setup Instructions - TechKuHouse

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
```bash
cp .env.example .env
```

Edit `.env` file:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```

### 3. Run Development Server
```bash
npm run dev
```

Buka browser di [http://localhost:3000](http://localhost:3000)

### 4. Build untuk Production
```bash
npm run build
npm run start
```

## Scripts Available

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type:check` - TypeScript type checking

## Kustomisasi

### Mengubah Konten

1. **Homepage**
   - Edit `/src/app/page.tsx`
   - Edit komponen di `/src/components/sections/`

2. **Layanan**
   - Edit `/src/app/layanan/page.tsx`
   - Ubah array `services` untuk menambah/edit layanan

3. **Portfolio**
   - Edit `/src/app/portfolio/page.tsx`
   - Ubah array `portfolioItems` untuk menambah/edit portfolio

4. **Kontak**
   - Edit `/src/app/kontak/page.tsx` dan `/src/app/kontak/KontakForm.tsx`
   - Ubah informasi kontak di `contactInfo`

5. **Tentang**
   - Edit `/src/app/tentang/page.tsx`
   - Ubah `teamMembers` dan `values`

### Mengubah Warna

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#2563EB", // Warna primary utama
    dark: "#1E40AF",    // Warna primary dark
    light: "#3B82F6",   // Warna primary light
  },
}
```

### Mengubah Font

Edit `/src/app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

Ganti `Inter` dengan font Google Fonts lainnya.

### Menambah Gambar

1. Simpan gambar di folder `/public/`
2. Gunakan dengan `next/image`:

```tsx
import Image from "next/image";

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

## Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Import repository di [vercel.com](https://vercel.com)
3. Set environment variables di Vercel Dashboard
4. Deploy otomatis

### Manual Deployment

```bash
npm run build
```

Output ada di `.next` folder. Deploy dengan Node.js server atau static hosting.

## Troubleshooting

### Error: Module not found

```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: Port already in use

```bash
# Ganti port
PORT=3001 npm run dev
```

### TypeScript Errors

```bash
npm run type:check
```

## Support

Email: info@techkuhouse.com
WhatsApp: +62 812 3456 7890
