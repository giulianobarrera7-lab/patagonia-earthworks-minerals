const Footer = () => {
  return (
    <footer className="bg-section-dark py-12 px-4 md:px-8">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-heading text-lg font-bold text-section-dark-foreground">AMJ</span>
            <span className="font-heading text-lg font-bold text-primary ml-1">SERVICIOS SAS</span>
            <p className="text-section-dark-foreground/50 text-sm mt-1">
              Cinco Saltos, Río Negro, Argentina
            </p>
          </div>
          <p className="text-section-dark-foreground/40 text-sm">
            © {new Date().getFullYear()} AMJ Servicios SAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
