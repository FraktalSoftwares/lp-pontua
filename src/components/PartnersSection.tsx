import { useState } from "react";
import { Button } from "@/components/ui/button";
import parceirosBackground from "@/assets/parceiros-background.jpg";
import parceiroCarbonell from "@/assets/parceiro-carbonell.jpeg";
import parceiroRedacaoDialogia from "@/assets/parceiro-redacao-dialogia.jpeg";
import parceiroAgostiniano from "@/assets/parceiro-agostiniano.jpeg";
import ContactDialog from "./ContactDialog";

const PartnersSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const partners = [
    {
      name: "Colégio Carbonell",
      image: parceiroCarbonell,
      alt: "Logo Colégio Carbonell"
    },
    {
      name: "Redação e Dialogia",
      image: parceiroRedacaoDialogia,
      alt: "Logo Redação e Dialogia"
    },
    {
      name: "Colégio Agostiniano Mendel",
      image: parceiroAgostiniano,
      alt: "Logo Colégio Agostiniano Mendel"
    }
  ];

  return (
    <>
    <section 
      className="py-12 md:py-20 relative overflow-hidden min-h-[600px] md:min-h-[800px] flex items-center justify-center bg-gradient-to-r from-purple-900 via-blue-800 to-blue-600"
      style={{ 
        backgroundImage: `url(${parceirosBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">
            Nossos Parceiros
          </h2>
          
          {/* Grid de logos dos parceiros */}
          <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="hover:scale-105 transition-transform duration-300"
              >
                {partner.image ? (
                  <img 
                    src={partner.image} 
                    alt={partner.alt}
                    className="max-w-[200px] md:max-w-[280px] h-auto object-contain rounded-[10px]"
                  />
                ) : (
                  <span className="text-white text-sm text-center font-medium">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button 
              variant="pink" 
              size="lg" 
              className="text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-6 font-bold rounded-full"
              onClick={() => setIsContactOpen(true)}
            >
              FAÇA PARTE TAMBÉM
            </Button>
          </div>
        </div>
      </div>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </section>
    </>
  );
};

export default PartnersSection;
