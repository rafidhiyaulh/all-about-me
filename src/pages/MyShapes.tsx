import React from 'react'

const MyShapes: React.FC = () => {
  return (
  <div className="space-y-4">
      {/* Title Section */}
  <div className="text-center mb-6">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-4">
          UTS-4 My SHAPE (Spiritual Gifts, Heart, Abilities, Personality, Experiences)
        </h1>
      </div>

      {/* Personal Charter */}
  <div className="glass-effect rounded-xl p-4 mb-6">
  <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Piagam Diri (Personal Charter)
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <th className="text-left p-4 font-semibold">Dimensi</th>
                <th className="text-left p-4 font-semibold">Penjelasan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold text-slate-700">S — Signature Strengths (Kekuatan Utama)</td>
                <td className="p-4">
                  <ol className="space-y-2">
                    <li>1. Berpikir jernih dan tenang dalam menghadapi masalah, mampu melihat gambaran besar tanpa kehilangan perhatian pada detail.</li>
                    <li>2. Tekun dan konsisten ketika mengerjakan sesuatu yang diyakini bermanfaat.</li>
                    <li>3. Mudah beradaptasi dan terbuka terhadap ide baru, terutama ketika bekerja dengan orang dari latar belakang yang berbeda.</li>
                  </ol>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold text-slate-700">H — Heart (Nilai dan Hal yang Diperjuangkan)</td>
                <td className="p-4">
                  <ol className="space-y-2">
                    <li>1. Percaya bahwa teknologi dan pengetahuan seharusnya digunakan untuk membantu orang lain, bukan sekadar untuk kemajuan pribadi.</li>
                    <li>2. Menjunjung kejujuran, tanggung jawab, dan kerja sama sebagai dasar dalam setiap proses belajar dan bekerja.</li>
                    <li>3. Merasa paling hidup ketika bisa berkontribusi, membimbing, atau membuat sesuatu yang bermanfaat bagi banyak orang.</li>
                  </ol>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold text-slate-700">A — Aptitudes & Acquired Skills (Kemampuan dan Keterampilan)</td>
                <td className="p-4">
                  <ol className="space-y-2">
                    <li>1. Mampu mengamati pola dan memahami masalah dengan pendekatan yang logis dan terstruktur.</li>
                    <li>2. Terbiasa bekerja dalam tim dan mengatur waktu agar hasil yang dicapai tetap seimbang antara kualitas dan ketepatan waktu.</li>
                    <li>3. Dapat menjelaskan ide dengan cara yang mudah dimengerti oleh orang lain, baik dalam tulisan maupun percakapan.</li>
                  </ol>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold text-slate-700">P — Personality (Kepribadian)</td>
                <td className="p-4">
                  Tenang, reflektif, dan cenderung berpikir sebelum berbicara. Tipe yang lebih senang bekerja dengan makna daripada sekadar rutinitas. Dalam tim, berperan sebagai pendengar yang baik dan penghubung antara ide-ide yang berbeda.
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold text-slate-700">E — Experiences (Pengalaman Hidup)</td>
                <td className="p-4">
                  <ol className="space-y-2">
                    <li>1. Mengikuti berbagai proyek dan kompetisi yang mempertemukan orang dari beragam latar belakang, sehingga belajar pentingnya komunikasi yang terbuka dan saling menghargai.</li>
                    <li>2. Mengalami langsung bagaimana kerja keras, empati, dan kerja sama menjadi kunci keberhasilan di dunia profesional.</li>
                    <li>3. Menemukan bahwa setiap pengalaman, baik yang menyenangkan maupun menantang, selalu membawa pelajaran baru tentang diri sendiri.</li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Personal Mission Statement */}
  <div className="glass-effect rounded-xl p-4 mb-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Pernyataan Misi Pribadi
        </h2>
        
        <div className="card bg-gradient-to-r from-purple-50 to-indigo-50 border border-white/30 shadow-md rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              {/* lucide icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-slate-700">
                Saya berkomitmen menghubungkan pengetahuan, teknologi, dan manusia: menerapkan apa yang saya pelajari untuk membantu orang tumbuh — bukan hanya dari segi keterampilan, tetapi juga pemahaman dan empati. Saya ingin karya dan kolaborasi saya memudahkan orang lain dan memperkaya hubungan antarmanusia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Identity */}
  <div className="glass-effect rounded-xl p-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Identitas Naratif (Narrative Identity)
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Saya adalah seseorang yang percaya bahwa setiap perjalanan hidup selalu membawa makna, meski kadang tidak langsung terlihat. Sejak kecil saya tertarik pada cara sesuatu bekerja—bukan hanya benda atau sistem, tetapi juga cara orang berinteraksi dan saling memahami.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Saat menjalani kuliah, saya banyak belajar bahwa kemampuan berpikir logis saja tidak cukup. Dunia kerja dan organisasi menuntut kemampuan untuk mendengar, memahami, dan bekerja bersama orang lain yang memiliki pandangan berbeda. Dari situ saya belajar bahwa komunikasi bukan hanya soal berbicara, tetapi juga tentang memberi ruang bagi orang lain untuk bersuara.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Dalam beberapa proyek dan kompetisi yang saya ikuti, saya menemukan kepuasan tersendiri ketika bisa membantu tim menemukan arah yang lebih jelas. Rasanya menyenangkan ketika ide-ide yang berbeda akhirnya bisa disatukan menjadi sesuatu yang bermakna. Dari pengalaman itu, saya mulai melihat bahwa keheningan, empati, dan kerja sama adalah bagian penting dari kepemimpinan.
          </p>
          
          <p className="text-lg leading-relaxed">
            Ke depan, saya ingin terus belajar menjadi pribadi yang bukan hanya ahli di bidangnya, tetapi juga bijak dalam berelasi. Saya percaya, kemampuan terbesar manusia bukan hanya menciptakan hal baru, tetapi memahami satu sama lain. Dan di situlah saya ingin berada — di titik pertemuan antara logika, hati, dan kemanusiaan.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyShapes
