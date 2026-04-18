import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const MissionSection  = lazy(() => import("@/components/MissionSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const MineralsSection = lazy(() => import("@/components/MineralsSection"));
const QuarriesSection = lazy(() => import("@/components/QuarriesSection"));
const FleetSection    = lazy(() => import("@/components/FleetSection"));
const CTASection      = lazy(() => import("@/components/CTASection"));
const ContactSection  = lazy(() => import("@/components/ContactSection"));
const Footer          = lazy(() => import("@/components/Footer"));

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <Suspense fallback={null}>
      <MissionSection />
      <ServicesSection />
      <MineralsSection />
      <QuarriesSection />
      <FleetSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </Suspense>
    <WhatsAppFloat />
  </div>
);

export default Index;
