import React, { ReactNode, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, User, Music, BookOpen, Heart, FileText, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../lib/utils'
import ScrollArea from './ScrollArea'

interface LayoutProps {
  children: ReactNode
}

const navigation = [
  { path: '/', label: 'Selamat Datang', icon: Home },
  { path: '/uts-1', label: 'UTS-1 All About Me', icon: User },
  { path: '/uts-2', label: 'UTS-2 My Songs for You', icon: Music },
  { path: '/uts-3', label: 'UTS-3 My Stories for You', icon: BookOpen },
  { path: '/uts-4', label: 'UTS-4 My SHAPE', icon: Heart },
  { path: '/uts-5', label: 'UTS-5 My Personal Reviews', icon: FileText },
]

const avatarSrc = `${import.meta.env.BASE_URL}favicon.svg`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    setIsNavOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-neutral-900">
      <div className="relative mx-auto flex min-h-screen w-full flex-col md:flex-row">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur md:hidden">
          <div className="flex items-center gap-3">
            <img src={avatarSrc} alt="Rafi" className="w-10 h-10 rounded-md shadow-sm" />
            <div>
              <p className="text-sm font-semibold text-neutral-800">Muhammad Rafi</p>
              <p className="text-xs text-neutral-500">Portfolio Asesmen KIPP</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-3 py-2 text-neutral-600 shadow-sm transition hover:border-neutral-400 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2"
            aria-expanded={isNavOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            {isNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </header>

        <AnimatePresence initial={false}>
          {isNavOpen && (
            <motion.nav
              id="mobile-navigation"
              key="mobile-navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="md:hidden px-4 pb-4"
            >
              <div className="glass-effect rounded-2xl border border-neutral-200 bg-white/95 p-3 shadow-xl">
                <div className="space-y-2">
                  {navigation.map((item) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.path

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={cn(
                          'flex items-center gap-3 rounded-xl px-4 py-3 transition-colors',
                          isActive
                            ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-md'
                            : 'bg-white/90 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                        )}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hidden h-screen w-80 flex-shrink-0 flex-col border-r border-neutral-200 bg-white/95 shadow-xl backdrop-blur-xl glass-effect md:sticky md:top-0 md:flex"
        >
          <div className="p-8 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <img src={avatarSrc} alt="Rafi" className="w-12 h-12 rounded-md shadow-sm ring-1 ring-neutral-200" />
              <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-neutral-900 mb-0 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"
            >
              Muhammad Rafi Dhiyaulhaq
            </motion.h1>
            </div>
            
            <nav className="space-y-3 flex-1">
              {navigation.map((item, index) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        "group flex items-center space-x-3 px-5 py-4 rounded-xl transition-all duration-300 relative overflow-hidden",
                        isActive
                          ? "bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-lg shadow-neutral-500/25"
                          : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 hover:shadow-md"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <Icon size={20} className="relative z-10" />
                      <span className="font-medium relative z-10">{item.label}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </div>
        </motion.div>

        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto w-full px-4 py-6 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-effect rounded-3xl border border-neutral-200 bg-white/95 p-0 shadow-2xl backdrop-blur-xl md:min-h-[calc(100vh-6rem)]"
            >
              <ScrollArea className="rounded-3xl p-5 sm:p-8 lg:p-12">
                <div className="mx-auto w-full max-w-5xl pb-12">
                  {children}
                </div>
              </ScrollArea>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
