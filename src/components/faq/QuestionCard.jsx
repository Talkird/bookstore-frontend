import React from 'react';
import PropTypes from 'prop-types';

function QuestionCard({ question, answer }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default QuestionCard;