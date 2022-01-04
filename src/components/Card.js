import React, { useState } from 'react'
import {Data} from '../images/index.js'
import BtnSlider from './BtnSlider.js';
import { Content, ImgCard, Wrapper } from './CardStyle.js';

const Card = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== Data.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === Data.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(Data.length)
        }
    }


    return (
        <Wrapper>
            {Data.map((obj, ind) => {
                return(
                    <Content key={obj.id} className={slideIndex === ind + 1 ? "slide active-anim" : "slide"}>
                        <ImgCard src={obj.image} alt='hello'/>
                        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
                        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                    </Content>
                )
            })}

        </Wrapper>
    )
}

export default Card
