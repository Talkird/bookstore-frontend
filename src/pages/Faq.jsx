import React from 'react';
import QuestionCard from '../components/Q&A/QuestionCard';

const questions = [
  {
    question: '¿Cuál es el costo de envío?',
    answer: 'El costo es de $250 para compras menores a $2000 y gratis para compras mayores a $2000.',
  },
  {
    question: '¿Cómo se realizan los envíos?',
    answer: 'Los envíos se realizan a traves de empresas de correo privadas.',
  },
  {
    question: '¿Dónde puedo recibir mi pedido?',
    answer: 'Realizamos envíos a todo el país.',
  },
  {
    question: '¿Cuál es el plazo para realizar un cambio de libro?',
    answer: 'Se puede solicitar un cambio hasta 15 días luego de realizada la compra.',
  },
];

function Faq() {
  return (
    <div className="max-w-6xl mx-auto p-8 rounded-lg shadow-lg m-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Preguntas Frecuentes</h1>
      <div className="mt-6 space-y-4">
        {questions.map((q, index) => (
          <QuestionCard key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
}

export default Faq;