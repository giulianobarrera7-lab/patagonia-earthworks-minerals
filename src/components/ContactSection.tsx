import { useState } from "react";
import { MapPin, Mail, Phone, Mountain, Truck, Wrench, Gem } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const SERVICES = [
  { id: "movimiento", label: "Movimiento de Suelos", icon: Mountain },
  { id: "maquinaria", label: "Alquiler de Maquinaria", icon: Wrench },
  { id: "transporte", label: "Transporte Especializado", icon: Truck },
  { id: "minerales", label: "Minerales Industriales", icon: Gem },
];

const formSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  email: z
    .string()
    .trim()
    .email("Email inválido")
    .max(255, "Email demasiado largo"),
  telefono: z
    .string()
    .trim()
    .min(6, "Teléfono inválido")
    .max(30, "Teléfono demasiado largo"),
  servicios: z.array(z.string()).min(1, "Seleccioná al menos un servicio"),
  mensaje: z
    .string()
    .trim()
    .min(5, "Contanos un poco más sobre tu proyecto")
    .max(1000, "Mensaje demasiado largo"),
});

const ContactSection = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicios: [] as string[],
    mensaje: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const toggleService = (id: string) => {
    setForm((prev) => ({
      ...prev,
      servicios: prev.servicios.includes(id)
        ? prev.servicios.filter((s) => s !== id)
        : [...prev.servicios, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) newErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(newErrors);
      toast.error("Revisá los campos marcados");
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Tu solicitud fue enviada con éxito. Nos pondremos en contacto a la brevedad.");
      setForm({ nombre: "", email: "", telefono: "", servicios: [], mensaje: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contacto" className="section-padding bg-muted">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Contacto</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trabajemos Juntos
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Solicitá tu presupuesto sin cargo. Nos adaptamos a las necesidades de cada proyecto
              con soluciones personalizadas y flexibilidad operativa.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Parque Industrial de Cinco Saltos
                    <br />
                    Ruta Provincial 70 (camino al Lago Pellegrini)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:administracion@amjservicios.com" className="text-primary hover:underline">
                    administracion@amjservicios.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Teléfonos</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+542942154744733" className="hover:text-primary transition-colors">
                      2942-15474473
                    </a>
                    <br />
                    <a href="tel:+5429421552470" className="hover:text-primary transition-colors">
                      (2942) 15524709
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.0!2d-68.06!3d-38.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ5JzEyLjAiUyA2OMKwMDMnMzYuMCJX!5e0!3m2!1ses!2sar!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación AMJ Servicios"
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Solicitar Presupuesto</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Completá el formulario y te contactaremos a la brevedad.
            </p>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="nombre" className="text-sm font-medium text-foreground mb-1.5 block">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Tu nombre completo"
                  aria-invalid={!!errors.nombre}
                />
                {errors.nombre && <p className="text-xs text-destructive mt-1">{errors.nombre}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onBlur={() => {
                      const r = z.string().email().safeParse(form.email);
                      setErrors((prev) => ({
                        ...prev,
                        email: r.success ? "" : "Email inválido",
                      }));
                    }}
                    className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="tu@email.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="telefono" className="text-sm font-medium text-foreground mb-1.5 block">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Tu teléfono"
                    aria-invalid={!!errors.telefono}
                  />
                  {errors.telefono && <p className="text-xs text-destructive mt-1">{errors.telefono}</p>}
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-foreground mb-2 block">
                  Servicios de interés
                </span>
                <div className="grid sm:grid-cols-2 gap-2">
                  {SERVICES.map((s) => {
                    const Icon = s.icon;
                    const checked = form.servicios.includes(s.id);
                    return (
                      <label
                        key={s.id}
                        className={`flex items-center gap-3 border rounded-md px-3 py-2.5 cursor-pointer transition-all text-sm ${
                          checked
                            ? "border-primary bg-primary/5 text-foreground"
                            : "border-input bg-background text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleService(s.id)}
                          className="w-4 h-4 accent-primary"
                        />
                        <Icon className={`w-4 h-4 ${checked ? "text-primary" : ""}`} />
                        <span className="font-medium">{s.label}</span>
                      </label>
                    );
                  })}
                </div>
                {errors.servicios && (
                  <p className="text-xs text-destructive mt-1">{errors.servicios}</p>
                )}
              </div>

              <div>
                <label htmlFor="mensaje" className="text-sm font-medium text-foreground mb-1.5 block">
                  Tu consulta
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                  placeholder="Contanos sobre tu proyecto o necesidad…"
                  aria-invalid={!!errors.mensaje}
                />
                {errors.mensaje && <p className="text-xs text-destructive mt-1">{errors.mensaje}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-md text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg disabled:opacity-60"
              >
                {submitting ? "Enviando…" : "Enviar Solicitud"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
