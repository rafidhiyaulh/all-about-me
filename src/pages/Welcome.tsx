import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Music } from 'lucide-react'
import QuickLinks from '../components/QuickLinks'
import FeaturedPanel from '../components/FeaturedPanel'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'
import { ScrollVelocityContainer, ScrollVelocityRow } from '../components/ScrollVelocity'

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
        <HyperText
          as="h1"
          className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
        >
          Selamat Datang
        </HyperText>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base font-medium text-neutral-600 sm:text-lg md:text-2xl"
        >
          Portfolio Asesmen{' '}
          <Highlighter action="underline" color="#d4d4d8">
            II-2100 KIPP
          </Highlighter>
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
            Website ini dibuat untuk memenuhi tugas mata kuliah{' '}
            <Highlighter color="#e4e4e7">II2100 Komunikasi Interpersonal dan Publik</Highlighter>{' '}
            pada{' '}
            <Highlighter action="underline" color="#d4d4d8">
              Program Studi Sistem dan Teknologi Informasi – STEI ITB
            </Highlighter>
            .
          </p>
        </div>
      </motion.div>

      {/* Main Description */}
      <div className="mb-6">
        <p className="mb-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
          Melalui situs ini, saya mendokumentasikan berbagai pembelajaran, refleksi pribadi, serta karya yang dihasilkan selama perkuliahan. Setiap bagian menggambarkan penerapan konsep komunikasi seperti{' '}
          <Highlighter color="#d4d4d8">kesadaran diri</Highlighter>,{' '}
          <Highlighter color="#d4d4d8">empati</Highlighter>, dan{' '}
          <Highlighter color="#d4d4d8">mendengarkan aktif</Highlighter> dalam konteks kehidupan akademik dan profesional.
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

      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow">
        <ScrollVelocityContainer className="text-xl font-semibold tracking-tight sm:text-2xl">
          <ScrollVelocityRow baseVelocity={22} direction={1}>
            <span className="mx-4">Komunikasi Efektif · Empati · Refleksi · Kolaborasi</span>
            <span className="mx-4">Komunikasi Efektif · Empati · Refleksi · Kolaborasi</span>
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={18} direction={-1}>
            <span className="mx-4">Belajar Sepanjang Hayat · Cerita · Karya · Insight</span>
            <span className="mx-4">Belajar Sepanjang Hayat · Cerita · Karya · Insight</span>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>

      <FeaturedPanel />
    </div>
  )
}

export default Welcome
