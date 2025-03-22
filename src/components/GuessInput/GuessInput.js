import React, { useState } from "react"

function GuessInput({ handleSetList, disabled, finish }) {
  const [guess, setGuess] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    handleSetList({ word: guess.toUpperCase(), id: Math.random() })
    setGuess("")
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      {finish == "" ? (
        <input
          required
          style={{ textTransform: "uppercase" }}
          id="guess-input"
          type="text"
          onChange={e => setGuess(e.target.value)}
          value={guess}
          maxLength="5"
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          autoComplete="off"
          disabled={disabled}
        />
      ) : finish == "won" ? (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      ) : (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      )}
    </form>
  )
}

export default GuessInput
