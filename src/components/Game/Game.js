import React, { useState } from "react"

import GuessInput from "../GuessInput"
import GuessList from "../GuessList"

import { sample } from "../../utils"
import { WORDS } from "../../data"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [list, setList] = useState([])
  const [finish, setFinish] = useState("")
  const [disabled, setDisabled] = useState(false)

  const handleSetList = newGuess => {
    console.log({ newGuess, answer, list })
    if (newGuess.word == answer) {
      setDisabled(true)
      setFinish("won")
    } else if (list.length >= 5) {
      setDisabled(true)
      setFinish("lost")
    }
    setList(list => [...list, newGuess])
  }

  return (
    <>
      <GuessList list={list} answer={answer} />

      <GuessInput
        list={list}
        handleSetList={handleSetList}
        disabled={disabled}
        finish={finish}
      />
    </>
  )
}

export default Game
