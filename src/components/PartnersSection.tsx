import parceirosBackground from "@/assets/parceiros-background.jpg";

const PartnersSection = () => {
  return (
    <section 
      className="py-12 md:py-20 relative overflow-hidden min-h-[600px] md:min-h-[800px] flex items-center justify-center bg-gradient-to-r from-purple-900 via-blue-800 to-blue-600"
      style={{ 
        backgroundImage: `url(${parceirosBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">
            Nossos Parceiros
          </h2>
          
          {/* Grid de logos dos parceiros */}
          <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap max-w-4xl mx-auto">
            {/* Parceiro 1 */}
            <div className="w-40 h-28 md:w-48 md:h-32 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border-2 border-white/20">
              <span className="text-white/50 text-xs md:text-sm">Logo Parceiro 1</span>
            </div>
            
            {/* Parceiro 2 */}
            <div className="w-40 h-28 md:w-48 md:h-32 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border-2 border-white/20">
              <span className="text-white/50 text-xs md:text-sm">Logo Parceiro 2</span>
            </div>
            
            {/* Parceiro 3 */}
            <div className="w-40 h-28 md:w-48 md:h-32 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border-2 border-white/20">
              <span className="text-white/50 text-xs md:text-sm">Logo Parceiro 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
