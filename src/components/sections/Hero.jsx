import { openWhatsApp } from '../../utils/whatsapp'

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portafolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen bg-[#091322] flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs - Navy/Blue theme */}
        <div className="absolute top-20 left-4 lg:left-10 w-48 h-48 lg:w-72 lg:h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 lg:right-10 w-64 h-64 lg:w-96 lg:h-96 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 lg:w-80 lg:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px] lg:bg-[size:50px_50px]"></div>
        
        {/* Floating particles with blue theme */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-400/60 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-indigo-400/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-blue-300/60 rounded-full animate-bounce delay-1200"></div>
        <div className="absolute top-1/2 left-4 lg:left-10 w-1 h-1 bg-indigo-300/60 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-400/60 rounded-full animate-pulse delay-800"></div>
        <div className="absolute top-2/3 left-2/3 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-indigo-400/60 rounded-full animate-bounce delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-10 lg:pt-8">
          
          {/* Left content - Enhanced text section */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
            
            {/* Status badge with enhanced design */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-sm shadow-lg">
              <div className="relative mr-2 sm:mr-3">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full block animate-ping absolute"></span>
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full block relative"></span>
              </div>
              <span className="hidden sm:inline">Disponible para nuevos proyectos</span>
              <span className="sm:hidden">Disponible</span>
              <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Enhanced headline with better typography */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tight">
                Building{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400">
                    Digital
                  </span>
                  <div className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400 rounded-full"></div>
                </span>
                <br />
                Excellence
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
                We craft <span className="text-blue-300 font-medium">exceptional web experiences</span> that 
                combine stunning design with cutting-edge technology to drive your business forward.
              </p>
            </div>

            {/* Enhanced CTA section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 lg:pt-4 justify-center lg:justify-start">
              <button
                onClick={() => openWhatsApp()}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                  Start Your Project
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
              </button>
              
              <button
                onClick={scrollToPortfolio}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-slate-700/50 hover:shadow-lg"
              >
                <span className="flex items-center justify-center text-sm sm:text-base">
                  View Our Work
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="pt-6 lg:pt-8 border-t border-slate-700/50">
              <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">Trusted by innovative companies</p>
              <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-8 opacity-60">
                <div className="text-slate-500 font-semibold text-xs sm:text-sm">TechCorp</div>
                <div className="text-slate-500 font-semibold text-xs sm:text-sm">Innovate Inc</div>
                <div className="text-slate-500 font-semibold text-xs sm:text-sm hidden sm:block">FutureWeb</div>
                <div className="text-slate-500 font-semibold text-xs sm:text-sm hidden sm:block">Digital Pro</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative hidden lg:block order-1 lg:order-2">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              
              {/* Hero image container */}
              <div className="relative w-full h-full flex items-center justify-center ">
                
                {/* Main hero image */}
                <div className="relative z-20 w-full max-w-lg">
                  <img 
                    src="./src/assets/EstiloHero.png" 
                    alt="Digital Excellence Illustration" 
                    className="w-full h-auto object-contain animate-float border-2 border-blue-500/60 rounded-3xl shadow-lg shadow-blue-600/100"
                  
                
                  />
                </div>

                {/* Optional floating elements around the image */}
                <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400/80 rounded-full animate-ping"></div>
                <div className="absolute top-40 left-16 w-2 h-2 bg-indigo-400/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-20 right-12 w-4 h-4 bg-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-28 right-32 w-2.5 h-2.5 bg-cyan-400/70 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>

              </div>
            </div>
          </div>
        </div>

        {/* Feature cards section with floating animation */}
        <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
          {/* Diseño Innovador */}
          <div className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform animate-pulse">
                <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Diseño Innovador</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Creamos interfaces que no solo se ven increíbles, sino que funcionan de manera intuitiva.
              </p>
            </div>
          </div>

          {/* Desarrollo Avanzado */}
          <div className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-slate-800/60 hover:border-indigo-600/50 transition-all duration-300 hover:transform hover:scale-105 animate-float" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform animate-pulse">
                <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Desarrollo Avanzado</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tecnologías de vanguardia para construir aplicaciones web robustas y escalables.
              </p>
            </div>
          </div>

          {/* Rendimiento Óptimo */}
          <div className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-slate-800/60 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform animate-pulse">
                <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Rendimiento Óptimo</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Optimización extrema para velocidades de carga ultrarrápidas y experiencias fluidas.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced stats section */}
        <div className="mt-16 lg:mt-24 pt-8 lg:pt-12 border-t border-slate-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 mb-1 lg:mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-slate-400 text-xs sm:text-sm">Proyectos Exitosos</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-400 mb-1 lg:mb-2 group-hover:scale-110 transition-transform">99%</div>
              <div className="text-slate-400 text-xs sm:text-sm">Satisfacción Cliente</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-1 lg:mb-2 group-hover:scale-110 transition-transform">10+</div>
              <div className="text-slate-400 text-xs sm:text-sm">Años Experiencia</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 mb-1 lg:mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-slate-400 text-xs sm:text-sm">Soporte Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero