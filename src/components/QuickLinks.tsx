import React from 'react'
import { Link } from 'react-router-dom'

const QuickLinks: React.FC = () => {
  const links = [
    { title: 'UTS-1 All About Me', to: '/uts-1' },
    { title: 'UTS-2 My Songs for You', to: '/uts-2' },
    { title: 'UTS-3 My Stories for You', to: '/uts-3' },
    { title: 'UTS-4 My SHAPE', to: '/uts-4' },
    { title: 'UTS-5 My Personal Reviews', to: '/uts-5' },
    { title: 'UAS-1 My Concepts', to: '/uas-1' },
    { title: 'UAS-2 My Opinions', to: '/uas-2' },
    { title: 'UAS-3 My Innovations', to: '/uas-3' },
    { title: 'UAS-4 My Knowledge', to: '/uas-4' },
    { title: 'UAS-5 My Professional Reviews', to: '/uas-5' },
  ]

  return (
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          className="card flex items-center justify-between gap-4 p-4 transition-colors"
          style={{ borderColor: 'var(--border)' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)' }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
        >
          <div>
            <div className="eyebrow">Go to</div>
            <div className="mt-0.5 font-semibold" style={{ color: 'var(--ink)' }}>{l.title}</div>
          </div>
          <span className="btn btn-outline" style={{ padding: '5px 12px', fontSize: '12px' }}>
            Open
          </span>
        </Link>
      ))}
    </div>
  )
}

export default QuickLinks
