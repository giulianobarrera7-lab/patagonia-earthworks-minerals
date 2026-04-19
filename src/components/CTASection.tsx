import ctaBg from "@/assets/cta-bg.jpg";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";

const CTASection = () => (
  <section className="relative py-28 px-4 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-section-dark/70" />
    </div>

    <div className="relative z-10 container-wide text-center max-w-3xl mx-auto">
      <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
        Trabajemos Juntos
      </p>
      <AnimatedHeading
        text="¿Tenés un proyecto? Hablemos."
        highlightWords={["Hablemos."]}
        className="font-heading text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
      />
      <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
        Cotizamos sin compromiso. Disponibilidad inmediata de maquinaria y
        personal calificado para cualquier escala de obra.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-primary/90 hover:gap-3 transition-all duration-200 shadow-lg shadow-primary/30"
        >
          Solicitar Presupuesto
          <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href="tel:+5429421547473"
          className="inline-flex items-center gap-2 border-2 border-white/25 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-white/10 hover:border-white/40 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Llamar Ahora
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
