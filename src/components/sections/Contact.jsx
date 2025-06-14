import React, { useState, useEffect, useRef } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      description: "Contáctanos directamente",
      contact: "hello@coraweb.com",
      action: "Enviar Email",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/5 to-indigo-500/5"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
        </svg>
      ),
      title: "WhatsApp",
      description: "Chat directo",
      contact: "+52 XXX XXX XXXX",
      action: "Abrir Chat",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/5 to-emerald-500/5"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Ubicación",
      description: "Visítanos",
      contact: "Ciudad de México, México",
      action: "Ver Mapa",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/5 to-blue-500/5"
    }
  ]

  const services = [
    "Desarrollo Web Personalizado",
    "Diseño UI/UX",
    "E-commerce",
    "Aplicaciones Móviles",
    "Optimización & Performance",
    "Mantenimiento & Soporte",
    "Consultoría Técnica",
    "Otro"
  ]

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Por definir"
  ]

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto?",
      answer: "El tiempo varía según la complejidad, pero típicamente entre 4-12 semanas para proyectos web completos."
    },
    {
      question: "¿Ofrecen mantenimiento posterior?",
      answer: "Sí, incluimos soporte técnico y mantenimiento continuo para garantizar el óptimo funcionamiento."
    },
    {
      question: "¿Trabajan con empresas internacionales?",
      answer: "Absolutamente. Tenemos experiencia trabajando con clientes de América, Europa y Asia."
    },
    {
      question: "¿Qué tecnologías utilizan?",
      answer: "Trabajamos con las tecnologías más modernas: React, Next.js, Node.js, Python, AWS y muchas más."
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="contacto" 
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
            Hablemos de tu proyecto
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-8">
            Hagamos{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                Realidad
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full"></div>
            </span>
            <br />
            Tu Visión
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Estamos listos para transformar tus <span className="text-cyan-300 font-medium">ideas extraordinarias</span> en 
            experiencias digitales que impulsen el crecimiento de tu negocio.
          </p>
        </div>

        {/* Contact Methods */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mb-6 text-white mx-auto transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-3' : ''}`}>
                  {method.icon}
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">
                  {method.description}
                </p>
                
                <p className="text-blue-300 font-medium mb-6">
                  {method.contact}
                </p>
                
                <button className="w-full px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-blue-500/50 text-white font-medium rounded-xl transition-all duration-300">
                  {method.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Info Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:mb-32 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Cuéntanos tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">proyecto</span>
              </h3>
              <p className="text-slate-300 mb-8 text-lg">
                Completa el formulario y te contactaremos en menos de 24 horas
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-700/70 transition-all duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-700/70 transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-700/70 transition-all duration-300"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Servicio de interés
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-slate-700/70 transition-all duration-300"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Presupuesto estimado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-slate-700/70 transition-all duration-300"
                    >
                      <option value="">Selecciona un rango</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-700/70 transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 disabled:transform-none disabled:shadow-none"
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-600/20 border border-green-500/30 rounded-xl text-green-300 text-center">
                    ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Info Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Why Choose Us */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">
                ¿Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Cora Web</span>?
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Respuesta rápida</h5>
                    <p className="text-slate-400 text-sm">Te contactamos en menos de 24 horas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Consultoría gratuita</h5>
                    <p className="text-slate-400 text-sm">Primera consulta sin costo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Garantía de calidad</h5>
                    <p className="text-slate-400 text-sm">Satisfacción garantizada o devolvemos tu dinero</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Process */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">
                Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Proceso</span>
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Contacto inicial</h5>
                    <p className="text-slate-400 text-sm">Analizamos tu proyecto y necesidades</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Propuesta personalizada</h5>
                    <p className="text-slate-400 text-sm">Diseñamos una solución a tu medida</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Desarrollo y entrega</h5>
                    <p className="text-slate-400 text-sm">Creamos tu proyecto con updates constantes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`mb-20 lg:mb-32 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Frecuentes</span>
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-300"
              >
                <h4 className="text-lg lg:text-xl font-bold text-white mb-4 hover:text-cyan-300 transition-colors">
                  {faq.question}
                </h4>
                <p className="text-slate-400 leading-relaxed hover:text-slate-300 transition-colors">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-12 lg:p-16 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Listo para el <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">despegue</span>?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                No esperes más. Tu competencia ya está en línea. Es hora de superarlos con una presencia digital extraordinaria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    Comenzar Ahora
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-slate-700/50 hover:shadow-lg">
                  <span className="flex items-center justify-center">
                    <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                    </svg>
                    WhatsApp
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

export default Contact