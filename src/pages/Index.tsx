import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContentSection from "@/components/ContentSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import FAQSection from "@/components/FAQSection";
import StepsSection from "@/components/StepsSection";
import NewSection from "@/components/NewSection";
import VideoSection from "@/components/VideoSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TargetAudienceSection />
      <ContentSection />
      <FeaturesSection />
      <NewSection />
      <StepsSection />
      <VideoSection />
      <PartnersSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
