import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDelete, onUpdate }) {
  const handleAnswerChange = (e, questionId) => {
    const newValue = e.target.value;
    onUpdate(questionId, { correctAnswer: newValue });
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onAnswerChange={(e) => handleAnswerChange(e, question.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
