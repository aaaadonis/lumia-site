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
              Lumia Nocito (b. 1998) is an artist based in New York City. Her
              main medium is photography. After graduating from The Dalton
              School, she acquired her BFA from The Cooper Union For the
              Advancement of Science and Art. Nocito was mentored by Petra
              Collins throughout her teenage years. Lumia's work has been
              exhibited in The Metropolitan Museum of Art, The International
              Center of Photography, and internationally in galleries, such as
              Showroom MAMA. Her work has been hand picked for shows by curators
              including Hans Ulrich Obrist, reviewed by art critics including
              Jerry Saltz, and featured in publications including Juxtapoz
              Magazine. She is an official Guest Artist speaker at The
              International Center of Photography and a board member of the CFDA
              Awards Fashion Guild.
            </Text>
            <Text>
              Nocito has also been interviewed by publications including New
              York Magazine, Nylon Japan, Nike, Dazed, and i-D, and has modeled
              for brands including Adidas, Bulgari, Nike, Converse, Marc Jacobs,
              and publications including Allure, A Magazine, W Magazine, i-D,
              Vogue Italia, and Nylon Japan.
            </Text>
            <Text className="ventures">
              Selected publications include Juxtapoz Magazine, Elle Mexico,
              Wonderland, WWD, WGSN, Cultured Magazine, Flaunt, Dazed, Garage
              Magazine, Vogue, and Glamour Magazine.
            </Text>
            <Text className="ventures">
              Selected clients include Bloomberg Businessweek, Adidas, Netflix,
              Converse, Diesel, Vice, Vogue, Interview Magazine, i-D Magazine,
              Galore Magazine, DROME Magazine, Milk, Nylon Japan, and IMG
              Models.
            </Text>
            <TextWrapper>
              <Text>
                For work enquiries please contact mgmt@lumianocito.com
              </Text>
              <a href="http://instagram.com/lumia.nocito" targert="_blank">
                <Instagram src={Insta} alt="hllo" />
              </a>
            </TextWrapper>
          </TextWrapperP>
        </Content>
      </Wrapper>
    </div>
  );
};

export default AboutMe;
