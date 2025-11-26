import { Button } from "@/components/ui/button";
import ipadImage from "@/assets/ipad-mini.png";
import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden" style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Decorative circles */}
      <div className="absolute top-20 right-1/4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
      <div className="absolute top-40 left-1/3 w-16 h-16 bg-red-500/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Sua plataforma de correção de redações com inteligência artificial para professores e escolas
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Otimize seu tempo com uma correção ágil e precisa. O Pontua AI te ajuda a analisar redações rapidamente, fornecendo feedback detalhado e estruturado para melhorar a escrita dos seus alunos.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto mb-12">
          <img 
            src={ipadImage} 
            alt="Interface do PontuaAI em iPad" 
            className="w-full h-auto"
          />
        </div>

        <div className="text-center">
          <Button variant="pink" size="lg" className="hidden text-base px-12">
            Assinar agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
