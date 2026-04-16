import { Target, Eye, Heart } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Misión",
    text: "Brindar soluciones integrales en movimiento de suelos, transporte y suministro de minerales con excelencia operativa y compromiso con cada proyecto.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Ser referentes en la industria de servicios pesados de la Patagonia, creciendo de forma sostenible con innovación y confianza.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Compromiso, profesionalismo, trabajo en equipo y orientación al cliente. Priorizamos el crecimiento humano y los vínculos a largo plazo.",
  },
];

const MissionSection = () => {
  return (
    <section className="section-padding bg-section-dark">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-section-dark-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-section-dark-foreground/70 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
