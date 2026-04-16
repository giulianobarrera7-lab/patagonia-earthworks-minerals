import excavadoraImg from "@/assets/excavadora.jpg";
import cargadoraImg from "@/assets/cargadora.jpg";
import camionTatuImg from "@/assets/camion-tatu.jpg";
import motonivImg from "@/assets/motoniveladora.jpg";
import camionBateaImg from "@/assets/camion-batea.jpg";
import zarandaImg from "@/assets/zaranda.jpg";

const machinery = [
  { name: "Excavadoras", units: "12 equipos", image: excavadoraImg },
  { name: "Palas Cargadoras", units: "2 m³ y 3 m³", image: cargadoraImg },
  { name: "Motoniveladoras", units: "2 equipos", image: motonivImg },
  { name: "Camiones Tatu", units: "6 unidades - 18 m³", image: camionTatuImg },
  { name: "Camiones con Batea", units: "5 unidades", image: camionBateaImg },
  { name: "Zarandas", units: "Equipos especializados", image: zarandaImg },
];

const FleetSection = () => {
  return (
    <section id="flota" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Equipamiento</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Nuestra Flota
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Flota moderna y diversificada disponible para alquiler mensual. 
            Topadores, retro-palas, vibro-compactadores, semi-remolques y carretones de 4 ejes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {machinery.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-lg border border-border bg-card hover:shadow-xl transition-all duration-300">
              <div className="overflow-hidden h-52">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">{m.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{m.units}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
