import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import MineralsSection from "@/components/MineralsSection";
import QuarriesSection from "@/components/QuarriesSection";
import FleetSection from "@/components/FleetSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <MineralsSection />
      <QuarriesSection />
      <FleetSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
