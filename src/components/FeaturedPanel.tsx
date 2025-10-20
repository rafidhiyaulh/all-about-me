import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedPanel: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="col-span-1 rounded-lg bg-white p-4 shadow md:col-span-2">
        <h3 className="text-lg font-semibold text-slate-800 sm:text-xl">Highlight</h3>
        <p className="mt-2 text-base leading-relaxed text-slate-700 sm:text-lg">
          Lihat karya unggulan, cerita, dan refleksi yang saya rangkum di bagian UTS. Klik salah satu tautan di samping untuk langsung menuju halaman yang diinginkan.
        </p>
      </div>
      <div className="col-span-1 flex flex-col justify-between rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 p-4 text-white shadow">
        <div>
          <h4 className="text-lg font-bold sm:text-xl">Tip singkat</h4>
          <p className="mt-2 text-sm opacity-90 sm:text-base">
            Gunakan navigasi di kiri untuk berpindah halaman, atau tombol di sini untuk menonton lagu dan membaca cerita pendek.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/uts-2" className="btn btn-sm btn-primary">
            Tonton Lagu
          </Link>
          <Link to="/uts-3" className="btn btn-sm btn-ghost">
            Read Story
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPanel
