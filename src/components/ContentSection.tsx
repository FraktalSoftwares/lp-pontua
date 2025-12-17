import { Button } from "@/components/ui/button";
import contentBackground from "@/assets/mulher-triste.jpg";

const ContentSection = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center" style={{ backgroundImage: `url(${contentBackground})`, backgroundSize: 'cover', backgroundPosition: 'center left' }}>
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl ml-auto text-right">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight text-right">
            O método tradicional de correção está te fazendo perder tempo e resultados
          </h2>
          <ul className="space-y-3 md:space-y-4 text-white text-right">
            <li className="flex items-start gap-2 md:gap-3 justify-end">
              <span className="text-base md:text-lg">Correção manual consome horas e aumenta a margem de erro</span>
              <span className="text-pink-500 text-lg md:text-xl mt-1 flex-shrink-0">•</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3 justify-end">
              <span className="text-base md:text-lg">Feedback lento desmotiva os alunos</span>
              <span className="text-pink-500 text-lg md:text-xl mt-1 flex-shrink-0">•</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3 justify-end">
              <span className="text-base md:text-lg">Falta de dados dificulta medir progresso</span>
              <span className="text-pink-500 text-lg md:text-xl mt-1 flex-shrink-0">•</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3 justify-end">
              <span className="text-base md:text-lg">Correção inconsistente prejudica resultados no vestibular</span>
              <span className="text-pink-500 text-lg md:text-xl mt-1 flex-shrink-0">•</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
