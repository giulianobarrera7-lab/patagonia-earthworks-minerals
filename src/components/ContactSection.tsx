import { useMemo, useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Mountain,
  Truck,
  Wrench,
  Gem,
  Plus,
  Minus,
  HardHat,
  Trash2,
  ClipboardList,
  User,
  ListChecks,
  Cog,
  Users,
  MessageSquare,
  FileText,
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SERVICES = [
  { id: "movimiento", label: "Movimiento de Suelos", icon: Mountain },
  { id: "maquinaria", label: "Alquiler de Maquinaria", icon: Wrench },
  { id: "transporte", label: "Transporte Especializado", icon: Truck },
  { id: "minerales", label: "Minerales Industriales", icon: Gem },
];

type Equipment = {
  id: string;
  name: string;
  stock: number | null; // null = sin stock definido (consultar)
};

const EQUIPMENT: Equipment[] = [
  { id: "excavadora", name: "Excavadora", stock: 12 },
  { id: "pala-3", name: "Pala Cargadora 3 m³", stock: 4 },
  { id: "pala-2", name: "Pala Cargadora 2 m³", stock: 4 },
  { id: "retropala", name: "Retropala", stock: 4 },
  { id: "motoniveladora", name: "Motoniveladora", stock: 2 },
  { id: "topador", name: "Topador", stock: 2 },
  { id: "vibro", name: "Vibro Compactador", stock: null },
  { id: "tatu", name: "Camión Tatu 18 m³", stock: 6 },
  { id: "batea", name: "Camión con Batea", stock: 5 },
  { id: "semi", name: "Camión Semi", stock: 4 },
  { id: "carreton", name: "Camión con Carretón 4 ejes", stock: null },
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
    .max(1000, "Mensaje demasiado largo")
    .optional()
    .or(z.literal("")),
});

