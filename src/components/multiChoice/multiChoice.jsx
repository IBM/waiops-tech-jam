import React, {useId, useState} from "react"
import clsx from "clsx"
import styles from "./multiChoice.module.css"

export default function MultiChoiceQuestion({
  questionNumber,
  question,
  answers,
  correctAnswer,
}) {
  const questionId = useId()
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const hasAnswered = selectedAnswer !== null
  const isCorrect = selectedAnswer === correctAnswer

  return (
    <div className={styles.card}>
      <fieldset className={styles.question}>
        <legend className={styles.legend}>
          <span className={styles.questionNumber}>Question {questionNumber}</span>
          <span className={styles.questionText}>{question}</span>
        </legend>
        <div className={styles.answers}>
          {answers.map((answer, index) => {
            const isSelected = selectedAnswer === answer

            return (
              <label
                key={answer}
                className={clsx(styles.answer, {
                  [styles.correct]: isSelected && isCorrect,
                  [styles.incorrect]: isSelected && !isCorrect,
                })}
                htmlFor={`${questionId}-${index}`}>
                <input
                  className={styles.radio}
                  type="radio"
                  id={`${questionId}-${index}`}
                  name={questionId}
                  value={answer}
                  checked={isSelected}
                  onChange={() => setSelectedAnswer(answer)}
                />
                <span>{answer}</span>
              </label>
            )
          })}
        </div>
      </fieldset>
      <div
        className={styles.feedback}
        role="status"
        aria-live="polite"
        aria-atomic="true">
        {hasAnswered && (
          <div
            className={clsx(styles.feedbackMessage, {
              [styles.correct]: isCorrect,
              [styles.incorrect]: !isCorrect,
            })}>
            <svg
              className={styles.feedbackIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              {isCorrect ? (
                <path d="m8 12 3 3 5-6" />
              ) : (
                <path d="m9 9 6 6m0-6-6 6" />
              )}
            </svg>
            <span>
              {isCorrect ? "Correct!" : "Not quite. Try another answer."}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
