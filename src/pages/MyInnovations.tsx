import React from 'react'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'

const MyInnovations: React.FC = () => {
  return (
    <div className="space-y-6 text-neutral-800">
      <div className="mb-4 text-center">
        <HyperText as="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
          UAS-3 My Innovations
        </HyperText>
        <p className="text-lg sm:text-xl leading-relaxed text-neutral-700">
          Desain layanan yang membangun kapasitas dan efektivitas komunikasi KIPP: sebuah cara praktis agar ide, emosi,
          dan keputusan antar tim bergerak jernih tanpa menekan sisi manusiawinya.
        </p>
      </div>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed">
        <p>
          Ide ini muncul waktu kami hampir kehabisan sabar karena rapat berakhir dengan “siapa yang paling benar”.
          Aku ingin ada ruang yang mengajak kita kembali ke niat awal: memahami, bukan menang. Dari situ lahir
          <Highlighter color="#a1a1aa">ClearPath Studio</Highlighter>—bukan aplikasi canggih, tapi cara sederhana
          memetakan friksi, memilih intervensi yang manusiawi, dan melihat dampaknya tanpa drama.
        </p>
        <p>
          Kanvasnya cuma tiga bagian: friksi yang dirasakan (otonomi vs koneksi, keterbukaan vs menjaga ruang),
          intervensi yang disepakati (jadwal kejutan kecil untuk kebaruan, aturan berbagi yang aman), dan dampak yang
          ingin dirasakan (iklim konfirmasi, kejelasan ekspektasi). Setiap langkah ditulis dengan kalimat sehari-hari
          “apa, kenapa, untuk siapa”, supaya semua merasa diajak, bukan diarahkan.
        </p>
        <p>
          Materi KIPP masuk alami di sini: Knapp (tahap hubungan datang–pergi seperti initiating sampai terminating)
          untuk memahami posisi relasi tim, dialektika relasional sebagai pengingat bahwa tarik-ulur itu normal, dan
          gaya ekspresif vs instrumental supaya kita tahu kapan harus mendengar, kapan memberi solusi. Ritme rapatnya
          pun ringan: buka dengan peta harapan, selipkan jeda “paraphrase check”, tutup dengan visualisasi positif.
          Mulainya bisa dari template Docs/Notion; kalau laris, baru dipoles jadi web ringan.
        </p>
        <p>
          Nilai gunanya terasa ke semua pihak: anggota tim aman mengutarakan gaya bicara; fasilitator punya narasi
          untuk mem-frame konflik sebagai energi, bukan ancaman; pemimpin bisa mencatat “apa yang berubah minggu ini”
          tanpa spreadsheet rumit. Efek ke CPMK KIPP jelas: latihan merancang pesan yang jernih, mengelola ketegangan
          dialektis, dan memberi umpan balik konfirmatif dalam situasi nyata.
        </p>
        <p>
          Kalau harus mulai besok, aku ajak satu kelompok kecil: 30 menit memetakan friksi paling terasa, 20 menit
          memilih intervensi ringan yang disetujui, 10 menit menulis narasi “apa-mengapa” untuk dibagikan di grup.
          Seminggu kemudian kami cek apa yang lebih jernih. Dari kebiasaan kecil itu, ClearPath Studio tumbuh sebagai
          layanan yang menjaga komunikasi tetap hangat, terukur, dan bernyawa.
        </p>
      </div>
    </div>
  )
}

export default MyInnovations
