import iconPropostas from "@/assets/icon-propostas.png";
import iconAgilidade from "@/assets/icon-agilidade.png";
import iconMonitoramento from "@/assets/icon-monitoramento.png";
import featuresImage from "@/assets/features-image.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: null,
      iconImage: iconPropostas,
      title: "Propostas otimizadas",
      description: "Otimize a criação de propostas para redações com base nos principais vestibulares do Brasil",
    },
    {
      icon: null,
      iconImage: iconAgilidade,
      title: "Agilidade e precisão",
      description: "Corrija redações com mais rapidez e precisão, respeitando gêneros e competências exigidos",
    },
    {
      icon: null,
      iconImage: iconMonitoramento,
      title: "Monitoramento da evolução",
      description: "Monitore a evolução dos alunos e a qualidade das correções dos professores",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground max-w-4xl mx-auto">
          Crie propostas de redação alinhadas aos vestibulares e avalie o desempenho de alunos e professores com inteligência artificial
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          <div className="relative z-20">
            <img 
              src={featuresImage} 
              alt="Interface do PontuaAI" 
              className="relative z-10 rounded-2xl w-full h-auto"
            />
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
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
