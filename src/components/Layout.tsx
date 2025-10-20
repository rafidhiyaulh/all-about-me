import React, { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, User, Music, BookOpen, Heart, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

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

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="flex h-screen max-w-none">
        {/* Sidebar */}
        <motion.div 
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-80 h-screen sticky top-0 glass-effect border-r border-white/20 shadow-xl backdrop-blur-xl bg-white/95 flex-shrink-0"
        >
          <div className="p-8 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <img src="/favicon.svg" alt="Rafi" className="w-12 h-12 rounded-md shadow-sm" />
              <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-slate-800 mb-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                          : "text-slate-600 hover:bg-white/70 hover:text-slate-800 hover:shadow-md"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
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
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="max-w-7xl mx-auto p-6 lg:p-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-effect rounded-3xl p-8 lg:p-12 shadow-2xl backdrop-blur-xl bg-white/95 border border-white/20 min-h-[calc(100vh-6rem)]"
            >
              <div className="max-w-5xl mx-auto">
                {children}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
