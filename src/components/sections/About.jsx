import React, { useState, useEffect, useRef } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
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

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovación",
      description: "Siempre a la vanguardia tecnológica, explorando nuevas formas de crear experiencias digitales extraordinarias."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Calidad",
      description: "Cada línea de código, cada pixel de diseño, cada interacción está cuidadosamente crafteada para la excelencia."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Colaboración",
      description: "Trabajamos mano a mano con nuestros clientes para entender y superar sus expectativas más ambiciosas."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: "Compromiso",
      description: "Nuestro éxito se mide por el éxito de nuestros clientes. Cada proyecto es una oportunidad de crear algo extraordinario."
    }
  ]

  const stats = [
    { number: "150+", label: "Proyectos Exitosos", delay: "0s" },
    { number: "50+", label: "Clientes Felices", delay: "0.2s" },
    { number: "5+", label: "Años de Experiencia", delay: "0.4s" },
    { number: "99%", label: "Tasa de Satisfacción", delay: "0.6s" }
  ]

  const team = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Full Stack Developer",
      description: "Visionario tecnológico con más de 8 años transformando ideas en realidades digitales.",
      skills: ["React", "Node.js", "Python", "AWS"],
      image: "/src/assets/team1.jpg"
    },
    {
      name: "Sofia Martinez",
      role: "Lead UI/UX Designer",
      description: "Experta en crear interfaces que enamoran y experiencias que nunca se olvidan.",
      skills: ["Figma", "Adobe Creative", "Prototyping", "User Research"],
      image: "/src/assets/team2.jpg"
    },
    {
      name: "David Chen",
      role: "Senior Developer",
      description: "Arquitecto de soluciones robustas y escalables que impulsan el crecimiento de nuestros clientes.",
      skills: ["Vue.js", "Laravel", "Docker", "MySQL"],
      image: "/src/assets/team3.jpg"
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="relative min-h-screen w-full bg-gradient-to-br bg-[#091322] via-blue-900 to-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-300/60 rounded-full animate-ping delay-1200"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse delay-800"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 lg:py-32">

        {/* Header Section */}
        <div className={`text-center mb-20 lg:mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg mb-8">
            <div className="relative mr-3">
              <span className="w-3 h-3 bg-blue-400 rounded-full block animate-ping absolute"></span>
              <span className="w-3 h-3 bg-blue-400 rounded-full block relative"></span>
            </div>
            Conoce nuestro equipo
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-8">
            Creando el{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                Futuro
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full"></div>
            </span>
            <br />
            Digital
          </h2>

          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Somos un equipo de <span className="text-cyan-300 font-medium">visionarios digitales</span> apasionados por
            transformar ideas audaces en experiencias web extraordinarias que impulsan el éxito de nuestros clientes.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 lg:mb-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: stat.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm lg:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 lg:p-12">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Nuestra Misión</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Democratizar el acceso a tecnología web de clase mundial, empoderando a empresas de todos los tamaños
                  para que puedan competir en el mercado digital global con herramientas extraordinarias.
                </p>
                <div className="flex items-center text-cyan-300 font-medium">
                  <span>Transformando visiones en realidad</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-80 lg:h-96 flex items-center justify-center">
              {/* SVG Illustration */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl flex items-center justify-center border border-blue-500/20 backdrop-blur-sm">
                <svg className="w-3/4 h-3/4 text-blue-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400/80 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-cyan-400/80 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 left-4 w-2 h-2 bg-blue-300/80 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`mb-20 lg:mb-32 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Valores</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Los principios que guían cada decisión y definen quiénes somos como equipo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 text-white transition-all duration-500 ${activeCard === index ? 'scale-110 rotate-3' : ''}`}>
                    {value.icon}
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Conoce al <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Equipo</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Los visionarios detrás de cada proyecto extraordinario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h4>

                  <p className="text-blue-400 font-medium mb-4">
                    {member.role}
                  </p>

                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {member.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 lg:mt-32 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-12 lg:p-16 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Listo para crear algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">extraordinario</span>?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Únete a los visionarios que ya transformaron sus ideas en experiencias digitales extraordinarias
              </p>
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  Comenzar Nuestro Proyecto
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About