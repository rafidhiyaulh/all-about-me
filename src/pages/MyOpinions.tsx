import React from 'react'
import HyperText from '../components/HyperText'

const MyOpinions: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-4 text-center">
        <HyperText as="h1" className="mb-3">
          UAS-2 My Opinions
        </HyperText>
        <p className="subtitle leading-relaxed" style={{ color: 'var(--muted)' }}>
          Opini tentang “My Masterpiece”: bagaimana AI dan sistem informasi bisa memutus rantai kemiskinan global.
        </p>
      </div>

      <div className="card space-y-4 p-6 text-base leading-relaxed" style={{ color: 'var(--ink2)' }}>
        <p>
          Opini, kata kerangka yang kupakai, adalah rebusan informasi, nilai, perasaan, dan pengalaman dalam budaya tertentu. Rebusan
          ini kental, kadang bias, tapi harus bisa diubah bila bahan baru datang. Pendapatku: AI untuk kemiskinan harus berangkat dari
          data keras (700 juta orang di bawah USD 2,15/hari) dan nilai kemanusiaan, bukan sekadar efisiensi.
        </p>
        <p>
          Sudut pandangku pribadi: AI tidak boleh hanya memetakan “siapa miskin”, tapi juga merekomendasikan dukungan yang layak dan
          transparan. Sudut pandang umumku: sistem ini harus akuntabel ke publik, agar kepercayaan tumbuh dan bantuan tepat sasaran.
          Dua sudut itu harus diberi sinyal jelas supaya orang tahu dari kacamata mana aku bicara.
        </p>
        <p>
          Aku siap mengubah pendapat jika ada informasi baru, misalnya jika model prediksi memicu bias terhadap wilayah tertentu, atau
          jika nilai komunitas lokal menolak pendekatan tertentu. Opini yang baik, menurutku, lentur: kuat karena data, rendah hati
          karena mau mendengar.
        </p>
        <p>
          Menangani perbedaan pendapat berarti meletakkan opini berdampingan, mencari dasar selisih, lalu mencoba rekonsiliasi. Jika
          tak bisa, setidaknya ada kesepakatan untuk berbeda. Dalam konteks AI dan kemiskinan, itu berarti dialog antara teknolog,
          pemerintah, LSM, dan warga terdampak harus jujur soal risiko, manfaat, dan nilai yang dijaga.
        </p>
        <p>
          Sikap yang kuhindari: merasa paling pintar, menjadi penjaga nilai tunggal, atau terlalu rasional sampai tak berani memutuskan.
          Sikap yang kupilih: pendapat yang tegas tapi siap direvisi. Analogi yang kupakai: opiniku adalah masakan rumahan, bahan-bahannya
          harus berkualitas, resepnya bisa disesuaikan, dan rasanya boleh berubah ketika selera publik (nilai) dan bahan (data) berganti.
        </p>
      </div>
    </div>
  )
}

export default MyOpinions
