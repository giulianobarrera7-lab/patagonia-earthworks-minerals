import heroImg from "@/assets/hero-mining.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <img
        src={heroImg}
        alt="Operaciones mineras AMJ Servicios"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-section-dark/70" />

      <div className="relative z-10 container-wide px-4 md:px-8 pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="text-primary font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
            Cinco Saltos, Río Negro
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-section-dark-foreground leading-tight mb-6">
            Soluciones Integrales en{" "}
            <span className="text-primary">Movimiento de Suelos</span> y Minería
          </h1>
          <p className="text-lg md:text-xl text-section-dark-foreground/80 max-w-2xl mb-10 leading-relaxed">
            Empresa familiar dedicada a ofrecer soluciones de alta calidad en infraestructura, 
            maquinaria pesada, transporte y minerales industriales.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-base font-semibold hover:bg-primary/90 transition-colors"
            >
              Nuestros Servicios
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 border-2 border-section-dark-foreground/30 text-section-dark-foreground px-8 py-4 rounded-md text-base font-semibold hover:bg-section-dark-foreground/10 transition-colors"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-section-dark-foreground/60 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
