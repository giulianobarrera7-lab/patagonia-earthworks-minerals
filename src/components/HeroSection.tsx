
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import DustParticles from "@/components/DustParticles";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.3) {
        video.currentTime = 0;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 bg-section-dark overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dust and light-ray particle layer */}
      <DustParticles />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-section-dark/88 via-section-dark/65 to-section-dark/35" />

      <div className="relative z-10 container-wide px-4 md:px-8 pt-20">
        <div className="max-w-3xl">
          <p
            className="text-primary font-semibold text-sm md:text-base uppercase tracking-widest mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Cinco Saltos, Río Negro
          </p>

          <h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-section-dark-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Soluciones Integrales en{" "}
            <span className="text-primary">Movimiento</span> de{" "}
            <span className="text-primary">Suelos</span> y{" "}
            <span className="text-primary">Canteras</span>
          </h1>

          <p
            className="text-lg md:text-xl text-section-dark-foreground/80 max-w-2xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            Empresa familiar dedicada a ofrecer soluciones de alta calidad en infraestructura,
            maquinaria pesada, transporte y minerales industriales.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.75s" }}
          >
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-base font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/30"
            >
              Nuestros Servicios
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 border-2 border-section-dark-foreground/40 text-section-dark-foreground px-8 py-4 rounded-md text-base font-semibold hover:bg-section-dark-foreground/10 transition-colors"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-section-dark-foreground/60 animate-bounce"
        aria-label="Ir a servicios"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
