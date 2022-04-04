import React from 'react'
import './card.css'

import { isMobile } from "react-device-detect";


const BtnSlider = ({ direction, moveSlide }) => {
    return (
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
      </button>
    );
}

export default BtnSlider
