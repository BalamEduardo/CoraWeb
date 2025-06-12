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
      className="relative min-h-screen bg-gray-900 flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left content - Main text */}
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full">
                  Disponible para nuevos proyectos
                </span>
              </div>

              {/* Main headline */}
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  PÁGINAS WEB CREATIVAS:
                  <br />
                  <span className="text-blue-400">DISEÑANDO SOLUCIONES</span>
                  <br />
                  DIGITALES & CONVERSIÓN
                </h1>
                
                <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Somos especialistas en crear páginas web innovadoras. 
                  ¡Elevemos tu marca juntos!
                </p>
              </div>

              {/* Years section */}
              <div className="flex items-center space-x-4 flex-wrap gap-4">
                <div className="text-3xl lg:text-4xl font-bold text-white">5+</div>
                <div className="text-gray-300">
                  <div className="font-medium">Años en Diseño Web</div>
                </div>
                <button
                  onClick={scrollToPortfolio}
                  className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Nuestros Proyectos</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right content - Cards grid */}
          <div className="col-span-12 lg:col-span-5 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              
              {/* Card 1 - Rosa */}
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl p-6 text-white">
                <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
                <div className="text-pink-100 text-sm">
                  Clientes satisfechos con sus proyectos soñados.
                </div>
              </div>

              {/* Card 2 - Verde */}
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl p-6 text-white">
                <div className="text-3xl lg:text-4xl font-bold mb-2">100+</div>
                <div className="text-emerald-100 text-sm">
                  Proyectos realizados con estudios de caso detallados
                </div>
              </div>

              {/* Card 3 - Naranja (quote) - Full width */}
              <div className="col-span-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl p-6 text-white">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm lg:text-lg font-medium mb-2 leading-relaxed">
                      "En píxeles confiamos, en creatividad prosperamos. Somos los arquitectos de sueños digitales, tejiendo magia de marketing a través de pantallas."
                    </div>
                    <div className="text-orange-100 text-sm">
                      <div className="font-medium">Cora Web</div>
                      <div className="text-xs">CEO y Fundador</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Reviews */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-6 text-gray-900">
                <div className="text-sm font-medium mb-3">Descubre Reseñas de Clientes</div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex space-x-1">
                    {/* Avatar placeholders */}
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/50 rounded-full"></div>
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/50 rounded-full"></div>
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/50 rounded-full"></div>
                  </div>
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-xs lg:text-sm text-gray-700 mb-2">Basado en 12,242 reseñas</div>
                <div className="flex items-center space-x-2">
                  <div className="text-2xl lg:text-3xl font-bold">4.9/5</div>
                  <div className="text-xl lg:text-2xl">⭐</div>
                </div>
              </div>

              {/* Card 5 - Conversion */}
              <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl p-6 text-gray-900">
                <div className="text-sm lg:text-lg font-bold mb-4 text-center">Conversión para tu negocio</div>
                <div className="flex justify-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="text-white font-bold text-lg lg:text-xl">68%</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <button
            onClick={() => openWhatsApp()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-3 shadow-xl hover:shadow-blue-200 transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
            </svg>
            <span>Solicitar Cotización</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero