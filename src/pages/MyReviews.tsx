import React from 'react'

const MyReviews: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Section */}
  <div className="text-center mb-6">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-2">
          UTS-5 My Personal Reviews
        </h1>
      </div>

      {/* Introduction */}
  <div className="glass-effect rounded-xl p-4 mb-4">
        <p className="text-lg leading-relaxed mb-6">
          Berikut cara saya melakukan review: menggunakan ChatGPT.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Saya mengattach <a href="/skor_uts.pdf" className="text-blue-600 hover:text-blue-800 underline">file prompt ChatGPT</a>, disertai perintah:
        </p>
        <p className="text-lg leading-relaxed mb-4">Perintah yang digunakan: self-assess UTS-1 sampai UTS-5 berdasarkan isi situs yang saya sediakan (portofolio pribadi).</p>
        <p className="text-lg leading-relaxed mb-6">
          ChatGPT melakukan self-assessment UTS-1 s.d. UTS-5 langsung dari laman yang saya berikan dan menilai memakai rubrik tugas UTS (skala 1–5 per kriteria).
        </p>
        <p className="text-lg leading-relaxed">
          Rekap skor siap diunduh sebagai CSV: <a href="https://drive.google.com/uc?export=download&id=1fJRUrdkOUJS1mt4UZqIUlTqOd12ZWHoE" className="text-blue-600 hover:text-blue-800 underline font-semibold">Download CSV ringkasan (Google Drive)</a>
        </p>
      </div>

      {/* Assessment Results */}
      <div className="glass-effect rounded-xl p-4 mb-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Hasil Self-Assessment UTS
        </h2>

        {/* Identification */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Identifikasi</h3>
          <ul className="space-y-2 text-lg">
            <li><strong>Nama & NIM penulis:</strong> <strong>Muhammad Rafi Dhiyaulhaq – 18222069</strong> (tertera di halaman depan portofolio).</li>
            <li><strong>Penilai:</strong> <strong>Self-assessment (Muhammad Rafi Dhiyaulhaq)</strong></li>
            <li><strong>Catatan cakupan:</strong> Halaman beranda memuat "UTS-1 All About Me"; navigasi ke "My Songs for You", "My Stories for You", "My SHAPE", dan "My Personal Reviews" tersedia.</li>
          </ul>
        </div>

        {/* General Overview */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Tinjauan Umum</h3>
          <ul className="space-y-4 text-lg leading-relaxed">
            <li><strong>UTS-1 (All About Me)</strong> berisi narasi reflektif dan otentik tentang diri, dengan keseimbangan antara logika dan empati. Humor ringan ditambahkan untuk memperkuat daya tarik interpersonal.</li>
            <li><strong>UTS-2 (My Songs for You)</strong> menampilkan lagu dan video "Better Steps" lengkap dengan lirik serta makna reflektifnya. Karya ini menunjukkan penggunaan AI yang bijak dan human-centered.</li>
            <li><strong>UTS-3 (My Stories for You)</strong> berisi tiga kisah inspiratif ("Secangkir Keheningan", "Senja di Rumah Kakek", dan "Malam di Depan Kampus") dengan nilai komunikasi yang mendalam.</li>
            <li><strong>UTS-4 (My SHAPE)</strong> menampilkan hasil refleksi dari Piagam Diri dan Identitas Naratif berdasarkan asesmen VIA dan lembar kerja SHAPE.</li>
            <li><strong>UTS-5 (My Personal Reviews)</strong> berisi metode dan dokumentasi proses <em>self-assessment</em> menggunakan ChatGPT; akan diperluas dengan analisis kritis pada versi final.</li>
          </ul>
        </div>

        {/* Specific Reviews */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Tinjauan Spesifik + Skor (1–5)</h3>

          {/* UTS-1 */}
          <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
            <h4 className="text-xl font-semibold mb-3">UTS-1 — All About Me</h4>
            <p className="mb-3"><strong>Skor per kriteria:</strong> Orisinalitas <strong>5</strong>, Keterlibatan <strong>5</strong>, Humor <strong>5</strong>, Wawasan/Insight <strong>5</strong> → <strong>Total 20/20 (100%)</strong></p>
            <p className="mb-3"><strong>Alasan singkat:</strong> Reflektif, otentik, dan menarik secara emosional. Bahasa naratif alami dengan insight kuat dan humor lembut.</p>
            <p><strong>Saran perbaikan:</strong> Tambahkan kutipan kecil atau motto pribadi untuk memperkuat penutup dan meninggalkan kesan.</p>
          </div>

          {/* UTS-2 */}
          <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
            <h4 className="text-xl font-semibold mb-3">UTS-2 — My Songs for You</h4>
            <p className="mb-3"><strong>Skor per kriteria:</strong> Orisinalitas <strong>5</strong>, Keterlibatan <strong>5</strong>, Humor <strong>5</strong>, Inspirasi <strong>5</strong> → <strong>Total 20/20 (100%)</strong></p>
            <p className="mb-3"><strong>Alasan singkat:</strong> Lagu "Better Steps" menggabungkan pesan personal dan refleksi akademik dengan sangat harmonis. Emosi dan visual saling memperkuat.</p>
            <p><strong>Saran perbaikan:</strong> Sertakan 1–2 kalimat tentang siapa penerima pesan lagu untuk memperjelas relasi interpersonalnya.</p>
          </div>

          {/* UTS-3 */}
          <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
            <h4 className="text-xl font-semibold mb-3">UTS-3 — My Stories for You</h4>
            <p className="mb-3"><strong>Skor per kriteria:</strong> Orisinalitas <strong>5</strong>, Keterlibatan <strong>5</strong>, Keautentikan <strong>5</strong>, Inspirasi <strong>5</strong> → <strong>Total 20/20 (100%)</strong></p>
            <p className="mb-3"><strong>Alasan singkat:</strong> Cerita kuat, imersif, dan reflektif dengan nilai-nilai interpersonal yang menyentuh (keheningan, empati, dan komunikasi jujur).</p>
            <p><strong>Saran perbaikan:</strong> Tambahkan epilog reflektif singkat yang mengikat tiga cerita sebagai satu kesatuan nilai.</p>
          </div>

          {/* UTS-4 */}
          <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
            <h4 className="text-xl font-semibold mb-3">UTS-4 — My SHAPE</h4>
            <p className="mb-3"><strong>Skor per kriteria:</strong> Orisinalitas <strong>5</strong>, Keterlibatan <strong>5</strong>, Keautentikan <strong>5</strong>, Inspirasi <strong>5</strong> → <strong>Total 20/20 (100%)</strong></p>
            <p className="mb-3"><strong>Alasan singkat:</strong> Isi lengkap dan menggambarkan pemahaman diri yang kuat berdasarkan refleksi SHAPE. Gaya narasi profesional dan hangat.</p>
            <p><strong>Saran perbaikan:</strong> Tambahkan visualisasi sederhana (diagram atau mindmap SHAPE) untuk memperkuat aspek presentasi.</p>
          </div>

          {/* UTS-5 */}
          <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
            <h4 className="text-xl font-semibold mb-3">UTS-5 — My Personal Reviews</h4>
            <p className="mb-3"><strong>Skor per kriteria:</strong> Pemahaman Konsep <strong>5</strong>, Analisis Kritis <strong>5</strong>, Argumentasi (Logos) <strong>5</strong>, Etos & Empati <strong>5</strong>, Rekomendasi <strong>5</strong> → <strong>Total 25/25 (100%)</strong></p>
            <p className="mb-3"><strong>Alasan singkat:</strong> Menunjukkan pemahaman utuh terhadap rubrik dan proses refleksi diri. Pendekatan sistematis dengan etika penilaian yang seimbang.</p>
            <p><strong>Saran perbaikan:</strong> Tambahkan contoh <em>personal review</em> 1 karya (±500 kata) untuk mendemonstrasikan penerapan analisis interpersonal secara penuh.</p>
          </div>
        </div>

        {/* Score Summary */}
        <div className="mt-12 p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6">Rekap Skor (ringkas)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-semibold">UTS-1:</div>
              <div className="text-2xl font-bold text-green-600">20/20 → 100%</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-semibold">UTS-2:</div>
              <div className="text-2xl font-bold text-green-600">20/20 → 100%</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-semibold">UTS-3:</div>
              <div className="text-2xl font-bold text-green-600">20/20 → 100%</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-semibold">UTS-4:</div>
              <div className="text-2xl font-bold text-green-600">20/20 → 100%</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-semibold">UTS-5:</div>
              <div className="text-2xl font-bold text-green-600">25/25 → 100%</div>
            </div>
          </div>
        </div>

        {/* Improvement Steps */}
        <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
          <h3 className="text-2xl font-semibold mb-4">Langkah Perbaikan Cepat (prioritas 1 minggu)</h3>
          <ol className="space-y-2 text-lg leading-relaxed">
            <li>1. Tambahkan elemen visual dan tautan langsung antar halaman agar alur UTS lebih intuitif.</li>
            <li>2. Lengkapi halaman ini dengan contoh <em>review personal</em> mendalam terhadap satu karya (UTS-1/UTS-3).</li>
            <li>3. Revisi minor desain untuk memastikan keseragaman warna dan navigasi sebelum UAS.</li>
          </ol>
          <p className="mt-4 text-gray-600 italic">
            (Link masing-masing halaman UTS menyusul setelah struktur situs final diperbarui.)
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyReviews
