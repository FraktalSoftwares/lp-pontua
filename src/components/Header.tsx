import { Button } from "@/components/ui/button";
import pontuaLogo from "@/assets/pontua-logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={pontuaLogo} alt="PontuaAI" className="h-8" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Login
            </a>
            <Button variant="pink" size="lg">
              Assinar agora
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
