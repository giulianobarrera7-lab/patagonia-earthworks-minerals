import excavadoraImg from "@/assets/excavadora.jpg";
import cargadoraImg from "@/assets/cargadora.jpg";
import retropalaImg from "@/assets/retropala.jpg";
import camionTatuImg from "@/assets/camion-tatu.jpg";
import camionBateaImg from "@/assets/camion-batea.jpg";
import camionSemiImg from "@/assets/camion-semi.jpg";
import camionCarretonImg from "@/assets/camion-carreton.jpg";
import motonivImg from "@/assets/motoniveladora.jpg";
import topadorImg from "@/assets/topador.jpg";
import vibroImg from "@/assets/vibro-compactador.jpg";

type Machine = { name: string; units: string; image: string };
type Category = { label: string; machines: Machine[] };

const CATEGORIES: Category[] = [
  {
    label: "Excavación y Movimiento",
    machines: [
      { name: "Excavadoras",          units: "12 equipos", image: excavadoraImg },
      { name: "Palas Cargadoras 3 m³", units: "4 equipos",  image: cargadoraImg  },
      { name: "Palas Cargadoras 2 m³", units: "4 equipos",  image: cargadoraImg  },
      { name: "Retropalas",            units: "4 equipos",  image: retropalaImg  },
    ],
  },
  {
    label: "Nivelación y Compactación",
    machines: [
      { name: "Motoniveladoras",    units: "2 equipos",  image: motonivImg },
      { name: "Topadores",          units: "2 equipos",  image: topadorImg },
      { name: "Vibro Compactadores", units: "Disponibles", image: vibroImg   },
    ],
  },
  {
    label: "Transporte Pesado",
    machines: [
      { name: "Camiones Tatu 18 m³",       units: "6 equipos",           image: camionTatuImg     },
      { name: "Camiones con Batea",         units: "5 equipos",           image: camionBateaImg    },
      { name: "Camiones Semi",              units: "4 equipos",           image: camionSemiImg     },
      { name: "Camión con Carretón 4 ejes", units: "Cotización por viaje", image: camionCarretonImg },
    ],
  },
];

const FleetSection = () => (
  <section id="flota" className="section-padding bg-muted/30">
    <div className="container-wide">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Equipamiento</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
          Nuestra Flota
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          Flota moderna y diversificada disponible para alquiler mensual,
          preparada para responder a las exigencias de cada proyecto.
        </p>
      </div>

      <div className="space-y-16">
        {CATEGORIES.map((cat) => (
          <div key={cat.label}>
            <div className="flex items-center gap-5 mb-8">
              <div className="h-px flex-1 bg-border" />
              <h3 className="font-heading text-xs font-bold text-primary uppercase tracking-widest whitespace-nowrap">
                {cat.label}
              </h3>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cat.machines.map((m) => (
                <div
                  key={m.name}
                  className="group overflow-hidden rounded-xl border border-border bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="overflow-hidden h-44">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-4 border-t border-border">
                    <h4 className="font-heading text-sm font-bold text-foreground leading-tight">{m.name}</h4>
                    <p className="text-primary text-xs font-semibold mt-1">{m.units}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FleetSection;
