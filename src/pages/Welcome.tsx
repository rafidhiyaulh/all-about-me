import React from 'react'
import QuickLinks from '../components/QuickLinks'
import FeaturedPanel from '../components/FeaturedPanel'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'
import { ScrollVelocityContainer, ScrollVelocityRow } from '../components/ScrollVelocity'

const Welcome: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="mb-6 text-center">
        <HyperText as="h1" className="mb-3">
          Selamat Datang
        </HyperText>
        <p className="text-base font-medium" style={{ color: 'var(--muted)' }}>
          Portfolio Asesmen{' '}
          <Highlighter action="underline">II-2100 KIPP</Highlighter>
        </p>
      </div>

      {/* Welcome Card */}
      <div className="card mb-6 p-5 sm:p-6" style={{ borderTop: '3px solid var(--brand)' }}>
        <p className="text-base leading-relaxed" style={{ color: 'var(--ink2)' }}>
          Website ini dibuat untuk memenuhi tugas mata kuliah{' '}
          <Highlighter>II2100 Komunikasi Interpersonal dan Publik</Highlighter>{' '}
          pada{' '}
          <Highlighter action="underline">
            Program Studi Sistem dan Teknologi Informasi – STEI ITB
          </Highlighter>
          .
        </p>
      </div>

      {/* Main Description */}
      <div className="mb-6">
        <p className="text-base leading-relaxed" style={{ color: 'var(--ink2)' }}>
          Melalui situs ini, saya mendokumentasikan berbagai pembelajaran, refleksi pribadi, serta karya yang dihasilkan selama perkuliahan. Setiap bagian menggambarkan penerapan konsep komunikasi seperti{' '}
          <Highlighter>kesadaran diri</Highlighter>,{' '}
          <Highlighter>empati</Highlighter>, dan{' '}
          <Highlighter>mendengarkan aktif</Highlighter> dalam konteks kehidupan akademik dan profesional.
        </p>
      </div>

      {/* Featured Work Section */}
      <div className="accent-panel accent-panel--brand mb-6">
        <h2 className="section-title mb-3"><span className="bar" />Karya Unggulan</h2>
        <p className="leading-relaxed" style={{ color: 'var(--ink2)' }}>
          Salah satu karya yang disertakan adalah lagu <em>"Better Steps"</em>, yang menjadi refleksi pribadi mengenai proses bertumbuh dan belajar untuk berkomunikasi dengan lebih jujur, terbuka, dan penuh empati.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="card p-6" style={{ background: 'var(--ink)', color: 'var(--bg)', border: 'none' }}>
        <p className="leading-relaxed">
          <strong>Tujuan</strong> dari pembuatan website ini adalah untuk menunjukkan bahwa komunikasi bukan hanya keterampilan berbicara, tetapi juga seni membangun makna bersama, memahami diri, dan menciptakan hubungan yang lebih bermakna melalui setiap kata dan tindakan.
        </p>
      </div>

      {/* Quick links to fill space */}
      <QuickLinks />

      <div className="card p-4">
        <ScrollVelocityContainer className="text-lg font-semibold tracking-tight sm:text-xl">
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
