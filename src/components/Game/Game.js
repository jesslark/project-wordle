import React, { useState } from "react"

import GuessInput from "../GuessInput"
import Guesses from "../Guesses"

import { sample } from "../../utils"
import { WORDS } from "../../data"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [list, setList] = useState([])

  const handleSetList = newGuess => {
    setList(list => [...list, newGuess])
  }

  return (
    <>
      <Guesses list={list} />

      <GuessInput list={list} handleSetList={handleSetList} />
    </>
  )
}

export default Game
