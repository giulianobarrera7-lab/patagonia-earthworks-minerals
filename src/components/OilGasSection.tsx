import heroOilGas from "@/assets/hero-oilgas.jpg";
import { Droplets, Shield, Filter } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Lodos de Perforación",
    description: "Bentonita de alta calidad para la fabricación de lodos utilizados en perforación petrolera.",
  },
  {
    icon: Shield,
    title: "Impermeabilización",
    description: "Soluciones de sellado y cementación de fisuras para la construcción de infraestructura energética.",
  },
  {
    icon: Filter,
    title: "Filtración Industrial",
    description: "Diatomita y bentonita para purificación de aguas contaminadas con aceites y compuestos orgánicos.",
  },
];

const OilGasSection = () => {
  return (
    <section className="relative py-0">
      <div className="relative">
        <img
          src={heroOilGas}
          alt="Industria Oil & Gas"
          className="w-full h-[500px] object-cover"
          loading="lazy"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-section-dark/70 flex items-center">
          <div className="container-wide px-4 md:px-8">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Industria Energética</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-section-dark-foreground max-w-xl">
              Oil & Gas
            </h2>
            <p className="text-section-dark-foreground/80 text-lg max-w-xl mt-4 leading-relaxed">
              Ofrecemos soluciones especializadas para tus proyectos en la industria del Oil & Gas, 
              con minerales de primera calidad extraídos de nuestras propias canteras patagónicas.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">{f.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OilGasSection;
