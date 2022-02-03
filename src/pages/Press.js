import { React, useState } from "react";
import Header from "../components/Header";
import {
  Content,
  Exhibitions,
  Features,
  Honors,
  Interviews,
  MenuWrapper,
  Photography,
  TextContent,
  Logo,
  Text
} from "./PressStyle";
import "./press.css";
import { ExhData } from "./pressdata/Exhibits";
import { FeaData } from "./pressdata/Features";
import { PhoData } from "./pressdata/Photography";


const Press = () => {
  const [sectionShowing, setSectionShowing] = useState("");

  const handleMenuClick = (section) => {
    if (sectionShowing === section) {
      setSectionShowing("");
    } else {
      setSectionShowing(section);
    }
  };

  return (
    <div>
      <Header />
      <Content
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "",
          marginTop: "0%",
        }}
      >
        <MenuWrapper style={{ flexGrow: 0 }}>
          <Exhibitions
            onClick={() => handleMenuClick("exhibitions")}
            className=""
          >
            Exhibitions
          </Exhibitions>
          <Photography
            onClick={() => handleMenuClick("photography")}
            className=""
          >
            Photography
          </Photography>
          <Features onClick={() => handleMenuClick("features")} className="">
            Features
          </Features>
          <Interviews
            onClick={() => handleMenuClick("interviews")}
            className=""
          >
            Interviews
          </Interviews>
          <Honors onClick={() => handleMenuClick("honors")} className="">
            Honors
          </Honors>
        </MenuWrapper>
        <div style={{ marginLeft: "6rem" }}>
          {sectionShowing === "exhibitions" && (
            <div>
              {ExhData.map((obj, ind) => {
                return (
                  <TextContent key={obj.id}>
                    <Logo src={obj.image} alt="hello" />
                    <Text>{obj.descrip}</Text>
                  </TextContent>
                );
              })}
            </div>
          )}
          {sectionShowing === "photography" && (
            <div>
              {PhoData.map((obj, ind) => {
                return (
                  <TextContent key={obj.id}>
                    <Logo src={obj.image} alt="hello" />
                    <Text>{obj.descrip}</Text>
                  </TextContent>
                );
              })}
            </div>
          )}
          {sectionShowing === "features" && (
            <div>
              {FeaData.map((obj, ind) => {
                return (
                  <TextContent key={obj.id}>
                    <Logo src={obj.image} alt="hello" />
                    <Text>{obj.descrip}</Text>
                  </TextContent>
                );
              })}
            </div>
          )}
        </div>
      </Content>
    </div>
  );
};

export default Press;
