import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, BookOpen, Music } from 'lucide-react'
import QuickLinks from '../components/QuickLinks'
import FeaturedPanel from '../components/FeaturedPanel'

const Welcome: React.FC = () => {
  return (
    <div className="space-y-6 text-neutral-800">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-4"
        >
          <Sparkles className="w-10 h-10 text-white" />
        </motion.div>
        <h1 className="mb-4 text-4xl font-bold leading-tight bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 bg-clip-text text-transparent sm:text-5xl lg:text-7xl">
          Selamat Datang
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base font-medium text-neutral-600 sm:text-lg md:text-2xl"
        >
          Portfolio Asesmen II-2100 KIPP
        </motion.p>
      </motion.div>

      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-effect mb-6 rounded-2xl border border-neutral-200 bg-white/95 p-5 shadow-xl backdrop-blur-xl sm:p-6"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="flex-shrink-0">
            <BookOpen className="w-8 h-8 text-primary-600" />
          </div>
          <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
            Website ini dibuat untuk memenuhi tugas mata kuliah <strong className="text-primary-700">II2100 Komunikasi Interpersonal dan Publik</strong> pada <strong className="text-primary-700">Program Studi Sistem dan Teknologi Informasi, Sekolah Teknik Elektro dan Informatika – Institut Teknologi Bandung (ITB)</strong>.
          </p>
        </div>
      </motion.div>

      {/* Main Description */}
      <div className="mb-6">
        <p className="mb-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
          Melalui situs ini, saya mendokumentasikan berbagai pembelajaran, refleksi pribadi, serta karya yang dihasilkan selama perkuliahan. Setiap bagian menggambarkan penerapan konsep komunikasi (seperti kesadaran diri, empati, mendengarkan aktif, hingga komunikasi publik) dalam konteks kehidupan akademik dan profesional.
        </p>
      </div>

      {/* Featured Work Section */}
      <div className="highlight-box mb-6 rounded-xl p-5 sm:p-6 text-neutral-800">
        <h2 className="mb-4 flex items-center text-xl font-semibold sm:text-2xl">
          <Music className="w-6 h-6 text-primary-600 mr-2" />
          Karya Unggulan
        </h2>
        <p className="text-base leading-relaxed sm:text-lg">
          Salah satu karya yang disertakan adalah lagu <em>"Better Steps"</em>, yang menjadi refleksi pribadi mengenai proses bertumbuh dan belajar untuk berkomunikasi dengan lebih jujur, terbuka, dan penuh empati.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="quote-highlight rounded-xl">
        <p className="text-base leading-relaxed sm:text-lg">
          <strong>Tujuan</strong> dari pembuatan website ini adalah untuk menunjukkan bahwa komunikasi bukan hanya keterampilan berbicara, tetapi juga seni membangun makna bersama, memahami diri, dan menciptakan hubungan yang lebih bermakna melalui setiap kata dan tindakan.
        </p>
      </div>

      {/* Quick links to fill space */}
      <QuickLinks />

      <FeaturedPanel />
    </div>
  )
}

export default Welcome
