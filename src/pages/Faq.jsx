import QuestionCard from "../components/faq/QuestionCard";
import Accordion from "../components/ui/Accordion";
import BackButton from "../components/ui/BackButton";

const questions = [
  {
    question: "¿Cuál es el costo de envío?",
    answer:
      "El costo es de $250 para compras menores a $2000 y gratis para compras mayores a $2000.",
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
];

function Faq() {
  return (
    <div className="m-8 mx-auto max-w-6xl rounded-lg bg-white p-8 shadow-lg">
      <div className="flex justify-start">
        <BackButton />
      </div>
      <h1 className="mb-8 text-center text-5xl font-bold">
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
