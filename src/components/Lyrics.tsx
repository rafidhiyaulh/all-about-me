import React from 'react'

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
      <div className="mb-2 text-center">
        <h3 className="section-title justify-center"><span className="bar" />Lirik Lagu</h3>
        <p className="mono mt-2 text-xs" style={{ color: 'var(--muted)' }}>Better Steps · Struktur lagu dan lirik</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {sections.map((s) => (
          <div key={s.id} className="card p-4">
            <div className="flex items-start gap-4">
              <div className="w-28 flex-shrink-0">
                <h4 className="eyebrow">{s.title}</h4>
              </div>
              <div>
                {s.lines.map((l, i) => (
                  <p key={i} className={`leading-relaxed ${s.isChorus ? 'font-semibold' : ''}`} style={{ color: 'var(--ink2)' }}>{l}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* repeat chorus at the end for song structure */}
        <div className="card p-4">
          <div className="flex items-start gap-4">
            <div className="w-28 flex-shrink-0">
              <h4 className="eyebrow">Chorus</h4>
            </div>
            <div>
              {sections.find((x) => x.id === 'chorus')!.lines.map((l, i) => (
                <p key={i} className="font-semibold leading-relaxed" style={{ color: 'var(--ink2)' }}>{l}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lyrics
