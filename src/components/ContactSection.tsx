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

            <div className="space-y-6">
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
