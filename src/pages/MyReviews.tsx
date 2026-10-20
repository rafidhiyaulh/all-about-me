import React from 'react'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'

const peerAssessments = [
  {
    name: 'Mineva Azzahra',
    nim: '18224029',
    summary: 'Skor rata-rata 4/5 untuk seluruh rubrik UTS maupun UAS dengan konsistensi antar kriteria.',
    highlights: [
      'UTS 1–5: setiap indikator (orisinalitas, keterlibatan, humor/inspirasi, wawasan) mendapatkan skor 4.',
      'UAS 1–4: seluruh aspek (kejelasan, logika, validitas, kegunaan, hingga dampak) stabil di skor 4.',
    ],
  },
  {
    name: 'Salma Az Zahra',
    nim: '18224015',
    summary: 'Performa merata di seluruh penilaian; semua kriteria memperoleh skor 4/5 tanpa ada deviasi.',
    highlights: [
      'UTS 1–5: mendapatkan skor 4 pada tiap indikator, menunjukkan konsistensi kualitas karya.',
      'UAS 1–4: setiap aspek penilaian presentasi dan proposal tercatat stabil pada skor 4.',
    ],
  },
  {
    name: 'Aldyto Rafif Abhinaya',
    nim: '18224043',
    summary: 'Mempertahankan skor 4/5 di semua rubrik; menunjukkan kualitas yang solid dan terkontrol.',
    highlights: [
      'UTS 1–5: seluruh kriteria memperoleh skor 4, menandakan pemahaman materi yang seragam.',
      'UAS 1–4: indikator konten, organisasi, penyajian, keterlibatan, dan dampak berada pada skor 4.',
    ],
  },
]

const scoreCards = [
  {
    id: 'UTS-1',
    title: 'UTS-1: All About Me',
    accent: 'var(--brand)',
    criteria: 'Orisinalitas 5, Keterlibatan 5, Humor 5, Wawasan/Insight 5',
    total: 'Total 20/20 (100%)',
    reason: 'Reflektif, otentik, dan menarik secara emosional. Bahasa naratif alami dengan insight kuat dan humor lembut.',
    suggestion: 'Tambahkan kutipan kecil atau motto pribadi untuk memperkuat penutup dan meninggalkan kesan.',
  },
  {
    id: 'UTS-2',
    title: 'UTS-2: My Songs for You',
    accent: 'var(--teal)',
    criteria: 'Orisinalitas 5, Keterlibatan 5, Humor 5, Inspirasi 5',
    total: 'Total 20/20 (100%)',
    reason: 'Lagu "Better Steps" menggabungkan pesan personal dan refleksi akademik dengan sangat harmonis. Emosi dan visual saling memperkuat.',
    suggestion: 'Sertakan 1–2 kalimat tentang siapa penerima pesan lagu untuk memperjelas relasi interpersonalnya.',
  },
  {
    id: 'UTS-3',
    title: 'UTS-3: My Stories for You',
    accent: 'var(--purple)',
    criteria: 'Orisinalitas 5, Keterlibatan 5, Keautentikan 5, Inspirasi 5',
    total: 'Total 20/20 (100%)',
    reason: 'Cerita kuat, imersif, dan reflektif dengan nilai-nilai interpersonal yang menyentuh (keheningan, empati, dan komunikasi jujur).',
    suggestion: 'Tambahkan epilog reflektif singkat yang mengikat tiga cerita sebagai satu kesatuan nilai.',
  },
  {
    id: 'UTS-4',
    title: 'UTS-4: My SHAPE',
    accent: 'var(--yellow)',
    criteria: 'Orisinalitas 5, Keterlibatan 5, Keautentikan 5, Inspirasi 5',
    total: 'Total 20/20 (100%)',
    reason: 'Isi lengkap dan menggambarkan pemahaman diri yang kuat berdasarkan refleksi SHAPE. Gaya narasi profesional dan hangat.',
    suggestion: 'Tambahkan visualisasi sederhana (diagram atau mindmap SHAPE) untuk memperkuat aspek presentasi.',
  },
  {
    id: 'UTS-5',
    title: 'UTS-5: My Personal Reviews',
    accent: 'var(--red)',
    criteria: 'Pemahaman Konsep 5, Analisis Kritis 5, Argumentasi (Logos) 5, Etos & Empati 5, Rekomendasi 5',
    total: 'Total 25/25 (100%)',
    reason: 'Menunjukkan pemahaman utuh terhadap rubrik dan proses refleksi diri. Pendekatan sistematis dengan etika penilaian yang seimbang.',
    suggestion: 'Tambahkan contoh personal review 1 karya (±500 kata) untuk mendemonstrasikan penerapan analisis interpersonal secara penuh.',
  },
]

