import React from 'react'
import './card.css'
import leftArrow from '../images/left-arrow.svg'
import rightArrow from '../images/right-arrow.svg'
import { isMobile } from "react-device-detect";


const BtnSlider = ({ direction, moveSlide }) => {
    return (
      <button
        onClick={moveSlide}
        className={
          isMobile
            ? "off"
            : direction === "next"
            ? "btn-slide next"
            : "btn-slide prev"
        }
      >
        <img
          src={isMobile ? "off" : direction === "next" ? rightArrow : leftArrow}
        />
      </button>
    );
}

export default BtnSlider
