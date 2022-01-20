import React, { useState } from 'react';

export default function Start() {

  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")

  const startTheGame = (() => {

    localStorage.setItem("TTT-Player1", player1 ? player1 : "Player 1")
    localStorage.setItem("TTT-Player2", player2 ? player2 : "Player 2")
    localStorage.setItem("TTT-gameStarted", true)

  })


  return <div>
    <div>
      <input type="text" placeholder='Input Player 1 Name' maxLength={16} value={player1} onChange={(e) => { setPlayer1(e.target.value) }} />
    </div>

    <div>
      <input type="text" placeholder='Input Player 2 Name' maxLength={16} value={player2} onChange={(e) => { setPlayer2(e.target.value) }} />
    </div>

    <button style={{ background: "blue" }} onClick={() => {
      startTheGame()
    }} >Start</button>


  </div>;
}
