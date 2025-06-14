import { useState } from 'react'
import { BRAND, NAVIGATION } from '../../data/constants'

const Header = ({ activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="flex items-center space-x-4 text-gray-900 hover:text-blue-600 transition-colors group"
            >
              
              <span className="flex items-center ">
                <img
                  src="./src/assets/CoraLogo.png"
                  alt="Logo"
                  className="w-16 h-16 rounded-full object-cover transition-transform duration-200 transform group-hover:scale-105"
                />
                <span className="font-bold text-3xl tracking-tight">{BRAND.name}</span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-2 lg:block hidden">
            {NAVIGATION.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="lg:flex hidden">
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-blue-200 transform hover:-translate-y-0.5"
            >
              Solicitar Cotización
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-8 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-lg">
              {NAVIGATION.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-6 py-4 text-lg font-medium rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection('contacto')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-center px-6 py-4 text-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl mt-6 shadow-lg"
              >
                Solicitar Cotización
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header