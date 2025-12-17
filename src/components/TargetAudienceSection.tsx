import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "./ContactDialog";

const TargetAudienceSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const audiences = [
    {
      icon: CheckCircle2,
      title: "PROFESSORES E CORRETORES",
      description: "Mais eficiência e precisão na correção de redações, feedbacks padronizados e suporte para a definição das melhores estratégias pedagógicas.",
      variant: "white" as const,
    },
    {
      icon: CheckCircle2,
      title: "GESTORES ESCOLARES",
      description: "Gestão de equipe, acompanhamento da qualidade das correções e análise da evolução do desempenho dos alunos.",
      variant: "blue" as const,
    },
    {
      icon: CheckCircle2,
      title: "ESCOLAS E CURSOS PRÉ-VESTIBULARES",
      description: "Redução de até 70% o tempo de correção, acompanhamento da evolução dos estudantes e apoio à gestão pedagógica com dados confiáveis. Solução integrada para fortalecer o ensino com autonomia pedagógica, tecnologia e gestão educacional para elevar o nível da produção textual e impulsionar os resultados da sua empresa.",
      variant: "white" as const,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Para quem é a plataforma?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Torne a correção de redações mais ágil e estratégica, tendo como base critérios dos principais vestibulares do país.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {audiences.map((audience, index) => (
          <div
            key={index}
            className={`group rounded-3xl shadow-sm transition-transform duration-300 hover:-translate-y-6 relative overflow-hidden ${
              audience.variant === "blue"
                ? "flex flex-col items-start p-8 gap-4 rounded-2xl text-white"
                : "p-8 bg-white text-foreground"
            }`}
              style={
                audience.variant === "blue"
                  ? {
                      background: "linear-gradient(100.85deg, #020173 -13.15%, #0302B5 108.02%)",
                      boxShadow: "0px 4px 80px 6px rgba(0, 0, 0, 0.06)",
                    }
                  : {
                      boxShadow: "0px 4px 80px 6px #0000000F",
                    }
              }
            >
              <div 
                className={`absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-300 ${
                  audience.variant === "blue" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
                style={{
                  background: "linear-gradient(90deg, #9595E8 0%, #E737A3 100%)",
                  borderBottomLeftRadius: "16px",
                  borderBottomRightRadius: "16px",
                }}
              />
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  audience.variant === "blue"
                    ? "bg-blue-400/80"
                    : "bg-blue-400/80"
                }`}
              >
                <audience.icon
                  className={`w-8 h-8 ${
                    audience.variant === "blue" ? "text-white" : "text-white"
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
              <p className={audience.variant === "blue" ? "text-white/90" : "text-foreground/70"}>
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="pink" 
            size="lg" 
            className="text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-6 font-bold rounded-full"
            onClick={() => setIsContactOpen(true)}
          >
            CONTRATE AGORA
          </Button>
        </div>
      </div>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </section>
  );
};

export default TargetAudienceSection;
