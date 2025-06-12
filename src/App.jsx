// filepath: c:\Users\balam\Documents\CoraWeb\src\App.jsx
import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default App