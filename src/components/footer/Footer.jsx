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

      {/* Sección de Medios de Pago */}
      <div className="flex flex-col items-center">
        <FooterTitle>Medios de Pago</FooterTitle>
        <div className="flex justify-center items-center gap-4 mt-4">
          {/* Aquí agregas las imágenes de los medios de pago */}
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
            alt="Visa"
            className="w-12 h-8"
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
            alt="MasterCard"
            className="w-12 h-8"
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"
            alt="Amex"
            className="w-12 h-8"
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png"
            alt="MercadoPago"
            className="w-12 h-8"
          />
          <img
            src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png"
            alt="Naranja"
            className="w-12 h-8"
          />
        </div>
      </div>


    </footer>
  );
}

export default Footer;
