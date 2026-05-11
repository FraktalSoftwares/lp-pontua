import { Link } from "react-router-dom";
import pontuaLogo from "@/assets/pontua-logo.svg";
import footerBackground from "@/assets/footer-background.png";

const Footer = () => {
  return (
    <footer 
      className="bg-navy-deep py-12 border-t border-white/10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <img src={pontuaLogo} alt="PontuaAI" className="h-10 brightness-0 invert" />
          
          {/* Links rápidos */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <Link
              to="/lgpd"
              className="hover:text-white transition-colors"
            >
              LGPD
            </Link>
            <span className="text-white/40">|</span>
            <Link
              to="/termos-de-uso"
              className="hover:text-white transition-colors"
            >
              Termos de Uso
            </Link>
            <span className="text-white/40">|</span>
            <Link
              to="/politica-de-privacidade"
              className="hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm text-center">
            PONTUA AI. Copyright © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
