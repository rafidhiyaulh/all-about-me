import React from 'react'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'

const MyKnowledge: React.FC = () => {
  return (
    <div className="space-y-6 text-neutral-800">
      <div className="mb-4 text-center">
        <HyperText as="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
          UAS-4 My Knowledge
        </HyperText>
        <p className="text-lg sm:text-xl leading-relaxed text-neutral-700">
          Pengetahuan yang kupakai untuk “My Masterpiece”: memetakan dan membagikan pembelajaran tentang AI & sistem informasi melawan kemiskinan global.
        </p>
      </div>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed">
        <p>
          Pengetahuan bagiku adalah deskripsi bahasa tentang realitas. Realitas yang kuhadapi: kemiskinan global—700 juta orang di
          bawah garis USD 2,15/hari. Untuk bergerak di era AI, pengetahuan harus terstruktur, bisa diajarkan, dan bisa dipakai
          memecahkan masalah sosial.
        </p>
        <p>
          Aku memetakan jenis pengetahuan: alam (data fisik, geospasial), sosial (pola kerentanan, budaya), dan aplikatif
          (jembatan manusia–teknologi). Ketiganya dibutuhkan untuk merancang AI yang adil: dari data valid hingga prosedur intervensi.
        </p>
        <p>
          Taksonomi Bloom kupakai sebagai tangga: mengingat definisi kemiskinan, memahami klasifikasi wilayah rentan, menerapkan
          model prediksi, menganalisis penyebab drop-out, menyintesis solusi bantuan, mengevaluasi bias, hingga mencipta alat baru.
          Level 1–7 jadi panduan kapan pengetahuan masih hafalan, kapan sudah siap jadi produk.
        </p>
        <p>
          Visualisasinya dua jenis peta: <Highlighter color="#a1a1aa">Peta Pengetahuan Primitif</Highlighter> untuk fakta dan definisi
          (apa itu garis kemiskinan, indikator kesehatan), dan <Highlighter color="#a1a1aa">Peta Pengetahuan Aplikatif</Highlighter>
          untuk proses (bagaimana menyalurkan bantuan, bagaimana mitigasi bias AI). Peta primitif menguji level 1–2; peta aplikatif
          menguji level 3–6.
        </p>
        <p>
          Produk pengetahuan yang ingin kulahirkan: peta primitif, peta pemecahan masalah, jurnal reflektif tentang etika AI,
          dan prototipe yang bisa dipakai warga/LSM/pemerintah. Ini bukan sekadar tugas kuliah, tapi blueprint yang membantu
          orang memanfaatkan teknologi untuk keluar dari lingkaran kemiskinan.
        </p>
        <p>
          Cerita ini untuk publik: pengetahuan bukan tumpukan istilah, tapi jalan yang memandu kita mengangkat beban sosial
          dengan sistem dan AI. Semakin jelas petanya, semakin banyak orang bisa ikut berjalan.
        </p>
      </div>
    </div>
  )
}

export default MyKnowledge
