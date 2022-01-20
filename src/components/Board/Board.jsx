import React, { useState, useEffect } from 'react';
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


  // Detect Winner
  useEffect(() => {

    if (((boxInfo[0].isClicked && boxInfo[0].clickedBy) === (boxInfo[1].isClicked && boxInfo[1].clickedBy)) && (boxInfo[1].clickedBy === (boxInfo[2].isClicked && boxInfo[2].clickedBy))) {
      // Row 1 

      console.log("Winner detected");
    } else if (((boxInfo[3].isClicked && boxInfo[3].clickedBy) === (boxInfo[4].isClicked && boxInfo[4].clickedBy)) && (boxInfo[4].clickedBy === (boxInfo[5].isClicked && boxInfo[5].clickedBy))) {
      // Row 2 

      console.log("Winner detected");
    } else if (((boxInfo[6].isClicked && boxInfo[6].clickedBy) === (boxInfo[7].isClicked && boxInfo[7].clickedBy)) && (boxInfo[7].clickedBy === (boxInfo[8].isClicked && boxInfo[8].clickedBy))) {
      // Row 3

      console.log("Winner detected");
    } else if (((boxInfo[0].isClicked && boxInfo[0].clickedBy) === (boxInfo[3].isClicked && boxInfo[3].clickedBy)) && (boxInfo[3].clickedBy === (boxInfo[6].isClicked && boxInfo[6].clickedBy))) {
      // cloumn 1

      console.log("Winner detected");
    } else if (((boxInfo[1].isClicked && boxInfo[1].clickedBy) === (boxInfo[4].isClicked && boxInfo[4].clickedBy)) && (boxInfo[4].clickedBy === (boxInfo[7].isClicked && boxInfo[7].clickedBy))) {
      // cloumn 2

      console.log("Winner detected");
    } else if (((boxInfo[2].isClicked && boxInfo[2].clickedBy) === (boxInfo[5].isClicked && boxInfo[5].clickedBy)) && (boxInfo[5].clickedBy === (boxInfo[8].isClicked && boxInfo[8].clickedBy))) {
      // cloumn 3

      console.log("Winner detected");
    } else if (((boxInfo[0].isClicked && boxInfo[0].clickedBy) === (boxInfo[4].isClicked && boxInfo[4].clickedBy)) && (boxInfo[4].clickedBy === (boxInfo[8].isClicked && boxInfo[8].clickedBy))) {
      // X Left top to right bottom

      console.log("Winner detected");
    } else if (((boxInfo[2].isClicked && boxInfo[2].clickedBy) === (boxInfo[4].isClicked && boxInfo[4].clickedBy)) && (boxInfo[4].clickedBy === (boxInfo[6].isClicked && boxInfo[6].clickedBy))) {
      // X Right top to left bottom

      console.log("Winner detected");
    } else {
      console.log("no winenr");
    }
  }, [nowClick])


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