const ContactSection = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicios: [] as string[],
    mensaje: "",
  });
  const [equipos, setEquipos] = useState<Record<string, number>>({});
  const [personal, setPersonal] = useState(0);
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

  const updateEquipo = (id: string, delta: number) => {
    setEquipos((prev) => {
      const eq = EQUIPMENT.find((e) => e.id === id)!;
      const current = prev[id] ?? 0;
      const max = eq.stock ?? 99;
      const next = Math.max(0, Math.min(max, current + delta));
      const updated = { ...prev };
      if (next === 0) delete updated[id];
      else updated[id] = next;
      return updated;
    });
  };

  const setEquipoValue = (id: string, value: number) => {
    setEquipos((prev) => {
      const eq = EQUIPMENT.find((e) => e.id === id)!;
      const max = eq.stock ?? 99;
      const next = Math.max(0, Math.min(max, value || 0));
      const updated = { ...prev };
      if (next === 0) delete updated[id];
      else updated[id] = next;
      return updated;
    });
  };

  const selectedEquipos = useMemo(
    () =>
      EQUIPMENT.filter((e) => (equipos[e.id] ?? 0) > 0).map((e) => ({
        ...e,
        qty: equipos[e.id],
      })),
    [equipos]
  );

  const selectedServicios = useMemo(
    () => SERVICES.filter((s) => form.servicios.includes(s.id)),
    [form.servicios]
  );

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
      toast.success(
        "Tu solicitud fue enviada con éxito. Nos pondremos en contacto a la brevedad."
      );
      setForm({ nombre: "", email: "", telefono: "", servicios: [], mensaje: "" });
      setEquipos({});
      setPersonal(0);
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contacto" className="section-padding bg-muted">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Contact info + map */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Contacto
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trabajemos Juntos
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Armá tu presupuesto a medida. Elegí los servicios, equipos y personal
              que necesitás para tu proyecto y te respondemos a la brevedad.
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
                  <a
                    href="mailto:administracion@amjservicios.com"
                    className="text-primary hover:underline"
                  >
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
                    <a
                      href="tel:+542942154744733"
                      className="hover:text-primary transition-colors"
                    >
                      2942-15474473
                    </a>
                    <br />
                    <a
                      href="tel:+5429421552470"
                      className="hover:text-primary transition-colors"
                    >
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

          {/* RIGHT: Quote builder */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Armá tu Presupuesto
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Configurá tu solicitud paso a paso. Elegí servicios, equipos y personal.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <Accordion
                type="multiple"
                defaultValue={["step-1"]}
                className="space-y-3"
              >
                {/* STEP 1 — Datos de contacto */}
                <AccordionItem
                  value="step-1"
                  className="border border-border rounded-lg bg-background overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-muted/30">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                        1
                      </span>
                      <User className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground text-sm">
                        Datos de contacto
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="nombre"
                          className="text-xs font-medium text-muted-foreground mb-1.5 block"
                        >
                          Nombre completo
                        </label>
                        <input
                          id="nombre"
                          type="text"
                          value={form.nombre}
                          onChange={(e) =>
                            setForm({ ...form, nombre: e.target.value })
                          }
                          className="w-full border border-input rounded-md px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                          placeholder="Tu nombre completo"
                          aria-invalid={!!errors.nombre}
                        />
                        {errors.nombre && (
                          <p className="text-xs text-destructive mt-1">
                            {errors.nombre}
                          </p>
                        )}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="text-xs font-medium text-muted-foreground mb-1.5 block"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            onBlur={() => {
                              const r = z
                                .string()
                                .email()
                                .safeParse(form.email);
                              setErrors((prev) => ({
                                ...prev,
                                email: r.success ? "" : "Email inválido",
                              }));
                            }}
                            className="w-full border border-input rounded-md px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                            placeholder="tu@email.com"
                            aria-invalid={!!errors.email}
                          />
                          {errors.email && (
                            <p className="text-xs text-destructive mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="telefono"
                            className="text-xs font-medium text-muted-foreground mb-1.5 block"
                          >
                            Teléfono
                          </label>
                          <input
                            id="telefono"
                            type="tel"
                            value={form.telefono}
                            onChange={(e) =>
                              setForm({ ...form, telefono: e.target.value })
                            }
                            className="w-full border border-input rounded-md px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                            placeholder="Tu teléfono"
                            aria-invalid={!!errors.telefono}
                          />
                          {errors.telefono && (
                            <p className="text-xs text-destructive mt-1">
                              {errors.telefono}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* STEP 2 — Servicios */}
                <AccordionItem
                  value="step-2"
                  className="border border-border rounded-lg bg-background overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-muted/30">
                    <div className="flex items-center gap-3 w-full">
                      <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                        2
                      </span>
                      <ListChecks className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground text-sm">
                        Servicios de interés
                      </span>
                      {form.servicios.length > 0 && (
                        <span className="ml-auto mr-2 text-[11px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {form.servicios.length}
                        </span>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
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
                            <Icon
                              className={`w-4 h-4 ${
                                checked ? "text-primary" : ""
                              }`}
                            />
                            <span className="font-medium">{s.label}</span>
                          </label>
                        );
                      })}
                    </div>
                    {errors.servicios && (
                      <p className="text-xs text-destructive mt-2">
                        {errors.servicios}
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>

                {/* STEP 3 — Equipos */}
                <AccordionItem
                  value="step-3"
                  className="border border-border rounded-lg bg-background overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-muted/30">
                    <div className="flex items-center gap-3 w-full">
                      <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                        3
                      </span>
                      <Cog className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground text-sm">
                        Configurá los equipos
                      </span>
                      {selectedEquipos.length > 0 && (
                        <span className="ml-auto mr-2 text-[11px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {selectedEquipos.reduce((a, e) => a + (e.qty ?? 0), 0)}
                        </span>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <div className="border border-border rounded-lg divide-y divide-border bg-background overflow-hidden">
                      {EQUIPMENT.map((eq) => {
                        const qty = equipos[eq.id] ?? 0;
                        const max = eq.stock;
                        const atMax = max !== null && qty >= max;
                        return (
                          <div
                            key={eq.id}
                            className="flex items-center justify-between gap-3 px-3 py-2.5"
                          >
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                              <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
                              <div className="min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">
                                  {eq.name}
                                </p>
                                <p className="text-[11px] text-muted-foreground">
                                  {max !== null
                                    ? `${max} disponibles`
                                    : "Disponible — consultar"}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 flex-shrink-0">
                              <button
                                type="button"
                                onClick={() => updateEquipo(eq.id, -1)}
                                disabled={qty === 0}
                                className="w-8 h-8 rounded-md border border-input flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                aria-label={`Quitar ${eq.name}`}
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <input
                                type="number"
                                min={0}
                                max={max ?? 99}
                                value={qty}
                                onChange={(e) =>
                                  setEquipoValue(
                                    eq.id,
                                    parseInt(e.target.value, 10),
                                  )
                                }
                                className="w-12 h-8 text-center text-sm border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                              />
                              <button
                                type="button"
                                onClick={() => updateEquipo(eq.id, 1)}
                                disabled={atMax}
                                className="w-8 h-8 rounded-md border border-input flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                aria-label={`Agregar ${eq.name}`}
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* STEP 4 — Personal */}
                <AccordionItem
                  value="step-4"
                  className="border border-border rounded-lg bg-background overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-muted/30">
                    <div className="flex items-center gap-3 w-full">
                      <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                        4
                      </span>
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground text-sm">
                        Personal adicional
                      </span>
                      {personal > 0 && (
                        <span className="ml-auto mr-2 text-[11px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {personal}
                        </span>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <div className="flex items-center justify-between gap-3 border border-border rounded-lg px-4 py-3 bg-background">
                      <div className="flex items-center gap-3">
                        <HardHat className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Operarios / Técnicos
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            Cantidad de personas requeridas
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() =>
                            setPersonal((p) => Math.max(0, p - 1))
                          }
                          disabled={personal === 0}
                          className="w-8 h-8 rounded-md border border-input flex items-center justify-center hover:bg-muted disabled:opacity-40 transition-colors"
                          aria-label="Quitar persona"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <input
                          type="number"
                          min={0}
                          max={50}
                          value={personal}
                          onChange={(e) =>
                            setPersonal(
                              Math.max(
                                0,
                                Math.min(50, parseInt(e.target.value, 10) || 0),
                              ),
                            )
                          }
                          className="w-12 h-8 text-center text-sm border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setPersonal((p) => Math.min(50, p + 1))
                          }
                          className="w-8 h-8 rounded-md border border-input flex items-center justify-center hover:bg-muted transition-colors"
                          aria-label="Agregar persona"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* STEP 5 — Consulta */}
                <AccordionItem
                  value="step-5"
                  className="border border-border rounded-lg bg-background overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-muted/30">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                        5
                      </span>
                      <MessageSquare className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground text-sm">
                        Consulta personalizada
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <textarea
                      id="mensaje"
                      rows={4}
                      value={form.mensaje}
                      onChange={(e) =>
                        setForm({ ...form, mensaje: e.target.value })
                      }
                      className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                      placeholder="Contanos sobre tu proyecto…"
                      aria-invalid={!!errors.mensaje}
                    />
                    {errors.mensaje && (
                      <p className="text-xs text-destructive mt-1">
                        {errors.mensaje}
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>

                {/* STEP 6 — Resumen */}
                <AccordionItem
                  value="step-6"
                  className="border border-border rounded-lg bg-background overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-muted/30">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                        6
                      </span>
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground text-sm">
                        Resumen de tu solicitud
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <div className="border border-dashed border-border rounded-lg p-4 bg-muted/40 text-sm space-y-3">
                      {selectedServicios.length === 0 &&
                      selectedEquipos.length === 0 &&
                      personal === 0 ? (
                        <div className="flex items-center gap-2 text-muted-foreground text-xs">
                          <Trash2 className="w-3.5 h-3.5" />
                          Aún no seleccionaste servicios ni equipos.
                        </div>
                      ) : (
                        <>
                          {selectedServicios.length > 0 && (
                            <div>
                              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5 font-semibold">
                                Servicios
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {selectedServicios.map((s) => (
                                  <span
                                    key={s.id}
                                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                                  >
                                    <s.icon className="w-3 h-3" />
                                    {s.label}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {selectedEquipos.length > 0 && (
                            <div>
                              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5 font-semibold">
                                Equipos
                              </p>
                              <ul className="space-y-1">
                                {selectedEquipos.map((e) => (
                                  <li
                                    key={e.id}
                                    className="flex justify-between text-foreground"
                                  >
                                    <span>{e.name}</span>
                                    <span className="font-bold text-primary">
                                      × {e.qty}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {personal > 0 && (
                            <div className="flex justify-between text-foreground border-t border-border pt-2">
                              <span className="flex items-center gap-1.5">
                                <HardHat className="w-3.5 h-3.5 text-primary" />
                                Personal adicional
                              </span>
                              <span className="font-bold text-primary">
                                × {personal}
                              </span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

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
