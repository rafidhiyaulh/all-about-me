import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, BookOpen, Music } from 'lucide-react'
import QuickLinks from '../components/QuickLinks'
import FeaturedPanel from '../components/FeaturedPanel'

const Welcome: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
  className="text-center mb-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"
        >
          <Sparkles className="w-10 h-10 text-white" />
        </motion.div>
        <h1 className="text-7xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
          Selamat Datang
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl text-slate-600 font-medium"
        >
          Portfolio Asesmen II-2100 KIPP
        </motion.p>
      </motion.div>

      {/* Welcome Card */}
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
  className="glass-effect rounded-2xl p-6 mb-6 shadow-xl backdrop-blur-xl bg-white/95 border border-white/20"
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-lg leading-relaxed">
            Website ini dibuat untuk memenuhi tugas mata kuliah <strong className="text-blue-700">II2100 Komunikasi Interpersonal dan Publik</strong> pada <strong className="text-blue-700">Program Studi Sistem dan Teknologi Informasi, Sekolah Teknik Elektro dan Informatika – Institut Teknologi Bandung (ITB)</strong>.
          </p>
        </div>
      </motion.div>

      {/* Main Description */}
      <div className="mb-6">
        <p className="text-lg leading-relaxed mb-4">
          Melalui situs ini, saya mendokumentasikan berbagai pembelajaran, refleksi pribadi, serta karya yang dihasilkan selama perkuliahan. Setiap bagian menggambarkan penerapan konsep komunikasi (seperti kesadaran diri, empati, mendengarkan aktif, hingga komunikasi publik) dalam konteks kehidupan akademik dan profesional.
        </p>
      </div>

      {/* Featured Work Section */}
  <div className="highlight-box rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Music className="w-6 h-6 text-indigo-600 mr-2" />
          Karya Unggulan
        </h2>
        <p className="text-lg leading-relaxed">
          Salah satu karya yang disertakan adalah lagu <em>"Better Steps"</em>, yang menjadi refleksi pribadi mengenai proses bertumbuh dan belajar untuk berkomunikasi dengan lebih jujur, terbuka, dan penuh empati.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="quote-highlight rounded-xl">
        <p className="text-lg leading-relaxed">
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
