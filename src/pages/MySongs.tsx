import React, { useState } from 'react'
import Lyrics from '../components/Lyrics'
import Lens from '../components/Lens'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
)

const MySongs: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="mb-6 text-center">
        <HyperText as="h1" className="mb-3">
          UTS-2 My Songs for You
        </HyperText>
        <p className="subtitle" style={{ color: 'var(--muted)' }}>
          Better Steps - A Musical Reflection
        </p>
      </div>

      <h2 className="section-title justify-center"><span className="bar" />Better Steps · Lagu &amp; Video</h2>

      {/* About the Work */}
      <div>
        <h3 className="eyebrow mb-3">Tentang Karya</h3>

        <div className="card mb-3 p-5" style={{ borderTop: '3px solid var(--brand)' }}>
          <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
            <Highlighter>"Better Steps"</Highlighter> saya buat sebagai refleksi perjalanan pribadi menuju langkah yang lebih baik dalam belajar, bekerja, dan berelasi. Lagu ini bercerita tentang proses bertumbuh: mengakui rasa takut, menata pikiran, lalu bergerak pelan tetapi pasti. Pesan utamanya sederhana: kita bisa memilih kata dan tindakan yang membangun pengertian bersama, mulai dari diri sendiri.
          </p>
        </div>

        <div className="accent-panel mb-4">
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink2)' }}>
            Karya ini selaras dengan pembelajaran di mata kuliah{' '}
            <Highlighter>Komunikasi Interpersonal & Publik</Highlighter>, di mana saya belajar bahwa:
          </p>
          <ol className="space-y-2 leading-relaxed" style={{ color: 'var(--ink2)' }}>
            <li>1. <strong style={{ color: 'var(--ink)' }}>Self-talk yang sehat</strong> membantu menenangkan diri dan menjaga fokus</li>
            <li>2. <strong style={{ color: 'var(--ink)' }}>Pengecekan persepsi</strong> menghindarkan salah paham dan membuat dialog lebih produktif</li>
            <li>3. <strong style={{ color: 'var(--ink)' }}>Model transaksional</strong> mengingatkan bahwa komunikasi adalah pertukaran dua arah yang adaptif</li>
            <li>4. <strong style={{ color: 'var(--ink)' }}>Prediksi yang memenuhi diri</strong> (visualisasi positif) mendorong kita konsisten melangkah</li>
          </ol>
        </div>

        <div className="card mb-6 p-6">
          <h3 className="eyebrow mb-3">Proses Kreatif</h3>
          <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
            Secara teknis, <strong style={{ color: 'var(--ink)' }}>lagu dibuat dengan Suno.ai</strong> berdasarkan lirik yang saya tulis, dan <strong style={{ color: 'var(--ink)' }}>video dibuat dengan Veo 3 (Google Gemini)</strong> untuk memperkuat narasi visual. Fokus saya bukan pada teknologinya, melainkan pada pesan yang ingin disampaikan: menjaga harapan, mengambil langkah kecil yang konsisten, dan bertumbuh bersama orang-orang di sekitar.
          </p>
        </div>

        {/* Video thumbnail card: opens modal */}
        <div className="mb-6 flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="card flex flex-col gap-4 p-4 sm:flex-row">
              <div className="relative h-32 w-full flex-none overflow-hidden rounded-lg sm:h-24 sm:w-40" style={{ border: '1px solid var(--border)' }}>
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
                  className="absolute inset-0 flex items-center justify-center text-white"
                  style={{ background: 'rgba(0,0,0,0.3)' }}
                  aria-label="Putar Better Steps dalam modal"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: 'var(--panel)', color: 'var(--ink)' }}>
                    <PlayIcon />
                  </div>
                </button>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-3">
                <div>
                  <h4 className="font-semibold" style={{ color: 'var(--ink)' }}>Link Video Langsung</h4>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>Tonton di YouTube atau buka versi modal tanpa meninggalkan halaman.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={() => setOpen(true)} className="btn btn-primary">
                    Putar di modal
                  </button>
                  <a
                    href="https://youtu.be/8LhuFTK2nAU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
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
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} onClick={() => setOpen(false)} aria-hidden="true" />
            <div
              role="dialog"
              aria-modal="true"
              className="card relative w-full max-w-3xl overflow-hidden"
              style={{ background: 'var(--panel)' }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold"
                style={{ background: 'var(--panel)', border: '1px solid var(--border)', color: 'var(--ink)' }}
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
              <div className="flex flex-wrap items-center justify-between gap-3 p-3" style={{ borderTop: '1px solid var(--border)', background: 'var(--panel-alt)' }}>
                <span className="text-sm" style={{ color: 'var(--muted)' }}>Gunakan tombol tutup atau buka langsung di YouTube.</span>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setOpen(false)} className="btn btn-dark">
                    Tutup
                  </button>
                  <a
                    href="https://youtu.be/8LhuFTK2nAU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
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
      <Lyrics />
    </div>
  )
}

export default MySongs
