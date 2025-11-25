import { Button } from "@/components/ui/button";
import pontuaLogo from "@/assets/pontua-logo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={pontuaLogo} alt="PontuaAI" className="h-8" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="hidden text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="https://app.pontuaai.com/login_escola?step=login" className="text-foreground hover:text-primary transition-colors font-medium">
              Login
            </a>
            <Button variant="cta" size="lg" className="hidden">
              Assinar agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
            <a 
              href="https://app.pontuaai.com/login_escola?step=login" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
