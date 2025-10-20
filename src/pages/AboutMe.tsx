import React from 'react'
import AtAGlance from '../components/AtAGlance'
import { User, MessageSquare, Users, Brain, Smartphone, Rocket } from 'lucide-react'

const AboutMe: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Section */}
  <div className="text-center mb-6">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-4">
          UTS-1 All About Me
        </h1>
        <p className="text-xl md:text-2xl text-slate-600">
          Getting to Know Muhammad Rafi Dhiyaulhaq
        </p>
      </div>

      {/* Profile Image */}
  <div className="text-center mb-6">
        <img 
          src="/images/rafi.jpg" 
          alt="About Me" 
          className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
        />
      </div>

      {/* Introduction Card */}
  <div className="glass-effect rounded-xl p-4 mb-3">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <User className="w-6 h-6 text-indigo-600 mr-2" />
          Siapa saya?
        </h2>
        <p className="text-lg leading-relaxed mb-2">
          <strong>Saya Muhammad Rafi Dhiyaulhaq</strong>, mahasiswa tingkat akhir Sistem dan Teknologi Informasi di ITB yang senang belajar hal baru terutama yang berada di pertemuan antara teknologi, data, dan manusia. Di kelas Komunikasi Interpersonal dan Publik saya belajar bahwa komunikasi yang baik bukan sekadar berbicara tetapi membangun pengertian bersama. Itu juga yang ingin saya berikan di halaman ini: gambaran singkat tentang diri saya, cara saya berproses, dan nilai yang ingin saya bawa saat berinteraksi dengan orang lain.
        </p>
      </div>

      {/* At-a-glance small cards */}
      <div className="mb-4">
        {/* lazy load component */}
        {/** Using local AtAGlance component for visual enrichment */}
        <React.Suspense fallback={null}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <AtAGlance />
        </React.Suspense>
      </div>

      {/* Communication Principles */}
  <div className="glass-effect rounded-xl p-4 mb-3">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <MessageSquare className="w-6 h-6 text-indigo-600 mr-2" />
          Prinsip Komunikasi Saya
        </h2>
        <p className="text-lg leading-relaxed mb-2">
          Dalam keseharian saya berusaha memulai komunikasi dari memahami situasi dan kondisi lawan bicara: apa yang sedang mereka hadapi, apa yang mereka harapkan, dan bahasa apa yang nyaman dipakai bersama. Saya percaya kata-kata yang tepat lahir dari niat yang tepat. Karena itu, sebelum menyampaikan pesan saya membiasakan diri menata pikiran, memilih waktu yang pas, dan menyesuaikan gaya penyampaian. Kadang lugas dan ringkas, kadang empatik dan pelan, agar tujuan kita sama: saling mengerti, bukan saling mengalahkan.
        </p>
      </div>

      {/* Roles and Identity */}
  <div className="glass-effect rounded-xl p-4 mb-3">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Users className="w-6 h-6 text-indigo-600 mr-2" />
          Peran dan Identitas
        </h2>
        <div className="space-y-3">
          <p className="text-lg leading-relaxed mb-2">
            Saya melihat diri saya dalam beberapa peran: <strong>mahasiswa yang terus belajar</strong>, <strong>rekan tim yang ingin dapat diandalkan</strong>, dan <strong>anak pertama yang ingin membawa manfaat bagi keluarga</strong>. Di setiap peran itu saya mencoba tampil otentik, menunjukkan yang memang saya bisa, mengakui yang belum saya kuasai, dan terbuka pada masukan.
          </p>
          <p className="text-lg leading-relaxed mb-2">
            Bagi saya, menjaga citra bukan berarti berpura-pura, justru kejujuran yang sopan adalah fondasi kepercayaan. Jika salah saya ingin cepat memperbaiki. Jika benar saya ingin tetap rendah hati.
          </p>
        </div>
      </div>

      {/* Personal Note */}
      <blockquote className="rounded-xl p-4 bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 mb-3">
        <p className="text-lg leading-relaxed italic mb-0">
          Kadang teman saya bercanda, <em>"Rafi itu kalau menjelaskan sesuatu nadanya seperti presentasi skripsi."</em> Saya hanya tertawa dan menjawab, <em>"Setidaknya saya latihan sebelum waktunya tiba."</em> Momen kecil seperti itu mengingatkan saya bahwa kehangatan juga bisa muncul dari tawa ringan yang jujur.
        </p>
      </blockquote>

      {/* Learning Practices */}
  <div className="glass-effect rounded-xl p-4 mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Brain className="w-6 h-6 text-indigo-600 mr-2" />
          Praktik Belajar
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Saya juga belajar untuk <strong>mengecek persepsi</strong>: jangan buru-buru menyimpulkan, ajukan klarifikasi, dan lihat dari sudut pandang orang lain. Praktiknya sederhana, mengulang apa yang saya tangkap, menawarkan kemungkinan makna, lalu bertanya apakah itu sesuai.
          </p>
          <p className="text-lg leading-relaxed">
            Kebiasaan kecil ini membantu saya menghindari salah paham dan membuat diskusi lebih produktif. Di saat yang sama saya melatih <strong>self-talk yang sehat</strong>: menenangkan diri ketika grogi, mengingatkan tujuan, dan memecah masalah besar jadi langkah-langkah kecil yang bisa dikerjakan.
          </p>
        </div>
      </div>

      {/* Digital Approach */}
  <div className="glass-effect rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Smartphone className="w-6 h-6 text-indigo-600 mr-2" />
          Pendekatan Digital
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Dalam berteman dan berkarya saya memanfaatkan media sosial secukupnya. Saya menganggap percakapan langsung seperti <strong>tenis yang kaya nuansa</strong> sedangkan percakapan daring seperti <strong>catur yang memberi waktu untuk berpikir</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            Keduanya sama-sama penting: tatap muka untuk kedalaman, ruang digital untuk jangkauan. Prinsip saya sederhana: tetap menghormati, sadar konteks, dan memilih kata yang aman jika kelak dibaca orang lain di luar niat awal kita.
          </p>
        </div>
      </div>

      {/* Future Vision */}
  <div className="glass-effect rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Rocket className="w-6 h-6 text-indigo-600 mr-2" />
          Visi Masa Depan
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Ke depan saya ingin terus membangun karya yang bermanfaat: solusi sederhana yang mempermudah hidup orang lain, komunitas belajar yang saling menguatkan, dan kolaborasi yang memberi nilai bagi semua pihak.
          </p>
          
          <div className="quote-highlight rounded-xl">
            <p className="text-lg leading-relaxed">
              Saya memegang prinsip: <em>"Tujuannya boleh tinggi, tetapi cara mencapainya harus realistis, pragmatis, dan strategis."</em>
            </p>
          </div>
          
          <p className="text-lg leading-relaxed">
            Dengan itu saya berharap bisa menolong diri sendiri untuk berkembang, membuat keluarga bangga, dan berkontribusi pada lingkungan yang ikut membesarkan saya.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
