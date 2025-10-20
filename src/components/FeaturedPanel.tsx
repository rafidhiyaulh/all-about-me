import React from 'react'

const FeaturedPanel: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 md:col-span-2 p-4 bg-white rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Highlight</h3>
        <p className="text-lg text-slate-700">Lihat karya unggulan, cerita, dan refleksi yang saya rangkum di bagian UTS. Klik salah satu tautan di samping untuk langsung menuju halaman yang diinginkan.</p>
      </div>
      <div className="col-span-1 p-4 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-lg mb-2">Tip singkat</h4>
          <p className="text-sm opacity-90">Gunakan navigasi di kiri untuk berpindah halaman, atau tombol di sini untuk menonton lagu dan membaca cerita pendek.</p>
        </div>
        <div className="mt-4">
          <a href="/uts-2" className="btn btn-sm btn-primary mr-2">Tonton Lagu</a>
          <a href="/uts-3" className="btn btn-sm btn-ghost">Read Story</a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPanel
