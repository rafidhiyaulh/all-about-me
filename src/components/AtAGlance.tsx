import React from 'react'
import { User, Music, Book } from 'lucide-react'

const AtAGlance: React.FC = () => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div className="p-3 bg-white rounded-lg shadow-sm flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold">
          <User className="w-6 h-6" />
        </div>
        <div>
          <div className="text-sm text-slate-500">Role</div>
          <div className="font-semibold">Mahasiswa ITB</div>
        </div>
      </div>

      <div className="p-3 bg-white rounded-lg shadow-sm flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
          <Music className="w-6 h-6" />
        </div>
        <div>
          <div className="text-sm text-slate-500">Focus</div>
          <div className="font-semibold">Komunikasi & Karya</div>
        </div>
      </div>

      <div className="p-3 bg-white rounded-lg shadow-sm flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
          <Book className="w-6 h-6" />
        </div>
        <div>
          <div className="text-sm text-slate-500">Interests</div>
          <div className="font-semibold">Teknologi • Data • Manusia</div>
        </div>
      </div>
    </div>
  )
}

export default AtAGlance
