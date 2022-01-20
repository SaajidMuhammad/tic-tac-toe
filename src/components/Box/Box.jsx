import React from 'react';
import "./Box.css"

export default function Box(props) {
  return <div className='box' onClick={() => {console.log(props.bId, "Clickedf")}} >

  </div>;
}
