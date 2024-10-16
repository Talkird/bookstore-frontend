import BackButton from "../components/backButton/backButton";
import ContactInfo from '../components/contact/ContactInfo';
import Testimonials from '../components/contact/Testimonial';

function Contact() {
  return (
    <div>
      <div className="flex justify-start mt-10 ml-20">
          <BackButton/> 
        </div>
      <div className=" mx-auto p-8 items-center flex flex-col mb-20">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">Contacto</h1>

        <p className="text-center text-lg font-semibold mb-6">
          HORARIO DE ATENCIÓN: Lunes a Sábados de 9 a 13 y de 16 a 20 hs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center my-8">
          <ContactInfo title="WhatsApp" info="+91 48762167" />

          <ContactInfo title="Telefono" info="+54 43257941" />

          <ContactInfo title="Email" info="ecommerce@gmail.com" />
          

          <ContactInfo title="Dirección" info="Lima 757
          " />
        </div>
        
        <Testimonials className="mb-8" />
        
      
      </div>
      </div>
  );
}

export default Contact;
