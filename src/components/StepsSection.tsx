import { useState } from "react";
import { Button } from "@/components/ui/button";
import stepsImage from "@/assets/steps-saida.png";
import ContactDialog from "./ContactDialog";

// Conteudo dos passos transcrito literalmente de steps-saida.png para a versao mobile em DOM.
// Desktop continua usando a imagem; eventual edicao de copy aqui exige tambem editar a imagem.
// TODO: extrair cores arbitrarias (#1B0E3E, #B5B5B5, #4DD1F0) para tokens do tema se houver reuso.
const steps = [
  {
    number: "01",
    title: "Cadastre-se aqui",
    bullets: ["converse com um consultor especializado"],
    circleClass: "bg-[#1B0E3E]",
    textColorClass: "text-[#1B0E3E]",
  },
  {
    number: "02",
    title: "Adquira a plataforma",
    bullets: ["permita que sua equipe e seus alunos possam criar, corrigir e evoluir"],
    circleClass: "bg-blue-cta",
    textColorClass: "text-blue-cta",
  },
  {
    number: "03",
    title: "Crie",
    bullets: ["Temas, atividades e rubricas"],
    // Cinza claro mantido fiel a arte; pode falhar contraste WCAG sobre fundo branco.
    circleClass: "bg-[#B5B5B5]",
    textColorClass: "text-[#B5B5B5]",
  },
  {
    number: "04",
    title: "Envie a redação",
    bullets: ["digitada ou manuscrita"],
    circleClass: "bg-pink-primary",
    textColorClass: "text-pink-primary",
  },
  {
    number: "05",
    title: "Alcance os melhores resultados",
    bullets: [
      "corrija com ou sem o uso da IA",
      "feedback personalizado ao aluno",
    ],
    circleClass: "bg-[#4DD1F0]",
    textColorClass: "text-[#4DD1F0]",
  },
  {
    number: "06",
    title: "Vá além dos dados",
    // String "pelos (dos) alunos" preservada literalmente do arquivo de imagem.
    bullets: [
      "gestão de desempenho pelos (dos) alunos",
      "gestão de desenvolvimento pela escola e pelo professor",
    ],
    circleClass: "bg-gradient-to-br from-pink-primary to-navy-deep",
    textColorClass: "text-navy-deep",
  },
];

const StepsSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Veja como é simples utilizar nossa plataforma
          </h2>
        </div>

        {/* Mobile: timeline vertical em DOM */}
        <div className="md:hidden mb-12 space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div
                className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${step.circleClass}`}
              >
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className={`font-bold text-lg mb-2 ${step.textColorClass}`}>
                  {step.title}
                </h3>
                <ul className="space-y-1">
                  {step.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex gap-2">
                      <span className={`flex-shrink-0 ${step.textColorClass}`}>●</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: imagem original */}
        <div className="hidden md:flex justify-center mb-12">
          <img
            src={stepsImage}
            alt="Passos para usar PontuaAI"
            className="w-full max-w-6xl h-auto"
          />
        </div>

        {/* Botão EXPERIMENTE */}
        <div className="text-center">
          <Button 
            variant="pink" 
            size="lg" 
            className="text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-6 font-bold rounded-full"
            onClick={() => setIsContactOpen(true)}
          >
            EXPERIMENTE
          </Button>
        </div>
      </div>
    </section>

    <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};

export default StepsSection;
