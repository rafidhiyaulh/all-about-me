import React from 'react'
import { User, Music, Book } from 'lucide-react'

const AtAGlance: React.FC = () => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 shadow">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-200 to-primary-400 text-white">
          <User className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-500">Role</div>
          <div className="font-semibold text-neutral-900">Mahasiswa ITB</div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 shadow">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
          <Music className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-500">Focus</div>
          <div className="font-semibold text-neutral-900">Komunikasi & Karya</div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 shadow">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
          <Book className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-500">Interests</div>
          <div className="font-semibold text-neutral-900">Teknologi • Data • Manusia</div>
        </div>
      </div>
    </div>
  )
}

export default AtAGlance
