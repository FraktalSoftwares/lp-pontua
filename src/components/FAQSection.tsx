import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import faqBackground from "@/assets/faq-background.png";
import ContactDialog from "./ContactDialog";

const FAQSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const faqsColumn1 = [
    {
      question: "Para quem a plataforma é indicada?",
      answer: "A plataforma é ideal para escolas, redes de ensino, cursos pré-vestibulares, professores e corretores que desejam aprimorar o ensino de redação, melhorar os resultados dos alunos e otimizar a gestão pedagógica com apoio de tecnologia educacional.",
    },
    {
      question: "A correção das redações é feita por humanos ou por inteligência artificial?",
      answer: "Utilizamos um modelo de correção híbrida, que combina tecnologia para ganho de escala com o olhar pedagógico dos professores e corretores da escola, garantindo precisão, qualidade e personalização no feedback.",
    },
    {
      question: "Os temas e critérios de correção são fixos?",
      answer: "Não. A plataforma permite que os professores criem seus próprios temas, rubricas e critérios, adaptando o processo de correção à proposta pedagógica da escola ou do curso.",
    },
    {
      question: "Os alunos recebem feedback?",
      answer: "Sim. Cada redação corrigida é acompanhada de um feedback claro, detalhado e personalizado, que mostra os pontos fortes e o que precisa ser melhorado para se alcançarem melhores notas.",
    },
    {
      question: "A plataforma acompanha a evolução dos alunos?",
      answer: "Sim. Oferecemos relatórios completos de desempenho e engajamento, permitindo que professores e gestores acompanhem a evolução individual e por turma ao longo do tempo.",
    },
    {
      question: "A escola precisa treinar sua equipe para usar a plataforma?",
      answer: "Não se preocupe! Nossa equipe oferece acompanhamento e suporte pedagógico completo, desde a implementação até o uso estratégico dos recursos — com foco na autonomia da equipe escolar.",
    },
  ];

  const faqsColumn2 = [
    {
      question: "A plataforma é personalizada para a realidade da escola?",
      answer: "Sim. A proposta pedagógica, os critérios de correção e a dinâmica de uso são adaptados às necessidades da instituição. Nossa equipe ajuda a configurar tudo para que o uso da plataforma esteja alinhado com os objetivos da escola.",
    },
    {
      question: "Quanto custa a plataforma?",
      answer: "Entre em contato para receber uma proposta personalizada para sua empresa ou curso.",
    },
    {
      question: "A plataforma está configurada para os critérios do ENEM?",
      answer: "Sim. A plataforma permite a configuração de correções baseadas nos critérios oficiais do ENEM, e também pode ser adaptada a vestibulares específicos ou modelos próprios da instituição.",
    },
    {
      question: "Preciso instalar algum programa?",
      answer: "Não. A plataforma é totalmente online e responsiva, podendo ser acessada de qualquer dispositivo com internet — sem a necessidade de instalação.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim. O cancelamento pode ser feito conforme as condições previstas no contrato. Não há fidelidade mínima obrigatória, e você pode encerrar o uso da plataforma quando desejar, com aviso prévio conforme combinado.",
    },
    {
      question: "Como faço para contratar?",
      answer: "Basta entrar em contato com nossa equipe pelo formulário do site. Após entender suas necessidades, enviaremos uma demonstração da plataforma e uma proposta personalizada para sua instituição.",
    },
  ];

  return (
    <section 
      className="py-20 bg-navy-deep bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${faqBackground})` }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Ficou alguma dúvida? Entre em contato com a gente!
          </p>
          
          {/* Ícones de redes sociais */}
          <div className="flex justify-center gap-6 mt-6">
            <a 
              href="https://www.instagram.com/pontuaai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-pink-500 transition-colors duration-300 border border-white/20"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/pontuaai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 border border-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12 items-start">
          <Accordion type="single" collapsible className="space-y-4">
            {faqsColumn1.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/20 rounded-lg px-6 bg-white/5 backdrop-blur-sm transition-colors duration-300 hover:border-[#E737A3] min-h-[100px] flex flex-col justify-center"
              >
                <AccordionTrigger className="text-white hover:no-underline text-left py-5 leading-relaxed">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="space-y-4">
            {faqsColumn2.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 6}`}
                className="border border-white/20 rounded-lg px-6 bg-white/5 backdrop-blur-sm transition-colors duration-300 hover:border-[#E737A3] min-h-[100px] flex flex-col justify-center"
              >
                <AccordionTrigger className="text-white hover:no-underline text-left py-5 leading-relaxed">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Button 
            variant="pink" 
            size="lg" 
            className="text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-6 font-bold rounded-full"
            onClick={() => setIsContactOpen(true)}
          >
            CONTRATE AGORA
          </Button>
        </div>
      </div>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </section>
  );
};

export default FAQSection;
