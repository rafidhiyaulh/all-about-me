import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedPanel: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="card col-span-1 p-5 md:col-span-2">
        <div className="section-title"><span className="bar" />Highlight</div>
        <p className="mt-3 leading-relaxed" style={{ color: 'var(--ink2)' }}>
          Lihat karya unggulan, cerita, dan refleksi yang saya rangkum di bagian UTS. Klik salah satu tautan di samping untuk langsung menuju halaman yang diinginkan.
        </p>
      </div>
      <div
        className="col-span-1 flex flex-col justify-between rounded-xl p-5"
        style={{ background: 'var(--ink)', color: 'var(--bg)' }}
      >
        <div>
          <h4 className="text-lg font-bold">Tip singkat</h4>
          <p className="mt-2 text-sm" style={{ color: 'var(--ink2)' }}>
            Gunakan navigasi di kiri untuk berpindah halaman, atau tombol di sini untuk menonton lagu dan membaca cerita pendek.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/uts-2" className="btn" style={{ background: 'var(--bg)', color: 'var(--ink)' }}>
            Tonton Lagu
          </Link>
          <Link to="/uts-3" className="btn" style={{ border: '1px solid var(--muted)', color: 'var(--bg)' }}>
            Read Story
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPanel
