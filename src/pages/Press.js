import { React, useState } from "react";
import Header from "../components/Header";
import {
  Content,
  Exhibitions,
  Features,
  MenuWrapper,
  Photography,
} from "./PressStyle";
import "./press.css";

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
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <MenuWrapper style={{ flexGrow: 0 }}>
          <Exhibitions
            onClick={() => handleMenuClick("exhibitions")}
            className={
              sectionShowing === "exhibitions" ? "on-exhib" : "off-exhib"
            }
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
        </MenuWrapper>
        <div style={{ marginLeft: "1rem" }}>
          {sectionShowing === "exhibitions" && <div>Exhibition section</div>}
          {sectionShowing === "photography" && <div>Photography section</div>}
          {sectionShowing === "features" && <div>Features section</div>}
        </div>
      </Content>
    </div>
  );
};

export default Press;
