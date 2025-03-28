import React from "react"

import Guess from "../Guess"

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js"

function GuessList({ list, answer }) {
  const guessesArr = []

  for (var i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
    guessesArr.push(<Guess key={i} word={list[i]?.word} answer={answer} />)
  }

  return <div className="guess-results">{guessesArr}</div>
}

export default GuessList
