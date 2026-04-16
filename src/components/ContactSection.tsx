import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
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
                  <p className="text-muted-foreground">Parque Industrial de Cinco Saltos<br />Ruta Provincial 70 (camino al Lago Pellegrini)</p>
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
                    <a href="tel:+542942154744733" className="hover:text-primary transition-colors">2942-15474473</a>
                    <br />
                    <a href="tel:+5429421552470" className="hover:text-primary transition-colors">(2942) 15524709</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps - el cliente puede reemplazar el src con su propio link de Google Maps */}
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

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">Solicitar Presupuesto</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nombre</label>
                <input
                  type="text"
                  className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Teléfono</label>
                <input
                  type="tel"
                  className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Tu teléfono"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  placeholder="Contanos sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
