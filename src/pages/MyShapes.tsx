import React from 'react'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'

const MyShapes: React.FC = () => {
  return (
    <div className="space-y-6 text-neutral-800">
      <div className="text-center mb-6">
        <HyperText
          as="h1"
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          UTS-4 My SHAPE (Spiritual Gifts, Heart, Abilities, Personality, Experiences)
        </HyperText>
      </div>

      <div className="glass-effect rounded-xl border border-neutral-200 p-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-5">
          Piagam Diri (Personal Charter)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg border border-neutral-200 bg-white shadow">
            <thead>
              <tr className="bg-gradient-to-r from-primary-200 to-primary-300 text-neutral-900">
                <th className="p-4 text-left text-sm font-semibold uppercase tracking-wide">Dimensi</th>
                <th className="p-4 text-left text-sm font-semibold uppercase tracking-wide">Penjelasan</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  title: 'S — Signature Strengths (Kekuatan Utama)',
                  body: [
                    '1. Berpikir jernih dan tenang dalam menghadapi masalah, mampu melihat gambaran besar tanpa kehilangan perhatian pada detail.',
                    '2. Tekun dan konsisten ketika mengerjakan sesuatu yang diyakini bermanfaat.',
                    '3. Mudah beradaptasi dan terbuka terhadap ide baru, terutama ketika bekerja dengan orang dari latar belakang yang berbeda.',
                  ],
                },
                {
                  title: 'H — Heart (Nilai dan Hal yang Diperjuangkan)',
                  body: [
                    '1. Percaya bahwa teknologi dan pengetahuan seharusnya digunakan untuk membantu orang lain, bukan sekadar untuk kemajuan pribadi.',
                    '2. Menjunjung kejujuran, tanggung jawab, dan kerja sama sebagai dasar dalam setiap proses belajar dan bekerja.',
                    '3. Merasa paling hidup ketika bisa berkontribusi, membimbing, atau membuat sesuatu yang bermanfaat bagi banyak orang.',
                  ],
                },
                {
                  title: 'A — Aptitudes & Acquired Skills (Kemampuan dan Keterampilan)',
                  body: [
                    '1. Mampu mengamati pola dan memahami masalah dengan pendekatan yang logis dan terstruktur.',
                    '2. Terbiasa bekerja dalam tim dan mengatur waktu agar hasil yang dicapai tetap seimbang antara kualitas dan ketepatan waktu.',
                    '3. Dapat menjelaskan ide dengan cara yang mudah dimengerti oleh orang lain, baik dalam tulisan maupun percakapan.',
                  ],
                },
                {
                  title: 'P — Personality (Kepribadian)',
                  body: [
                    'Tenang, reflektif, dan cenderung berpikir sebelum berbicara. Tipe yang lebih senang bekerja dengan makna daripada sekadar rutinitas. Dalam tim, berperan sebagai pendengar yang baik dan penghubung antara ide-ide yang berbeda.',
                  ],
                },
                {
                  title: 'E — Experiences (Pengalaman Hidup)',
                  body: [
                    '1. Mengikuti berbagai proyek dan kompetisi yang mempertemukan orang dari beragam latar belakang, sehingga belajar pentingnya komunikasi yang terbuka dan saling menghargai.',
                    '2. Mengalami langsung bagaimana kerja keras, empati, dan kerja sama menjadi kunci keberhasilan di dunia profesional.',
                    '3. Menemukan bahwa setiap pengalaman, baik yang menyenangkan maupun menantang, selalu membawa pelajaran baru tentang diri sendiri.',
                  ],
                },
              ].map((row) => (
                <tr key={row.title} className="border-b border-neutral-200 last:border-none hover:bg-neutral-100/70">
                  <td className="p-4 align-top font-semibold text-neutral-800">{row.title}</td>
                  <td className="p-4 text-neutral-700">
                    <ol className="space-y-2">{row.body.map((item) => <li key={item}>{item}</li>)}</ol>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass-effect rounded-xl border border-neutral-200 p-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-5">
          Pernyataan Misi Pribadi
        </h2>
        <div className="rounded-xl border border-neutral-200 bg-gradient-to-r from-neutral-100 to-neutral-200 p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2" />
              </svg>
            </div>
          <p className="text-base leading-relaxed sm:text-lg text-neutral-700">
            Saya berkomitmen menghubungkan pengetahuan, teknologi, dan manusia: menerapkan apa yang saya pelajari untuk membantu orang tumbuh — bukan hanya dari segi keterampilan, tetapi juga pemahaman dan empati. Saya ingin karya dan kolaborasi saya memudahkan orang lain dan memperkaya hubungan antarmanusia melalui{' '}
            <Highlighter color="#d4d4d8">kolaborasi yang hangat</Highlighter>.
          </p>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-xl border border-neutral-200 p-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-5">
          Identitas Naratif (Narrative Identity)
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-base leading-relaxed mb-6 sm:text-lg text-neutral-700">
            Saya adalah seseorang yang percaya bahwa setiap perjalanan hidup selalu membawa makna, meski kadang tidak langsung terlihat. Sejak kecil saya tertarik pada cara sesuatu bekerja—bukan hanya benda atau sistem, tetapi juga cara orang berinteraksi dan saling memahami.
          </p>
          <p className="text-base leading-relaxed mb-6 sm:text-lg text-neutral-700">
            Saat menjalani kuliah, saya banyak belajar bahwa kemampuan berpikir logis saja tidak cukup. Dunia kerja dan organisasi menuntut kemampuan untuk mendengar, memahami, dan bekerja bersama orang lain yang memiliki pandangan berbeda. Dari situ saya belajar bahwa komunikasi bukan hanya soal berbicara, tetapi juga tentang memberi ruang bagi orang lain untuk bersuara.
          </p>
          <p className="text-base leading-relaxed mb-6 sm:text-lg text-neutral-700">
            Dalam beberapa proyek dan kompetisi yang saya ikuti, saya menemukan kepuasan tersendiri ketika bisa membantu tim menemukan arah yang lebih jelas. Rasanya menyenangkan ketika ide-ide yang berbeda akhirnya bisa disatukan menjadi sesuatu yang bermakna. Dari pengalaman itu, saya mulai melihat bahwa keheningan, empati, dan kerja sama adalah bagian penting dari kepemimpinan.
          </p>
          <p className="text-base leading-relaxed sm:text-lg text-neutral-700">
            Ke depan, saya ingin terus belajar menjadi pribadi yang bukan hanya ahli di bidangnya, tetapi juga bijak dalam berelasi. Saya percaya, kemampuan terbesar manusia bukan hanya menciptakan hal baru, tetapi memahami satu sama lain. Dan di situlah saya ingin berada — di titik pertemuan antara logika, hati, dan kemanusiaan.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyShapes
