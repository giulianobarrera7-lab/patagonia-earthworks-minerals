const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4 md:px-8">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-heading text-lg font-bold text-primary">AMJ</span>
            <span className="font-heading text-lg font-bold text-secondary-foreground ml-1">SERVICIOS SAS</span>
            <p className="text-secondary-foreground/50 text-sm mt-1">
              Cinco Saltos, Río Negro, Argentina
            </p>
          </div>
          <p className="text-secondary-foreground/40 text-sm">
            © {new Date().getFullYear()} AMJ Servicios SAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
