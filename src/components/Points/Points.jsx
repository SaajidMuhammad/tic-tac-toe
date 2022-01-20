import React, { useState } from 'react';

export default function Points() {

  const [showWinner, setShowWinner] = useState(false)


  if (showWinner) {
    return (
      <div>X is Winner</div>
    )
  } else {
    return (
      <div>
        <div>
          <h3>{localStorage.getItem("TTT-Player1")} : 20 Points</h3>
        </div>
        <div>
          <h3>{localStorage.getItem("TTT-Player2")} : 20 Points</h3>
        </div>

        <button style={{ background: "blue" }} onClick={() => {
          setShowWinner(true)
        }} >Finish</button>

      </div>
    );
  }



}
