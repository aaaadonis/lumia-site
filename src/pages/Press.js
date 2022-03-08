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
  Text,
  TitleText,
  TitleYear,
} from "./PressStyle";
import "./press.css";
import { ExhData } from "./pressdata/Exhibits";
import { FeaData } from "./pressdata/Features";
import { PhoData } from "./pressdata/Photography";
import { IntData } from "./pressdata/Interviews";
import { HonData } from "./pressdata/Honors";
import ButtonTwo from "./ButtonTwo";
import { isMobile } from "react-device-detect";


const Press = () => {
  const [sectionShowing, setSectionShowing] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMenuClick = (section) => {
    if (sectionShowing === section) {
      setSectionShowing("");
    } else {
      setSectionShowing(section)
      if(!isMobile){
      scrollToTop();
      }
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
          marginTop: "2%",
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
          <Interviews
            onClick={() => handleMenuClick("interviews")}
            className=""
          >
            Interviews
          </Interviews>
          <Features onClick={() => handleMenuClick("features")} className="">
            Features
          </Features>
          <Honors onClick={() => handleMenuClick("honors")} className="">
            Honors & Awards
          </Honors>
        </MenuWrapper>
        <div style={{ marginLeft: "6rem" }}>
          {sectionShowing === "exhibitions" && (
            <div>
              {ExhData.map((obj, ind) => {
                return (
                  <TextContent key={obj.id}>
                    {obj.year ? <TitleYear>{obj.year}</TitleYear> : ""}
                    <TitleText>{obj.alt}</TitleText>
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
                    {obj.year ? <TitleYear>{obj.year}</TitleYear> : ""}
                    <TitleText>{obj.alt}</TitleText>
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
                    {obj.year ? <TitleYear>{obj.year}</TitleYear> : ""}
                    <TitleText>{obj.alt}</TitleText>
                    <Text>{obj.descrip}</Text>
                  </TextContent>
                );
              })}
            </div>
          )}
          {sectionShowing === "interviews" && (
            <div>
              {IntData.map((obj, ind) => {
                return (
                  <TextContent key={obj.id}>
                    {obj.year ? <TitleYear>{obj.year}</TitleYear> : ""}
                    <TitleText>{obj.alt}</TitleText>
                    <Text>{obj.descrip}</Text>
                  </TextContent>
                );
              })}
            </div>
          )}
          {sectionShowing === "honors" && (
            <div>
              {HonData.map((obj, ind) => {
                return (
                  <TextContent key={obj.id}>
                    {obj.year ? <TitleYear>{obj.year}</TitleYear> : ""}
                    <TitleText>{obj.alt}</TitleText>
                    <Text>{obj.descrip}</Text>
                  </TextContent>
                );
              })}
            </div>
          )}
        </div>
      </Content>
      {sectionShowing.length > 1 ? (
        <ButtonTwo pages={[["Work"], ["Personal"], ["About"]]} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Press;
