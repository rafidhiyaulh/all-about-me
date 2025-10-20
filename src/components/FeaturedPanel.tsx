import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedPanel: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="col-span-1 rounded-lg border border-neutral-200 bg-white p-4 shadow md:col-span-2">
        <h3 className="text-lg font-semibold text-neutral-900 sm:text-xl">Highlight</h3>
        <p className="mt-2 text-base leading-relaxed text-neutral-700 sm:text-lg">
          Lihat karya unggulan, cerita, dan refleksi yang saya rangkum di bagian UTS. Klik salah satu tautan di samping untuk langsung menuju halaman yang diinginkan.
        </p>
      </div>
      <div className="col-span-1 flex flex-col justify-between rounded-lg border border-neutral-200 bg-neutral-900 p-4 text-neutral-50 shadow">
        <div>
          <h4 className="text-lg font-bold sm:text-xl">Tip singkat</h4>
          <p className="mt-2 text-sm text-neutral-200 sm:text-base">
            Gunakan navigasi di kiri untuk berpindah halaman, atau tombol di sini untuk menonton lagu dan membaca cerita pendek.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to="/uts-2"
            className="inline-flex items-center rounded-lg border border-neutral-100 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-neutral-200 hover:bg-neutral-100"
          >
            Tonton Lagu
          </Link>
          <Link
            to="/uts-3"
            className="inline-flex items-center rounded-lg border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-100 transition hover:border-neutral-100 hover:bg-neutral-800"
          >
            Read Story
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPanel
