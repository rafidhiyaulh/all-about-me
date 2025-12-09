import React from 'react'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'

const MyOpinions: React.FC = () => {
  return (
    <div className="space-y-6 text-neutral-800">
      <div className="mb-4 text-center">
        <HyperText as="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
          UAS-2 My Opinions
        </HyperText>
        <p className="text-lg sm:text-xl leading-relaxed text-neutral-700">
          Opini pribadi tentang kenapa keputusan yang jernih dan manusiawi adalah wujud empati—bukan sekadar hasil perhitungan.
        </p>
      </div>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed">
        <p>
          Pernah ada masa ketika keputusan diambil tanpa penjelasan yang jernih. Tim jadi bertanya-tanya, merasa dikendalikan, dan
          kepercayaannya turun. Saat aku ikut merapikan alur permintaan di Telkomsel, kami menata jalur kerja dengan dua asisten kecil
          dan menjelaskan <Highlighter color="#a1a1aa">apa yang berubah</Highlighter> dan <Highlighter color="#a1a1aa">kenapa penting</Highlighter>.
          Begitu transparan, ketegangan turun; orang merasa diajak, bukan disuruh.
        </p>
        <p>
          Di ITB Career Center, rute karier yang semula berupa tabel angka kubalik menjadi cerita singkat: ini pilihanmu, ini alasannya,
          ini langkah pertama yang masuk akal. Mahasiswa bilang mereka lebih tenang karena tahu arah. Informasi yang ramah manusia
          menurunkan “biaya emosi” dan membuat keberanian tumbuh.
        </p>
        <p>
          Simutrade menguatkan pandangan itu. UKM biasanya waswas memilih mitra dagang berkelanjutan. Ketika informasi disajikan jujur
          dan mudah dicerna, mereka merasa diperlakukan fair. Setelah satu UKM berbagi dampak baiknya, UKM lain ikut mencoba. Di situ
          aku melihat opini yang kukemukakan: <Highlighter color="#a1a1aa">data yang ramah manusia adalah bentuk empati</Highlighter>.
        </p>
        <p>
          Aku percaya keputusan yang menarik bukan hanya yang tepat, tetapi yang membuat orang merasa dihargai. Kita bisa memulai dengan
          satu kalimat “apa” dan satu kalimat “mengapa”, lalu tunjukkan bukti kecil yang bisa dipahami. Jika kita konsisten, keputusan
          itu bukan hanya meyakinkan, tapi juga menggerakkan emosi dan nalar.
        </p>
        <p>
          Jika aku diminta memberi ajakan: coba ubah satu laporanmu jadi cerita singkat. Katakan masalahnya apa, siapa yang terdampak,
          pilihan sederhana apa yang tersedia, dan makna praktisnya. Lihat bagaimana percakapan berubah: dari keraguan jadi rasa ingin tahu,
          dari pasif jadi partisipasi. Bagiku, itulah kekuatan opini yang memikat, informatif, meyakinkan, dan melibatkan.
        </p>
      </div>
    </div>
  )
}

export default MyOpinions
