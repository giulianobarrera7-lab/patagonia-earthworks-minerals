import { Truck, Mountain, Pickaxe, Package } from "lucide-react";

const services = [
  {
    icon: Mountain,
    title: "Movimiento de Suelos",
    description: "Preparación de terrenos con maquinaria de última generación para proyectos de infraestructura de cualquier escala.",
  },
  {
    icon: Pickaxe,
    title: "Alquiler de Maquinaria",
    description: "Excavadoras, palas cargadoras, motoniveladoras y más. Flota moderna con amplia disponibilidad mensual.",
  },
  {
    icon: Truck,
    title: "Transporte Especializado",
    description: "Camiones Tatu, bateas, semi-remolques y carretones de 4 ejes para traslados de gran porte.",
  },
  {
    icon: Package,
    title: "Minerales Industriales",
    description: "Extracción y venta de bentonita, diatomita y áridos desde nuestras canteras propias en Patagonia.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Qué Hacemos</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
