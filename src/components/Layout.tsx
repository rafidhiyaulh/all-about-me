import React, { ReactNode, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

interface LayoutProps {
  children: ReactNode
}

const utsLinks = [
  { path: '/uts-1', label: 'UTS-1 All About Me' },
  { path: '/uts-2', label: 'UTS-2 My Songs for You' },
  { path: '/uts-3', label: 'UTS-3 My Stories for You' },
  { path: '/uts-4', label: 'UTS-4 My SHAPE' },
  { path: '/uts-5', label: 'UTS-5 My Personal Reviews' },
]

const uasLinks = [
  { path: '/uas-1', label: 'UAS-1 My Concepts' },
  { path: '/uas-2', label: 'UAS-2 My Opinions' },
  { path: '/uas-3', label: 'UAS-3 My Innovations' },
  { path: '/uas-4', label: 'UAS-4 My Knowledge' },
  { path: '/uas-5', label: 'UAS-5 My Professional Reviews' },
]

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    setIsNavOpen(false)
  }, [location.pathname])

  const navItem = (path: string, label: string) => {
    const isActive = location.pathname === path
    return (
      <Link key={path} to={path} className={`nav-item${isActive ? ' is-active' : ''}`}>
        <span className="nav-dot" />
        {label}
      </Link>
    )
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--ink)' }}>
      <div className="relative mx-auto flex min-h-screen w-full flex-col md:flex-row">
        {/* Mobile header */}
        <header
          className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 md:hidden"
          style={{ background: 'var(--panel)', borderBottom: '1px solid var(--border)' }}
        >
          <div>
            <p className="text-sm font-bold" style={{ color: 'var(--ink)' }}>Muhammad Rafi Dhiyaulhaq</p>
            <p className="eyebrow">Portfolio KIPP</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="btn btn-outline focus-ring"
              style={{ padding: '7px', borderRadius: '8px' }}
              aria-label="Ganti tema"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              type="button"
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="btn btn-outline focus-ring"
              style={{ padding: '7px 10px' }}
              aria-expanded={isNavOpen}
              aria-controls="mobile-navigation"
              aria-label="Buka navigasi"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {isNavOpen ? (
                  <><line x1="2" y1="2" x2="14" y2="14" /><line x1="14" y1="2" x2="2" y2="14" /></>
                ) : (
                  <><line x1="1" y1="3" x2="15" y2="3" /><line x1="1" y1="8" x2="15" y2="8" /><line x1="1" y1="13" x2="15" y2="13" /></>
                )}
              </svg>
            </button>
          </div>
        </header>

        {isNavOpen && (
          <div
            onClick={() => setIsNavOpen(false)}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(0,0,0,0.4)' }}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`app-sidebar${isNavOpen ? ' is-open' : ''} w-72 flex-shrink-0 flex-col md:flex`}
          style={{
            display: isNavOpen ? 'flex' : undefined,
            background: 'var(--panel)',
            borderRight: '1px solid var(--border)',
            zIndex: 50,
          }}
        >
          <div className="flex h-full flex-col p-6">
            <div className="mb-5">
              <h1 className="text-xl font-extrabold" style={{ color: 'var(--ink)', letterSpacing: '-0.025em' }}>
                Muhammad Rafi Dhiyaulhaq
              </h1>
              <p className="mt-1 text-xs font-semibold" style={{ color: 'var(--brand-fill)' }}>
                Portfolio Asesmen II2100 KIPP
              </p>
            </div>

            <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
              {navItem('/', 'Selamat Datang')}

              <div className="eyebrow mt-4 mb-1 px-3">UTS</div>
              {utsLinks.map((l) => navItem(l.path, l.label))}

              <div className="eyebrow mt-4 mb-1 px-3">UAS</div>
              {uasLinks.map((l) => navItem(l.path, l.label))}
            </nav>

            <div className="mt-4 flex items-center justify-between gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
              <div>
                <div className="text-xs font-bold" style={{ color: 'var(--ink)' }}>STEI ITB</div>
                <div className="mono text-[10px]" style={{ color: 'var(--muted)' }}>18222069</div>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="btn btn-outline focus-ring"
                style={{ padding: '7px', borderRadius: '8px' }}
                aria-label="Ganti tema terang/gelap"
                title={theme === 'dark' ? 'Mode terang' : 'Mode gelap'}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
