import { MapPin } from "lucide-react";

const quarries = [
  {
    type: "Áridos",
    description: "Arena, revuelto, calcáreo y piedra",
    locations: ["Barda del Medio, Río Negro", "Allen, Río Negro", "Cervantes, Río Negro"],
  },
  {
    type: "Diatomea",
    description: "Mineral de alta porosidad y baja densidad",
    locations: ["25 de Mayo, La Pampa", "Jacobacci, Río Negro"],
  },
  {
    type: "Bentonita",
    description: "Mineral con gran capacidad impermeabilizante",
    locations: ["Cinco Saltos, Río Negro"],
  },
];

const QuarriesSection = () => {
  return (
    <section id="canteras" className="section-padding bg-section-dark">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Red de Canteras</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-section-dark-foreground">
            Calidad desde el Origen
          </h2>
          <p className="text-section-dark-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            Contamos con canteras propias estratégicamente ubicadas en Río Negro y La Pampa 
            para garantizar el abastecimiento constante de materiales de primera línea.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quarries.map((q) => (
            <div key={q.type} className="border border-section-dark-foreground/10 rounded-lg p-8 hover:border-primary/40 transition-colors">
              <h3 className="font-heading text-2xl font-bold text-section-dark-foreground mb-2">{q.type}</h3>
              <p className="text-section-dark-foreground/60 mb-6">{q.description}</p>
              <div className="space-y-3">
                {q.locations.map((loc) => (
                  <div key={loc} className="flex items-center gap-3 text-sm text-section-dark-foreground/80">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    {loc}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuarriesSection;
