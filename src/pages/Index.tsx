import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";

const MissionSection  = lazy(() => import("@/components/MissionSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const MineralsSection = lazy(() => import("@/components/MineralsSection"));
const QuarriesSection = lazy(() => import("@/components/QuarriesSection"));
const FleetSection    = lazy(() => import("@/components/FleetSection"));
const CTASection      = lazy(() => import("@/components/CTASection"));
const ContactSection  = lazy(() => import("@/components/ContactSection"));
const Footer          = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [showDeferredSections, setShowDeferredSections] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash !== "#inicio") {
      setShowDeferredSections(true);
      return;
    }

    const revealSections = () => setShowDeferredSections(true);
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(revealSections, { timeout: 1200 });
      return () => idleWindow.cancelIdleCallback?.(idleId);
    }

    const timeoutId = window.setTimeout(revealSections, 1800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBar />
      {showDeferredSections && (
        <Suspense fallback={null}>
          <Reveal><MissionSection /></Reveal>
          <Reveal delay={50}><ServicesSection /></Reveal>
          <Reveal delay={50}><MineralsSection /></Reveal>
          <Reveal delay={50}><QuarriesSection /></Reveal>
          <Reveal delay={50}><FleetSection /></Reveal>
          <Reveal delay={50}><CTASection /></Reveal>
          <Reveal delay={50}><ContactSection /></Reveal>
          <Footer />
        </Suspense>
      )}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
