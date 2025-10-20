import React from 'react'
import { Link } from 'react-router-dom'

const QuickLinks: React.FC = () => {
  const links = [
    { title: 'UTS-1 All About Me', to: '/uts-1' },
    { title: 'UTS-2 My Songs for You', to: '/uts-2' },
    { title: 'UTS-3 My Stories for You', to: '/uts-3' },
    { title: 'UTS-4 My SHAPE', to: '/uts-4' },
    { title: 'UTS-5 My Personal Reviews', to: '/uts-5' },
  ]

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((l) => (
        <Link key={l.to} to={l.to} className="card bg-base-100 shadow-md">
          <div className="card-body p-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-500">Go to</div>
              <div className="text-lg font-semibold text-slate-800">{l.title}</div>
            </div>
            <button className="btn btn-ghost btn-sm">Open</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default QuickLinks
