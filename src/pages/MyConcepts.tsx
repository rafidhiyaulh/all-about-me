import React from 'react'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'

const friksiSrc = `${import.meta.env.BASE_URL}images/friksi.png`

const MyConcepts: React.FC = () => {
  return (
    <div className="space-y-8 text-neutral-800">
      <div className="mb-4 text-center">
        <HyperText as="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
          UAS-1 My Concepts
        </HyperText>
        <p className="text-lg sm:text-xl leading-relaxed text-neutral-700">
          Berisikan penjelasan fenomena <Highlighter color="#a1a1aa">“echo kindness”</Highlighter> di lingkungan kerja dan belajar:
          satu aksi empati yang rapi menular, memperbaiki alur, dan membangun kepercayaan lintas tim.
        </p>
      </div>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed">
        <p>
          Aku pertama kali merasakan efek <Highlighter color="#a1a1aa">“echo kindness”</Highlighter> saat membantu tim Cloud di Telkomsel.
          Satu permintaan sederhana: rapikan alur permintaan yang sering tersendat. Kami bikin dua asisten kecil yang otomatis mengatur
          jalur permintaan. Begitu antrean jadi rapi, tim lain ikut memperbaiki cara kerja mereka. Ternyata satu kebaikan kecil—mengurangi
          friksi—memantul jadi kebiasaan baru lintas tim.
        </p>
        <p>
          Di ITB Career Center, aku diminta membaca data lulusan. Bukan sekadar grafik; aku ingin tahu cerita di balik angka. Saat aku tunjukkan
          rute pekerjaan yang realistis untuk mahasiswa, mereka merasa didengar dan lebih percaya diri. Presentasinya jadi bukan soal metrik,
          tapi tentang “ini langkahmu berikutnya.” Lagi-lagi, kejelasan kecil memicu respons positif berantai.
        </p>
        <p>
          Di XL Smart, aku belajar bahwa sinyal stabil lahir dari respon cepat. Ketika aku mengubah data jaringan yang rumit menjadi cerita
          sederhana—mana area yang butuh perhatian, apa artinya buat pelanggan—tim lapangan merasa didukung, bukan dihakimi. Mereka bergerak
          lebih cepat karena tahu keputusan mereka dimengerti.
        </p>
        <p>
          Puncaknya, Simutrade. Kami ingin UKM berani memilih mitra dagang yang sejalan dengan nilai keberlanjutan. Kami tampilkan informasi
          yang transparan, mudah dibaca, dan jujur. Begitu satu UKM bercerita bahwa mereka terbantu, UKM lain ikut mencoba. Kebaikan menular
          karena bukti dan cerita berjalan bersama.
        </p>
        <p>
          Benang merahnya: empati yang ditata rapi. Aku tidak hanya “berbaik hati”, tapi memastikan orang lain punya peta yang jelas: apa
          masalahnya, apa pilihannya, dan apa dampaknya. Teori reciprocity dan social proof terasa nyata: saat kita memudahkan orang
          mengambil keputusan baik, mereka memantulkan kebaikan itu ke sekeliling.
        </p>

        <p className="font-semibold text-neutral-900">
          Pelajaran yang aku pegang:
        </p>
        <p>
          Kejelasan berarti membuka dengan “apa yang berubah” dan “kenapa penting” dalam kalimat sederhana. Alurnya kuceritakan sebagai
          sebab, langkah, lalu akibat—seperti cerita pendek yang mudah diikuti. Bukti cukup satu-dua contoh nyata: waktu tunggu berkurang,
          keputusan jadi lebih mantap, tim lebih percaya diri. Manfaatnya selalu kututup dengan ajakan praktis: jika melihat tanda tertentu,
          coba satu langkah, lalu rasakan hasilnya.
        </p>

        <p className="font-semibold text-neutral-900">
          Langkah kecil yang bisa kupakai lagi:
        </p>
        <p>
          Cari friksi paling terasa oleh orang, bukan yang paling canggih. Tunjukkan perbedaannya dengan visual sederhana dan kata-kata
          sehari-hari. Tulis panduan ringkas supaya tim lain bisa ikut mencoba. Bagikan hasilnya sebagai cerita pendek agar mudah diulang.
          Dengan cara ini, pengalaman dari Telkomsel, ITB Career Center, XL Smart, dan Simutrade menyatu: keputusan baik yang sederhana,
          disampaikan dengan jelas, dapat memicu rantai kebaikan yang panjang.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white/90 p-4 shadow-sm">
        <img
          src={friksiSrc}
          alt="Diagram alur friksi menuju intervensi dan dampak"
          className="w-full rounded-xl border border-neutral-200 bg-white object-contain"
        />
        <p className="mt-3 text-base text-neutral-700 text-center">
          Alur besar: friksi dipetakan, intervensi sederhana diterapkan, dampak memantul dan menular ke tim lain.
        </p>
      </div>
    </div>
  )
}

export default MyConcepts
