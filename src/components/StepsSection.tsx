import { useState } from "react";
import { Button } from "@/components/ui/button";
import stepsImage from "@/assets/steps-saida.png";
import ContactDialog from "./ContactDialog";

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

        {/* Imagem dos passos */}
        <div className="flex justify-center mb-12">
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
