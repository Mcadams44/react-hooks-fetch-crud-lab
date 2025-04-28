function QuestionItem({ question, onUpdate, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleChange(event) {
    const updatedCorrectIndex = parseInt(event.target.value, 10);
    onUpdate(id, { correctIndex: updatedCorrectIndex }); // Call the onUpdate function
  }

  return (
    <li>
      <h4>{prompt}</h4>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleChange}>
          {answers.map((answer, index) => (
            <option key={index} value={index}>
              {answer}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => onDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;