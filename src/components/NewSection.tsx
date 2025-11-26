import newSectionBackground from "@/assets/new-section-background.jpg.jpg";

const NewSection = () => {
  const benefits = [
    {
      title: "Velocidade",
      description: "Correção e ajustes instantâneos nas redações pela interação IA e professor. Ganhe escalabilidade para elaboração e correção de redações."
    },
    {
      title: "Inovação e criatividade",
      description: "Criação de temas e rubricas personalizados"
    },
    {
      title: "Precisão",
      description: "Feedback padronizados e detalhados com base nos critérios do ENEM e principais vestibulares"
    },
    {
      title: "Escalabilidade",
      description: "Redações ilimitadas por mês*"
    },
    {
      title: "Gestão inteligente de dados",
      description: "Informações que ajudam na tomada de decisão"
    },
    {
      title: "Tecnologia",
      description: "Possibilidade de integração com outras plataformas e adequação às notas da sua escola"
    },
    {
      title: "Flexibilidade",
      description: "Escolha o melhor plano para sua necessidade"
    },
    {
      title: "Assessoria pedagógica",
      description: "Treinamentos e palestras com os melhores profissionais da área"
    },
    {
      title: "Análise de dados",
      description: "Monitore a evolução de cada aluno e acompanhe os dados das redações para gestão escolar"
    }
  ];

  return (
    <section 
      className="py-12 md:py-20 relative overflow-hidden" 
      style={{ 
        backgroundImage: `url(${newSectionBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Espaço vazio à esquerda para mostrar a imagem de fundo - oculto em mobile */}
          <div className="hidden md:block"></div>

          {/* Conteúdo à direita */}
          <div className="text-white">
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
              Simplifica a gestão para escolas, professores com correção híbrida e criação de conteúdo personalizado, e oferece aos alunos prática ilimitada de escrita.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Por que professores e escolas escolhem a Pontua AI?
            </h2>

            <h3 className="text-lg sm:text-xl font-bold text-pink-500 mb-4 md:mb-6">
              Benefícios que só a Pontua AI tem:
            </h3>

            <div className="space-y-3 md:space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <span className="text-pink-500 text-lg md:text-xl mt-1 flex-shrink-0">●</span>
                  <div className="text-sm md:text-base">
                    <span className="font-bold">{benefit.title}:</span> {benefit.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
