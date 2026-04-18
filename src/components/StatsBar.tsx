const STATS = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "50+", label: "Máquinas Disponibles" },
  { value: "100+", label: "Proyectos Realizados" },
  { value: "3",   label: "Canteras Propias" },
];

const StatsBar = () => (
  <div className="bg-section-dark border-t border-primary/20 py-14 px-4">
    <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className={`text-center ${i < STATS.length - 1 ? "md:border-r md:border-white/10" : ""}`}
        >
          <p className="font-heading text-5xl md:text-6xl font-black text-primary leading-none">
            {s.value}
          </p>
          <p className="text-white/50 text-xs font-semibold mt-3 uppercase tracking-widest">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default StatsBar;
