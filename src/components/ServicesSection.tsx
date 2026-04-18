import { Truck, Mountain, Pickaxe, Package } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Mountain,
    title: "Movimiento de Suelos",
    description: "Preparación de terrenos con maquinaria de última generación para proyectos de infraestructura de cualquier escala.",
  },
  {
    number: "02",
    icon: Pickaxe,
    title: "Alquiler de Maquinaria",
    description: "Excavadoras, palas cargadoras, motoniveladoras y más. Flota moderna con amplia disponibilidad mensual.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Transporte Especializado",
    description: "Camiones Tatu, bateas, semi-remolques y carretones de 4 ejes para traslados de gran porte.",
  },
  {
    number: "04",
    icon: Package,
    title: "Minerales Industriales",
    description: "Extracción y venta de bentonita, diatomita y áridos desde nuestras canteras propias en Patagonia.",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="section-padding bg-background">
    <div className="container-wide">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Qué Hacemos</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
          Nuestros Servicios
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border border border-border rounded-xl overflow-hidden">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-background p-8 hover:bg-primary/5 transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute top-3 right-4 font-heading text-6xl font-black text-primary/8 select-none leading-none">
              {s.number}
            </span>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
              <s.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="w-8 h-0.5 bg-primary mb-5 group-hover:w-14 transition-all duration-300" />
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
