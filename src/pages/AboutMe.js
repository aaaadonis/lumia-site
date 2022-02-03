import { React, useState } from "react";
import {
  Content,
  ImgMain,
  Text,
  TextWrapper,
  Wrapper,
  Instagram,
  TextWrapperP} from "./AboutStyle";
import Header from "../components/Header";
import lumPhoto from "../images/lum-photo.webp";
import Insta from "../images/ig.png"
import "../index.css";

const AboutMe = () => {
  const [hoverOff, setHover] = useState(false);

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
        <Content>
          <ImgMain
            src={lumPhoto}
            alt="hello"
            onMouseOver={() => {
              handleHover();
            }}
            onMouseOut={() => {
              handleHoverOut();
            }}
            className=""
          />
          <TextWrapperP>
          <Text>
            Lumia Nocito is an artist based in New York. After graduating from
            The Dalton School, she is currently working on her BFA at The Cooper
            Union For The Advancement of Science and Art. Her main medium is
            photography, and Nocito was mentored by Petra Collins throughout her
            teenage years. Her photo work has been featured in The Metropolitan
            Museum of Art, Art Basel Miami, The Cooper Union School of Art, and
            at The International Center of Photography.
          </Text>
          <Text>
            Selected publications include Juxtapoz Magazine, Wonderland, WWD,
            WGSN, Dazed, Paper Magazine, Garage Magazine, Elle Mexico, Complex,
            WOMB Global Magazine, and Glamour Magazine.
          </Text>
          <Text>
            Selected clients include Bloomberg Businessweek, Adidas, Netflix,
            Converse, Diesel, Vice, Vogue, i-D Magazine, Galore Magazine, DROME
            Magazine, Milk, Nu Mode Magazine, and IMG Models.
          </Text>
          </TextWrapperP>     
          <TextWrapper>

            <Text>For work enquiries please contact mgmt@lumianocito.com</Text>
            <a href="http://instagram.com/lumia.nocito" targert="_blank">
              <Instagram src={Insta} alt="hllo" />
            </a>
          </TextWrapper>
        </Content>
      </Wrapper>
    </div>
  );
};

export default AboutMe;
