import { useState } from "react";
import videoBackground from "@/assets/video-background.jpg";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Por enquanto apenas mostra um alerta, depois será substituído pelo vídeo real
    alert("Vídeo em desenvolvimento");
    // setShowVideo(true);
  };

  return (
    <section 
      className="relative overflow-hidden min-h-[600px] flex items-center justify-center"
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
    </section>
  );
};

export default VideoSection;
