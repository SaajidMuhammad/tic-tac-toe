import React, { useState } from 'react';
import "./Box.css"

export default function Box(props) {


  return (
    <div className='box' onClick={() => {
      if (!props.isClicked) {
        props.boxClicked(props?.nowClick, props?.id,)
      }
    }} >
      {props.clickedBy === "P1" ? <div className='boxIcon'>X</div> : props.clickedBy === "P2" ? <div className='boxIcon'>O</div> : <div></div>}
    </div>
  );
}


<div></div>