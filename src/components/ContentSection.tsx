import { Button } from "@/components/ui/button";
import ipadImage from "@/assets/ipad-mini.png";

const ContentSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-primary via-navy-light to-purple-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button variant="pink" size="lg">
              Assinar agora
            </Button>
          </div>

          <div>
            <img 
              src={ipadImage} 
              alt="Interface do PontuaAI" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
