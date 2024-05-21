import React, { useState } from "react"
import styles from "./QuestionFeature.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

function QuestionFeature() {
  // for controlled input component
  const [inputQuestion, setInputQuestion] = useState("")
  //   allows control of button class name state
  const [buttonClassName, setButtonClassName] = useState(styles.doNotShowButton)
  let resetButtonClasses = `buttonInverted ${buttonClassName}`
  // number of character remaining in textbox
  const charRemaining = 160 - inputQuestion.length
  // Allows control of input component to pass to stoe
  function handleChange(e) {
    setInputQuestion(e.target.value)
    if (e.target.value !== "") {
      setButtonClassName(styles.showButton)
    }
  }
  //   resets the input box
  function handleReset() {
    setInputQuestion("")
    setButtonClassName(styles.doNotShowButton)
  }
  return (
    <div className={styles.questionFeatureWrapper}>
      <form>
        <textarea
          onChange={handleChange}
          value={inputQuestion}
          name="questionInput"
          type="text"
          placeholder="... Use an example"
          required={true}
        />

        <button type="submit" className="buttonPurple">
          Ask The Dragon
        </button>
        <button
          type="reset"
          onClick={handleReset}
          className={resetButtonClasses}
        >
          Ask A New Question
        </button>
      </form>
      <p>
        <i>
          {charRemaining < 0 ? (
            <span className={styles.isRed}>{charRemaining} </span>
          ) : (
            <span>{charRemaining} </span>
          )}
          characters remaining
        </i>
      </p>
    </div>
  )
}

export default QuestionFeature
