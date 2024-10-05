import FooterLink from "./FooterLink";
import FooterTitle from "./FooterTitle";
import { Compass, Contact, Share2, Scale } from "lucide-react";

function Footer() {
  return (
    <footer className="flex justify-evenly bg-primary py-6 text-gray-900">
      <div className="flex flex-col">
        <FooterTitle>
          Navegación
          <Compass size={16} />
        </FooterTitle>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/catalog">Catalogo</FooterLink>
        <FooterLink to="/contact">Contacto</FooterLink>
      </div>

      <div className="flex flex-col">
        <FooterTitle>
          Redes Sociales
          <Share2 size={16} />
        </FooterTitle>
        <FooterLink to="/">Facebook</FooterLink>
        <FooterLink to="/">Twitter</FooterLink>
        <FooterLink to="/">Instagram</FooterLink>
      </div>

      <div className="flex flex-col">
        <FooterTitle>
          Contacto
          <Contact size={16} />
        </FooterTitle>
        <FooterLink to="/">Email</FooterLink>
        <FooterLink to="/">Teléfono</FooterLink>
      </div>

      <div className="flex flex-col">
        <FooterTitle>
          Legal
          <Scale size={16} />
        </FooterTitle>
        <FooterLink to="/">Términos y Condiciones</FooterLink>
        <FooterLink to="/">Política de Privacidad</FooterLink>
      </div>
    </footer>
  );
}

export default Footer;
