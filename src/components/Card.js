import React, { useState } from "react";
import { Data } from "../images/index.js";
import BtnSlider from "./BtnSlider.js";
import { Content, ImgCard, Text, Wrapper } from "./CardStyle.js";
import "../index.css";

const Card = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [hoverOff, setHover] = useState(false);
  const delay = 4000;

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

    const timeoutRef = React.useRef(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setSlideIndex(() =>
            nextSlide()
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }, [slideIndex]);

  return (
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
            <Text className={hoverOff ? "on-text" : "off-text"}>{obj.descrip}</Text>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default Card;