const recap = [
  { title: 'UTS-1', score: '20/20 → 100%' },
  { title: 'UTS-2', score: '20/20 → 100%' },
  { title: 'UTS-3', score: '20/20 → 100%' },
  { title: 'UTS-4', score: '20/20 → 100%' },
  { title: 'UTS-5', score: '25/25 → 100%' },
]

const MyReviews: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6 text-center">
        <HyperText as="h1" className="mb-2">
          UTS-5 My Personal Reviews
        </HyperText>
      </div>

      <div className="card p-5">
        <p className="mb-5 leading-relaxed" style={{ color: 'var(--ink2)' }}>
          Berikut cara saya melakukan review: menggunakan{' '}
          <Highlighter>ChatGPT</Highlighter> untuk merefleksikan tiap tugas.
        </p>
        <p className="mb-5 leading-relaxed" style={{ color: 'var(--ink2)' }}>
          Saya mengattach{' '}
          <a
            href={`${import.meta.env.BASE_URL}skor_uts.pdf`}
            className="font-semibold underline"
            style={{ color: 'var(--brand-fill)' }}
          >
            file prompt ChatGPT
          </a>
          , disertai perintah:
        </p>
        <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink2)' }}>
          Perintah yang digunakan: self-assess UTS-1 sampai UTS-5 berdasarkan isi situs yang saya sediakan (portofolio pribadi).
        </p>
        <p className="mb-5 leading-relaxed" style={{ color: 'var(--ink2)' }}>
          ChatGPT melakukan self-assessment UTS-1 s.d. UTS-5 langsung dari laman yang saya berikan dan menilai memakai rubrik tugas UTS (skala 1–5 per kriteria).
        </p>
        <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
          Rekap skor siap diunduh sebagai CSV:{' '}
          <a
            href="https://drive.google.com/uc?export=download&id=1fJRUrdkOUJS1mt4UZqIUlTqOd12ZWHoE"
            className="font-semibold underline"
            style={{ color: 'var(--brand-fill)' }}
          >
            Download CSV ringkasan (Google Drive)
          </a>
        </p>
      </div>

      <div className="card p-5">
        <h2 className="section-title mb-4"><span className="bar" />Hasil Self-Assessment UTS</h2>

        <div className="mb-6">
          <h3 className="eyebrow mb-2">Identifikasi</h3>
          <ul className="space-y-2 text-base" style={{ color: 'var(--ink2)' }}>
            <li>
              <strong style={{ color: 'var(--ink)' }}>Nama &amp; NIM penulis:</strong> <strong style={{ color: 'var(--ink)' }}>Muhammad Rafi Dhiyaulhaq – 18222069</strong> (tertera di halaman depan portofolio).
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>Penilai:</strong> <strong style={{ color: 'var(--ink)' }}>Self-assessment (Muhammad Rafi Dhiyaulhaq)</strong>
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>Catatan cakupan:</strong> Halaman beranda memuat "UTS-1 All About Me"; navigasi ke "My Songs for You", "My Stories for You", "My SHAPE", dan "My Personal Reviews" tersedia.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="eyebrow mb-2">Tinjauan Umum</h3>
          <ul className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--ink2)' }}>
            <li>
              <strong style={{ color: 'var(--ink)' }}>UTS-1 (All About Me)</strong> berisi narasi reflektif dan otentik tentang diri, dengan keseimbangan antara logika dan empati. Humor ringan ditambahkan untuk memperkuat daya tarik interpersonal.
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>UTS-2 (My Songs for You)</strong> menampilkan lagu dan video "Better Steps" lengkap dengan lirik serta makna reflektifnya. Karya ini menunjukkan penggunaan AI yang bijak dan human-centered.
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>UTS-3 (My Stories for You)</strong> berisi tiga kisah inspiratif ("Secangkir Keheningan", "Senja di Rumah Kakek", dan "Malam di Depan Kampus") dengan nilai komunikasi yang mendalam.
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>UTS-4 (My SHAPE)</strong> menampilkan hasil refleksi dari Piagam Diri dan Identitas Naratif berdasarkan asesmen VIA dan lembar kerja SHAPE.
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>UTS-5 (My Personal Reviews)</strong> berisi metode dan dokumentasi proses <em>self-assessment</em> menggunakan ChatGPT; akan diperluas dengan analisis kritis pada versi final.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="eyebrow mb-2">Tinjauan Spesifik + Skor (1–5)</h3>

          {scoreCards.map((card) => (
            <div key={card.id} className="card p-5" style={{ borderTop: `3px solid ${card.accent}` }}>
              <h4 className="mb-3 text-lg font-bold" style={{ color: 'var(--ink)' }}>{card.title}</h4>
              <p className="mb-3" style={{ color: 'var(--ink2)' }}>
                <strong style={{ color: 'var(--ink)' }}>Skor per kriteria:</strong> {card.criteria} → <strong style={{ color: 'var(--ink)' }}>{card.total}</strong>
              </p>
              <p className="mb-3" style={{ color: 'var(--ink2)' }}>
                <strong style={{ color: 'var(--ink)' }}>Alasan singkat:</strong> {card.reason}
              </p>
              <p style={{ color: 'var(--ink2)' }}>
                <strong style={{ color: 'var(--ink)' }}>Saran perbaikan:</strong> {card.suggestion}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="eyebrow mb-3">Rekap Skor (ringkas)</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {recap.map((item) => (
              <div key={item.title} className="card p-4" style={{ borderTop: '3px solid var(--brand)' }}>
                <div className="eyebrow">{item.title}</div>
                <div className="mono mt-1 text-2xl font-bold" style={{ color: 'var(--ink)' }}>
                  {item.score}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="accent-panel mt-8">
          <h3 className="section-title mb-4"><span className="bar" style={{ background: 'var(--teal)' }} />Langkah Perbaikan Cepat (prioritas 1 minggu)</h3>
          <ol className="space-y-2 text-base leading-relaxed" style={{ color: 'var(--ink2)' }}>
            <li>1. Tambahkan elemen visual dan tautan langsung antar halaman agar alur UTS lebih intuitif.</li>
            <li>2. Lengkapi halaman ini dengan contoh <em>review personal</em> mendalam terhadap satu karya (UTS-1/UTS-3).</li>
            <li>3. Revisi minor desain untuk memastikan keseragaman warna dan navigasi sebelum UAS.</li>
          </ol>
        </div>

        <div className="card mt-10 p-6">
          <h3 className="section-title"><span className="bar" />Penugasan Peer 1, Peer 2 dan Peer 3</h3>
          <p className="mt-3 leading-relaxed" style={{ color: 'var(--ink2)' }}>
            Ringkasan penilaian rekan dapat diunduh langsung dalam format Excel:{' '}
            <a
              href="https://docs.google.com/spreadsheets/d/1XgGsCfGB5NZRKMIEAVUmx-JLiJVh8ZI1/export?format=xlsx"
              className="font-semibold underline"
              style={{ color: 'var(--brand-fill)' }}
            >
              Unduh penilaian peer (XLSX)
            </a>
            .
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {peerAssessments.map((peer) => (
              <div key={peer.nim} className="card flex h-full flex-col p-4">
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <h4 className="font-semibold" style={{ color: 'var(--ink)' }}>{peer.name}</h4>
                  <span className="mono text-xs" style={{ color: 'var(--muted)' }}>{peer.nim}</span>
                </div>
                <p className="mb-3 text-sm" style={{ color: 'var(--ink2)' }}>{peer.summary}</p>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed" style={{ color: 'var(--ink2)' }}>
                  {peer.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="nav-dot mt-1.5" style={{ background: 'var(--brand)' }} aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyReviews
