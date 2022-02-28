import React, { useState } from "react";
import { Data } from "./pressdata/PersonalData";
import BtnSlider from "../components/BtnSlider.js";
import Header from "../components/Header";
import Button from "../components/Button";
import { Content, ImgCard, Text, Wrapper } from "./PersonalStyle.js";
import "../index.css";
import { isMobile } from "react-device-detect";


const Personal = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [hoverOff, setHover] = useState(false);
    const delay = 3500;


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
          () => setSlideIndex(() => nextSlide()),
          delay
        );

        return () => {
          resetTimeout();
        };
      }, [slideIndex]);

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
                onMouseEnter={() => {
                  handleHover();
                }}
                onMouseOut={() => {
                  handleHoverOut();
                }}
                loading="lazy"
              />
              {!isMobile ? (
                <BtnSlider
                  className={isMobile ? "off" : ""}
                  moveSlide={!isMobile ? nextSlide : "off"}
                  direction={"next"}
                />
              ) : (
                ""
              )}
              {!isMobile ? (
                <BtnSlider
                  className={isMobile ? "off" : ""}
                  moveSlide={!isMobile ? prevSlide : "off"}
                  direction={"prev"}
                />
              ) : (
                ""
              )}
            </Content>
          );
        })}
      </Wrapper>
      <Button pages={[["Home"], ["About"], ["Press"]]} />
    </div>
  );
};

export default Personal;
