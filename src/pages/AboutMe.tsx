import React from 'react'
import AtAGlance from '../components/AtAGlance'
import Lens from '../components/Lens'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'

const AboutMe: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6 text-center">
        <HyperText as="h1" className="mb-3">
          UTS-1 All About Me
        </HyperText>
        <p className="subtitle" style={{ color: 'var(--muted)' }}>
          Getting to Know Muhammad Rafi Dhiyaulhaq
        </p>
      </div>

      <div className="mb-6 text-center">
        <Lens
          zoomFactor={2}
          lensSize={180}
          className="card mx-auto w-full max-w-2xl"
          ariaLabel="Pembesaran foto profil"
        >
          <img
            src="/all-about-me/images/rafi.jpg"
            alt="About Me"
            className="w-full object-cover"
          />
        </Lens>
      </div>

      <div className="card p-5">
        <h2 className="section-title mb-3"><span className="bar" />Siapa saya?</h2>
        <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
          <strong style={{ color: 'var(--ink)' }}>Saya Muhammad Rafi Dhiyaulhaq</strong>, mahasiswa tingkat akhir Sistem dan Teknologi Informasi di ITB yang senang belajar hal baru terutama yang berada di pertemuan antara teknologi, data, dan manusia. Di kelas{' '}
          <Highlighter>Komunikasi Interpersonal dan Publik</Highlighter> saya belajar bahwa komunikasi yang baik bukan sekadar berbicara tetapi membangun pengertian bersama. Itu juga yang ingin saya berikan di halaman ini: gambaran singkat tentang diri saya, cara saya berproses, dan nilai yang ingin saya bawa saat berinteraksi dengan orang lain.
        </p>
      </div>

      <AtAGlance />

      <div className="card p-5">
        <h2 className="section-title mb-3"><span className="bar" />Prinsip Komunikasi Saya</h2>
        <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
          Dalam keseharian saya berusaha memulai komunikasi dari memahami situasi dan kondisi lawan bicara: apa yang sedang mereka hadapi, apa yang mereka harapkan, dan bahasa apa yang nyaman dipakai bersama. Saya percaya kata-kata yang tepat lahir dari niat yang tepat. Karena itu, sebelum menyampaikan pesan saya membiasakan diri menata pikiran, memilih waktu yang pas, dan menyesuaikan gaya penyampaian. Kadang lugas dan ringkas, kadang empatik dan pelan, agar tujuan kita sama: saling mengerti, bukan saling mengalahkan.
        </p>
      </div>

      <div className="card p-5">
        <h2 className="section-title mb-3"><span className="bar" />Peran dan Identitas</h2>
        <div className="space-y-3">
          <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
            Saya melihat diri saya dalam beberapa peran: <strong style={{ color: 'var(--ink)' }}>mahasiswa yang terus belajar</strong>, <strong style={{ color: 'var(--ink)' }}>rekan tim yang ingin dapat diandalkan</strong>, dan <strong style={{ color: 'var(--ink)' }}>anak pertama yang ingin membawa manfaat bagi keluarga</strong>. Di setiap peran itu saya mencoba tampil otentik, menunjukkan yang memang saya bisa, mengakui yang belum saya kuasai, dan terbuka pada masukan.
          </p>
          <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
            Bagi saya, menjaga citra bukan berarti berpura-pura, justru kejujuran yang sopan adalah fondasi kepercayaan. Jika salah saya ingin cepat memperbaiki. Jika benar saya ingin tetap rendah hati.
          </p>
        </div>
      </div>

      <blockquote>
        <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
          Kadang teman saya bercanda, <em>"Rafi itu kalau menjelaskan sesuatu nadanya seperti presentasi skripsi."</em> Saya hanya tertawa dan menjawab, <em>"Setidaknya saya latihan sebelum waktunya tiba."</em> Momen kecil seperti itu mengingatkan saya bahwa kehangatan juga bisa muncul dari tawa ringan yang jujur.
        </p>
      </blockquote>

      <div className="card p-5">
        <h2 className="section-title mb-4"><span className="bar" />Praktik Belajar</h2>
        <div className="space-y-4">
          <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
            Saya juga belajar untuk <strong style={{ color: 'var(--ink)' }}>mengecek persepsi</strong>: jangan buru-buru menyimpulkan, ajukan klarifikasi, dan lihat dari sudut pandang orang lain. Praktiknya sederhana, mengulang apa yang saya tangkap, menawarkan kemungkinan makna, lalu bertanya apakah itu sesuai.
          </p>
          <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
            Kebiasaan kecil ini membantu saya menghindari salah paham dan membuat diskusi lebih produktif. Di saat yang sama saya melatih <strong style={{ color: 'var(--ink)' }}>self-talk yang sehat</strong>: menenangkan diri ketika grogi, mengingatkan tujuan, dan memecah masalah besar jadi langkah-langkah kecil yang bisa dikerjakan.
          </p>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="section-title mb-4"><span className="bar" />Pendekatan Digital</h2>
        <div className="space-y-4">
          <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
            Dalam berteman dan berkarya saya memanfaatkan media sosial secukupnya. Saya menganggap percakapan langsung seperti <strong style={{ color: 'var(--ink)' }}>tenis yang kaya nuansa</strong> sedangkan percakapan daring seperti <strong style={{ color: 'var(--ink)' }}>catur yang memberi waktu untuk berpikir</strong>.
          </p>
          <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
            Keduanya sama-sama penting: tatap muka untuk kedalaman, ruang digital untuk jangkauan. Prinsip saya sederhana: tetap menghormati, sadar konteks, dan memilih kata yang aman jika kelak dibaca orang lain di luar niat awal kita.
          </p>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="section-title mb-4"><span className="bar" />Visi Masa Depan</h2>
        <div className="space-y-4">
          <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
            Ke depan saya ingin terus membangun karya yang bermanfaat: solusi sederhana yang mempermudah hidup orang lain, komunitas belajar yang saling menguatkan, dan kolaborasi yang memberi nilai bagi semua pihak.
          </p>
          <div className="card p-5" style={{ background: 'var(--ink)', color: 'var(--bg)', border: 'none' }}>
            <p className="leading-relaxed">
              Saya memegang prinsip: <em>"Tujuannya boleh tinggi, tetapi cara mencapainya harus realistis, pragmatis, dan strategis."</em>
            </p>
          </div>
          <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
            Dengan itu saya berharap bisa menolong diri sendiri untuk berkembang, membuat keluarga bangga, dan berkontribusi pada lingkungan yang ikut membesarkan saya.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
