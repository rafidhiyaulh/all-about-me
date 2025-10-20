# Portfolio Muhammad Rafi Dhiyaulhaq

Modern React + TypeScript portfolio that documents work for mata kuliah **Komunikasi Interpersonal dan Publik (II-2100)**. Seluruh konten berasal dari arsip Quarto asli dan dipertahankan apa adanya.

## ✨ Fitur Utama

- **Zinc monochrome theme** dengan aksen `HyperText` dan teks highlight untuk penekanan konten penting.
- **Lens zoom** pada seluruh gambar sehingga foto dapat diperbesar secara interaktif.
- **Scroll velocity marquee** yang menegaskan nilai-nilai inti pada halaman utama.
- Navigasi sidebar yang tetap di sisi kiri untuk lima halaman UTS dan halaman sambutan.
- Responsif penuh (mobile → desktop) menggunakan Tailwind CSS.
- Build modern dengan React 18, TypeScript, dan Vite.

## 📄 Halaman Konten

- **Selamat Datang** – pengantar, nilai inti, marquee nilai komunikasi.
- **UTS-1 All About Me** – profil pribadi, prinsip komunikasi, highlight konten penting.
- **UTS-2 My Songs for You** – lagu “Better Steps”, video YouTube, dan lirik lengkap.
- **UTS-3 My Stories for You** – tiga cerita reflektif dengan foto yang bisa di-zoom.
- **UTS-4 My SHAPE** – piagam diri, bagan SHAPE, dan identitas naratif.
- **UTS-5 My Personal Reviews** – metode self-assessment, skor PDF, dan rekomendasi perbaikan.

## 🚀 Cara Menjalankan

1. **Instal dependensi**
   ```bash
   npm install
   ```
2. **Salin aset konten**
   ```text
   public/images/      ← salin seluruh folder gambar dari proyek Quarto
   public/skor_uts.pdf ← salin file PDF skor UTS
   ```
3. **Mode pengembangan**
   ```bash
   npm run dev
   ```
4. **Build produksi**
   ```bash
   npm run build
   ```

## 🗂️ Struktur Proyek

```
src/
├── components/
│   ├── Layout.tsx          # Kerangka utama + sidebar
│   ├── QuickLinks.tsx      # Kartu navigasi cepat
│   ├── FeaturedPanel.tsx   # Panel highlight di halaman selamat datang
│   ├── AtAGlance.tsx       # Kartu ringkas profil di UTS-1
│   ├── Lyrics.tsx          # Penyaji lirik dan struktur lagu
│   ├── StoryImage.tsx      # Wrapper gambar dengan Lens zoom + caption
│   ├── HyperText.tsx       # Komponen heading berwarna zinc dinamis
│   ├── Highlighter.tsx     # Penegasan teks (highlight / underline)
│   ├── ScrollVelocity.tsx  # Marquee kecepatan untuk nilai inti
│   └── Lens.tsx            # Efek pembesaran gambar ala Magic UI
├── pages/                  # Halaman konten UTS
├── App.tsx                 # Routing React Router
├── main.tsx                # Entry point React
└── index.css               # Gaya global + utilitas Tailwind
```

## 🛠️ Teknologi

- **React 18** & **TypeScript**
- **Vite** sebagai dev server & bundler cepat
- **Tailwind CSS** + **DaisyUI** untuk styling utility-first
- **React Router DOM** untuk navigasi
- **Lucide React** untuk ikon yang ringan

## ✅ Pelestarian Konten

Semua teks, gambar, kutipan, tabel, dan referensi dari Quarto dipindahkan apa adanya. Penyesuaian yang dilakukan hanya pada tampilan (styling, interaksi, dan navigasi) supaya lebih modern dan responsif tanpa mengubah substansi materi.

---

Repositori ini menjadi arsip digital resmi untuk tugas portfolio II-2100. Silakan gunakan skrip di atas ketika ingin menjalankan atau melakukan build ulang.
