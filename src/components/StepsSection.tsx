import stepsImage from "@/assets/steps-saida.png";

const StepsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <img 
            src={stepsImage} 
            alt="Passos para usar PontuaAI" 
            className="w-full max-w-6xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
