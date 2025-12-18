import { useState } from "react";
import newSectionBackground from "@/assets/new-section-background.jpg.jpg";
import { ChevronDown } from "lucide-react";

const NewSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleBenefit = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const benefits = [
    {
      title: "Velocidade",
      description: "correção e ajustes instantâneos nas redações pela interação IA e professor. Ganho de escalabilidade para elaboração e correção de redações."
    },
    {
      title: "Inovação e criatividade",
      description: "criação de temas e rubricas personalizados"
    },
    {
      title: "Precisão",
      description: "feedback padronizados e detalhados com base nos critérios do ENEM e principais vestibulares"
    },
    {
      title: "Escalabilidade",
      description: "redações ilimitadas por mês*"
    },
    {
      title: "Gestão inteligente de dados",
      description: "informações que ajudam na tomada de decisão"
    },
    {
      title: "Tecnologia",
      description: "possibilidade de integração com outras plataformas e adequação às notas da sua escola"
    },
    {
      title: "Flexibilidade",
      description: "escolha do melhor plano para sua necessidade"
    },
    {
      title: "Assessoria pedagógica",
      description: "treinamentos e palestras com os melhores profissionais da área"
    },
    {
      title: "Análise de dados",
      description: "monitoramento do desempenho de cada aluno e gestão escolar com dados das redações"
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Por que professores e escolas escolhem a Pontua AI?
            </h2>

            <h3 className="text-lg sm:text-xl font-bold text-pink-500 mb-4 md:mb-6">
              Benefícios que só a Pontua AI tem:
            </h3>

            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`pb-2 ${index < benefits.length - 1 ? 'border-b border-white/20' : ''}`}
                >
                  <button
                    onClick={() => toggleBenefit(index)}
                    className="w-full flex items-center justify-between gap-3 text-left py-2 hover:text-pink-300 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-pink-500 text-lg flex-shrink-0">●</span>
                      <span className="font-bold text-sm md:text-base">{benefit.title}</span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm md:text-base text-white/90 pl-7">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Referência do asterisco */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-xs md:text-sm text-white/70">
                *Ver planos ativos para esta modalidade de contratação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
