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
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          className="flex items-center justify-between gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow transition hover:border-neutral-300 hover:shadow-md"
        >
          <div>
            <div className="text-xs uppercase tracking-wide text-neutral-500">Go to</div>
            <div className="text-base font-semibold text-neutral-900 sm:text-lg">{l.title}</div>
          </div>
          <span className="inline-flex items-center rounded-lg border border-neutral-300 px-3 py-1 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400">
            Open
          </span>
        </Link>
      ))}
    </div>
  )
}

export default QuickLinks
