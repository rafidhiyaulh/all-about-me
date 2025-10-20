import React, { useState } from 'react'
import Lyrics from '../components/Lyrics'
import { Youtube, Music, FileText, Wrench } from 'lucide-react'
import Lens from '../components/Lens'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'

const MySongs: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="space-y-6 text-neutral-800">
      {/* Title Section */}
      <div className="mb-6 text-center">
        <HyperText as="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
          UTS-2 My Songs for You
        </HyperText>
        <p className="text-base text-neutral-600 sm:text-lg md:text-xl">
          Better Steps - A Musical Reflection
        </p>
      </div>

      {/* Song Header */}
      <div className="text-center">
  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 flex items-center justify-center gap-2">
          <Music className="w-6 h-6 text-primary-600" />
          Better Steps — Lagu & Video
        </h2>
      </div>

      {/* Video note removed per request */}

      {/* About the Work */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 flex items-center text-neutral-900">
          <FileText className="w-6 h-6 text-primary-600 mr-2" />
          Tentang Karya
        </h3>
        
      <div className="glass-effect rounded-2xl border border-neutral-200 p-4 mb-3 shadow">
          <p className="text-base leading-relaxed sm:text-lg">
            <Highlighter color="#d4d4d8">"Better Steps"</Highlighter> saya buat sebagai refleksi perjalanan pribadi menuju langkah yang lebih baik dalam belajar, bekerja, dan berelasi. Lagu ini bercerita tentang proses bertumbuh: mengakui rasa takut, menata pikiran, lalu bergerak pelan tetapi pasti. Pesan utamanya sederhana: kita bisa memilih kata dan tindakan yang membangun pengertian bersama, mulai dari diri sendiri.
          </p>
        </div>

  <div className="highlight-box rounded-xl p-4 mb-4">
          <p className="text-base leading-relaxed mb-4 sm:text-lg">
            Karya ini selaras dengan pembelajaran di mata kuliah{' '}
            <Highlighter color="#d4d4d8">Komunikasi Interpersonal & Publik</Highlighter>, di mana saya belajar bahwa:
          </p>
          <ol className="space-y-2 text-base leading-relaxed sm:text-lg">
            <li>1. <strong>Self-talk yang sehat</strong> membantu menenangkan diri dan menjaga fokus</li>
            <li>2. <strong>Pengecekan persepsi</strong> menghindarkan salah paham dan membuat dialog lebih produktif</li>
            <li>3. <strong>Model transaksional</strong> mengingatkan bahwa komunikasi adalah pertukaran dua arah yang adaptif</li>
            <li>4. <strong>Prediksi yang memenuhi diri</strong> (visualisasi positif) mendorong kita konsisten melangkah</li>
          </ol>
        </div>

  <div className="glass-effect rounded-xl border border-neutral-200 p-6 mb-6 shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-neutral-900">
            <Wrench className="w-5 h-5 text-primary-600 mr-2" />
            Proses Kreatif
          </h3>
          <p className="text-base leading-relaxed sm:text-lg">
            Secara teknis, <strong>lagu dibuat dengan Suno.ai</strong> berdasarkan lirik yang saya tulis, dan <strong>video dibuat dengan Veo 3 (Google Gemini)</strong> untuk memperkuat narasi visual. Fokus saya bukan pada teknologinya, melainkan pada pesan yang ingin disampaikan: menjaga harapan, mengambil langkah kecil yang konsisten, dan bertumbuh bersama orang-orang di sekitar.
          </p>
        </div>

        {/* Video thumbnail card — opens modal */}
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-3xl">
            <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow transition hover:border-neutral-300 hover:shadow-lg sm:flex-row">
              <div className="relative h-32 w-full overflow-hidden rounded-xl ring-1 ring-neutral-200 sm:h-24 sm:w-40">
                <Lens
                  zoomFactor={2}
                  lensSize={140}
                  className="h-full w-full"
                  ariaLabel="Preview video Better Steps"
                >
                  <img
                    src="https://img.youtube.com/vi/8LhuFTK2nAU/hqdefault.jpg"
                    alt="Thumbnail Better Steps"
                    className="h-full w-full object-cover"
                  />
                </Lens>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 text-white transition hover:bg-black/40"
                  aria-label="Putar Better Steps dalam modal"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                    <Youtube className="h-6 w-6" />
                  </div>
                </button>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-3">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-neutral-900">Link Video Langsung</h4>
                  <p className="text-sm sm:text-base text-neutral-600">Tonton di YouTube atau buka versi modal tanpa meninggalkan halaman.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-500"
                  >
                    Putar di modal
                  </button>
                  <a
                    href="https://youtu.be/8LhuFTK2nAU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900"
                  >
                    Buka di YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-16 sm:py-24">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden="true" />
            <div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1 text-lg font-semibold text-neutral-700 shadow hover:bg-white"
                aria-label="Tutup pemutar video"
              >
                ×
              </button>
              <div className="w-full" style={{ position: 'relative', paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/8LhuFTK2nAU?autoplay=1"
                  title="Better Steps - video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 bg-neutral-50 px-4 py-3">
                <span className="text-sm text-neutral-600">Gunakan tombol tutup atau buka langsung di YouTube.</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-neutral-800 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700"
                  >
                    Tutup
                  </button>
                  <a
                    href="https://youtu.be/8LhuFTK2nAU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-400 px-4 py-2 text-sm font-semibold text-neutral-700 hover:border-neutral-500 hover:text-neutral-900"
                  >
                    Buka di YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lyrics Section */}
      <div>
        <Lyrics />
      </div>
    </div>
  )
}

export default MySongs
