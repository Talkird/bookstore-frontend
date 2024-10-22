import BackButton from "../components/ui/BackButton";
import ContactInfo from "../components/contact/ContactInfo";
import Testimonials from "../components/contact/Testimonial";

function Contact() {
  return (
    <div>
      <div className="ml-20 mt-10 flex justify-start shadow-lg border border-gray-200">
        <BackButton />
      </div>
      <div className="mx-auto mb-10 flex flex-col items-center p-8">
        <h1 className="mb-12 text-center text-5xl font-extrabold text-gray-800">
          Contacto
        </h1>

        <p className="mb-6 text-center text-lg font-semibold text-gray-700">
          HORARIO DE ATENCIÓN: Lunes a Sábados de 9 a 13 y de 16 a 20 hs.
        </p>

        <div className="my-4 grid grid-cols-1 gap-4 text-center md:grid-cols-2">
          <ContactInfo title="WhatsApp" info="+54 48762167" />

          <ContactInfo title="Email" info="plumaencantada@gmail.com" />
        </div>

        <Testimonials className="mb-8" />
      </div>
    </div>
  );
}

export default Contact;
