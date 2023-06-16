import React, {useState} from "react"

export default function MultiChoiceQuestion({
  questionNumber,
  question,
  answers,
  correctAnswer,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)

  const handleAnswerClick = answer => {
    setSelectedAnswer(answer)
    setIsCorrect(answer === correctAnswer)
  }

  return (
    <div>
      <h2>
        {questionNumber}. {question}
      </h2>
      {answers.map((answer, index) => {
        const first = answer.split(" ")[0]
        return (
          <div key={questionNumber}>
            <label htmlFor={`answer-${questionNumber}-${first}`}>
              {answer}
            </label>
            <input
              type="radio"
              id={`answer-${questionNumber}-${first}`}
              checked={selectedAnswer === answer}
              onChange={() => handleAnswerClick(answer)}
            />
          </div>
        )
      })}
      {selectedAnswer ? (
        <p style={{color: isCorrect ? "green" : "red"}}>
          {isCorrect ? "Correct!" : "Sorry, that's incorrect. Try again."}
        </p>
      ) : (
        <div style={{height: "46px"}}></div>
      )}
    </div>
  )
}
