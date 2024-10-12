import FooterLink from "./FooterLink";
import FooterTitle from "./FooterTitle";
import FooterHyperlink from "./FooterHyperlink";
import {
  Compass,
  Contact,
  Share2,
  Scale,
  Linkedin,
  Github,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

function Footer() {
  return (
    <footer className="flex justify-evenly bg-primary py-8 text-gray-900">
      <div className="flex flex-col">
        <FooterTitle>
          Navegación
          <Compass size={16} />
        </FooterTitle>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/catalog">Catalogo</FooterLink>
        <FooterLink to="/contact">Contacto</FooterLink>
        <FooterLink to="/qa">Preguntas Frecuentes</FooterLink>
      </div>

      <div className="flex flex-col">
        <FooterTitle>
          Redes Sociales
          <Share2 size={16} />
        </FooterTitle>

        <FooterHyperlink>
          Facebook <Facebook size={16} />
        </FooterHyperlink>
        <FooterHyperlink>
          Twitter <Twitter size={16} />
        </FooterHyperlink>
        <FooterHyperlink>
          Instagram <Instagram size={16} />
        </FooterHyperlink>
      </div>

      <div className="flex flex-col">
        <FooterTitle>
          Contacto
          <Contact size={16} />
        </FooterTitle>
        <FooterHyperlink href="https://www.linkedin.com/in/losauro-juan-6a2745299/">
          Juan Andrés Losauro
          <Linkedin size={16} />
        </FooterHyperlink>
        <FooterHyperlink href="https://www.linkedin.com/in/santiago-mociulsky-7a4b50267/">
          Santiago Mociulsky
          <Linkedin size={16} />
        </FooterHyperlink>
        <FooterHyperlink href="https://www.linkedin.com/in/federico-muntaabski-93b262204/">
          Federico Muntaabski
          <Linkedin size={16} />
        </FooterHyperlink>
        <FooterHyperlink href="https://github.com/Martina2612">
          Martina Pariso dos Santos
          <Github size={16} />
        </FooterHyperlink>
        <FooterHyperlink href="https://github.com/TavishX">
          Tomás Peña
          <Github size={16} />
        </FooterHyperlink>
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
