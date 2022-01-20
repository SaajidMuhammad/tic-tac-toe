import React, { useState } from 'react';
import "./Board.css"

import Box from '../Box/Box'
import Start from '../Start/Start'
import Points from '../Points/Points'

const boxId = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]

export default function Board() {

  const [nowClick, setNowClick] = useState("P1")

  const [boxInfo, setBoxInfo] = useState([
    {
      id: 0,
      clickedBy: "",
      isClicked: false
    },
    {
      id: 1,
      clickedBy: "",
      isClicked: false

    },
    {
      id: 2,
      clickedBy: "",
      isClicked: false

    },
    {
      id: 3,
      clickedBy: "",
      isClicked: false

    },
    {
      id: 4,
      clickedBy: "",
      isClicked: false

    },
    {
      id: 5,
      clickedBy: "",
      isClicked: false

    },
    {
      id: 6,
      clickedBy: "",
      isClicked: false

    },
    {
      id: 7,
      clickedBy: "",
      isClicked: false

    },
    {
      id: 8,
      clickedBy: "",
      isClicked: false

    },
  ]

  )


  const boxClicked = ((clickedBy, id) => {




    if (nowClick === "P1") {
      setNowClick("P2")
    } else {
      setNowClick("P1")
    }

    let boxInfoVar = boxInfo
    boxInfoVar[id].clickedBy = clickedBy
    boxInfoVar[id].isClicked = true

    setBoxInfo(boxInfoVar)

  })

  return (
    <div className='gameWrapper'>
      <div className='mainHeader'>
        Tic-Tac-Tae
      </div>

      <div className='boardWrapper'>

        {boxInfo.map((bInfo, i) => {
          return (
            <Box
              key={i}
              id={bInfo.id}
              isClicked={bInfo.isClicked}
              clickedBy={bInfo.clickedBy}
              boxClicked={boxClicked}
              nowClick={nowClick}
            />
          )

        })}
      </div>

      <div className='buttonWrapper'>
        {localStorage.getItem("TTT-gameStarted") ? <Points /> : <Start />}
      </div>

    </div>
  )


}
