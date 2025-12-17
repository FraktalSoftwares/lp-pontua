import iconPropostas from "@/assets/icon-propostas.png";
import iconAgilidade from "@/assets/icon-agilidade.png";
import iconMonitoramento from "@/assets/icon-monitoramento.png";
import featuresImage from "@/assets/mulher-feliz.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: null,
      iconImage: iconPropostas,
      title: "Propostas otimizadas",
      description: "Otimize a criação de propostas de redação de acordo com temas e critérios dos maiores vestibulares do Brasil.",
    },
    {
      icon: null,
      iconImage: iconAgilidade,
      title: "Agilidade e precisão",
      description: "Corrija redações com mais rapidez e qualidade, respeitando os critérios e as competências exigidas.",
    },
    {
      icon: null,
      iconImage: iconMonitoramento,
      title: "Monitoramento da evolução",
      description: "Monitore, em tempo real, a evolução da escrita dos alunos e avalie a qualidade das correções realizadas pelos professores. Tenha controle, insights pedagógicos e dados que ajudam a melhorar o desempenho geral da sua empresa.",
    },
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden min-h-[600px] md:min-h-[700px]"
      style={{ 
        backgroundImage: `url(${featuresImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground max-w-4xl mx-auto">
          Crie propostas para redações com base nos principais vestibulares do Brasil
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          {/* Espaço vazio para mostrar o background */}
          <div className="hidden md:block"></div>

          <div className="space-y-8 mx-auto md:mx-0 max-w-lg md:max-w-none">
            {features.map((feature, index) => (
              <div key={index} className="group flex items-start gap-4 relative pl-4 bg-white/90 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-navy-deep flex items-center justify-center overflow-hidden">
                  {feature.iconImage ? (
                    <img src={feature.iconImage} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <feature.icon className="w-6 h-6 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-title mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
