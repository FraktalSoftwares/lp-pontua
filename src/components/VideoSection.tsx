import { useState } from "react";
import { Button } from "@/components/ui/button";
import videoBackground from "@/assets/video-background.jpg";
import { Play } from "lucide-react";
import ContactDialog from "./ContactDialog";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Por enquanto apenas mostra um alerta, depois será substituído pelo vídeo real
    alert("Vídeo em desenvolvimento");
    // setShowVideo(true);
  };

  return (
    <>
    <section 
      className="relative overflow-hidden min-h-[600px] flex flex-col items-center justify-center"
      style={{ 
        backgroundImage: `url(${videoBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Botão circular grande posicionado sobre a área do play */}
      <button
        onClick={handlePlayClick}
        className="absolute w-80 h-80 rounded-full cursor-pointer opacity-0 hover:opacity-10 hover:bg-white transition-opacity duration-300 z-10"
        style={{
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        aria-label="Reproduzir vídeo"
      />

      {/* Botão CONTRATE AGORA */}
      <div className="absolute bottom-12 z-20">
        <Button 
          variant="pink" 
          size="lg" 
          className="text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-6 font-bold rounded-full"
          onClick={() => setIsContactOpen(true)}
        >
          CONTRATE AGORA
        </Button>
      </div>
    </section>

    <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};

export default VideoSection;
