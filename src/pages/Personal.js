import React, { useState } from "react";
import { Data } from "./pressdata/PersonalData";
import BtnSlider from "../components/BtnSlider.js";
import Header from "../components/Header";
import Button from "../components/Button";
import { Content, ImgCard, Text, Wrapper } from "./PersonalStyle.js";
import "../index.css";


const Personal = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [hoverOff, setHover] = useState(false);

  const nextSlide = () => {
    if (slideIndex !== Data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Data.length);
    }
  };

  const handleHover = () => {
    setHover(!hoverOff);
  };

  const handleHoverOut = () => {
    setHover(!hoverOff);
  };

  return (
    <div>
      <Header />
      <Wrapper>
        {Data.map((obj, ind) => {
          return (
            <Content
              key={obj.id}
              className={slideIndex === ind + 1 ? "slide active-anim" : "slide"}
            >
              <ImgCard
                src={obj.image}
                alt="hello"
                onMouseOver={() => {
                  handleHover();
                }}
                onMouseOut={() => {
                  handleHoverOut();
                }}
                className={hoverOff ? "off" : "on"}
              />
              <Text className={hoverOff ? "on-text" : "off-text"}>
                {obj.descrip}
              </Text>
              <BtnSlider moveSlide={nextSlide} direction={"next"} />
              <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            </Content>
          );
        })}
      </Wrapper>
      <Button pages={[["Personal"], ["About"], ["Press"]]} />
    </div>
  );
};

export default Personal;
