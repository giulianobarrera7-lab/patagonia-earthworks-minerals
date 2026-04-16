import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoAmj from "@/assets/logo-amj.jpg";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Minerales", href: "#minerales" },
  { label: "Canteras", href: "#canteras" },
  { label: "Flota", href: "#flota" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary">
      <div className="container-wide flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoAmj} alt="AMJ Servicios SAS" className="h-10 md:h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="font-heading text-lg font-bold text-primary tracking-tight">AMJ</span>
            <span className="font-heading text-lg font-bold text-secondary-foreground tracking-tight ml-1">SERVICIOS</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+5429421547473"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Contactanos
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-secondary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-secondary border-t border-secondary animate-fade-in">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-secondary-foreground py-3 px-3 rounded-md hover:bg-secondary-foreground/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5429421547473"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Contactanos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
