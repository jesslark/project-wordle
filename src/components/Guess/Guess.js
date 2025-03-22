import React from "react"
import { checkGuess } from "../../game-helpers"

function Guess({ word, answer }) {
  if (word == undefined) {
    word = ""
  }

  const results = checkGuess(word, answer)

  return (
    <p className="guess">
      <span className={`cell ${results && results[0].status}`}>
        {word[0] || ""}
      </span>
      <span className={`cell ${results && results[1].status}`}>
        {word[1] || ""}
      </span>
      <span className={`cell ${results && results[2].status}`}>
        {word[2] || ""}
      </span>
      <span className={`cell ${results && results[3].status}`}>
        {word[3] || ""}
      </span>
      <span className={`cell ${results && results[4].status}`}>
        {word[4] || ""}
      </span>
    </p>
  )
}

export default Guess
