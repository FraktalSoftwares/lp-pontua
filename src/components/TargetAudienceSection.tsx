import { Button } from "@/components/ui/button";
import { UserCheck, Building2, GraduationCap } from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: UserCheck,
      title: "Professores e corretores",
      description: "Professores e corretores que querem mais eficiência e precisão na correção de redações.",
      variant: "green" as const,
    },
    {
      icon: Building2,
      title: "Gestores escolares",
      description: "Gestores escolares que desejam acompanhar a qualidade dos correções e a evolução dos alunos.",
      variant: "blue" as const,
    },
    {
      icon: GraduationCap,
      title: "Escolas e cursinhos",
      description: "Escolas e cursinhos que buscam uma solução moderna e baseada em inteligência artificial para potencializar o ensino da escrita.",
      variant: "green" as const,
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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl ${
                audience.variant === "blue"
                  ? "bg-navy-deep text-white"
                  : "bg-green-light text-foreground"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                  audience.variant === "blue"
                    ? "bg-white/20"
                    : "bg-green-icon/20"
                }`}
              >
                <audience.icon
                  className={`w-6 h-6 ${
                    audience.variant === "blue" ? "text-white" : "text-green-icon"
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
              <p className={audience.variant === "blue" ? "text-white/90" : "text-foreground/80"}>
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="pink" size="lg">
            Assinar agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
