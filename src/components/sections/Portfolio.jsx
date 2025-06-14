import React, { useState, useEffect, useRef } from 'react'

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)
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

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'UI/UX' }
  ]

  const projects = [
    {
      id: 1,
      title: "TechFlow Dashboard",
      category: "web",
      description: "Dashboard administrativo moderno con analytics en tiempo real y gestión de usuarios avanzada.",
      longDescription: "Plataforma completa de analytics y gestión empresarial con más de 50 widgets personalizables, sistema de notificaciones en tiempo real y arquitectura escalable que maneja millones de datos diarios.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      image: "/src/assets/project1.jpg",
      liveUrl: "https://techflow-demo.com",
      githubUrl: "https://github.com/coraweb/techflow",
      featured: true,
      stats: { users: "10K+", performance: "99.9%", satisfaction: "4.9/5" }
    },
    {
      id: 2,
      title: "ShopMax E-commerce",
      category: "ecommerce",
      description: "Plataforma de comercio electrónico con IA para recomendaciones personalizadas y checkout optimizado.",
      longDescription: "E-commerce de nueva generación con machine learning para personalización, sistema de pagos multi-gateway, inventario inteligente y experiencia de compra inmersiva.",
      technologies: ["Next.js", "Stripe", "MongoDB", "AI/ML"],
      image: "/src/assets/project2.jpg",
      liveUrl: "https://shopmax-demo.com",
      githubUrl: "https://github.com/coraweb/shopmax",
      featured: true,
      stats: { conversion: "+127%", revenue: "$2.3M", orders: "45K+" }
    },
    {
      id: 3,
      title: "FitTracker Mobile",
      category: "mobile",
      description: "App móvil para seguimiento de fitness con gamificación y comunidad integrada.",
      longDescription: "Aplicación móvil completa con tracking GPS, análisis de biometría, retos sociales, coaching personalizado y sincronización con dispositivos wearables.",
      technologies: ["React Native", "Firebase", "HealthKit", "Maps API"],
      image: "/src/assets/project3.jpg",
      liveUrl: "https://fittracker-app.com",
      githubUrl: "https://github.com/coraweb/fittracker",
      featured: false,
      stats: { downloads: "250K+", rating: "4.8/5", retention: "85%" }
    },
    {
      id: 4,
      title: "FinanceHub Platform",
      category: "web",
      description: "Plataforma fintech para gestión de inversiones con algoritmos de trading automatizado.",
      longDescription: "Suite completa de herramientas financieras con trading algorítmico, análisis predictivo, gestión de portfolios y compliance automatizado para instituciones financieras.",
      technologies: ["Vue.js", "Python", "TensorFlow", "Docker"],
      image: "/src/assets/project4.jpg",
      liveUrl: "https://financehub-demo.com",
      githubUrl: "https://github.com/coraweb/financehub",
      featured: true,
      stats: { volume: "$500M+", accuracy: "94.2%", clients: "1.2K+" }
    },
    {
      id: 5,
      title: "CreativeStudio Design",
      category: "design",
      description: "Sistema de diseño completo y herramientas de colaboración para equipos creativos.",
      longDescription: "Ecosistema completo de herramientas de diseño colaborativo con biblioteca de componentes, versionado automático, prototipado interactivo y integración con herramientas de desarrollo.",
      technologies: ["Figma API", "React", "WebRTC", "AWS"],
      image: "/src/assets/project5.jpg",
      liveUrl: "https://creativestudio-demo.com",
      githubUrl: "https://github.com/coraweb/creativestudio",
      featured: false,
      stats: { teams: "500+", assets: "100K+", efficiency: "+200%" }
    },
    {
      id: 6,
      title: "EduLearn Platform",
      category: "web",
      description: "Plataforma educativa con IA adaptativa para personalización del aprendizaje.",
      longDescription: "LMS de nueva generación con inteligencia artificial que adapta el contenido al ritmo de cada estudiante, gamificación avanzada y analytics predictivos para educadores.",
      technologies: ["React", "GraphQL", "AI/ML", "WebRTC"],
      image: "/src/assets/project6.jpg",
      liveUrl: "https://edulearn-demo.com",
      githubUrl: "https://github.com/coraweb/edulearn",
      featured: false,
      stats: { students: "50K+", completion: "89%", satisfaction: "4.7/5" }
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section 
      ref={sectionRef}
      id="portafolio" 
      className="relative min-h-screen w-full bg-[#091322] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-32 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-blue-300/60 rounded-full animate-ping delay-1200"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse delay-800"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 lg:py-32">
        
        {/* Header Section */}
        <div className={`text-center mb-20 lg:mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg mb-8">
            <div className="relative mr-3">
              <span className="w-3 h-3 bg-blue-400 rounded-full block animate-ping absolute"></span>
              <span className="w-3 h-3 bg-blue-400 rounded-full block relative"></span>
            </div>
            Proyectos destacados
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-8">
            Nuestro{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                Portfolio
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full"></div>
            </span>
            <br />
            Digital
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Explora una selección de <span className="text-cyan-300 font-medium">proyectos extraordinarios</span> que demuestran 
            nuestra capacidad para transformar visiones audaces en realidades digitales impactantes.
          </p>
        </div>

        {/* Featured Projects Showcase */}
        <div className={`mb-20 lg:mb-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Destacados</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Los proyectos que mejor representan nuestra excelencia técnica y creatividad
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-500 hover:transform hover:scale-105"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Image */}
                <div className="relative h-64 lg:h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.1)_25%,transparent_25%,transparent_75%,rgba(59,130,246,0.1)_75%,rgba(59,130,246,0.1)),linear-gradient(45deg,rgba(59,130,246,0.1)_25%,transparent_25%,transparent_75%,rgba(59,130,246,0.1)_75%,rgba(59,130,246,0.1))] bg-[size:20px_20px] bg-[position:0_0,10px_10px]"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-500">
                      {project.title.split(' ')[0].charAt(0)}{project.title.split(' ')[1]?.charAt(0)}
                    </div>
                    <p className="text-blue-300 font-medium">Imagen del proyecto</p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-blue-600/80 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-center">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white font-medium hover:bg-white/30 transition-all duration-300 mb-4"
                      >
                        Ver Detalles
                      </button>
                      <div className="flex space-x-4 justify-center">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300 transition-colors">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h4>
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                      {filters.find(f => f.id === project.category)?.label}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                          {value}
                        </div>
                        <div className="text-xs text-slate-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className={`mb-16 lg:mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Todos los <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Proyectos</span>
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-700 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:bg-slate-800/60 hover:border-blue-600/50 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-32 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl lg:rounded-3xl overflow-hidden hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl mx-auto mb-3 flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-500">
                    {project.title.split(' ')[0].charAt(0)}{project.title.split(' ')[1]?.charAt(0)}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg text-white text-xs font-bold">
                      Featured
                    </div>
                  )}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-xs text-blue-400 bg-blue-600/20 px-2 py-1 rounded-full">
                    {filters.find(f => f.id === project.category)?.label}
                  </span>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-300 transition-colors">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 rounded-md text-slate-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 rounded-md text-slate-300 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-12 lg:p-16 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Tienes un proyecto en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">mente</span>?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Hagamos realidad tu visión con la misma excelencia que caracteriza nuestro portfolio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    Crear Mi Proyecto
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-slate-700/50 hover:shadow-lg">
                  <span className="flex items-center justify-center">
                    Descargar Portfolio
                    <svg className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">{selectedProject.title}</h3>
                  <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 font-medium">
                    {filters.find(f => f.id === selectedProject.category)?.label}
                  </span>
                </div>
                
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  {selectedProject.longDescription}
                </p>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-4">Tecnologías Utilizadas</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Stats */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-4">Resultados</h4>
                  <div className="grid grid-cols-3 gap-6">
                    {Object.entries(selectedProject.stats).map(([key, value], index) => (
                      <div key={index} className="text-center bg-slate-700/50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-1">
                          {value}
                        </div>
                        <div className="text-slate-400 capitalize text-sm">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Proyecto
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio