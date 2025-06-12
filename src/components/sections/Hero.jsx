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
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-bounce delay-1200"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left content - Enhanced text section */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Status badge with enhanced design */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg">
              <div className="relative mr-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full block animate-ping absolute"></span>
                <span className="w-3 h-3 bg-blue-400 rounded-full block relative"></span>
              </div>
              Disponible para nuevos proyectos
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Enhanced headline with better typography */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight">
                Building{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                    Digital
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 rounded-full"></div>
                </span>
                <br />
                Excellence
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
                We craft <span className="text-blue-300 font-medium">exceptional web experiences</span> that 
                combine stunning design with cutting-edge technology to drive your business forward.
              </p>
            </div>

            {/* Enhanced CTA section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => openWhatsApp()}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Project
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
              </button>
              
              <button
                onClick={scrollToPortfolio}
                className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-slate-700/50 hover:shadow-lg"
              >
                <span className="flex items-center justify-center">
                  View Our Work
                  <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm mb-4">Trusted by innovative companies</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-slate-500 font-semibold">TechCorp</div>
                <div className="text-slate-500 font-semibold">Innovate Inc</div>
                <div className="text-slate-500 font-semibold">FutureWeb</div>
                <div className="text-slate-500 font-semibold">Digital Pro</div>
              </div>
            </div>
          </div>

          {/* Right content - Redesigned interactive showcase */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]" style={{ perspective: '1000px' }}>
              
              {/* Main browser window - Center stage */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-96 h-64 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 z-30 group">
                {/* Browser chrome */}
                <div className="w-full h-10 bg-slate-800/80 rounded-t-2xl flex items-center px-4 space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 h-6 bg-slate-700/60 rounded-lg mx-4 flex items-center px-3">
                    <div className="w-3 h-3 text-slate-400">🔒</div>
                    <span className="text-xs text-slate-400 ml-2">coraweb.dev</span>
                  </div>
                </div>
                
                {/* Website content */}
                <div className="p-6 space-y-4">
                  <div className="w-full h-16 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-xl flex items-center justify-center group-hover:from-blue-500/60 group-hover:to-purple-500/60 transition-all">
                    <div className="w-8 h-8 bg-white/40 rounded-lg"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-3 bg-white/20 rounded-full w-full"></div>
                    <div className="h-3 bg-white/15 rounded-full w-4/5"></div>
                    <div className="h-3 bg-white/10 rounded-full w-3/5"></div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <div className="w-20 h-8 bg-blue-500/50 rounded-lg"></div>
                    <div className="w-16 h-8 bg-slate-600/50 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Code editor - Left side */}
              <div className="absolute top-20 left-4 w-80 h-56 bg-slate-900/90 backdrop-blur-xl border border-slate-600/30 rounded-2xl shadow-xl transform -rotate-6 hover:-rotate-3 transition-all duration-500 z-20 group">
                <div className="w-full h-10 bg-slate-800/90 rounded-t-2xl flex items-center px-4 space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-xs text-slate-300 ml-2">components/Hero.jsx</span>
                </div>
                
                <div className="p-4 space-y-2 font-mono text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">const</span>
                    <span className="text-emerald-400">Hero</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-yellow-400">() =</span>
                  </div>
                  <div className="flex items-center space-x-2 ml-2">
                    <span className="text-purple-400">return</span>
                    <span className="text-green-400">si</span>
                  </div>
                  <div className="flex items-center ml-4">
                    <span className="text-red-400">&lt;section</span>
                    <span className="text-blue-400 ml-2">className=</span>
                    <span className="text-green-400">"hero"</span>
                    <span className="text-red-400">&gt;</span>
                  </div>
                  <div className="ml-6 space-y-1.5">
                    <div className="h-2 bg-slate-600/60 rounded w-4/5"></div>
                    <div className="h-2 bg-slate-600/40 rounded w-3/5"></div>
                    <div className="h-2 bg-slate-600/60 rounded w-2/3"></div>
                    <div className="h-2 bg-slate-600/40 rounded w-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Mobile design - Right side */}
              <div className="absolute top-32 right-8 w-32 h-64 bg-slate-800/90 backdrop-blur-xl border border-slate-600/30 rounded-3xl shadow-xl transform rotate-12 hover:rotate-6 transition-all duration-500 z-25">
                <div className="w-full h-8 bg-slate-900/80 rounded-t-3xl flex items-center justify-center">
                  <div className="w-8 h-1 bg-slate-600 rounded-full"></div>
                </div>
                
                <div className="p-3 space-y-3">
                  <div className="w-full h-12 bg-gradient-to-r from-blue-500/50 to-cyan-400/50 rounded-xl"></div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/20 rounded w-full"></div>
                    <div className="h-2 bg-white/15 rounded w-3/4"></div>
                    <div className="h-2 bg-white/10 rounded w-1/2"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 bg-white/10 rounded-lg"></div>
                    <div className="h-8 bg-white/10 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Analytics dashboard - Bottom */}
              <div className="absolute bottom-8 left-16 w-72 h-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl transform rotate-3 hover:rotate-1 transition-all duration-500 z-20">
                <div className="w-full h-10 bg-slate-800/60 rounded-t-2xl flex items-center px-4 space-x-2">
                  <div className="w-6 h-6 bg-blue-500/60 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">Analytics Dashboard</span>
                </div>
                
                <div className="p-4 space-y-3">
                  <div className="w-full h-12 bg-gradient-to-r from-emerald-500/40 to-blue-500/40 rounded-xl p-2">
                    <div className="h-2 bg-white/40 rounded w-1/4 mb-1"></div>
                    <div className="h-4 bg-white/60 rounded w-1/3"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 bg-white/20 rounded-xl p-2">
                      <div className="h-1.5 bg-white/40 rounded w-2/3 mb-1"></div>
                      <div className="h-3 bg-white/60 rounded w-1/2"></div>
                    </div>
                    <div className="h-12 bg-white/20 rounded-xl p-2">
                      <div className="h-1.5 bg-white/40 rounded w-2/3 mb-1"></div>
                      <div className="h-3 bg-white/60 rounded w-1/2"></div>
                    </div>
                    <div className="h-12 bg-white/20 rounded-xl p-2">
                      <div className="h-1.5 bg-white/40 rounded w-2/3 mb-1"></div>
                      <div className="h-3 bg-white/60 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Enhanced stats section */}
        <div className="mt-24 pt-12 border-t border-slate-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 group-hover:scale-110 transition-transform">150+</div>
              <div className="text-slate-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400 mb-2 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-slate-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2 group-hover:scale-110 transition-transform">7+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-slate-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero