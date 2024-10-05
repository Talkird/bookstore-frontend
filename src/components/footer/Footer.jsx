import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer className="flex justify-evenly bg-primary/50 py-3">
      <div className="flex flex-col">
        <h1>Navegación</h1>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/catalog">Catalogo</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
      </div>
      <div className="flex flex-col">
        <h1>Redes Sociales</h1>
        <FooterLink to="/">Facebook</FooterLink>
        <FooterLink to="/">Twitter</FooterLink>
        <FooterLink to="/">Instagram</FooterLink>
      </div>
      <div className="flex flex-col">
        <h1>Contacto</h1>
        <FooterLink to="/">Email</FooterLink>
        <FooterLink to="/">Teléfono</FooterLink>
      </div>
    </footer>
  );
}

export default Footer;
