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
          Pengetahuan KIPP versi publik: kenapa hubungan terbentuk, bagaimana ia bergerak, dan cara merawatnya saat
          ketegangan muncul.
        </p>
      </div>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed">
        <p>
          Semua bermula dari pertanyaan sederhana: <Highlighter color="#a1a1aa">mengapa kita membentuk hubungan?</Highlighter>{' '}
          Jawabannya sering sesederhana rasa nyaman, kesamaan, atau hadiah kecil berupa dukungan. KIPP mengajarkan
          bahwa kedekatan lahir dari penampilan, kesamaan nilai, komplementaritas, ganjaran, kompetensi, kedekatan,
          dan keberanian berbagi diri.
        </p>
        <p>
          Lalu hubungan berjalan mengikuti <Highlighter color="#a1a1aa">peta Knapp</Highlighter>: tahap datang (initiating,
          experimenting, intensifying, integrating, bonding) dan pergi (differentiating, circumscribing, stagnating,
          avoiding, terminating). Peta ini mengingatkan kita bahwa jeda atau akhir juga fase normal, bukan tanda gagal.
        </p>
        <p>
          Di tengah perjalanan, ada <Highlighter color="#a1a1aa">tiga tarikan dialektis</Highlighter> yang selalu hadir:
          otonomi vs koneksi, keterbukaan vs menjaga ruang, prediktabilitas vs kebaruan. Kuncinya bukan menghapus
          ketegangan, tapi menari dengannya: kadang seimbang, kadang integrasi kreatif, kadang cukup mengakui ia ada.
        </p>
        <p>
          Ekspektasi dan kepuasan jadi bahan bakar. Saat harapan dan realita bertemu, hubungan terasa ringan; saat jauh
          berbeda, friksi muncul. Di sinilah komunikasi publik-friendly dibutuhkan: jelaskan harapan, dengarkan emosi,
          dan pakai kontras “apa adanya” vs “apa bisa jadi” untuk memantik aksi yang lebih baik.
        </p>
        <p>
          Buat saya, pengetahuan ini berguna karena praktis: gunakan pesan yang mengonfirmasi (aku mendengar, aku paham,
          aku dukung), hindari defensif, dan paraphrasing sebelum memberi solusi. Visualisasi positif sebelum percakapan
          sulit juga membantu menurunkan panas.
        </p>
        <p>
          Jika harus membaginya ke masyarakat: mulai dengan cerita sederhana tentang tarikan otonomi–koneksi, tunjukkan
          peta Knapp sebagai jalur datang–pergi, lalu berikan tiga alat kecil: jadwalkan ruang sendiri dan ruang bersama,
          sepakati batas cerita yang boleh dibagi, dan sisipkan kejutan kecil agar hubungan tetap segar. Pengetahuan
          KIPP jadi terasa dekat, bukan materi kelas yang kaku.
        </p>
      </div>
    </div>
  )
}

export default MyKnowledge
