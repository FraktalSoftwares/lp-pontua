import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import ContactDialog from "./ContactDialog";

const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden flex flex-col justify-between" style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }}>
      {/* Overlay gradiente para legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-1/4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl hidden md:block z-10"></div>
      <div className="absolute top-40 left-1/3 w-16 h-16 bg-red-500/20 rounded-full blur-xl hidden md:block z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Texto removido conforme solicitado */}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-8 relative z-20">
        <div className="max-w-6xl mx-auto">
          <Button 
            variant="pink" 
            size="lg" 
            className="text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-6 font-bold rounded-full w-full sm:w-auto"
            onClick={() => setIsContactOpen(true)}
          >
            CONTRATE AGORA
          </Button>
        </div>
      </div>
    </section>

    <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};

export default HeroSection;
