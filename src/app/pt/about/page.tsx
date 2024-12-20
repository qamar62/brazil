import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://via.placeholder.com/1920x1080/31343C/FFFFFF?text=Sobre+Nós"
            alt="Sobre Nós"
            priority
            quality={100}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
        </div>
        <div className="container relative z-10 mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center font-montserrat">
            Sobre Nós
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Experience */}
              <div>
                <h2 className="text-3xl font-bold mb-4 font-montserrat">Nossa História</h2>
                <p className="text-gray-600 leading-relaxed">
                  Desde 2000, estamos na vanguarda da indústria de viagens e gestão de destinos, 
                  criando experiências inesquecíveis para viajantes de todo o mundo. Com mais de 
                  duas décadas de experiência, nos estabelecemos como um nome confiável no turismo 
                  de Dubai.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-montserrat">Safari no Deserto</h3>
                  <p className="text-gray-600">
                    Experimente a magia do deserto árabe com nossos safaris exclusivos, 
                    combinando aventura, cultura e luxo em uma jornada inesquecível.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-montserrat">Tours pela Cidade</h3>
                  <p className="text-gray-600">
                    Descubra os pontos turísticos icônicos de Dubai e suas joias escondidas 
                    com nossos guias especializados, apresentando maravilhas modernas e 
                    patrimônio cultural.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-montserrat">Reservas de Hotéis</h3>
                  <p className="text-gray-600">
                    De resorts de luxo a hotéis boutique, oferecemos opções de hospedagem 
                    cuidadosamente selecionadas para atender a todas as preferências e orçamentos.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-montserrat">Transfers</h3>
                  <p className="text-gray-600">
                    Desfrute de serviços de transporte impecáveis com nossos motoristas 
                    profissionais e veículos de luxo, garantindo conforto e pontualidade.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6 font-montserrat">Por Que Nos Escolher</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-600">Mais de 20 anos de experiência no turismo em Dubai</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-600">Serviço personalizado e atenção aos detalhes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-600">Equipe multilíngue de guias experientes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-600">Suporte ao cliente 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
