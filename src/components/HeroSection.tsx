import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden flex flex-col justify-between" style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Decorative circles */}
      <div className="absolute top-20 right-1/4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl hidden md:block"></div>
      <div className="absolute top-40 left-1/3 w-16 h-16 bg-red-500/20 rounded-full blur-xl hidden md:block"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Sua plataforma de correção de redações com inteligência artificial para professores e escolas
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <Button variant="pink" size="lg" className="text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-6 font-bold rounded-full w-full sm:w-auto">
            AGENDAR DEMONSTRAÇÃO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
