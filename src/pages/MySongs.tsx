import React, { useState } from 'react'
import Lyrics from '../components/Lyrics'
import { Youtube, Music, FileText, Wrench } from 'lucide-react'

const MySongs: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-3">
          UTS-2 My Songs for You
        </h1>
        <p className="text-lg md:text-xl text-slate-600">
          Better Steps - A Musical Reflection
        </p>
      </div>

      {/* Song Header */}
      <div className="text-center">
  <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-2">
          <Music className="w-6 h-6 text-indigo-600" />
          Better Steps — Lagu & Video
        </h2>
      </div>

      {/* Video note removed per request */}

      {/* About the Work */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <FileText className="w-6 h-6 text-indigo-600 mr-2" />
          Tentang Karya
        </h3>
        
      <div className="glass-effect rounded-xl p-4 mb-3">
          <p className="text-lg leading-relaxed">
            "Better Steps" saya buat sebagai refleksi perjalanan pribadi menuju langkah yang lebih baik dalam belajar, bekerja, dan berelasi. Lagu ini bercerita tentang proses bertumbuh: mengakui rasa takut, menata pikiran, lalu bergerak pelan tetapi pasti. Pesan utamanya sederhana: kita bisa memilih kata dan tindakan yang membangun pengertian bersama, mulai dari diri sendiri.
          </p>
        </div>

  <div className="highlight-box rounded-xl p-4 mb-4">
          <p className="text-lg leading-relaxed mb-4">
            Karya ini selaras dengan pembelajaran di mata kuliah <strong>Komunikasi Interpersonal & Publik</strong>, di mana saya belajar bahwa:
          </p>
          <ol className="space-y-2 text-lg leading-relaxed">
            <li>1. <strong>Self-talk yang sehat</strong> membantu menenangkan diri dan menjaga fokus</li>
            <li>2. <strong>Pengecekan persepsi</strong> menghindarkan salah paham dan membuat dialog lebih produktif</li>
            <li>3. <strong>Model transaksional</strong> mengingatkan bahwa komunikasi adalah pertukaran dua arah yang adaptif</li>
            <li>4. <strong>Prediksi yang memenuhi diri</strong> (visualisasi positif) mendorong kita konsisten melangkah</li>
          </ol>
        </div>

  <div className="glass-effect rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Wrench className="w-5 h-5 text-indigo-600 mr-2" />
            Proses Kreatif
          </h3>
          <p className="text-lg leading-relaxed">
            Secara teknis, <strong>lagu dibuat dengan Suno.ai</strong> berdasarkan lirik yang saya tulis, dan <strong>video dibuat dengan Veo 3 (Google Gemini)</strong> untuk memperkuat narasi visual. Fokus saya bukan pada teknologinya, melainkan pada pesan yang ingin disampaikan: menjaga harapan, mengambil langkah kecil yang konsisten, dan bertumbuh bersama orang-orang di sekitar.
          </p>
        </div>

        {/* Video thumbnail card — opens modal */}
  <div className="flex justify-center mb-6">
          <div className="max-w-3xl w-full">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="w-full text-left flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              aria-label="Buka video Better Steps di modal"
            >
              <div className="relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="https://img.youtube.com/vi/8LhuFTK2nAU/hqdefault.jpg"
                  alt="Thumbnail Better Steps"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white">
                    <Youtube className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-semibold flex items-center gap-2"><Youtube className="w-5 h-5 text-red-600" /> Link Video Langsung</h4>
                <p className="text-slate-600">Tonton di YouTube — buka video dalam modal.</p>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium">Putar di modal</span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* DaisyUI modal (controlled) */}
        <input type="checkbox" id="video-modal" className="modal-toggle" checked={open} onChange={() => setOpen(!open)} />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-4xl p-0 overflow-hidden">
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
              <button className="btn" onClick={() => setOpen(false)}>Tutup</button>
              <a href="https://youtu.be/8LhuFTK2nAU" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Buka di YouTube</a>
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
