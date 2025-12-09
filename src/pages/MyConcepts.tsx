import React from 'react'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'

const MyConcepts: React.FC = () => {
  return (
    <div className="space-y-8 text-neutral-800">
      <div className="mb-4 text-center">
        <HyperText as="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
          UAS-1 My Concepts
        </HyperText>
        <p className="text-lg sm:text-xl leading-relaxed text-neutral-700">
          My Masterpiece: Penerapan Sistem dan Teknologi Informasi di era AI untuk masalah kemiskinan global.
        </p>
      </div>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed">
        <p>
          Aku memulai dari konsep paling dasar: <Highlighter color="#a1a1aa">kemiskinan global</Highlighter>—700 juta orang hidup di
          bawah USD 2,15 per hari, artinya hampir satu dari dua puluh manusia kekurangan pangan, air bersih, rumah, pendidikan, dan
          layanan kesehatan. Data Bank Dunia 2024 dan laporan PBB menunjukkan pandemi dan krisis ekonomi sempat memundurkan tren.
          Dari sini aku butuh “mesin abstrak” untuk menggerakkan solusi.
        </p>
        <p>
          Konsep, menurut kerangka yang kupakai, adalah <Highlighter color="#a1a1aa">logika mesin abstrak</Highlighter> yang
          mengumpulkan kekuatan untuk mengangkat beban masalah. Ia seperti induk pohon yang melahirkan buah ide praktis. Tanpa konsep,
          ide tercecer. Dengan konsep, jalur berpikir rapi.
        </p>
        <p>
          Aku memilih konsep inti: <Highlighter color="#a1a1aa">Platform AI untuk inklusi</Highlighter>. Mesin abstraknya: kumpulkan
          data kemiskinan, pendidikan, kesehatan; arahkan kekuatan AI untuk memetakan siapa yang paling rentan dan apa bantuan yang
          paling berdampak. Beban yang diangkat: lingkaran setan kemiskinan.
        </p>
        <p>
          Konsep itu memayungi anak-anak ide: pemetaan kelurahan rentan, model prediksi putus sekolah, rekomendasi bantuan yang
          dipersonalisasi, dan dasbor publik untuk akuntabilitas. Seperti persimpangan jalan, satu konsep membuka banyak jalur eksekusi.
        </p>
        <p>
          Pelajaran paling terasa: konsep harus cukup padat untuk dipahami, tapi cukup lentur untuk “membiakkan” ide. Ia bukan deskripsi
          lengkap, melainkan esensi. Begitu mesin abstrak terbentuk, ide-ide praktis lahir lebih mudah tanpa mengulang dari nol.
        </p>
        <p>
          Pada akhirnya aku memegang kompas sederhana: kenali dulu kekuatan yang bisa dihimpun dan beban yang mau diangkat,
          biarkan konsepnya melahirkan anak-anak ide yang sejalur, lalu coba di satu titik kecil—misalnya sebuah kelurahan
          rawan putus sekolah—sebelum meluas. Konsep yang hidup bukan slogan; ia adalah mesin abstrak yang diuji pelan-pelan
          sampai benar-benar menggerakkan AI untuk tujuan sosial.
        </p>
      </div>
    </div>
  )
}

export default MyConcepts
