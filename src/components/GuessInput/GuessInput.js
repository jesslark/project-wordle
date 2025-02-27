import React, { useState } from "react"

function GuessInput({ handleSetList }) {
  const [guess, setGuess] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    handleSetList({ word: guess.toUpperCase(), id: Math.random() })
    setGuess("")
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
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
      />
    </form>
  )
}

export default GuessInput
