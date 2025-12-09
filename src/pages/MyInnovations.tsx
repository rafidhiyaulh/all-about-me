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
          Inovasi nilai untuk “My Masterpiece”: sistem AI yang membangun kapasitas dan efektivitas komunikasi melawan kemiskinan global.
        </p>
      </div>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed">
        <p>
          “Inovasi nilai” bagiku berarti mencipta manfaat nyata, bukan sekadar fitur. Aku pinjam filosofi VALORAIZE: fokus pada nilai
          luhur dan penciptaan nilai bersama. Masalahnya: kemiskinan ekstrem. Masterpiece-ku: platform AI yang memadukan data kemiskinan,
          rekomendasi bantuan, dan pasar pengetahuan agar orang bukan hanya menerima, tapi ikut mencipta solusi.
        </p>
        <p>
          Mekanismenya kupinjam dari “knowledge marketplace”: dosen atau fasilitator berperan sebagai <Highlighter color="#a1a1aa">pencipta
          kebutuhan</Highlighter> (need creators) yang mengumumkan tantangan—misal pemetaan wilayah rawan putus sekolah. Mahasiswa,
          komunitas, atau mitra jadi <Highlighter color="#a1a1aa">pencipta nilai</Highlighter> (value creators) yang menyetor artefak:
          peta pengetahuan, prototipe sistem rujukan bantuan, atau model prediksi drop-out yang etis.
        </p>
        <p>
          Setiap artefak harus punya nilai nyata: bisa dipakai pemerintah daerah, LSM, atau warga. Yang “dibeli” (dipilih) diunggah
          ke website sebagai sumber belajar dan diperbaiki iteratif. Inilah inovasi nilai: tidak berhenti di teori, tapi menghasilkan
          produk pengetahuan yang dipakai ulang.
        </p>
        <p>
          Aku membayangkannya seperti pasar yang hidup: kebutuhan dipajang, karya pengetahuan dipertukarkan, dan rasa “menciptakan nilai”
          hadir pada semua pihak. AI di sini membantu kurasi (akurasi, bias) dan personalisasi, tapi nilai lahir dari kolaborasi manusia.
        </p>
        <div className="space-y-2">
          <p>Langkah awal yang kubayangkan:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Rilis tantangan nyata (contoh: identifikasi keluarga rentan putus sekolah di satu kecamatan).</li>
            <li>Buka submissions artefak.</li>
            <li>Kurasi bersama warga dan ahli etika AI.</li>
            <li>Pilih karya terbaik, dokumentasikan, dan terapkan di lapangan.</li>
            <li>Ukur dampak: berapa keluarga terbantu, apakah bias menurun.</li>
          </ol>
          <p>
            Dengan alur ini, inovasi nilai jadi sistem yang membangun kapasitas komunikasi dan tindakan, bukan sekadar demo teknologi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyInnovations
