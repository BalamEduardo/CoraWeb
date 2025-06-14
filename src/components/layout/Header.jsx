import React, { useState, useEffect } from 'react'
import CoraLogo from '../../assets/CoraLogo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#091322]/90 backdrop-blur-md border-b border-slate-700/50 shadow-lg'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo y texto "Cora WEB" al lado del logo */}
          <div className="flex items-center">
            <img
              src={CoraLogo}
              alt="Cora Web Logo"
              className="h-8 w-auto lg:h-10 cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setIsMobileMenuOpen(false)
              }}
            />
            <span
              className="ml-3 text-xl font-bold text-white tracking-wide select-none hidden sm:inline cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setIsMobileMenuOpen(false)
                }}
              >
                Cora <span className="text-blue-500">WEB</span>
              </span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('portafolio')}
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
              >
                Contacto
              </button>
              </nav>

              {/* Mostrar "Cora WEB" también en móviles */}
              <span
              className="ml-3 text-xl font-bold text-white tracking-wide select-none sm:inline lg:hidden cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setIsMobileMenuOpen(false)
              }}
              >
              Cora <span className="text-blue-500">WEB</span>
              </span>

              {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                  className="animate-pulse" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation with Smooth Animation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#091322]/95 backdrop-blur-md border-t border-slate-700/50">
            <nav className={`flex flex-col space-y-1 transition-all duration-300 transform ${
              isMobileMenuOpen 
                ? 'translate-y-0 py-4' 
                : '-translate-y-4 py-0'
            }`}>
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 font-medium py-3 px-4 text-left rounded-lg mx-2"
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Inicio
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 font-medium py-3 px-4 text-left rounded-lg mx-2"
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Nosotros
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 font-medium py-3 px-4 text-left rounded-lg mx-2"
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Servicios
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection('portafolio')}
                className="text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 font-medium py-3 px-4 text-left rounded-lg mx-2"
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Portfolio
                </span>
              </button>
              
              <div className="px-2 pt-2">
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                    </svg>
                    Contacto
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header