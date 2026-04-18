import { MapPin, Phone, Mail } from "lucide-react";
import logoAmj from "@/assets/logo-amj.jpg";

const NAV_LINKS = [
  { label: "Inicio",    href: "#inicio"    },
  { label: "Servicios", href: "#servicios" },
  { label: "Minerales", href: "#minerales" },
  { label: "Canteras",  href: "#canteras"  },
  { label: "Flota",     href: "#flota"     },
  { label: "Contacto",  href: "#contacto"  },
];

const Footer = () => (
  <footer className="bg-section-dark border-t border-primary/20">
    <div className="container-wide px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-12">

        {/* Marca */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logoAmj} alt="AMJ Servicios SAS" className="h-12 w-auto bg-white rounded-md p-1" />
            <div>
              <span className="font-heading text-lg font-bold text-primary">AMJ</span>
              <span className="font-heading text-lg font-bold text-white ml-1">SERVICIOS</span>
            </div>
          </div>
          <p className="text-white/45 text-sm leading-relaxed">
            Empresa familiar con más de 15 años brindando soluciones de alta calidad
            en movimiento de suelos, maquinaria pesada y minerales industriales en la Patagonia.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="font-heading text-xs font-bold text-white uppercase tracking-widest mb-6">
            Links Rápidos
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/45 text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-heading text-xs font-bold text-white uppercase tracking-widest mb-6">
            Contacto
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="text-white/45 text-sm">Cinco Saltos, Río Negro, Argentina</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+5429421547473" className="text-white/45 text-sm hover:text-primary transition-colors">
                (2942) 15-474473
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+5429421524709" className="text-white/45 text-sm hover:text-primary transition-colors">
                (2942) 15-524709
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:administracion@amjservicios.com" className="text-white/45 text-sm hover:text-primary transition-colors">
                administracion@amjservicios.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/25 text-sm">
          © {new Date().getFullYear()} AMJ Servicios SAS. Todos los derechos reservados.
        </p>
        <p className="text-white/20 text-xs">Cinco Saltos, Río Negro · Patagonia Argentina</p>
      </div>
    </div>
  </footer>
);

export default Footer;
