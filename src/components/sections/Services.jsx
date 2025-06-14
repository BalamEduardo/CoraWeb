import React, { useState, useEffect, useRef } from 'react'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Desarrollo Web Personalizado",
      description: "Creamos aplicaciones web únicas y escalables que se adaptan perfectamente a las necesidades específicas de tu negocio.",
      features: ["Arquitectura escalable", "Diseño responsive", "Optimización SEO", "Integración de APIs"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/5 to-indigo-500/5"
    },
    {
      title: "Diseño UI/UX Avanzado",
      description: "Interfaces que cautivan y experiencias de usuario que convierten visitantes en clientes leales y satisfechos.",
      features: ["Research de usuarios", "Prototipado interactivo", "Testing de usabilidad", "Design systems"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/5 to-blue-500/5"
    },
    {
      title: "E-commerce Profesional",
      description: "Plataformas de comercio electrónico robustas que maximizan tus ventas y optimizan la experiencia de compra.",
      features: ["Gestión de inventario", "Pasarelas de pago", "Analytics avanzados", "Mobile commerce"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-500/5 to-purple-500/5"
    },
    {
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas que llevan tu negocio directamente a los dispositivos móviles de tus usuarios.",
      features: ["Desarrollo nativo", "Apps híbridas", "Push notifications", "Integración cloud"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/5 to-cyan-500/5"
    },
    {
      title: "Optimización & Performance",
      description: "Mejoramos la velocidad y rendimiento de tu sitio web para garantizar la mejor experiencia posible.",
      features: ["Core Web Vitals", "Optimización de imágenes", "Lazy loading", "CDN implementation"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-cyan-500 to-indigo-600",
      bgGradient: "from-cyan-500/5 to-indigo-500/5"
    },
    {
      title: "Mantenimiento & Soporte",
      description: "Soporte técnico continuo y mantenimiento proactivo para mantener tu sitio web siempre actualizado.",
      features: ["Monitoreo 24/7", "Actualizaciones de seguridad", "Backups automáticos", "Soporte técnico"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-500/5 to-blue-500/5"
    }
  ]

  const technologies = [
    { name: "React", color: "text-blue-400" },
    { name: "Next.js", color: "text-slate-300" },
    { name: "Vue.js", color: "text-green-400" },
    { name: "Node.js", color: "text-green-500" },
    { name: "Python", color: "text-yellow-400" },
    { name: "Laravel", color: "text-red-400" },
    { name: "MongoDB", color: "text-green-400" },
    { name: "PostgreSQL", color: "text-blue-300" },
    { name: "AWS", color: "text-orange-400" },
    { name: "Docker", color: "text-blue-400" },
    { name: "Figma", color: "text-purple-400" },
    { name: "TypeScript", color: "text-blue-500" }
  ]

  const process = [
    {
      step: "01",
      title: "Análisis & Estrategia",
      description: "Entendemos tu negocio, objetivos y audiencia para crear la estrategia perfecta."
    },
    {
      step: "02", 
      title: "Diseño & Prototipado",
      description: "Creamos wireframes y prototipos interactivos que visualizan la solución ideal."
    },
    {
      step: "03",
      title: "Desarrollo & Testing",
      description: "Construimos tu proyecto con las mejores prácticas y testing exhaustivo."
    },
    {
      step: "04",
      title: "Lanzamiento & Soporte",
      description: "Desplegamos tu proyecto y proporcionamos soporte continuo para tu éxito."
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="servicios" 
      className="relative min-h-screen w-full bg-[#091322] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-32 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/60 rounded-full animate-ping delay-1200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse delay-800"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 lg:py-32">
        
        {/* Header Section */}
        <div className={`text-center mb-20 lg:mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg mb-8">
            <div className="relative mr-3">
              <span className="w-3 h-3 bg-blue-400 rounded-full block animate-ping absolute"></span>
              <span className="w-3 h-3 bg-blue-400 rounded-full block relative"></span>
            </div>
            Servicios profesionales
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-8">
            Soluciones{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                Digitales
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full"></div>
            </span>
            <br />
            Excepcionales
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Transformamos tus ideas en <span className="text-cyan-300 font-medium">experiencias digitales extraordinarias</span> que 
            impulsan el crecimiento de tu negocio y conectan con tu audiencia de manera única.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 text-white transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-3' : ''}`}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className={`space-y-2 transition-all duration-500 ${activeService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Expand Button */}
                <button className="flex items-center text-cyan-300 font-medium mt-4 group-hover:text-cyan-200 transition-colors">
                  <span className="text-sm">
                    {activeService === index ? 'Ver menos' : 'Ver más detalles'}
                  </span>
                  <svg 
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${activeService === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className={`mb-20 lg:mb-32 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Tecnologías <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Modernas</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Utilizamos las herramientas más avanzadas del mercado para garantizar resultados excepcionales
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl lg:rounded-2xl p-4 lg:p-6 hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className={`font-bold text-sm lg:text-base ${tech.color} group-hover:scale-110 transition-transform`}>
                    {tech.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className={`mb-20 lg:mb-32 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Proceso</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Una metodología probada que garantiza resultados extraordinarios en cada proyecto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="group relative text-center"
              >
                {/* Connection Line (hidden on mobile) */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -translate-x-4"></div>
                )}
                
                <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-500">
                      {step.step}
                    </div>
                    
                    <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h4>
                    
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-12 lg:p-16 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Listo para llevar tu proyecto al <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">siguiente nivel</span>?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Conversemos sobre tu visión y descubre cómo podemos transformarla en una realidad digital extraordinaria
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    Iniciar Proyecto
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-slate-700/50 hover:shadow-lg">
                  <span className="flex items-center justify-center">
                    Ver Portfolio
                    <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services