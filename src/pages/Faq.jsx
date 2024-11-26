import QuestionCard from "../components/faq/QuestionCard";
import Accordion from "../components/ui/Accordion";
import BackButton from "../components/ui/BackButton";

const questions = [
  {
    question: "¿Cuál es el tiempo de entrega?",
    answer: "El tiempo de entrega es de 3 a 5 días hábiles.",
  },
  {
    question: "¿Cómo se realizan los envíos?",
    answer: "Los envíos se realizan a traves de empresas de correo privadas.",
  },
  {
    question: "¿Dónde puedo recibir mi pedido?",
    answer: "Realizamos envíos a todo el país.",
  },
  {
    question: "¿Cuál es el plazo para realizar un cambio de libro?",
    answer:
      "Se puede solicitar un cambio hasta 15 días luego de realizada la compra.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito, débito y mercado pago.",
  },
];

function Faq() {
  return (
    <div className="m-8 mx-auto max-w-6xl rounded-lg bg-white p-8 shadow-lg">
      <div className="flex justify-start">
        <BackButton />
      </div>
      <h1 className="mb-12 text-center text-5xl font-extrabold text-gray-800">
        Preguntas Frecuentes
      </h1>
      <div className="mt-6 space-y-4">
        {questions.map((q, index) => (
          <Accordion key={index} title={q.question}>
            <QuestionCard question={q.question} answer={q.answer} />
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Faq;
