import React from 'react'
import { Music } from 'lucide-react'

const sections = [
  {
    id: 'verse1',
    title: 'Verse',
    lines: [
      'I used to walk in crooked lines',
      'Through shadows thick and cold as pine',
      'My heart a map with edges torn',
      'Each step a whisper',
      'Each breath worn',
    ],
  },
  {
    id: 'prechorus1',
    title: 'Prechorus',
    lines: [
      'But the sun found my face one day',
      'Chased the gray',
      'Showed a brighter way',
    ],
  },
  {
    id: 'chorus',
    title: 'Chorus',
    isChorus: true,
    lines: [
      "Better steps",
      "I'm learning how",
      'To move forward',
      'Here and now',
      'The ground feels steady',
      'The sky is wide',
      'Better steps',
      "My soul's my guide",
    ],
  },
  {
    id: 'verse2',
    title: 'Verse 2',
    lines: [
      'I planted seeds in barren ground',
      'Watched as hope began to sprout',
      'The rain came soft',
      'The roots held tight',
      'Through storms',
      'I found my inner light',
    ],
  },
  {
    id: 'prechorus2',
    title: 'Prechorus',
    lines: [
      'The winds may howl',
      'The clouds may weep',
      "But I've sown dreams I'm meant to keep",
    ],
  },
  // chorus repeats - will render again below
]

const Lyrics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-2">
        <h3 className="text-2xl md:text-3xl font-semibold flex items-center justify-center gap-2">
          <Music className="w-6 h-6 text-indigo-600" />
          <span>Lirik Lagu</span>
        </h3>
        <p className="text-sm text-slate-500 mt-1">Better Steps — Struktur lagu dan lirik</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sections.map((s) => (
          <div key={s.id} className="w-full">
            <div className="p-4 rounded-lg bg-white/80 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-28 flex-shrink-0">
                  <h4 className="text-sm font-semibold text-slate-600">{s.title}</h4>
                </div>
                <div className="prose prose-sm max-w-none text-slate-800">
                  {s.lines.map((l, i) => (
                    <p key={i} className={`leading-relaxed mb-1 ${s.isChorus ? 'font-medium' : ''}`}>{l}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* repeat chorus at the end for song structure - left aligned like verses */}
        <div className="p-4 rounded-lg bg-white/80 shadow-sm border border-gray-100">
          <div className="flex items-start gap-4 mb-2">
            <div className="w-28 flex-shrink-0">
              <h4 className="text-sm font-semibold text-slate-600">Chorus</h4>
            </div>
            <div className="prose prose-sm max-w-none text-slate-800">
              {sections.find((x) => x.id === 'chorus')!.lines.map((l, i) => (
                <p key={i} className="leading-relaxed mb-1 font-medium">{l}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lyrics
