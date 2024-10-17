import PropTypes from "prop-types";

function QuestionCard({ question, answer }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-md">
      <h3 className="mb-2 text-3xl font-semibold">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default QuestionCard;
