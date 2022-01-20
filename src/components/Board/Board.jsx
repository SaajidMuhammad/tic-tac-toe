import React, { useState } from 'react';
import "./Board.css"

import Box from '../Box/Box'

const boxId = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]

export default function Board() {

  return <div className='boardWrapper'>

    {boxId.map((bId, i) => {
      return (
        <Box key={i} bId={bId} />
      )

    })}



  </div>;
}
