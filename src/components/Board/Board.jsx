import React, { useState, useEffect, useReducer } from 'react';
import "./Board.css"

import Box from '../Box/Box'
import Start from '../Start/Start'
import Points from '../Points/Points'

// import initialBoxInfo from "../../initialBoxInfo"


const initialState = [
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




const reducer = (state, action) => {


  if (action.payload === "Reset") {


    // return initialState

  }

  if (action.payload === "updateBox") {

    let updatedInfoX = action.updatedInfo

    return updatedInfoX

  } else {

    if (action.winner === "P1") {
      let P1Points = parseInt(localStorage.getItem("TTT-P1Points") ? localStorage.getItem("TTT-P1Points") : 0) + 1
      localStorage.setItem("TTT-P1Points", P1Points)

      console.log(action.winner, "action.winner");

      return initialState
      // init(initialBoxInfo)
      // console.log(initialBoxInfo);



    } else if (action.winner === "P2") {
      let P2Points = parseInt(localStorage.getItem("TTT-P2Points") ? localStorage.getItem("TTT-P2Points") : 0) + 1
      localStorage.setItem("TTT-P2Points", P2Points)

      console.log(action.winner, "action.winner");
      // init(initialBoxInfo)
      return initialState


      // console.log(initialBoxInfo);



    } else {
      console.log("Tie");
      return initialState

      // init(initialBoxInfo)


    }
  }



}

export default function Board() {


  const [nowClick, setNowClick] = useState("P1")
  const [idSum, setIdSum] = useState(0)
  // const [boxInfo, setBoxInfo] = useState(initialState )

  const [state, dispatch] = useReducer(reducer, initialState);




  const boxClicked = ((clickedBy, id) => {

    if (nowClick === "P1") {
      setNowClick("P2")
    } else {
      setNowClick("P1")
    }

    let boxInfoVar = state
    boxInfoVar[id].clickedBy = clickedBy
    boxInfoVar[id].isClicked = true


    let idSumX = idSum + (id + 1)

    setIdSum(idSumX)
    // setBoxInfo(boxInfoVar)

    dispatch({ updatedInfo: boxInfoVar, payload: "updateBox" })

  })


  const pointsCount = ((winner) => {

    dispatch({ winner })

  })



  // Detect Winner
  useEffect(() => {

    if (((state[0].isClicked && state[0].clickedBy) === (state[1].isClicked && state[1].clickedBy)) && (state[1].clickedBy === (state[2].isClicked && state[2].clickedBy))) {
      // Row 1 
      pointsCount(state[0].clickedBy)

    } else if (((state[3].isClicked && state[3].clickedBy) === (state[4].isClicked && state[4].clickedBy)) && (state[4].clickedBy === (state[5].isClicked && state[5].clickedBy))) {
      // Row 2 
      pointsCount(state[3].clickedBy)
    } else if (((state[6].isClicked && state[6].clickedBy) === (state[7].isClicked && state[7].clickedBy)) && (state[7].clickedBy === (state[8].isClicked && state[8].clickedBy))) {
      // Row 3
      pointsCount(state[6].clickedBy)
    } else if (((state[0].isClicked && state[0].clickedBy) === (state[3].isClicked && state[3].clickedBy)) && (state[3].clickedBy === (state[6].isClicked && state[6].clickedBy))) {
      // cloumn 1
    } else if (((state[1].isClicked && state[1].clickedBy) === (state[4].isClicked && state[4].clickedBy)) && (state[4].clickedBy === (state[7].isClicked && state[7].clickedBy))) {
      // cloumn 2
      pointsCount(state[1].clickedBy)
    } else if (((state[2].isClicked && state[2].clickedBy) === (state[5].isClicked && state[5].clickedBy)) && (state[5].clickedBy === (state[8].isClicked && state[8].clickedBy))) {
      // cloumn 3
      pointsCount(state[2].clickedBy)
    } else if (((state[0].isClicked && state[0].clickedBy) === (state[4].isClicked && state[4].clickedBy)) && (state[4].clickedBy === (state[8].isClicked && state[8].clickedBy))) {
      // X Left top to right bottom
      pointsCount(state[0].clickedBy)
    } else if (((state[2].isClicked && state[2].clickedBy) === (state[4].isClicked && state[4].clickedBy)) && (state[4].clickedBy === (state[6].isClicked && state[6].clickedBy))) {
      // X Right top to left bottom
      pointsCount(state[2].clickedBy)
    } else {
      // Detect Tie
      if (idSum === 45) {
        pointsCount("tie")
      }
    }
  }, [nowClick])


  return (
    <div className='gameWrapper'>
      <div className='mainHeader'>
        Tic-Tac-Tae
      </div>

      <div className='boardWrapper'>

        {state.map((bInfo, i) => {
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
