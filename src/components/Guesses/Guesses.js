import React from "react"

function Guesses({ list }) {
  return (
    <div className="guess-results">
      {list.map(item => (
        <p className="guess" key={item.id}>
          {item.word}
        </p>
      ))}
    </div>
  )
}

export default Guesses
