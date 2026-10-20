import React from 'react'
import HyperText from '../components/HyperText'

const MyProfessionalReviews: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-4 text-center">
        <HyperText as="h1" className="mb-3">
          UAS-5 My Professional Reviews
        </HyperText>
        <p className="subtitle leading-relaxed" style={{ color: 'var(--muted)' }}>
          Self-assessment menggunakan AI dan peer assessment dilakukan manual; seluruh hasil penilaian dapat diakses daring.
        </p>
      </div>

      <div className="card space-y-4 p-6 text-base leading-relaxed" style={{ color: 'var(--ink2)' }}>
        <p>
          Self assessment: aku memanfaatkan AI untuk menilai karya UAS secara konsisten, membaca konten, memberi umpan balik,
          dan mengukur keselarasan dengan rubrik. Ini membantuku melihat celah dan merapikan konten sebelum dikirim.
        </p>
        <p>
          Peer assessment: dilakukan manual oleh rekan, sehingga sudut pandang manusia tetap hadir. Perbandingan dua pendekatan
          ini (AI vs manual) kubutuhkan agar penilaian lebih berimbang.
        </p>
        <p>
          Seluruh tautan penilaian (AI dan peer) tersedia di Google Drive:{' '}
          <a
            href="https://drive.google.com/drive/folders/1Hm5BscvGiR8JpXY2Pi_pg9j04sOQF8qN?usp=sharing"
            className="font-semibold underline"
            style={{ color: 'var(--brand-fill)' }}
          >
            Lihat penilaian UAS-5
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default MyProfessionalReviews
