import { Button } from "@/components/ui/button";
import contentBackground from "@/assets/mulher-triste.jpg";

const ContentSection = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center" style={{ backgroundImage: `url(${contentBackground})`, backgroundSize: 'cover', backgroundPosition: 'center left' }}>
      {/* Overlay leve - mantemos a imagem visivel; legibilidade do texto vem do backdrop-blur do card no mobile */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto md:ml-auto md:mr-0 bg-black/40 backdrop-blur-md p-6 rounded-lg md:bg-transparent md:backdrop-blur-none md:p-0 md:rounded-none">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight text-left md:text-right">
            O método tradicional de correção está te fazendo perder tempo e resultados
          </h2>
          <ul className="space-y-3 md:space-y-4 text-white">
            <li className="flex items-start gap-2 md:gap-3 md:justify-end">
              <span className="text-pink-500 text-lg md:text-xl mt-1 flex-shrink-0 md:order-2">•</span>
              <span className="text-base md:text-lg">Correção manual consome horas e aumenta a margem de erro</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3 md:justify-end">
              <span className="text-pink-500 text-lg md:text-xl mt-1 flex-shrink-0 md:order-2">•</span>
              <span className="text-base md:text-lg">Feedback lento desmotiva os alunos</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3 md:justify-end">
              <span className="text-pink-500 text-lg md:text-xl mt-1 flex-shrink-0 md:order-2">•</span>
              <span className="text-base md:text-lg">Falta de dados dificulta medir progresso</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3 md:justify-end">
              <span className="text-pink-500 text-lg md:text-xl mt-1 flex-shrink-0 md:order-2">•</span>
              <span className="text-base md:text-lg">Correção inconsistente prejudica resultados no vestibular</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
