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
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="w-full text-left flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-200 shadow transition hover:border-neutral-400 hover:shadow-lg"
              aria-label="Buka video Better Steps di modal"
            >
              <div className="relative h-24 w-40 flex-shrink-0">
                <Lens
                  zoomFactor={2}
                  lensSize={130}
                  className="h-full w-full overflow-hidden rounded-lg ring-1 ring-neutral-200"
                  ariaLabel="Pembesaran thumbnail Better Steps"
                >
                  <img
                    src="https://img.youtube.com/vi/8LhuFTK2nAU/hqdefault.jpg"
                    alt="Thumbnail Better Steps"
                    className="h-full w-full object-cover"
                  />
                </Lens>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white">
                    <Youtube className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-neutral-900">
                  <Youtube className="h-5 w-5 text-neutral-600" /> Link Video Langsung
                </h4>
                <p className="text-neutral-600">Tonton di YouTube — buka video dalam modal.</p>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">Putar di modal</span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* DaisyUI modal (controlled) */}
        <input type="checkbox" id="video-modal" className="modal-toggle" checked={open} onChange={() => setOpen(!open)} />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-4xl p-0 overflow-hidden border border-neutral-200 bg-white shadow-xl">
            <div className="w-full h-0" style={{ paddingBottom: '56.25%', position: 'relative' }}>
              {open && (
                <iframe
                  src="https://www.youtube.com/embed/8LhuFTK2nAU?autoplay=1"
                  title="Better Steps - video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
            <div className="modal-action">
              <button className="btn border-none bg-primary-600 text-white hover:bg-primary-500" onClick={() => setOpen(false)}>Tutup</button>
              <a href="https://youtu.be/8LhuFTK2nAU" target="_blank" rel="noopener noreferrer" className="btn border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100">Buka di YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {/* Lyrics Section */}
      <div>
        <Lyrics />
      </div>
    </div>
  )
}

export default MySongs
