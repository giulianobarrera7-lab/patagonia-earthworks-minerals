import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OilGasSection from "@/components/OilGasSection";
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
      <ServicesSection />
      <OilGasSection />
      <MineralsSection />
      <QuarriesSection />
      <FleetSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
