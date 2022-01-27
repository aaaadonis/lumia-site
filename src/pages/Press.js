import { React, useState } from "react";
import Header from "../components/Header";
import {
  Content,
  Exhibitions,
  Features,
  MenuWrapper,
  Photography,
} from "./PressStyle";
import "./press.css"

const Press = () => {
  const [exhibitionOff, setExhibition] = useState(false);
  const [photographyOff, setPhotography] = useState(false);
  const [featuresOff, setFeatures] = useState(false);

  const handleExhibit = () => {
    setExhibition(!exhibitionOff);
    setPhotography(false);
    setFeatures(false);
  };

  const handlePhotography = () => {
    setPhotography(!photographyOff);
    setExhibition(false);
    setFeatures(false);
  };

  const handleFeatures = () => {
    setFeatures(!featuresOff);
    setExhibition(false);
    setPhotography(false);
  };

  return (
    <div>
      <Header />
      <Content>
        <MenuWrapper>
          <Exhibitions
            onClick={() => {
              handleExhibit();
            }} className={exhibitionOff ? `on-exhib` : `off-exhib`}
          >
            Exhibitions
          </Exhibitions>

          <Photography
            onClick={() => {
              handlePhotography();
            }} className=""
          >
            Photography
          </Photography>

          <Features
            onClick={() => {
              handleFeatures();
            }} className=""
          >
            Features
          </Features>
        </MenuWrapper>
      </Content>
    </div>
  );
};

export default Press;
