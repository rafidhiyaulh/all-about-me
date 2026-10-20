import React from 'react'

const stats = [
  { label: 'Role', value: 'Mahasiswa ITB', accent: 'var(--brand)' },
  { label: 'Focus', value: 'Komunikasi & Karya', accent: 'var(--teal)' },
  { label: 'Interests', value: 'Teknologi • Data • Manusia', accent: 'var(--purple)' },
]

const AtAGlance: React.FC = () => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="card"
          style={{ padding: '14px 16px', borderTop: `3px solid ${s.accent}` }}
        >
          <div className="eyebrow">{s.label}</div>
          <div className="mt-1 font-semibold" style={{ color: 'var(--ink)' }}>{s.value}</div>
        </div>
      ))}
    </div>
  )
}

export default AtAGlance
