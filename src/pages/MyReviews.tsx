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

const MyReviews: React.FC = () => {
  return (
    <div className="space-y-6 text-neutral-800">
      <div className="mb-6 text-center">
        <HyperText
          as="h1"
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2"
        >
          UTS-5 My Personal Reviews
        </HyperText>
      </div>

      <div className="glass-effect rounded-xl border border-neutral-200 p-4 mb-4">
        <p className="text-base leading-relaxed mb-6 sm:text-lg">
          Berikut cara saya melakukan review: menggunakan{' '}
          <Highlighter color="#d4d4d8">ChatGPT</Highlighter> untuk merefleksikan tiap tugas.
        </p>
        <p className="text-base leading-relaxed mb-6 sm:text-lg">
          Saya mengattach{' '}
          <a
            href={`${import.meta.env.BASE_URL}skor_uts.pdf`}
            className="font-semibold text-primary-700 underline hover:text-primary-600"
          >
            file prompt ChatGPT
          </a>
          , disertai perintah:
        </p>
        <p className="text-base leading-relaxed mb-4 sm:text-lg">
          Perintah yang digunakan: self-assess UTS-1 sampai UTS-5 berdasarkan isi situs yang saya sediakan (portofolio pribadi).
        </p>
        <p className="text-base leading-relaxed mb-6 sm:text-lg">
          ChatGPT melakukan self-assessment UTS-1 s.d. UTS-5 langsung dari laman yang saya berikan dan menilai memakai rubrik tugas UTS (skala 1–5 per kriteria).
        </p>
        <p className="text-base leading-relaxed sm:text-lg">
          Rekap skor siap diunduh sebagai CSV:{' '}
          <a
            href="https://drive.google.com/uc?export=download&id=1fJRUrdkOUJS1mt4UZqIUlTqOd12ZWHoE"
            className="font-semibold text-primary-700 underline hover:text-primary-600"
          >
            Download CSV ringkasan (Google Drive)
          </a>
        </p>
      </div>

      <div className="glass-effect rounded-xl border border-neutral-200 p-4 mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
          Hasil Self-Assessment UTS
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 sm:text-2xl text-neutral-900">Identifikasi</h3>
          <ul className="space-y-2 text-base sm:text-lg">
            <li>
              <strong>Nama &amp; NIM penulis:</strong> <strong>Muhammad Rafi Dhiyaulhaq – 18222069</strong> (tertera di halaman depan portofolio).
            </li>
            <li>
              <strong>Penilai:</strong> <strong>Self-assessment (Muhammad Rafi Dhiyaulhaq)</strong>
            </li>
            <li>
              <strong>Catatan cakupan:</strong> Halaman beranda memuat "UTS-1 All About Me"; navigasi ke "My Songs for You", "My Stories for You", "My SHAPE", dan "My Personal Reviews" tersedia.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 sm:text-2xl text-neutral-900">Tinjauan Umum</h3>
          <ul className="space-y-4 text-base leading-relaxed sm:text-lg">
            <li>
              <strong>UTS-1 (All About Me)</strong> berisi narasi reflektif dan otentik tentang diri, dengan keseimbangan antara logika dan empati. Humor ringan ditambahkan untuk memperkuat daya tarik interpersonal.
            </li>
            <li>
              <strong>UTS-2 (My Songs for You)</strong> menampilkan lagu dan video "Better Steps" lengkap dengan lirik serta makna reflektifnya. Karya ini menunjukkan penggunaan AI yang bijak dan human-centered.
            </li>
            <li>
              <strong>UTS-3 (My Stories for You)</strong> berisi tiga kisah inspiratif ("Secangkir Keheningan", "Senja di Rumah Kakek", dan "Malam di Depan Kampus") dengan nilai komunikasi yang mendalam.
            </li>
            <li>
              <strong>UTS-4 (My SHAPE)</strong> menampilkan hasil refleksi dari Piagam Diri dan Identitas Naratif berdasarkan asesmen VIA dan lembar kerja SHAPE.
            </li>
            <li>
              <strong>UTS-5 (My Personal Reviews)</strong> berisi metode dan dokumentasi proses <em>self-assessment</em> menggunakan ChatGPT; akan diperluas dengan analisis kritis pada versi final.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-semibold mb-6 sm:text-2xl text-neutral-900">Tinjauan Spesifik + Skor (1–5)</h3>

          <div className="rounded-r-xl border-l-4 border-primary-400 bg-primary-50 p-6 text-neutral-800">
            <h4 className="text-xl font-semibold mb-3 text-neutral-900">UTS-1 — All About Me</h4>
            <p className="mb-3">
              <strong>Skor per kriteria:</strong> Orisinalitas <strong>5</strong>, Keterlibatan <strong>5</strong>, Humor <strong>5</strong>, Wawasan/Insight <strong>5</strong> → <strong>Total 20/20 (100%)</strong>
            </p>
            <p className="mb-3">
              <strong>Alasan singkat:</strong> Reflektif, otentik, dan menarik secara emosional. Bahasa naratif alami dengan insight kuat dan humor lembut.
            </p>
            <p>
              <strong>Saran perbaikan:</strong> Tambahkan kutipan kecil atau motto pribadi untuk memperkuat penutup dan meninggalkan kesan.
            </p>
          </div>

          <div className="rounded-r-xl border-l-4 border-primary-400 bg-primary-100 p-6 text-neutral-800">
            <h4 className="text-xl font-semibold mb-3 text-neutral-900">UTS-2 — My Songs for You</h4>
            <p className="mb-3">
              <strong>Skor per kriteria:</strong> Orisinalitas <strong>5</strong>, Keterlibatan <strong>5</strong>, Humor <strong>5</strong>, Inspirasi <strong>5</strong> → <strong>Total 20/20 (100%)</strong>
            </p>
            <p className="mb-3">
              <strong>Alasan singkat:</strong> Lagu "Better Steps" menggabungkan pesan personal dan refleksi akademik dengan sangat harmonis. Emosi dan visual saling memperkuat.
            </p>
            <p>
              <strong>Saran perbaikan:</strong> Sertakan 1–2 kalimat tentang siapa penerima pesan lagu untuk memperjelas relasi interpersonalnya.
            </p>
          </div>

          <div className="rounded-r-xl border-l-4 border-primary-500 bg-primary-100 p-6 text-neutral-800">
            <h4 className="text-xl font-semibold mb-3 text-neutral-900">UTS-3 — My Stories for You</h4>
            <p className="mb-3">
              <strong>Skor per kriteria:</strong> Orisinalitas <strong>5</strong>, Keterlibatan <strong>5</strong>, Keautentikan <strong>5</strong>, Inspirasi <strong>5</strong> → <strong>Total 20/20 (100%)</strong>
            </p>
            <p className="mb-3">
              <strong>Alasan singkat:</strong> Cerita kuat, imersif, dan reflektif dengan nilai-nilai interpersonal yang menyentuh (keheningan, empati, dan komunikasi jujur).
            </p>
            <p>
              <strong>Saran perbaikan:</strong> Tambahkan epilog reflektif singkat yang mengikat tiga cerita sebagai satu kesatuan nilai.
            </p>
          </div>

          <div className="rounded-r-xl border-l-4 border-primary-600 bg-primary-100 p-6 text-neutral-800">
            <h4 className="text-xl font-semibold mb-3 text-neutral-900">UTS-4 — My SHAPE</h4>
            <p className="mb-3">
              <strong>Skor per kriteria:</strong> Orisinalitas <strong>5</strong>, Keterlibatan <strong>5</strong>, Keautentikan <strong>5</strong>, Inspirasi <strong>5</strong> → <strong>Total 20/20 (100%)</strong>
            </p>
            <p className="mb-3">
              <strong>Alasan singkat:</strong> Isi lengkap dan menggambarkan pemahaman diri yang kuat berdasarkan refleksi SHAPE. Gaya narasi profesional dan hangat.
            </p>
            <p>
              <strong>Saran perbaikan:</strong> Tambahkan visualisasi sederhana (diagram atau mindmap SHAPE) untuk memperkuat aspek presentasi.
            </p>
          </div>

          <div className="rounded-r-xl border-l-4 border-primary-700 bg-primary-200 p-6 text-neutral-800">
            <h4 className="text-xl font-semibold mb-3 text-neutral-900">UTS-5 — My Personal Reviews</h4>
            <p className="mb-3">
              <strong>Skor per kriteria:</strong> Pemahaman Konsep <strong>5</strong>, Analisis Kritis <strong>5</strong>, Argumentasi (Logos) <strong>5</strong>, Etos &amp; Empati <strong>5</strong>, Rekomendasi <strong>5</strong> → <strong>Total 25/25 (100%)</strong>
            </p>
            <p className="mb-3">
              <strong>Alasan singkat:</strong> Menunjukkan pemahaman utuh terhadap rubrik dan proses refleksi diri. Pendekatan sistematis dengan etika penilaian yang seimbang.
            </p>
            <p>
              <strong>Saran perbaikan:</strong> Tambahkan contoh <em>personal review</em> 1 karya (±500 kata) untuk mendemonstrasikan penerapan analisis interpersonal secara penuh.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 p-6">
          <h3 className="text-2xl font-semibold mb-6 text-neutral-900">Rekap Skor (ringkas)</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {['UTS-1', 'UTS-2', 'UTS-3', 'UTS-4', 'UTS-5'].map((title, index) => (
              <div key={title} className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="font-semibold text-neutral-700">{title}:</div>
                <div className="text-2xl font-bold text-neutral-900">
                  {index === 4 ? '25/25 → 100%' : '20/20 → 100%'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-r-xl border-l-4 border-neutral-400 bg-neutral-100 p-6">
          <h3 className="text-2xl font-semibold mb-4 text-neutral-900">Langkah Perbaikan Cepat (prioritas 1 minggu)</h3>
          <ol className="space-y-2 text-base leading-relaxed sm:text-lg">
            <li>1. Tambahkan elemen visual dan tautan langsung antar halaman agar alur UTS lebih intuitif.</li>
            <li>2. Lengkapi halaman ini dengan contoh <em>review personal</em> mendalam terhadap satu karya (UTS-1/UTS-3).</li>
            <li>3. Revisi minor desain untuk memastikan keseragaman warna dan navigasi sebelum UAS.</li>
          </ol>
        </div>

        <div className="mt-12 glass-effect rounded-xl border border-neutral-200 p-6">
          <h3 className="text-2xl font-semibold text-neutral-900">Penugasan Peer 1, Peer 2 dan Peer 3</h3>
          <p className="mt-3 text-base leading-relaxed text-neutral-700 sm:text-lg">
            Ringkasan penilaian rekan dapat diunduh langsung dalam format Excel:{' '}
            <a
              href="https://docs.google.com/spreadsheets/d/1XgGsCfGB5NZRKMIEAVUmx-JLiJVh8ZI1/export?format=xlsx"
              className="font-semibold text-primary-700 underline hover:text-primary-600"
            >
              Unduh penilaian peer (XLSX)
            </a>
            .
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {peerAssessments.map((peer) => (
              <div
                key={peer.nim}
                className="flex h-full flex-col rounded-lg border border-neutral-200 bg-white/80 p-4 shadow-sm backdrop-blur"
              >
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <h4 className="text-lg font-semibold text-neutral-900">{peer.name}</h4>
                  <span className="text-sm font-medium text-neutral-500">{peer.nim}</span>
                </div>
                <p className="mb-3 text-sm text-neutral-700">{peer.summary}</p>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed text-neutral-700">
                  {peer.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-2">
                      <span
                        className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"
                        aria-hidden="true"
                      />
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
