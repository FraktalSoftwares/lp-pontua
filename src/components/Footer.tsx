import { Facebook, Instagram, Linkedin } from "lucide-react";
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
          
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-navy-primary transition-colors"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-navy-primary transition-colors"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-navy-primary transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
