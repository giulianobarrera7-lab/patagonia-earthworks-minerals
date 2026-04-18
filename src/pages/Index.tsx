import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const MissionSection  = lazy(() => import("@/components/MissionSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const MineralsSection = lazy(() => import("@/components/MineralsSection"));
const QuarriesSection = lazy(() => import("@/components/QuarriesSection"));
const FleetSection    = lazy(() => import("@/components/FleetSection"));
const ContactSection  = lazy(() => import("@/components/ContactSection"));
const Footer          = lazy(() => import("@/components/Footer"));

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <Suspense fallback={null}>
      <MissionSection />
      <ServicesSection />
      <MineralsSection />
      <QuarriesSection />
      <FleetSection />
      <ContactSection />
      <Footer />
    </Suspense>
    <WhatsAppFloat />
  </div>
);

export default Index;
