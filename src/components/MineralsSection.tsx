import bentonitaImg from "@/assets/bentonita.jpg";
import diatomitaImg from "@/assets/diatomita.jpg";

const minerals = [
  {
    name: "Bentonita",
    image: bentonitaImg,
    location: "Cinco Saltos, Río Negro",
    uses: [
      "Lodos de perforación petrolera",
      "Moldes para fundición metalúrgica",
      "Pellets de hierro (aglutinante)",
      "Impermeabilización y sellado",
      "Purificación de aguas",
      "Fabricación de absorbentes",
    ],
  },
  {
    name: "Diatomita",
    image: diatomitaImg,
    location: "25 de Mayo (La Pampa) y Jacobacci (Río Negro)",
    uses: [
      "Filtración industrial de alta eficiencia",
      "Retención de agua para cultivos",
      "Insecticida natural ecológico",
      "Industria farmacéutica",
      "Materiales refractarios",
      "Alta resistencia térmica",
    ],
  },
];

const MineralsSection = () => {
  return (
    <section id="minerales" className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Productos</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Minerales Industriales
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {minerals.map((m) => (
            <div key={m.name} className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow">
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-64 object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-1">{m.name}</h3>
                <p className="text-primary text-sm font-medium mb-5">{m.location}</p>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Aplicaciones
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {m.uses.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MineralsSection;
